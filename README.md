# Arktos Consulting — website

Marketing site for Arktos Consulting's AWS/Kubernetes consulting and managed
services. Built with Astro, rendered entirely as static HTML.

## Getting started

```bash
bun install
bun run dev      # development server on http://localhost:4321
bun run build    # production build into dist/
bun run preview  # preview the build
```

The same commands are exposed through the `Makefile` — `make help` lists them —
so the names work identically from a terminal, an editor task runner or CI.
`make ci` is the gate, and runs the same chain as `bun run verify`.

## Checks

```bash
bun run verify       # the full chain: format, types, components, build, bilingual
bun run format       # rewrites files to the Prettier convention
bun run format:check # checks the formatting without rewriting
bun run typecheck    # astro sync, then astro check, then tsc --noEmit
bun run build        # production build into dist/
bun run verify:i18n  # checks the built HTML and sitemap (after the build)
```

`bun run format:check` opens the `verify` chain: the style convention is the one
used across the organisation's repositories, defined in `.prettierrc.json`
(double quotes, no semicolons, 80 columns) and bounded by `.prettierignore`.
`bun run format` applies the same convention.

`bun run typecheck` runs `astro sync` before `tsc`: the content collection types
(`astro:content`) are generated into `.astro/`, which is not versioned. Without
that step, type checking fails on a fresh machine and in continuous integration.

**`tsc` does not read `.astro` files.** It catches errors in TypeScript modules,
never in components, pages or the layout. A type missing from an export therefore
passes `tsc` silently and only breaks at runtime — observed: 23 files imported a
type that was never re-exported while `tsc --noEmit` stayed green. That is why
`typecheck` calls `astro check` between the two.

Every command above must exit without error before anything is submitted.

## Stack

| Role      | Choice                    | Version      |
| --------- | ------------------------- | ------------ |
| Framework | Astro                     | 7.3.2        |
| Styling   | Tailwind CSS              | 4.3.3        |
| Typing    | TypeScript                | 6.0.3        |
| Fonts     | Inter + Sora, self-hosted | latin subset |
| Hosting   | Amazon S3 + CloudFront    | static       |

**TypeScript is deliberately kept on 6.x.** TypeScript 7 is available and much
faster, but it does not yet provide a programmatic API: type checking of Astro
templates and the ESLint tooling do not work with it. The upgrade waits for the
API announced for 7.1.

**React is not mounted.** The site has no interactive island. The `react` and
`react-dom` dependencies stay declared, ready to use as soon as a component
justifies it — enabling them would add about 200 KB of JavaScript per page.

## Structure

```
src/
  consts.ts              identity, contact details, host, Matomo, career
  content.config.ts      article collection schema (fr and en)
  content/blog/          French articles, in Markdown
  content/blog-en/       English articles, in Markdown
  i18n/
    fr.ts                French dictionary: the source of truth for labels
    en.ts                English dictionary, typed on the shape derived from fr.ts
    index.ts             getDictionary, locales, hreflang, og:locale
    routes.ts            FR/EN translation pair table (single source)
  data/
    content.ts           French editorial content (services, engagements, FAQ)
    content.en.ts        English editorial content
    clients.ts           client logos, language-independent
    case-studies/
      slugs.ts           case study URL segments, per language (single source)
      fr.ts              French case studies
      en.ts              English case studies
      types.ts           case study page contracts
      ownership.ts       marks the engagement carried out for the parent company
      index.ts           getCaseStudies(locale), case paths
    index.ts             getContent(locale)
    pillars/             pillar page content, per language and typed
  utils/career.ts        computes the years of experience
  utils/blog.ts          localised dates, reading time, article retrieval
  utils/seo.ts           JSON-LD graph and breadcrumb
  layouts/BaseLayout.astro
  components/            header, sections, article cards, footer
  components/pillars/    pillar page rendering, one component for both languages
  pages/                 French routes (root)
  pages/cas-clients/     case study hub and pages, French
  pages/en/              English routes
  pages/en/case-studies/ case study hub and pages, English
scripts/
  verify-i18n.mjs        checks the bilingual invariants on the built output
public/
  images/                client logos (silhouettes), logo.svg, share image
  fonts/                 latin subsets of Inter and Sora
  files/cv.pdf
  robots.txt
```

## Bilingual

French is served at the root, English under `/en/`. The two are distinct sites,
not a single page translated on the fly.

**URL segments are translated, not prefixed.** `/conseil/` maps to
`/en/consulting/`, not `/en/conseil/`. An English reader gets URLs that read in
their language, and the already-indexed French URLs do not move.

### Where the text lives

| Nature                                                         | Location                               |
| -------------------------------------------------------------- | -------------------------------------- |
| Interface labels (buttons, navigation, section headings)       | `src/i18n/{fr,en}.ts`                  |
| Editorial content (services, engagements, FAQ, pillar pages)   | `src/data/`                            |
| Language-independent (client logos, identity, contact details) | `src/consts.ts`, `src/data/clients.ts` |

**The French dictionary is the source of truth.** `en.ts` is typed on the shape
derived from `fr.ts`: a key present in French and missing in English fails the
build. That is why these files are TypeScript and not JSON — JSON would produce no
compilation error and let `undefined` show up in production.

Likewise, `content.en.ts` and `data/pillars/en.ts` are typed on the French side's
interfaces: a field added on one side only does not compile.

### Publishing a translated page or article

Add the pair to `ROUTE_PAIRS`, in `src/i18n/routes.ts`:

```ts
{ fr: "/mon-sujet/", en: "/en/my-topic/" },
```

That is the only declaration needed. The layout derives the canonical URL, the
reciprocal `hreflang` tags, `x-default` and the language switcher target from it;
the sitemap derives its alternates. A page absent from that table is treated as
monolingual: it gets a canonical URL and no `hreflang`, which is safer than an
alternate pointing at a page that does not exist in that language.

**Single exception: case studies.** Their sixteen pairs are derived from
`CASE_SLUGS`, in `src/data/case-studies/slugs.ts`, not copied here. A case's URL
segment is thus written once; `getCaseStudies` verifies at load time that the
content's segment matches the one in that list, and throws otherwise. A case to
add is therefore added there, then in `fr.ts` and `en.ts`.

### The four traps

**1. `tsc` does not see `.astro`.** See the Checks section.

**2. Not declaring a translation is silent.** A pillar page missing from
`ROUTE_PAIRS` does not fail: it simply loses its `hreflang`, with no error and no
warning. `bun run verify:i18n` closes that hole by refusing any indexable page
without a complete alternate.

**3. The sitemap infers nothing from URLs.** Translated segments make any
inference impossible: the `i18n` option of the `@astrojs/sitemap` plugin matches
no URL and produces a sitemap with no alternates, without reporting anything. The
alternates are therefore written from `ROUTE_PAIRS`, in `astro.config.mjs`.

**4. The language switcher uses a path, not an absolute URL.** Otherwise a
preview or a pre-production deployment would send the visitor to production. The
`canonical` and `hreflang` tags stay absolute.

`bun run verify:i18n` checks the bilingual invariants on the built output:
reciprocal alternates in the sitemap and in the HTML, `noindex` pages excluded
from both, the declared language correct, and no French text inside an English
page.

### Translating an article

An English article is a distinct document, with its own slug and its own
publication date — not a file copy. It lives in `src/content/blog-en/`, and the
pair is declared in `ROUTE_PAIRS`.

## Publishing an article

Create a Markdown file in `src/content/blog/`. The file name becomes the URL:
`src/content/blog/my-topic.md` is published at `/blog/my-topic/`.

```markdown
---
title: "Article title"
description: "One-sentence summary, used in the listing and the metadata."
publishedAt: 2026-09-08
updatedAt: 2026-10-01 # optional
tags: ["AWS", "FinOps"]
summary: "Opening paragraph shown at the top of the article."
draft: false # true keeps the article offline
---

The Markdown content. `##` headings feed the table of contents.
```

The schema in `src/content.config.ts` validates the frontmatter at build time: a
malformed date or a missing `description` fails the build rather than producing a
broken page in production.

Adding an article publishes it automatically in the listing, the RSS feed, the
sitemap, the Open Graph metadata and the `BlogPosting` markup. Nothing else to
change.

Drafts (`draft: true`) are excluded from the listing, the RSS feed and the
sitemap.

## Content conventions

- Code comments are in **English**, without exception: TSDoc, inline comments,
  CSS section banners and YAML comments.
- Displayed text lives in `src/i18n/` and `src/data/`, never in components. Data
  displayed in two places ends up diverging.
- Data that does not depend on the language is not duplicated per language. The
  client logos were once present identically in both content files: a client
  added on one side only would have made the trust strip diverge depending on the
  page language, with no error.
- The years of experience are **computed** from `CAREER` in `src/consts.ts`,
  never hard-coded. A copied figure becomes wrong the following year.
- The JSON-LD graph is produced by `src/utils/seo.ts` from the same sources: the
  markup and the visible content cannot contradict each other.
- FAQ answers are reproduced word for word in the `FAQPage` markup. Changing an
  answer means checking that the markup follows.

## SEO

The site is optimised for classic search engines and for generative answer
engines.

**What is in place:** unique titles and descriptions per page, canonical URLs,
reciprocal `hreflang` with `x-default`, `og:locale` and `og:locale:alternate`,
structured data (`ProfessionalService`, `Person`, `WebSite`, `WebPage`,
`FAQPage`, `BreadcrumbList`, `BlogPosting`), a sitemap generated at build time
with its alternates, Open Graph and Twitter Card metadata, a 1200×630 share
image.

The structured data declares the page language (`inLanguage`) and the areas of
expertise in the reader's language: an answer engine processing an English query
must find the English term to link the entity to the topic.

**robots.txt distinguishes two separate decisions.** Search and answer robots are
allowed (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`): blocking them
would remove the site from ChatGPT, Perplexity and Claude answers. Training
robots are refused (`GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`): they feed
corpora without generating answer traffic. This distinction is the most commonly
missed point, and the most costly to miss.

**llms.txt is deliberately not published.** Google has stated it does not use it,
and access measurements show that the robots generating citations almost never
request it. The file does not produce citations.

## Performance

The HTML is complete without script execution: it reads in full before a single
byte of JavaScript is downloaded, which makes it directly readable by indexing
robots and by answer engines.

| Element                    | Weight                              |
| -------------------------- | ----------------------------------- |
| Home page (HTML)           | ~42 KB                              |
| CSS                        | ~28 KB                              |
| Application JavaScript     | 0                                   |
| Fonts (2 files, latin)     | 80 KB                               |
| Matomo (matomo.js + calls) | external, after the page has loaded |

The fonts are limited to the latin subset: the Cyrillic, Greek and Vietnamese
sets would add about 170 KB that is never used. They are served from the domain
rather than from a third-party CDN, which removes an external connection from the
display path.

## Audience measurement

Audience is measured with Matomo, in cookieless mode: that is what places the
measurement inside the CNIL consent exemption, and why the site shows no banner.
The script is absent as long as `MATOMO.url` and `MATOMO.siteId` (in
`src/consts.ts`) remain placeholders.

The exemption rests entirely on the instance configuration, to be verified on the
Matomo Cloud side: IP anonymisation before processing, no third-party cookies, no
cross-domain, no User ID, no e-commerce, no heatmaps or session recordings,
exports disabled, and hosting inside the European Union. The "Visits log &
Visitor profile" setting must stay disabled in the privacy settings.

The right to object is the counterpart of the exemption, and it is mandatory: the
button lives in the legal notices (anchor `#mesure-audience`), linked from the
footer. It pushes `optUserOut` into the Matomo queue and remembers the choice in
`localStorage`; a reload applies the objection before the tracker is loaded.

## Deployment

The site is published to Amazon S3 and distributed through Amazon CloudFront.
Publishing is manual: `bun run build` produces `dist/`, then synchronised to the
bucket.

`bun run verify` replays locally the same steps as `.github/workflows/verify.yml`
on every pull request: formatting, types, components, build, bilingual
invariants. An error must block production.
