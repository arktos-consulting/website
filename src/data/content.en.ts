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
import type { Service, Mission, Differentiator, FaqEntry } from './content';

/** The services offered, in display order. */
export const SERVICES: readonly Service[] = [
  {
    slug: 'consulting',
    title: 'AWS consulting & architecture',
    summary: 'Audit and design for your cloud platform.',
    includes: [
      'Architecture, security and cost review',
      'Multi-account governance and IAM',
      'FinOps strategy',
    ],
    href: '/en/consulting/',
  },
  {
    slug: 'sovereign-cloud',
    title: 'Sovereign cloud',
    summary:
      'Design, build and run an internal cloud, or step away from hyperscaler dependency.',
    includes: [
      'Designing internal managed services',
      'Reversibility and hyperscaler exit',
      'Running a private cloud',
    ],
    href: '/en/sovereign-cloud/',
  },
  {
    slug: 'managed-services',
    title: 'Kubernetes managed services',
    summary: 'I run your EKS platform: monitoring, incidents, cost.',
    includes: ['EKS operations and upgrades', 'Monitoring and incidents', 'Cost control'],
    href: '/en/managed-services/',
  },
  {
    slug: 'ai',
    title: 'Applied AI',
    summary:
      'LLM agents and automation over your business data, from proof of concept to production.',
    includes: [
      'LLM agents connected to your data',
      'Document search and extraction',
      'Production readiness: MLOps, cost, monitoring',
    ],
    href: '/en/ai/',
  },
] as const;

/** Reassurance arguments, answering the usual consultancy objections. */
export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    title: 'You talk to the person who builds it',
    body: 'No pre-sales, no subcontracting. The same person from scoping through to production.',
  },
  {
    title: 'I push back when a request works against your goal',
    body: 'If a cheaper approach gets the same result, I say so.',
  },
  {
    title: 'Teams that stand on their own afterwards',
    body: 'I document and I train on operations. A successful engagement does not need extending.',
  },
  {
    title: 'An explicit scope',
    body: 'What is covered, what is not, and how fast I answer: written down before we start.',
  },
] as const;

/** Public engagements, usable as references. */
export const MISSIONS: readonly Mission[] = [
  {
    clientType: 'French public investment bank',
    client: 'Bpifrance',
    period: '2024 — 2025',
    title: 'Regulatory change traceability on Kubernetes',
    description:
      'Cluster change audit tooling with reporting, covering a sector requirement. R&D on Knative and a reversibility workshop away from AWS.',
    tags: ['Kubernetes', 'Compliance', 'Knative'],
  },
  {
    clientType: 'Software vendor, LLM platform',
    client: 'Yseop',
    period: '2023 — 2024',
    title: 'MLOps industrialisation on AWS and on-premise',
    description:
      'Hardening of environments and removal of friction from the MLOps chain. SRE practices handed over to the teams.',
    tags: ['AWS', 'MLOps', 'SRE', 'FinOps'],
  },
  {
    clientType: 'French national railway operator',
    client: 'SNCF',
    period: '2022 — 2023',
    title: 'Building the managed services of a private cloud',
    description:
      'Design and direction of the managed services of the group private cloud — self-service containers, databases, secrets vault — for a fleet of more than 300 Kubernetes clusters.',
    tags: ['Private cloud', 'Kubernetes', 'Managed services', 'Open source'],
  },
  {
    clientType: 'SaaS vendor, 800+ microservices',
    client: 'Seiitra',
    period: '2021 — 2022',
    title: 'Securing an Azure/Kubernetes platform and a FinOps plan',
    description:
      'Fixing security and scalability gaps across more than 800 microservices, and defining reusable operational standards.',
    tags: ['Azure', 'Kubernetes', 'FinOps'],
  },
  {
    clientType: 'Industrial distributor, B2B commerce',
    client: 'Descours & Cabaud',
    period: '2020 — 2021',
    title: 'Moving physical retail to online sales',
    description:
      'Defining the project standards, then introducing developers to DevOps practice and the run teams to SRE.',
    tags: ['DevOps', 'Transformation', 'CI/CD'],
  },
  {
    clientType: 'Healthcare platform, sensitive data',
    client: 'Doctolib',
    period: '2019',
    title: 'Migrating from bare metal to Kubernetes on AWS',
    description:
      'Replacing a bare metal estate with Kubernetes on AWS, including the security rules required for health data.',
    tags: ['AWS', 'Kubernetes', 'Healthcare'],
  },
  {
    clientType: 'Broadcaster',
    client: 'Canal+',
    period: '2019',
    title: 'Replacing the legacy CI/CD pipelines',
    description:
      'Kubernetes pipelines built for ephemeral resources, after evaluating TektonCD, DroneIO and JenkinsX.',
    tags: ['CI/CD', 'Kubernetes', 'TektonCD'],
  },
  {
    clientType: 'My own platform, in production',
    client: 'Hartza Capital',
    period: 'since 2018',
    title: 'Continuous analysis of financial markets',
    description:
      'An architecture of more than 90 Go microservices, AWS serverless, and LLM agents for interpreting the data.',
    tags: ['Go', 'Microservices', 'LLM'],
  },
] as const;

/** Frequently asked questions, published as `FAQPage` structured data. */
export const FAQ: readonly FaqEntry[] = [
  {
    question: 'How do we start?',
    answer:
      'You book a thirty-minute slot. We scope the problem, then I tell you whether I am the right person — including when the answer is no.',
  },
  {
    question: 'What are the timelines?',
    answer:
      'Reply within one business day. A consulting engagement usually starts within two to four weeks.',
  },
  {
    question: 'How do you bill?',
    answer:
      'Fixed price for a defined scope, or time and materials for reinforcement. The mode is chosen at the end of scoping.',
  },
  {
    question: 'What happens at the end of the engagement?',
    answer:
      'You keep the architecture, the documentation and the access. I train your teams on operations during the engagement.',
  },
] as const;
