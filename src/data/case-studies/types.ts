/**
 * Content contracts for the case study pages.
 *
 * A case study is one engagement told in three beats: the context and its
 * constraint, what was delivered, and the outcome. The stack closes the page.
 * Keeping the prose in a typed module per language and rendering it through one
 * component means the layout is written once: a field added in French without an
 * English counterpart fails the build instead of shipping a half-translated page.
 */

/** A case study page. */
export interface CaseStudy {
  /** Stable key, resolving to the URL segment of each language. */
  id: string
  /** URL segment for the language this content is written in. */
  slug: string
  /** Client name, or its nature when the name is not public. */
  client: string
  /** Sector or nature of the client, shown as the page overline. */
  clientType: string
  /** Years of the engagement. */
  period: string
  /** Engagement title, written around the outcome. */
  title: string
  /** One-line summary, reused as the page meta description. */
  summary: string
  /** Technologies and practices involved. */
  stack: readonly string[]
  /** Context and constraint: what the client was up against. */
  context: readonly string[]
  /** What was delivered. */
  delivered: readonly string[]
  /** Outcome, and how it landed. */
  outcome: readonly string[]
  /** Recurring work carried alongside the engagement, when there was any. */
  misc?: readonly string[]
}

/** Hub page prose and the case list for one language. */
export interface CaseStudyBundle {
  /** Title used for metadata. */
  title: string
  /** Description used for metadata, sitemap and structured data. */
  description: string
  /** Breadcrumb label of the hub page. */
  breadcrumb: string
  /** Hero heading, split so the last fragment carries the accent colour. */
  hero: {
    /** Full heading, in plain colour. */
    title: string
    /** End of the heading, highlighted with the accent gradient. */
    accent: string
    /** Introductory paragraph. */
    lede: string
  }
  /** Every published case, in display order. */
  cases: readonly CaseStudy[]
}
