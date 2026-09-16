/**
 * French editorial content.
 *
 * Writing rules: one idea per sentence, and no sentence comments on the previous
 * one. Every claim must stand on its own, both for a reader skimming the page
 * and for an answer engine extracting a fragment of it.
 *
 * The facts come from the real background (CV, engagements): nothing is
 * extrapolated.
 */

/** A service offered, shown as a card and declared in `OfferCatalog`. */
export interface Service {
  /** Stable identifier, used as an anchor and as a list key. */
  slug: string;
  /** Commercial title of the service. */
  title: string;
  /** Short summary shown on the card. */
  summary: string;
  /** Detailed work included in the offering. */
  includes: readonly string[];
  /** Link to the dedicated pillar page, when one exists. */
  href?: string;
}

/** A past engagement, used as technical evidence. */
export interface Mission {
  /** Sector or nature of the client, as it can be made public. */
  clientType: string;
  /** Client name when the reference is public. */
  client?: string;
  /** Years of the engagement. */
  period: string;
  /** Engagement title, written around the outcome. */
  title: string;
  /** Technical detail of what was delivered. */
  description: string;
  /** Technologies and practices involved. */
  tags: readonly string[];
}

/** A reassurance argument, shown in a grid. */
export interface Differentiator {
  /** Argument heading. */
  title: string;
  /** Explanation addressed to a technical decision maker. */
  body: string;
}

/** A frequently asked question, published as `FAQPage`. */
export interface FaqEntry {
  /** Question as a prospect would ask it. */
  question: string;
  /** Direct answer, in one or two sentences. */
  answer: string;
}

/** The services sold, in display order. */
export const SERVICES: readonly Service[] = [
  {
    slug: 'conseil',
    title: 'Conseil & architecture AWS',
    summary: 'Audit et conception de votre plateforme cloud.',
    includes: [
      'Audit architecture, sécurité et coûts',
      'Gouvernance multi-comptes et IAM',
      'Stratégie FinOps',
    ],
    href: '/conseil/',
  },
  {
    slug: 'cloud-souverain',
    title: 'Cloud souverain',
    summary:
      'Concevoir, construire et exploiter un cloud interne, ou sortir d’une dépendance à un hyperscaler.',
    includes: [
      'Conception de services managés internes',
      'Réversibilité et sortie d’hyperscaler',
      'Exploitation d’un cloud privé',
    ],
    href: '/cloud-souverain/',
  },
  {
    slug: 'infogerance',
    title: 'Infogérance Kubernetes',
    summary: "J'exploite votre plateforme EKS : supervision, incidents, coûts.",
    includes: ['Exploitation EKS et mises à jour', 'Supervision et incidents', 'Maîtrise des coûts'],
    href: '/infogerance/',
  },
  {
    slug: 'ia',
    title: 'IA appliquée',
    summary:
      'Agents LLM et automatisation sur vos données métier, de la preuve de concept à la production.',
    includes: [
      'Agents LLM connectés à vos données',
      'Recherche documentaire et extraction',
      'Industrialisation : MLOps, coûts, supervision',
    ],
    href: '/ia/',
  },
] as const;

/** The reassurance arguments, answering the usual failings of service companies. */
export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    title: 'Vous parlez à celui qui construit',
    body: 'Pas d’avant-vente ni de sous-traitance. Le même interlocuteur du cadrage à la production.',
  },
  {
    title: 'Je conteste la demande quand elle dessert l’objectif',
    body: 'Si une approche moins coûteuse obtient le même résultat, je le dis.',
  },
  {
    title: 'Des équipes autonomes à la fin',
    body: 'Je documente et je forme au run. Une mission réussie n’a pas besoin d’être prolongée.',
  },
  {
    title: 'Un périmètre explicite',
    body: 'Ce qui est couvert, ce qui ne l’est pas, et sous quel délai je réponds : écrit avant de commencer.',
  },
] as const;

/** Public engagements, usable as references. */
export const MISSIONS: readonly Mission[] = [
  {
    clientType: 'Organisme financier public',
    client: 'Bpifrance',
    period: '2024 — 2025',
    title: 'Traçabilité réglementaire des changements Kubernetes',
    description:
      'Outil de traçabilité des modifications de cluster, avec reporting. R&D sur Knative et atelier de réversibilité AWS.',
    tags: ['Kubernetes', 'Conformité', 'Knative'],
  },
  {
    clientType: 'Éditeur logiciel, plateforme LLM',
    client: 'Yseop',
    period: '2023 — 2024',
    title: 'Industrialisation MLOps sur AWS et on-premise',
    description:
      'Durcissement des environnements et suppression des frictions de la chaîne MLOps. Transfert des pratiques SRE aux équipes.',
    tags: ['AWS', 'MLOps', 'SRE', 'FinOps'],
  },
  {
    clientType: 'Opérateur ferroviaire national',
    client: 'SNCF',
    period: '2022 — 2023',
    title: 'Construction des services managés d’un cloud privé',
    description:
      'Conception et direction de la construction des services managés du cloud privé du groupe — conteneurs auto-servis, bases de données, coffre de secrets — pour un parc de plus de 300 clusters Kubernetes.',
    tags: ['Cloud privé', 'Kubernetes', 'Services managés', 'Open source'],
  },
  {
    clientType: 'Éditeur SaaS, 800+ microservices',
    client: 'Seiitra',
    period: '2021 — 2022',
    title: 'Sécurisation Azure/Kubernetes et plan FinOps',
    description:
      'Correction des lacunes de sécurité et de scalabilité sur plus de 800 microservices, et définition des standards d’exploitation.',
    tags: ['Azure', 'Kubernetes', 'FinOps'],
  },
  {
    clientType: 'Négociant industriel, distribution B2B',
    client: 'Descours & Cabaud',
    period: '2020 — 2021',
    title: 'Bascule du commerce physique vers la vente en ligne',
    description:
      'Définition des normes du projet, puis sensibilisation des développeurs aux pratiques DevOps et au SRE.',
    tags: ['DevOps', 'Transformation', 'CI/CD'],
  },
  {
    clientType: 'Plateforme de santé, données sensibles',
    client: 'Doctolib',
    period: '2019',
    title: 'Migration d’un bare metal vers Kubernetes sur AWS',
    description:
      'Remplacement d’une infrastructure bare metal par un Kubernetes sur AWS, avec les directives de sécurité liées aux données de santé.',
    tags: ['AWS', 'Kubernetes', 'Santé'],
  },
  {
    clientType: 'Groupe audiovisuel',
    client: 'Canal+',
    period: '2019',
    title: 'Remplacement des pipelines CI/CD Jenkins',
    description:
      'Pipelines Kubernetes optimisés pour l’éphémérité des ressources, après évaluation de TektonCD, DroneIO et JenkinsX.',
    tags: ['CI/CD', 'Kubernetes', 'TektonCD'],
  },
  {
    clientType: 'Ma propre plateforme, en production',
    client: 'Hartza Capital',
    period: 'depuis 2018',
    title: 'Analyse continue des marchés financiers',
    description:
      'Architecture de plus de 90 microservices Go, serverless AWS et agents LLM d’interprétation des données.',
    tags: ['Go', 'Microservices', 'LLM'],
  },
] as const;

/** Frequently asked questions, published as `FAQPage` structured data. */
export const FAQ: readonly FaqEntry[] = [
  {
    question: 'Comment démarrer ?',
    answer:
      'Vous réservez un créneau de trente minutes. On cadre le problème, puis je vous dis si je suis la bonne personne — y compris quand la réponse est non.',
  },
  {
    question: 'Quels sont les délais ?',
    answer:
      'Réponse sous un jour ouvré. Une mission de conseil démarre généralement en deux à quatre semaines.',
  },
  {
    question: 'Comment facturez-vous ?',
    answer:
      'Au forfait pour un périmètre défini, ou en régie pour un renfort. Le mode est choisi à la fin du cadrage.',
  },
  {
    question: 'Et à la fin de la mission ?',
    answer:
      'Vous conservez l’architecture, la documentation et les accès. Je forme vos équipes au run pendant la mission.',
  },
] as const;
