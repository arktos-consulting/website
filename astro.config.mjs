/**
 * Astro configuration for the Arktos Consulting site.
 *
 * The site is fully pre-rendered: `dist/` contains only HTML, CSS and static
 * images, served by GitHub Pages behind Cloudflare. No Node server is required
 * at runtime.
 *
 * The React integration is not mounted: the site has no interactive island, and
 * including it would add about 200 KB of JavaScript per page. React remains a
 * declared dependency, ready to use as soon as a component justifies it.
 */
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { ROUTE_PAIRS } from './src/i18n/routes.ts';

/** Utility pages that must stay out of the sitemap and out of search results. */
const NOINDEX_PATHS = [
  '/mentions-legales/',
  '/en/legal-notices/',
  // The English error page is a static export for hosts that resolve an error
  // page per directory. It is not an addressable URL: listing it would invite
  // crawlers to index an error page.
  '/en/404/',
];

/** Origin of the site, kept in sync with `SITE.url`. */
const SITE_ORIGIN = 'https://www.arktos.consulting';

/**
 * Returns the translation pair a sitemap URL belongs to.
 *
 * @param url Absolute URL emitted by Astro
 * @returns The pair containing that URL's path, or `null` when it has no translation
 */
function findPair(url) {
  const path = new URL(url).pathname;
  const normalized = path.endsWith('/') ? path : `${path}/`;
  return ROUTE_PAIRS.find((pair) => pair.fr === normalized || pair.en === normalized) ?? null;
}

/**
 * Static build configuration.
 *
 * `format: 'directory'` writes each route to its own folder, and the 404 page
 * escapes it: Astro exports it as `404.html` at the root, which is what GitHub
 * Pages expects to serve an error page on a non-existent URL.
 */
export default defineConfig({
  site: SITE_ORIGIN,
  trailingSlash: 'ignore',
  /**
   * French stays at the root, English lives under `/en/`.
   *
   * `prefixDefaultLocale: false` preserves the already indexed home URL:
   * moving it to `/fr/` would lose the acquired search ranking. English routes
   * are written explicitly in `src/pages/en/`, with translated URL segments
   * rather than prefixed ones.
   */
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
      /**
       * Alternates are written from the shared translation table rather than
       * inferred from the URL shape. Translated segments (`/conseil/` versus
       * `/en/consulting/`) make inference impossible: the plugin's own `i18n`
       * option matches nothing here and silently emits no alternate at all, which
       * is why it is not used.
       */
      serialize(item) {
        const pair = findPair(item.url);
        if (!pair) {
          return item;
        }

        return {
          ...item,
          links: [
            { lang: 'fr-FR', url: `${SITE_ORIGIN}${pair.fr}` },
            { lang: 'en-US', url: `${SITE_ORIGIN}${pair.en}` },
            { lang: 'x-default', url: `${SITE_ORIGIN}${pair.fr}` },
          ],
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
