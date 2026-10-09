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
      'Choix d’architecture et de services',
    ],
  },
  {
    slug: 'cloud-native',
    title: 'Conception Cloud Native sur AWS',
    summary:
      'Les choix d’architecture et les pratiques qui évitent l’enfermement et gardent la plateforme opérable.',
    includes: [
      'Cadrage et choix d’architecture Cloud Native',
      'Bonnes pratiques : réversibilité, scalabilité, observabilité',
      'Accompagnement des équipes sur les décisions et les standards',
    ],
  },
  {
    slug: 'infogerance',
    title: 'Infogérance',
    summary: 'Supervision, incidents, mises à jour. Votre plateforme tourne, vous dormez.',
    includes: [
      'Exploitation de la plateforme au quotidien',
      'Supervision et gestion des incidents',
      'Mises à jour et maîtrise des coûts',
    ],
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

/** Frequently asked questions, published as `FAQPage` structured data. */
export const FAQ: readonly FaqEntry[] = [
  {
    question: 'Comment démarrer ?',
    answer:
      'Vous réservez un créneau de trente minutes. On cadre le problème, puis je vous dis si je suis la bonne personne, y compris quand la réponse est non.',
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
