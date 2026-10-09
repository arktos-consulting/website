/**
 * English editorial content.
 *
 * Mirrors `content.ts` field by field: the shared interfaces guarantee that a
 * missing entry or a renamed field fails the build rather than shipping a page
 * with a hole in it.
 *
 * Client names are kept but framed for an international reader. A European
 * infrastructure buyer recognises "the French national railway operator" or
 * "a French public investment bank"; the bare acronym means nothing outside
 * France, and dropping the references would remove the strongest evidence on
 * the site.
 */
import type { Service, Differentiator, FaqEntry } from "./content"

/** The services offered, in display order. */
export const SERVICES: readonly Service[] = [
  {
    slug: "consulting",
    title: "AWS consulting & architecture",
    summary: "Audit and design for your cloud platform.",
    includes: [
      "Architecture, security and cost review",
      "Multi-account governance and IAM",
      "Architecture and service selection",
    ],
  },
  {
    slug: "cloud-native",
    title: "Cloud Native design on AWS",
    summary:
      "The architecture choices and practices that avoid lock-in and keep the platform operable.",
    includes: [
      "Scoping and Cloud Native architecture choices",
      "Good practice: reversibility, scalability, observability",
      "Supporting teams on decisions and standards",
    ],
  },
  {
    slug: "managed-services",
    title: "Managed services",
    summary:
      "Monitoring, incidents, upgrades: the platform is looked after day to day.",
    includes: [
      "Day-to-day platform operations",
      "Monitoring and incident management",
      "Upgrades and cost control",
    ],
  },
  {
    slug: "ai",
    title: "Applied AI",
    summary:
      "LLM agents and automation over your business data, from proof of concept to production.",
    includes: [
      "LLM agents connected to your data",
      "Document search and extraction",
      "Production readiness: MLOps, cost, monitoring",
    ],
  },
] as const

/** Reassurance arguments, answering the usual consultancy objections. */
export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    title: "You talk to the person who builds it",
    body: "No pre-sales, no subcontracting. The same person from scoping through to production.",
  },
  {
    title: "A request is open to discussion",
    body: "When a cheaper approach gets the same result, I say so before we start.",
  },
  {
    title: "Teams that stand on their own afterwards",
    body: "I document and I train on operations. A successful engagement does not need extending.",
  },
  {
    title: "An explicit scope",
    body: "What is covered, what is not, and how fast I answer: written down before we start.",
  },
] as const

/** Frequently asked questions, published as `FAQPage` structured data. */
export const FAQ: readonly FaqEntry[] = [
  {
    question: "How do we start?",
    answer:
      "You book a thirty-minute slot. We scope the problem, then I tell you whether I am the right person, including when the answer is no.",
  },
  {
    question: "What are the timelines?",
    answer:
      "Reply within one business day. A consulting engagement usually starts within two to four weeks.",
  },
  {
    question: "How do you bill?",
    answer:
      "Fixed price for a defined scope, or time and materials for reinforcement. The mode is chosen at the end of scoping.",
  },
  {
    question: "What happens at the end of the engagement?",
    answer:
      "You keep the architecture, the documentation and the access. I train your teams on operations during the engagement.",
  },
] as const
