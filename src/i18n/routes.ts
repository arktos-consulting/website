/**
 * Translation pairs: the single source of truth for which URL answers in which
 * language.
 *
 * URL segments are translated rather than prefixed (`/conseil/` versus
 * `/en/consulting/`), so nothing can infer the counterpart of a French page from
 * its path. Both the pages and the sitemap read this mapping: a page declares its
 * pair from here, and the sitemap derives its `hreflang` alternates from the same
 * list, which is what stops the two from disagreeing.
 *
 * A page absent from this list is treated as language-specific: it gets a
 * canonical URL and no alternate, rather than an `hreflang` pointing at the wrong
 * page.
 */
import type { Locale } from './index';

/** A French URL and the English URL that translates it. */
export interface RoutePair {
  /** Path of the French page, with leading and trailing slashes. */
  fr: string;
  /** Path of the English page, with leading and trailing slashes. */
  en: string;
}

/**
 * Every page that exists in both languages.
 *
 * Utility pages are deliberately absent: legal notices are `noindex` in both
 * languages, and an error page is not addressable.
 */
export const ROUTE_PAIRS: readonly RoutePair[] = [
  { fr: '/', en: '/en/' },
  { fr: '/conseil/', en: '/en/consulting/' },
  { fr: '/cloud-souverain/', en: '/en/sovereign-cloud/' },
  { fr: '/ia/', en: '/en/ai/' },
  { fr: '/infogerance/', en: '/en/managed-services/' },
  { fr: '/references/', en: '/en/references/' },
  { fr: '/blog/', en: '/en/blog/' },
  // Blog posts. Each English article is its own document with its own slug, so
  // the pairing is declared rather than computed from a filename convention.
  {
    fr: '/blog/reduire-facture-aws-sans-casser-production/',
    en: '/en/blog/cutting-aws-cost-without-breaking-production/',
  },
  {
    fr: '/blog/infogerer-eks-quand-on-est-seul/',
    en: '/en/blog/running-eks-on-your-own/',
  },
  {
    fr: '/blog/tracabilite-changements-kubernetes-audit/',
    en: '/en/blog/kubernetes-change-traceability-audit/',
  },
];

/**
 * Returns the translation pair a path belongs to.
 *
 * @param path Page path to look up, with leading and trailing slashes
 * @returns The pair containing that path, or `null` when the page has no translation
 */
export function findRoutePair(path: string): RoutePair | null {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  return ROUTE_PAIRS.find((pair) => pair.fr === normalized || pair.en === normalized) ?? null;
}

/**
 * Returns the pair of URLs a page answers on, in the shape the layout uses.
 *
 * @param pair Translation pair the page belongs to
 * @returns The French and English paths of that page
 */
export function pairPaths(pair: RoutePair): Record<Locale, string> {
  return { fr: pair.fr, en: pair.en };
}

/**
 * Builds the path of a page in the other language.
 *
 * Returns a path rather than a URL: the language switch must keep the visitor on
 * the host they are already on, otherwise a preview or staging deployment would
 * send them to production. Canonical and `hreflang` tags use the absolute form.
 *
 * @param path Path of the current page
 * @param locale Locale of the current page
 * @returns The path of the translated page, or `null` when none exists
 */
export function alternatePath(path: string, locale: Locale): string | null {
  const pair = findRoutePair(path);
  if (!pair) {
    return null;
  }
  return locale === 'fr' ? pair.en : pair.fr;
}

/**
 * Builds the absolute URL of a page in the other language.
 *
 * @param path Path of the current page
 * @param locale Locale of the current page
 * @param siteOrigin Origin of the site, such as `https://www.arktos.consulting`
 * @returns The absolute URL of the translated page, or `null` when none exists
 */
export function alternateUrl(
  path: string,
  locale: Locale,
  siteOrigin: string,
): string | null {
  const target = alternatePath(path, locale);
  return target ? `${siteOrigin}${target}` : null;
}
