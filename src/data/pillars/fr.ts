/**
 * French content for the four pillar pages.
 *
 * Prose lives here rather than in the page templates so that a page renders
 * from a single component in both languages. Every factual claim comes from the
 * real background (CV, engagements): nothing is extrapolated.
 */
import type { PillarBundle } from './types';

const fr: PillarBundle = {
  consulting: {
    slug: 'conseil',
    title: 'Audit & conseil AWS Kubernetes',
    description:
      'Conseil AWS et Kubernetes : audit d’architecture, gouvernance multi-comptes et FinOps. Freelance à Lyon, en France et en Europe.',
    breadcrumb: 'Conseil',
    hero: {
      eyebrow: 'Conseil',
      title: 'Auditer, concevoir, puis',
      accent: 'vous rendre autonome.',
      lede:
        'J’interviens quand les décisions d’architecture doivent être tranchées et assumées. Neuf ans d’expérience, de quelques services à plus de 800 microservices.',
    },
    cta: {
      primary: 'Discuter de votre besoin',
      secondary: 'Voir aussi le cloud souverain',
      secondaryHref: '/cloud-souverain/',
    },
    scope: {
      eyebrow: 'Périmètre',
      title: 'Ce que couvre',
      accent: 'une mission de conseil.',
    },
    domains: [
      {
        title: 'Architecture & scalabilité',
        items: [
          'Conception ou revue d’architecture AWS',
          'Découpage en comptes et isolation',
          'Migration et chemins de réversibilité',
        ],
      },
      {
        title: 'Sécurité & conformité',
        items: [
          'IAM, rôles fédérés et moindre privilège',
          'Gouvernance multi-comptes : Organizations, SCP',
          'Durcissement Kubernetes et exigences réglementaires',
        ],
      },
      {
        title: 'FinOps & exploitation',
        items: [
          'Analyse de la facture et postes de dérive',
          'Dimensionnement et autoscaling',
          'Standards d’exploitation et objectifs de service',
        ],
      },
    ],
    process: {
      eyebrow: 'Déroulé',
      title: 'Quatre étapes,',
      accent: 'un périmètre écrit.',
    },
    phases: [
      {
        step: '01',
        title: 'Cadrage',
        detail: 'Un échange sur votre objectif. Vous savez à la fin si un audit est utile.',
        items: [],
      },
      {
        step: '02',
        title: 'Audit',
        detail: 'Architecture, sécurité, coûts et pratiques d’exploitation, par ordre de priorité.',
        items: [],
      },
      {
        step: '03',
        title: 'Conception',
        detail: 'Options, arbitrages et coût estimé. Vous validez avant toute construction.',
        items: [],
      },
      {
        step: '04',
        title: 'Mise en œuvre et passation',
        detail: 'Implémentation, documentation et formation. Vous reprenez la main.',
        items: [],
      },
    ],
    proofHeading: {
      eyebrow: 'Repères',
      title: 'Des plateformes',
      accent: 'qui ne sont pas des maquettes.',
    },
    proofs: [
      { value: '300+', text: 'clusters Kubernetes, parc d’un opérateur ferroviaire national' },
      { value: '800+', text: 'microservices Azure/Kubernetes, éditeur SaaS' },
      { value: '90+', text: 'microservices Go, ma plateforme Hartza Capital' },
    ],
  },

  sovereignCloud: {
    slug: 'cloud-souverain',
    title: 'Cloud souverain — concevoir et exploiter',
    description:
      'Cloud souverain : conception et construction de services managés internes, chemins de réversibilité, exploitation d’un cloud privé Kubernetes. Freelance senior basé à Lyon.',
    breadcrumb: 'Cloud souverain',
    hero: {
      eyebrow: 'Cloud souverain',
      title: 'Concevoir, construire et exploiter',
      accent: 'votre cloud interne.',
      lede:
        'Du service managé interne à la sortie d’un hyperscaler : je conçois les briques, je dirige leur construction, puis je les exploite. Sur un cloud privé Kubernetes, avec les mêmes standards qu’un grand groupe.',
    },
    cta: {
      primary: 'Discuter de votre projet',
      secondary: 'Voir aussi le conseil',
      secondaryHref: '/conseil/',
    },
    approach: {
      eyebrow: 'Approche',
      title: 'Trois temps,',
      accent: 'un seul interlocuteur.',
    },
    phases: [
      {
        step: '01',
        title: 'Concevoir',
        detail:
          'Définir les services que votre cloud interne doit offrir, et à quelles équipes. Choix des briques, modèle de responsabilité, isolation des environnements, politique d’accès.',
        items: [
          'Cartographie des besoins et des services à exposer',
          'Modèle de responsabilité entre la plateforme et les équipes',
          'Isolation réseau, cloisonnement des comptes et des projets',
          'Dossier d’architecture et décisions documentées',
        ],
      },
      {
        step: '02',
        title: 'Construire',
        detail:
          'Implémenter les services managés internes et industrialiser leur mise à disposition. C’est le travail réalisé sur le cloud privé d’un opérateur ferroviaire national : des services équivalents à Fargate, RDS ou Secret Manager, utilisables en libre-service.',
        items: [
          'Services conteneurisés auto-servis pour les équipes produit',
          'Bases de données managées et coffre de secrets',
          'Industrialisation complète en IaC, GitOps et CI/CD',
          'Montée en compétence des équipes qui reprennent l’exploitation',
        ],
      },
      {
        step: '03',
        title: 'Exploiter',
        detail:
          'Faire tourner la plateforme dans la durée : supervision, mises à jour, gestion des incidents et maîtrise des coûts. Une plateforme interne se dégrade vite quand personne n’en a la charge explicite.',
        items: [
          'Supervision, alerting et tableaux de bord exploitables',
          'Gestion des versions, des certificats et des accès',
          'Gestion des incidents et retours d’expérience écrits',
          'Suivi des coûts et optimisation continue',
        ],
      },
    ],
    triggersHeading: {
      eyebrow: 'Quand m’appeler',
      title: 'Trois situations',
      accent: 'où j’interviens.',
    },
    triggers: [
      {
        title: 'Vous construisez un cloud interne',
        body: 'Plusieurs équipes redéploient les mêmes briques. Il faut des services partagés, avec un modèle de responsabilité clair.',
      },
      {
        title: 'Vous devez réduire une dépendance',
        body: 'Réversibilité, directives internes ou exigences réglementaires : la sortie d’un hyperscaler se prépare avant d’être subie.',
      },
      {
        title: 'Vous héritez d’une plateforme',
        body: 'Le cloud privé existe déjà mais personne ne sait qui l’exploite. Reprise en main, documentation, puis transfert de charge.',
      },
    ],
    caseHeading: {
      eyebrow: 'Référence',
      title: 'Le cloud privé',
      accent: 'd’un opérateur ferroviaire national.',
    },
    caseParagraphs: [
      'Au sein de l’équipe responsable d’un parc de plus de 300 clusters Kubernetes, j’ai participé à l’initiative de cloud privé du groupe, avec la responsabilité de concevoir et de diriger la construction des services managés : conteneurs auto-servis, bases de données, coffre de secrets.',
      'Ces briques ont ensuite alimenté des contributions open source et des usages internes inédits pour le groupe. Le travail comprenait autant la conception technique que la coordination des équipes qui allaient exploiter la plateforme.',
    ],
    caseTags: [
      'Kubernetes',
      'Cloud privé',
      'Services managés',
      'Open source',
      'Plateforme interne',
    ],
  },

  ai: {
    slug: 'ia',
    title: 'IA appliquée — agents LLM et automatisation',
    description:
      'IA appliquée en entreprise : agents LLM connectés à vos données, extraction documentaire, recherche dans vos archives, industrialisation MLOps et maîtrise des coûts. Freelance à Lyon.',
    breadcrumb: 'IA appliquée',
    hero: {
      eyebrow: 'IA appliquée',
      title: 'Des agents qui travaillent sur',
      accent: 'vos données, en production.',
      lede:
        'La plupart des projets d’IA s’arrêtent à la démonstration. Je m’occupe de ce qui vient après : raccorder le modèle à vos données, mesurer la qualité, maîtriser le coût, mettre en exploitation.',
    },
    cta: {
      primary: 'Discuter d’un cas d’usage',
      secondary: 'Voir aussi le conseil',
      secondaryHref: '/conseil/',
    },
    useCasesHeading: {
      eyebrow: 'Cas d’usage',
      title: 'Trois manières',
      accent: 'de commencer.',
      lede:
        'Le premier cas est une porte d’entrée volontairement courte : un résultat vérifiable, sur un périmètre restreint, avant d’engager davantage.',
    },
    useCases: [
      {
        step: '01',
        title: 'Exploiter vos archives documentaires',
        detail:
          'Vos documents existent, mais personne ne peut les interroger. Contrats, factures, dossiers clients, comptes rendus : une recherche qui répond en citant la source, au lieu de renvoyer une liste de fichiers.',
        items: [
          'Recherche en langage naturel dans vos documents',
          'Réponse avec citation de la source et de la page',
          'Extraction de champs vers vos outils existants',
          'Périmètre restreint, résultat vérifiable en quelques semaines',
        ],
      },
      {
        step: '02',
        title: 'Automatiser un traitement répétitif',
        detail:
          'Un agent qui lit, classe, contrôle ou prépare ce que vos équipes font à la main. La valeur vient rarement du modèle seul : elle vient du raccordement propre à vos données et de la vérification du résultat.',
        items: [
          'Rapprochements et contrôles de cohérence',
          'Préparation de dossiers et de synthèses',
          'Classement et routage de pièces entrantes',
          'Journalisation pour auditer ce que l’agent a décidé',
        ],
      },
      {
        step: '03',
        title: 'Industrialiser et maîtriser les coûts',
        detail:
          'La maquette fonctionne, la mise en production révèle les vrais problèmes : dérive de qualité, coût par appel imprévisible, absence de supervision. C’est là que la plupart des projets s’arrêtent.',
        items: [
          'Évaluation continue de la qualité des réponses',
          'Suivi du coût par appel et par utilisateur',
          'Supervision, alerting et journaux exploitables',
          'Choix raisonné entre modèle hébergé, API ou local',
        ],
      },
    ],
    cautionsHeading: {
      eyebrow: 'Points de vigilance',
      title: 'Trois décisions',
      accent: 'à prendre tôt.',
    },
    cautions: [
      {
        title: 'Vos données ne sortent pas sans décision',
        body: 'Le choix entre API externe, modèle hébergé dans votre cloud ou modèle local est un arbitrage, pas un défaut. Il se tranche selon la sensibilité des données et vos obligations.',
      },
      {
        title: 'Un agent se mesure, il ne se croit pas sur parole',
        body: 'Sans jeu d’évaluation, une régression passe inaperçue pendant des semaines. La mesure de qualité se met en place dès la première version, pas après.',
      },
      {
        title: 'Le coût par appel se pilote',
        body: 'Une IA non surveillée coûte cher en silence. Le suivi du coût par usage est un indicateur de production, au même titre que la latence.',
      },
    ],
    credentialsHeading: {
      eyebrow: 'Expérience',
      title: 'Ce n’est pas',
      accent: 'un premier projet.',
      lede:
        'Je fais tourner de l’IA en production depuis 2018, et j’ai industrialisé une plateforme LLM d’éditeur.',
    },
    credentials: [
      {
        label: 'Hartza Capital',
        detail:
          'Agents LLM d’interprétation de données de marché, en production depuis 2018, sur une architecture de plus de 90 microservices Go.',
      },
      {
        label: 'Yseop',
        detail:
          'Plateforme d’intelligence artificielle de type LLM SaaS, déployée sur AWS et en on-premise. Industrialisation de la chaîne MLOps et durcissement des environnements.',
      },
      {
        label: 'Cloud Partners',
        detail:
          'Collectif membre du réseau de partenaires AWS, avec une offre dédiée AI/Machine Learning : SageMaker, MLOps, NLP, vision par ordinateur.',
      },
    ],
  },

  managedServices: {
    slug: 'infogerance',
    title: 'Infogérance AWS & Kubernetes EKS',
    description:
      'Infogérance AWS et Kubernetes : exploitation de clusters EKS, supervision, mises à jour et maîtrise des coûts. Freelance senior à Lyon, en France et en Europe.',
    breadcrumb: 'Infogérance',
    hero: {
      eyebrow: 'Infogérance',
      title: 'J’exploite la plateforme',
      accent: 'que vous ne voulez plus porter seul.',
      lede:
        'Vous gardez vos équipes produit, je prends en charge l’exploitation : supervision, mises à jour, incidents et coûts.',
    },
    cta: {
      primary: 'Discuter du périmètre',
      secondary: 'Voir aussi le conseil',
      secondaryHref: '/conseil/',
    },
    scope: {
      eyebrow: 'Périmètre',
      title: 'Ce que recouvre',
      accent: 'l’exploitation déléguée.',
    },
    coverage: [
      {
        title: 'Exploitation quotidienne',
        items: [
          'Clusters EKS et mises à jour',
          'Cycle de vie des images et rollbacks',
          'Secrets, certificats et accès',
        ],
      },
      {
        title: 'Supervision & incidents',
        items: [
          'Métriques, journaux et tableaux de bord',
          'Alerting sans fatigue d’alerte',
          'Diagnostic et résolution des incidents',
        ],
      },
      {
        title: 'Fiabilité & coûts',
        items: [
          'Objectifs de service définis avec vous',
          'Dimensionnement et autoscaling',
          'Suivi de la facture AWS',
        ],
      },
    ],
    commitmentsHeading: {
      eyebrow: 'Engagements',
      title: 'Cadre de',
      accent: 'l’intervention.',
    },
    commitments: [
      { label: 'Réponse à une demande', value: '1 jour ouvré' },
      { label: 'Prise en charge d’un incident', value: 'Selon contrat' },
      { label: 'Fenêtre de maintenance', value: 'Planifiée avec vous' },
      { label: 'Engagement', value: 'Défini au contrat' },
    ],
    hygieneHeading: {
      eyebrow: 'Pourquoi moi',
      title: 'Exploiter, c’est connaître',
      accent: 'les décisions d’architecture.',
    },
    hygiene: [
      {
        step: '01',
        title: 'Une seule personne sur le pont',
        detail:
          'Pas de rotation ni de passation entre un architecte et un exploitant qui ne se sont jamais parlé.',
        items: [],
      },
      {
        step: '02',
        title: 'Le code et l’infrastructure ensemble',
        detail:
          'Je développe aussi : un incident venu du code ne reste pas bloqué à la frontière.',
        items: [],
      },
      {
        step: '03',
        title: 'Un coût qui reste explicable',
        detail: 'La facture AWS est suivie et commentée, pas seulement payée.',
        items: [],
      },
    ],
  },
};

export default fr;
