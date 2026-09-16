/**
 * Données de contenu du site.
 *
 * Tout ce qui est affiché provient de ce fichier, afin que les pages, les
 * données structurées et les métadonnées restent synchronisées. Les faits sont
 * issus du parcours réel (CV, missions) : rien n'est extrapolé ici.
 */

/** Un service proposé, présenté en carte et déclaré en `OfferCatalog`. */
export interface Service {
  /** Identifiant stable, utilisé comme ancre et comme clé de liste. */
  slug: string;
  /** Titre commercial du service. */
  title: string;
  /** Résumé court affiché en carte. */
  summary: string;
  /** Résultat concret attendu par le client. */
  outcome: string;
  /** Prestations détaillées incluses dans l'offre. */
  includes: readonly string[];
  /** Lien vers la page pilier dédiée, si elle existe. */
  href?: string;
}

/** Une mission passée, servant de preuve technique. */
export interface Mission {
  /** Secteur ou nature du client, tel qu'il peut être rendu public. */
  clientType: string;
  /** Nom du client lorsque la référence est publique. */
  client?: string;
  /** Années de la mission. */
  period: string;
  /** Intitulé de la mission, orienté résultat. */
  title: string;
  /** Détail technique de ce qui a été réalisé. */
  description: string;
  /** Technologies et pratiques mobilisées. */
  tags: readonly string[];
}

/** Un argument de réassurance, présenté en grille. */
export interface Differentiator {
  /** Intitulé de l'argument. */
  title: string;
  /** Explication destinée à un décideur technique. */
  body: string;
}

/** Une question fréquente, publiée en `FAQPage`. */
export interface FaqEntry {
  /** Question telle qu'un prospect la poserait. */
  question: string;
  /** Réponse directe, en une à trois phrases. */
  answer: string;
}

/** Les prestations vendues, dans l'ordre d'affichage. */
export const SERVICES: readonly Service[] = [
  {
    slug: 'conseil',
    title: 'Conseil & architecture AWS',
    summary:
      "Audit, cadrage et conception de votre plateforme cloud. Vous repartez avec des décisions argumentées et des équipes autonomes.",
    outcome: 'Une architecture justifiée, chiffrée, et reprise en main par vos équipes.',
    includes: [
      'Audit d’architecture, de sécurité et de coûts',
      'Conception multi-comptes, IAM et gouvernance réseau',
      'Stratégie FinOps et maîtrise de la facture',
      'Documentation et transfert de compétences',
    ],
    href: '/conseil/',
  },
  {
    slug: 'infogerance',
    title: 'Infogérance & exploitation Kubernetes',
    summary:
      "Je prends en charge l'exploitation de votre plateforme EKS : supervision, mises à jour, gestion des incidents et maîtrise des coûts.",
    outcome: 'Une plateforme supervisée, à jour et dont le coût reste sous contrôle.',
    includes: [
      'Exploitation de clusters EKS et charges de travail',
      'Supervision, alerting et gestion des incidents',
      'GitOps, mises à jour et durcissement continu',
      'Revue de coûts et optimisation FinOps',
    ],
    href: '/infogerance/',
  },
  {
    slug: 'engineering',
    title: 'Ingénierie logicielle Go & Python',
    summary:
      'Développement de services backend, d’APIs et de pipelines de données, dans la même main que l’infrastructure qui les porte.',
    outcome: 'Des services en production, dont l’infrastructure et le code sont cohérents.',
    includes: [
      'Microservices et APIs en Go',
      'Pipelines de données et traitements Python',
      'Industrialisation CI/CD et GitOps',
      'Observabilité des services livrés',
    ],
  },
  {
    slug: 'renfort',
    title: 'Renfort technique & CTO externalisé',
    summary:
      "Renfort sur un besoin précis, ou appui à un CTO qui doit structurer, stabiliser puis scaler sa plateforme.",
    outcome: 'Un renfort senior opérationnel rapidement, sans phase d’apprentissage.',
    includes: [
      'Renfort de courte ou longue durée',
      'Cadrage technique et arbitrages d’architecture',
      'Structuration des pratiques d’exploitation',
      'Montée en compétence des équipes internes',
    ],
  },
] as const;

/** Les arguments de réassurance, en réponse aux travers habituels des ESN. */
export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    title: 'Vous parlez à celui qui construit',
    body: "Pas d'avant-vente, pas de chef de projet interposé, pas de sous-traitance. L'audit que vous achetez et l'architecture que vous recevez sont produites par la personne qui vous parle.",
  },
  {
    title: 'Je conteste la demande quand elle dessert l’objectif',
    body: "Une demande décrit souvent une solution, pas le problème. Quand une approche moins coûteuse obtient le même résultat, je le dis, même si cela réduit la mission.",
  },
  {
    title: 'Des équipes autonomes à la fin de la mission',
    body: "Je documente ce que je fais et je forme vos équipes au run. Une mission réussie se termine sans que vous ayez besoin de la prolonger.",
  },
  {
    title: 'Un périmètre explicite',
    body: "Ce qui est couvert, ce qui ne l'est pas, et à quel délai je réponds : c'est écrit avant de commencer. Un engagement flou se retourne toujours contre le projet.",
  },
] as const;

/** Missions publiques, mobilisables comme références. */
export const MISSIONS: readonly Mission[] = [
  {
    clientType: 'Organisme financier public',
    client: 'Bpifrance',
    period: '2024 — 2025',
    title: 'Traçabilité obligatoire des changements sur Kubernetes',
    description:
      "Dans une équipe de dix personnes, création d'un outil de traçabilité des modifications de cluster — une exigence réglementaire du secteur financier — avec le reporting associé. Participation à la R&D sur Knative et à l'atelier de réversibilité vis-à-vis d'AWS.",
    tags: ['Kubernetes', 'Gouvernance', 'Conformité', 'Knative'],
  },
  {
    clientType: 'Éditeur logiciel, plateforme LLM SaaS',
    client: 'Yseop',
    period: '2023 — 2024',
    title: 'Industrialisation MLOps sur AWS et on-premise',
    description:
      "Sur une plateforme d'intelligence artificielle déployée à la fois sur AWS et en on-premise : durcissement des environnements, application des meilleures pratiques Kubernetes, et suppression des frictions de la chaîne MLOps. Transfert des pratiques SRE aux équipes.",
    tags: ['AWS', 'Kubernetes', 'SRE', 'MLOps', 'FinOps'],
  },
  {
    clientType: 'Opérateur ferroviaire national',
    client: 'SNCF',
    period: '2022 — 2023',
    title: 'Services managés sur un cloud privé, pour un parc de 300+ clusters',
    description:
      "Conception et direction de la construction de services de type Fargate, RDS et Secret Manager, utilisables par les équipes responsables du parc de plus de 300 clusters Kubernetes du groupe. Contributions open source sur les briques produites.",
    tags: ['Kubernetes', 'Cloud privé', 'Open source', 'Plateforme'],
  },
  {
    clientType: 'Éditeur SaaS, 800+ microservices',
    client: 'Seiitra',
    period: '2021 — 2022',
    title: 'Sécurisation d’une plateforme Azure/Kubernetes et plan FinOps',
    description:
      "Restructuration des environnements Azure et Kubernetes pour corriger des lacunes de sécurité et de scalabilité sur plus de 800 microservices. Mise en place d'un plan d'action FinOps et définition des standards d'exploitation réutilisables en SaaS comme en on-premise.",
    tags: ['Azure', 'Kubernetes', 'FinOps', 'Standards'],
  },
  {
    clientType: 'Négociant industriel, distribution B2B',
    client: 'Descours & Cabaud',
    period: '2020 — 2021',
    title: 'Bascule du commerce physique vers la vente en ligne',
    description:
      "Accompagnement d'une réorganisation interne et commerciale accélérée par la crise sanitaire : définition des normes et directives du projet, puis sensibilisation des développeurs aux pratiques DevOps et des équipes de run au SRE.",
    tags: ['DevOps', 'Transformation', 'SRE', 'CI/CD'],
  },
  {
    clientType: 'Plateforme de santé, données sensibles',
    client: 'Doctolib',
    period: '2019',
    title: 'Migration d’un bare metal vers Kubernetes sur AWS',
    description:
      "Remplacement d'une infrastructure bare metal par un Kubernetes sur AWS (Kops), en collaboration avec une équipe DevOps de six personnes. Mise en place des directives de sécurité liées aux données de santé nécessaires à la conformité légale.",
    tags: ['AWS', 'Kubernetes', 'Données de santé', 'Sécurité'],
  },
  {
    clientType: 'Groupe audiovisuel',
    client: 'Canal+',
    period: '2019',
    title: 'Remplacement des pipelines CI/CD historiques',
    description:
      "Substitution des pipelines gérés par Jenkins par un système Kubernetes optimisé pour l'éphémérité des ressources, après évaluation de TektonCD, DroneIO et JenkinsX serverless. Préparation de la migration des charges de travail avec les équipes.",
    tags: ['CI/CD', 'Kubernetes', 'JenkinsX', 'TektonCD'],
  },
  {
    clientType: 'Initiatives personnelles, en production',
    client: 'Hartza Capital',
    period: 'depuis 2018',
    title: 'Plateforme d’analyse continue des marchés financiers',
    description:
      "Conception et exploitation d'une architecture microservices de plus de 90 services Go, complétée de serverless AWS (Lambda, Fargate, RDS) et d'agents LLM d'interprétation des données de marché.",
    tags: ['Go', 'Microservices', 'Serverless', 'LLM'],
  },
] as const;

/** Questions fréquentes, publiées en données structurées `FAQPage`. */
export const FAQ: readonly FaqEntry[] = [
  {
    question: 'Comment se déroule une première prise de contact ?',
    answer:
      "Vous réservez un créneau de trente minutes. On cadre le problème et l'objectif, puis je vous dis si je suis la bonne personne — y compris quand la réponse est non. Aucun rendez-vous commercial intermédiaire.",
  },
  {
    question: 'Quels sont les délais d’intervention ?',
    answer:
      "Une réponse à toute demande sous un jour ouvré. Pour une mission de conseil, le démarrage se situe généralement entre deux et quatre semaines selon la disponibilité en cours, et une intervention urgente sur incident est examinée au cas par cas.",
  },
  {
    question: 'Travaillez-vous à distance ou sur site ?',
    answer:
      "Les deux. Je suis basé à Lyon et travaille en remote avec des clients partout en France et en Europe. Les phases de cadrage et d'audit gagnent à se faire sur place : je m'y déplace.",
  },
  {
    question: 'Quelle est la taille de mission minimale ?',
    answer:
      "Un audit d'architecture ciblé peut tenir en quelques jours. Les missions de conseil se comptent plutôt en semaines, et l'infogérance est un engagement récurrent dont la durée se définit ensemble.",
  },
  {
    question: 'Comment facturez-vous ?',
    answer:
      "Au forfait pour un périmètre défini, ou en régie pour un renfort dont la durée est difficile à fixer au départ. Le mode est choisi à la fin du cadrage, une fois le périmètre clair.",
  },
  {
    question: 'Y a-t-il une astreinte en infogérance ?',
    answer:
      "Les modalités d'astreinte et le niveau de couverture se définissent mission par mission, en fonction de la criticité de votre plateforme. C'est un point du contrat, pas une option activée après coup.",
  },
  {
    question: 'Que se passe-t-il à la fin de la mission ?',
    answer:
      "Vous conservez l'architecture, la documentation et les accès. Je forme vos équipes au run pendant la mission, de sorte que la passation soit une formalité et non un projet annexe.",
  },
  {
    question: 'Pouvez-vous travailler avec nos équipes existantes ?',
    answer:
      "C'est le cas le plus fréquent. J'ai travaillé dans des équipes allant de six à plus de dix personnes, en tant que renfort, référent technique ou lead selon le besoin.",
  },
] as const;

/** Logos clients affichés dans le bandeau de confiance. */
export const CLIENT_LOGOS = [
  { name: 'Bpifrance', src: '/images/bpifrance.png' },
  { name: 'SNCF', src: '/images/sncf.png' },
  { name: 'Doctolib', src: '/images/doctolib.png' },
  { name: 'Canal+', src: '/images/canalplus.png' },
  { name: 'Yseop', src: '/images/yseop.png' },
  { name: 'Descours & Cabaud', src: '/images/descours_cabaud.png' },
  { name: 'Seiitra', src: '/images/seiitra.jpg' },
] as const;
