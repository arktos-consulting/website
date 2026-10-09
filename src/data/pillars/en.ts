/**
 * English content for the four pillar pages.
 *
 * Typed against `PillarBundle`, so a field added in French without its English
 * counterpart fails the build rather than shipping a half-translated page.
 *
 * This is a rewrite for an international reader, not a literal translation.
 * French institutional references are named and framed in the same sentence —
 * "a French public investment bank" rather than "Bpifrance" alone — because the
 * bare name means nothing outside France while the proof it carries is the
 * strongest evidence on the site.
 */
import type { PillarBundle } from './types';

const en: PillarBundle = {
  consulting: {
    slug: 'consulting',
    title: 'AWS & Kubernetes audit and consulting',
    description:
      'AWS and Kubernetes consulting: architecture reviews, multi-account governance and FinOps. Independent consultant based in Lyon, working across Europe.',
    breadcrumb: 'Consulting',
    hero: {
      eyebrow: 'Consulting',
      title: 'Audit, design, then',
      accent: 'leave you in control.',
      lede:
        'I step in when architecture decisions have to be made and owned. Nine years of experience, from a handful of services to entire platforms.',
    },
    cta: {
      primary: 'Talk through your needs',
      secondary: 'See Cloud Native design',
      secondaryHref: '/en/#prestations',
    },
    scope: {
      eyebrow: 'Scope',
      title: 'What a consulting',
      accent: 'engagement covers.',
    },
    domains: [
      {
        title: 'Architecture & scalability',
        items: [
          'Designing or reviewing AWS architecture',
          'Account segmentation and isolation',
          'Migration and reversibility paths',
        ],
      },
      {
        title: 'Security & compliance',
        items: [
          'IAM, federated roles and least privilege',
          'Multi-account governance: Organizations, SCPs',
          'Kubernetes hardening and regulatory requirements',
        ],
      },
      {
        title: 'FinOps & operations',
        items: [
          'Reading the bill and finding where it drifts',
          'Sizing and autoscaling',
          'Operating standards and service objectives',
        ],
      },
    ],
    process: {
      eyebrow: 'How it runs',
      title: 'Four steps,',
      accent: 'a written scope.',
    },
    phases: [
      {
        step: '01',
        title: 'Scoping',
        detail: 'One conversation about your objective. By the end you know whether an audit is worth it.',
        items: [],
      },
      {
        step: '02',
        title: 'Audit',
        detail: 'Architecture, security, cost and operating practice, ranked by priority.',
        items: [],
      },
      {
        step: '03',
        title: 'Design',
        detail: 'Options, trade-offs and estimated cost. You approve before anything is built.',
        items: [],
      },
      {
        step: '04',
        title: 'Implementation and handover',
        detail: 'Building it, documenting it and training your team. You take back control.',
        items: [],
      },
    ],
    proofHeading: {
      eyebrow: 'Track record',
      title: 'Platforms that are',
      accent: 'not mock-ups.',
    },
    proofs: [
      { value: '~150', text: 'Azure/Kubernetes microservices in operation, SaaS vendor' },
    ],
  },

  ai: {
    slug: 'ai',
    title: 'Applied AI: LLM agents and automation',
    description:
      'Applied AI in the enterprise: LLM agents connected to your data, document extraction, search across your archives, MLOps industrialisation and cost control. Independent consultant in Lyon.',
    breadcrumb: 'Applied AI',
    hero: {
      eyebrow: 'Applied AI',
      title: 'Agents that work on',
      accent: 'your data, in production.',
      lede:
        'Most AI projects stop at the demo. I handle what comes after: connecting the model to your data, measuring quality, controlling cost, putting it into production.',
    },
    cta: {
      primary: 'Talk about a use case',
      secondary: 'See consulting',
      secondaryHref: '/en/consulting/',
    },
    useCasesHeading: {
      eyebrow: 'Use cases',
      title: 'Three ways',
      accent: 'to start.',
      lede:
        'The first case is a deliberately short entry point: a verifiable result, on a narrow scope, before committing further.',
    },
    useCases: [
      {
        step: '01',
        title: 'Make your document archives searchable',
        detail:
          'The documents exist, but nobody can query them. Contracts, invoices, client files, meeting notes: search that answers while citing the source, instead of returning a list of files.',
        items: [
          'Natural-language search across your documents',
          'Answers citing the source and the page',
          'Field extraction into your existing tools',
          'Narrow scope, verifiable result within weeks',
        ],
      },
      {
        step: '02',
        title: 'Automate a repetitive process',
        detail:
          'An agent that reads, sorts, checks or prepares what your teams do by hand. The value rarely comes from the model alone: it comes from cleanly connecting your data and verifying the outcome.',
        items: [
          'Reconciliation and consistency checks',
          'Preparing files and summaries',
          'Sorting and routing incoming documents',
          'Logging so you can audit what the agent decided',
        ],
      },
      {
        step: '03',
        title: 'Industrialise and control cost',
        detail:
          'The prototype works; going live reveals the real problems: quality drift, unpredictable cost per call, no monitoring. This is where most projects stop.',
        items: [
          'Continuous evaluation of answer quality',
          'Cost tracking per call and per user',
          'Monitoring, alerting and usable logs',
          'A reasoned choice between hosted model, API or local',
        ],
      },
    ],
    cautionsHeading: {
      eyebrow: 'Watch out for',
      title: 'Three decisions',
      accent: 'to make early.',
    },
    cautions: [
      {
        title: 'Your data does not leave without a decision',
        body: 'Choosing between an external API, a model hosted in your own cloud or a local model is a trade-off, not a default. It is settled by how sensitive the data is and what you are obliged to do.',
      },
      {
        title: 'An agent is measured, not taken on faith',
        body: 'Without an evaluation set, a regression goes unnoticed for weeks. Quality measurement goes in with the first version, not after it.',
      },
      {
        title: 'Cost per call can be steered',
        body: 'Unmonitored AI is expensive in silence. Tracking cost per use is a production indicator, in the same way latency is.',
      },
    ],
    credentialsHeading: {
      eyebrow: 'Experience',
      title: 'This is not',
      accent: 'a first project.',
      lede:
        'I have been running AI in production since 2018, and I industrialised a software vendor’s LLM platform.',
    },
    credentials: [
      {
        label: 'Hartza Capital',
        detail:
          'LLM agents interpreting market data, in production since 2018.',
      },
      {
        label: 'Yseop',
        detail:
          'A SaaS LLM artificial intelligence platform deployed both on AWS and on-premise. Industrialising the MLOps chain and hardening environments.',
      },
      {
        label: 'Cloud Partners',
        detail:
          'A collective within the AWS partner network, with a dedicated AI/Machine Learning offering: SageMaker, MLOps, NLP, computer vision.',
      },
    ],
  },

  managedServices: {
    slug: 'managed-services',
    title: 'AWS & Kubernetes EKS managed services',
    description:
      'AWS and Kubernetes managed services: running EKS clusters, monitoring, upgrades and cost control. Senior independent consultant in Lyon, working across Europe.',
    breadcrumb: 'Managed services',
    hero: {
      eyebrow: 'Managed services',
      title: 'I run the platform',
      accent: 'when you would rather focus on the product.',
      lede:
        'You keep your product teams; I take on operations: monitoring, upgrades, incidents and cost.',
    },
    cta: {
      primary: 'Talk through the scope',
      secondary: 'See consulting',
      secondaryHref: '/en/consulting/',
    },
    scope: {
      eyebrow: 'Scope',
      title: 'What delegated',
      accent: 'operations covers.',
    },
    coverage: [
      {
        title: 'Day-to-day operations',
        items: [
          'EKS clusters and upgrades',
          'Image lifecycle and rollbacks',
          'Secrets, certificates and access',
        ],
      },
      {
        title: 'Monitoring & incidents',
        items: [
          'Metrics, logs and dashboards',
          'Alerting without alert fatigue',
          'Diagnosing and resolving incidents',
        ],
      },
      {
        title: 'Reliability & cost',
        items: [
          'Service objectives agreed with you',
          'Sizing and autoscaling',
          'Tracking the AWS bill',
        ],
      },
    ],
    commitmentsHeading: {
      eyebrow: 'Commitments',
      title: 'The frame around',
      accent: 'the engagement.',
    },
    commitments: [
      { label: 'Response to a request', value: '1 business day' },
      { label: 'Incident handling', value: 'Per contract' },
      { label: 'Maintenance window', value: 'Planned with you' },
      { label: 'Commitment', value: 'Defined in the contract' },
    ],
    hygieneHeading: {
      eyebrow: 'Why me',
      title: 'Running a platform means knowing',
      accent: 'the architecture decisions.',
    },
    hygiene: [
      {
        step: '01',
        title: 'One person on the bridge',
        detail:
          'No rotation, no handover between an architect and an operator who have never spoken to each other.',
        items: [],
      },
      {
        step: '02',
        title: 'Code and infrastructure together',
        detail:
          'I write code as well: an incident that starts in the application does not stop at the boundary.',
        items: [],
      },
      {
        step: '03',
        title: 'A cost that stays explainable',
        detail: 'The AWS bill is tracked and commented on, not merely paid.',
        items: [],
      },
    ],
  },
};

export default en;
