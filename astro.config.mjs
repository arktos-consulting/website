/**
 * Astro configuration for the Arktos Consulting site.
 *
 * The site is fully pre-rendered: `dist/` contains only HTML, CSS and static
 * images, served from Amazon S3 through CloudFront. No Node server is required
 * at runtime.
 *
 * The React integration is not mounted: the site has no interactive island, and
 * including it would add about 200 KB of JavaScript per page. React remains a
 * declared dependency, ready to use as soon as a component justifies it.
 */
import { readdirSync, readFileSync } from "node:fs"
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { ROUTE_PAIRS } from "./src/i18n/routes.ts"

/** Utility pages that must stay out of the sitemap and out of search results. */
const NOINDEX_PATHS = [
  "/mentions-legales/",
  "/en/legal-notices/",
  // The English error page is a static export for hosts that resolve an error
  // page per directory. It is not an addressable URL: listing it would invite
  // crawlers to index an error page.
  "/en/404/",
]

/** Origin of the site, kept in sync with `SITE.url`. */
const SITE_ORIGIN = "https://www.arktos.consulting"

/**
 * Returns the translation pair a sitemap URL belongs to.
 *
 * @param url Absolute URL emitted by Astro
 * @returns The pair containing that URL's path, or `null` when it has no translation
 */
function findPair(url) {
  const path = new URL(url).pathname
  const normalized = path.endsWith("/") ? path : `${path}/`
  return (
    ROUTE_PAIRS.find(
      (pair) => pair.fr === normalized || pair.en === normalized
    ) ?? null
  )
}

/**
 * Revision date of every blog post, keyed by its URL path.
 *
 * The date comes from the post's own frontmatter — `updatedAt` when it was
 * revised, `publishedAt` otherwise. It is the only date a crawler can trust:
 * stamping a page with the build date claims a modification that never happened.
 * Pages whose content carries no such date are left without a `lastmod`.
 *
 * @returns The revision date of each published post, keyed by path
 */
function postRevisionDates() {
  const collections = [
    { directory: "src/content/blog", prefix: "/blog/" },
    { directory: "src/content/blog-en", prefix: "/en/blog/" },
  ]
  const dates = new Map()
  for (const { directory, prefix } of collections) {
    for (const name of readdirSync(directory)) {
      if (!name.endsWith(".md")) {
        continue
      }
      const frontmatter =
        readFileSync(`${directory}/${name}`, "utf8").split("---")[1] ?? ""
      const updated = frontmatter.match(/^updatedAt:\s*(\S+)$/m)
      const published = frontmatter.match(/^publishedAt:\s*(\S+)$/m)
      const revision = new Date(updated?.[1] ?? published?.[1] ?? "")
      if (!Number.isNaN(revision.getTime())) {
        dates.set(`${prefix}${name.replace(/\.md$/, "")}/`, revision)
      }
    }
  }
  return dates
}

/** Revision date of each post, read once when the configuration loads. */
const POST_REVISION_DATES = postRevisionDates()

/**
 * Static build configuration.
 *
 * `format: 'directory'` writes each route to its own folder, and the 404 page
 * escapes it: Astro exports it as `404.html` at the root, which the CloudFront
 * distribution points its custom error response at for an unknown path.
 */
export default defineConfig({
  site: SITE_ORIGIN,
  trailingSlash: "ignore",
  /**
   * French stays at the root, English lives under `/en/`.
   *
   * `prefixDefaultLocale: false` preserves the already indexed home URL:
   * moving it to `/fr/` would lose the acquired search ranking. English routes
   * are written explicitly in `src/pages/en/`, with translated URL segments
   * rather than prefixed ones.
   */
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
      /**
       * Adds the translation alternates for a sitemap entry.
       *
       * Entries whose page belongs to no translation pair are returned unchanged.
       *
       * @param item - Sitemap entry emitted by the plugin for one page.
       * @returns The entry with `links` carrying the French, English and default alternates, or the entry untouched when it has no translation.
       */
      serialize(item) {
        const pair = findPair(item.url)
        const revision = POST_REVISION_DATES.get(new URL(item.url).pathname)
        const entry = revision
          ? { ...item, lastmod: revision.toISOString() }
          : item

        if (!pair) {
          return entry
        }

        return {
          ...entry,
          links: [
            { lang: "fr-FR", url: `${SITE_ORIGIN}${pair.fr}` },
            { lang: "en-US", url: `${SITE_ORIGIN}${pair.en}` },
            { lang: "x-default", url: `${SITE_ORIGIN}${pair.fr}` },
          ],
        }
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
