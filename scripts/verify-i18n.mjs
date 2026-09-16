/**
 * Verifies the bilingual build.
 *
 * Run after `astro build`, against `dist/`. It checks the properties that are easy
 * to break silently and expensive to notice in production:
 *
 *   - every sitemap URL declares fr-FR, en-US and x-default alternates
 *   - those alternates are reciprocal (if A points at B, B points back at A)
 *   - `noindex` pages are absent from the sitemap and carry no alternate
 *   - each page declares the language it is written in
 *   - no French text leaks into an English page
 *
 * Exits non-zero on the first class of failure, with a list of the offending
 * pages, so CI reports something actionable.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { globSync } from 'node:fs';

const DIST = 'dist';
const ORIGIN = 'https://www.arktos.consulting';

/** Pages that must stay out of search results. */
const NOINDEX_PAGES = [
  'mentions-legales/index.html',
  'en/legal-notices/index.html',
  'en/404/index.html',
];

/**
 * French strings that must never appear in an English page's visible text.
 *
 * Words that exist in both languages (blog, contact, FinOps) are deliberately
 * excluded: flagging them would produce false positives and the check would be
 * ignored.
 */
const FRENCH_MARKERS = [
  'Conseil',
  'Infogérance',
  'Références',
  'Prestations',
  'Parlons',
  'En savoir plus',
  'Écrivez-moi',
  'Flux RSS',
  'Mentions légales',
  'cloud souverain',
  'min de lecture',
  'Sur cette page',
  'Discuter',
];

/**
 * Collects every built HTML page.
 *
 * @returns Paths relative to `dist`, sorted
 */
function htmlPages() {
  const pages = globSync(`${DIST}/**/*.html`);
  return pages.map((path) => path.slice(DIST.length + 1)).sort();
}

/**
 * Extracts the visible text of a page, with markup and code stripped.
 *
 * Scripts and styles are removed before tags, otherwise their contents would be
 * read as page text.
 *
 * @param html Raw HTML of the page
 * @returns The text a reader would see
 */
function visibleText(html) {
  return html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');
}

/**
 * Reads the `hreflang` alternates declared by a page.
 *
 * @param html Raw HTML of the page
 * @returns Map of hreflang value to target path
 */
function alternates(html) {
  const found = {};
  const pattern = /<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/g;
  for (const match of html.matchAll(pattern)) {
    found[match[1]] = match[2].replace(ORIGIN, '');
  }
  return found;
}

/** Collects failures by category so the report reads as a checklist. */
const failures = {
  'sitemap: alternance manquante': [],
  'sitemap: alternance non reciproque': [],
  'sitemap: page noindex presente': [],
  'html: hreflang manquant': [],
  'html: hreflang sur page noindex': [],
  'html: langue declaree incorrecte': [],
  'texte: francais dans une page anglaise': [],
};

if (!existsSync(join(DIST, 'sitemap-0.xml'))) {
  console.error(`Pas de ${DIST}/sitemap-0.xml — lance « bun run build » d'abord.`);
  process.exit(1);
}

const sitemap = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(ORIGIN, ''),
);

// --- sitemap ---------------------------------------------------------------

/** Map of path to the alternates that path declares in the sitemap. */
const sitemapAlts = {};
for (const entry of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const block = entry[1];
  const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1].replace(ORIGIN, '');
  if (!loc) continue;
  sitemapAlts[loc] = {};
  const pattern = /hreflang="([^"]+)"\s+href="([^"]+)"/g;
  for (const alt of block.matchAll(pattern)) {
    sitemapAlts[loc][alt[1]] = alt[2].replace(ORIGIN, '');
  }
}

for (const path of sitemapUrls) {
  for (const page of NOINDEX_PAGES) {
    const asPath = `/${page.replace(/index\.html$/, '')}`;
    if (path === asPath) {
      failures['sitemap: page noindex presente'].push(path);
    }
  }

  const alts = sitemapAlts[path] ?? {};
  for (const code of ['fr-FR', 'en-US', 'x-default']) {
    if (!alts[code]) {
      failures['sitemap: alternance manquante'].push(`${path} (${code})`);
    }
  }

  for (const [code, target] of Object.entries(alts)) {
    if (code === 'x-default') continue;
    const back = sitemapAlts[target] ?? {};
    const pointsBack = Object.entries(back).some(
      ([otherCode, otherTarget]) => otherCode !== 'x-default' && otherTarget === path,
    );
    if (!pointsBack) {
      failures['sitemap: alternance non reciproque'].push(`${path} -> ${code}:${target}`);
    }
  }
}

// --- html ------------------------------------------------------------------

for (const page of htmlPages()) {
  const html = readFileSync(join(DIST, page), 'utf8');
  const isNoindex = NOINDEX_PAGES.includes(page);
  const alts = alternates(html);

  if (isNoindex) {
    if (Object.keys(alts).length > 0) {
      failures['html: hreflang sur page noindex'].push(page);
    }
  } else if (page !== '404.html') {
    for (const code of ['fr-FR', 'en-US', 'x-default']) {
      if (!alts[code]) {
        failures['html: hreflang manquant'].push(`${page} (${code})`);
      }
    }
  }

  const declaredLang = /<html[^>]+lang="([^"]+)"/.exec(html)?.[1];
  const expectedLang = page.startsWith('en/') ? 'en' : 'fr';
  if (declaredLang !== expectedLang) {
    failures['html: langue declaree incorrecte'].push(
      `${page} : lang="${declaredLang}", attendu "${expectedLang}"`,
    );
  }

  if (page.startsWith('en/')) {
    const text = visibleText(html);
    const leaked = FRENCH_MARKERS.filter((marker) =>
      text.toLowerCase().includes(marker.toLowerCase()),
    );
    if (leaked.length > 0) {
      failures['texte: francais dans une page anglaise'].push(`${page} : ${leaked.join(', ')}`);
    }
  }
}

// --- report ----------------------------------------------------------------

const total = Object.values(failures).reduce((sum, list) => sum + list.length, 0);

console.log(`Pages HTML analysees : ${htmlPages().length}`);
console.log(`URLs dans le sitemap : ${sitemapUrls.length}`);
console.log('');

for (const [label, list] of Object.entries(failures)) {
  if (list.length === 0) {
    console.log(`  OK  ${label}`);
  } else {
    console.log(`  KO  ${label} (${list.length})`);
    for (const item of list) {
      console.log(`        ${item}`);
    }
  }
}

console.log('');
if (total === 0) {
  console.log('Verification bilingue : OK');
  process.exit(0);
}

console.log(`Verification bilingue : ${total} probleme(s)`);
process.exit(1);
