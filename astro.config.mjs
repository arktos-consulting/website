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

/**
 * Static build configuration.
 *
 * `format: 'directory'` writes each route to its own folder, and the 404 page
 * escapes it: Astro exports it as `404.html` at the root, which is what GitHub
 * Pages expects to serve an error page on a non-existent URL.
 */
export default defineConfig({
  site: 'https://www.arktos.consulting',
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
      filter: (page) => !page.includes('/mentions-legales'),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
