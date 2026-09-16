/**
 * Content contracts for the pillar pages.
 *
 * Each pillar page exists in two languages with translated URL segments
 * (`/conseil/` in French, `/en/consulting/` in English). Keeping the prose in a
 * typed module per language and rendering it through a single component means
 * the layout is written once: a field added in French without an English
 * counterpart fails the build instead of shipping a half-translated page.
 *
 * A `slug` is the page's own URL segment for its language, used to build the
 * canonical URL and the breadcrumb.
 */

/** A numbered or titled block with supporting bullet points. */
export interface PillarPhase {
  /** Two-digit index shown before the title, such as `01`. */
  step: string;
  /** Block title. */
  title: string;
  /** Explanatory paragraph. */
  detail: string;
  /** Detail points, rendered as a checklist. */
  items: readonly string[];
}

/** A short card with a title and a paragraph. */
export interface PillarCard {
  /** Card title. */
  title: string;
  /** Card body. */
  body: string;
}

/** A section heading, split so the last fragment can carry the accent colour. */
export interface PillarHeading {
  /** Small-caps overline. */
  eyebrow: string;
  /** Start of the heading, in full colour. */
  title: string;
  /** End of the heading, highlighted with the accent gradient. */
  accent: string;
  /** Optional introductory paragraph. */
  lede?: string;
}

/** The two calls to action shown under a pillar hero. */
export interface PillarCta {
  /** Primary button label, linking to the contact form. */
  primary: string;
  /** Secondary link label. */
  secondary: string;
  /** Destination of the secondary link. */
  secondaryHref: string;
}

/** Fields shared by every pillar page. */
export interface PillarBase {
  /** URL segment for this language, without slashes, such as `conseil`. */
  slug: string;
  /** Page title, without the company name. */
  title: string;
  /** Meta description. */
  description: string;
  /** Label used in the breadcrumb trail. */
  breadcrumb: string;
  /** Hero heading. */
  hero: PillarHeading;
  /** Hero calls to action. */
  cta: PillarCta;
}

/** A single figure used as evidence, such as `300+` clusters. */
export interface PillarProof {
  /** The figure itself. */
  value: string;
  /** What the figure refers to. */
  text: string;
}

/** The consulting pillar: audit, architecture, FinOps. */
export interface ConsultingPillar extends PillarBase {
  /** Scope of the engagement, grouped by domain. */
  scope: PillarHeading;
  /** Technical domains covered. */
  domains: readonly { title: string; items: readonly string[] }[];
  /** Engagement sequence. */
  process: PillarHeading;
  /** The four steps, from scoping to handover. */
  phases: readonly PillarPhase[];
  /** Evidence section. */
  proofHeading: PillarHeading;
  /** Figures backing the claims. */
  proofs: readonly PillarProof[];
}

/** The sovereign cloud pillar: design, build, operate. */
export interface SovereignCloudPillar extends PillarBase {
  /** Approach section. */
  approach: PillarHeading;
  /** The three stages of the offer. */
  phases: readonly PillarPhase[];
  /** Situations that trigger the engagement. */
  triggersHeading: PillarHeading;
  /** Typical triggers. */
  triggers: readonly PillarCard[];
  /** Reference case section. */
  caseHeading: PillarHeading;
  /** Reference case paragraphs. */
  caseParagraphs: readonly string[];
  /** Technologies attached to the reference case. */
  caseTags: readonly string[];
}

/** The applied AI pillar: LLM agents and automation. */
export interface AiPillar extends PillarBase {
  /** Use case section. */
  useCasesHeading: PillarHeading;
  /** Use cases, from the most accessible to the most involved. */
  useCases: readonly PillarPhase[];
  /** Early decisions, framed as vigilance points. */
  cautionsHeading: PillarHeading;
  /** Vigilance points. */
  cautions: readonly PillarCard[];
  /** Experience section. */
  credentialsHeading: PillarHeading;
  /** References backing the AI work. */
  credentials: readonly { label: string; detail: string }[];
}

/** A commitment shown in the managed services table. */
export interface ManagedServiceCommitment {
  /** What is committed to. */
  label: string;
  /** The commitment itself. */
  value: string;
  /** Scope or limitation that qualifies the commitment. */
  note?: string;
}

/** The managed services pillar: running an EKS platform. */
export interface ManagedServicesPillar extends PillarBase {
  /** Scope section. */
  scope: PillarHeading;
  /** What is covered. */
  coverage: readonly { title: string; items: readonly string[] }[];
  /** Commitments section. */
  commitmentsHeading: PillarHeading;
  /** Reaction and intervention commitments. */
  commitments: readonly ManagedServiceCommitment[];
  /** Platform hygiene section. */
  hygieneHeading: PillarHeading;
  /** Recurring work on the platform. */
  hygiene: readonly PillarPhase[];
}

/** Every pillar page, keyed by its identifier. */
export interface PillarBundle {
  /** Audit and architecture consulting. */
  consulting: ConsultingPillar;
  /** Sovereign cloud design, build and operations. */
  sovereignCloud: SovereignCloudPillar;
  /** Applied AI and LLM agents. */
  ai: AiPillar;
  /** Kubernetes managed services. */
  managedServices: ManagedServicesPillar;
}

/** Identifier of a pillar page. */
export type PillarId = keyof PillarBundle;

/** Route segments of a pillar, per locale. */
export type PillarRoutes = Record<PillarId, Record<'fr' | 'en', string>>;
