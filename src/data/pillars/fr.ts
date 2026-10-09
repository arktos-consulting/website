/**
 * French content for the four pillar pages.
 *
 * Prose lives here rather than in the page templates so that a page renders
 * from a single component in both languages. Every factual claim comes from the
 * real background (CV, engagements): nothing is extrapolated.
 */
import type { PillarBundle } from "./types"

const fr: PillarBundle = {
  consulting: {
    slug: "conseil",
    title: "Audit & conseil AWS Kubernetes",
    description:
      "Conseil AWS et Kubernetes pour ETI, PME et startups : audit d’architecture, gouvernance multi-comptes et FinOps. Freelance à Lyon, en France et en Europe.",
    breadcrumb: "Conseil",
    hero: {
      eyebrow: "Conseil",
      title: "Conseil AWS & Kubernetes : auditer, concevoir,",
      accent: "puis vous rendre autonome.",
      lede: "J’interviens quand les décisions d’architecture doivent être tranchées et assumées. Neuf ans d’expérience, d’une poignée de services à des plateformes entières.",
    },
    cta: {
      primary: "Discuter de votre besoin",
      secondary: "Voir aussi la conception Cloud Native",
      secondaryHref: "/#prestations",
    },
    scope: {
      eyebrow: "Périmètre",
      title: "Ce que couvre",
      accent: "une mission de conseil.",
      lede: "Une mission commence par un périmètre écrit : ce qui est examiné, ce qui ne l’est pas, et ce que vous obtenez à la fin. Ces trois domaines sont ceux sur lesquels je suis le plus souvent appelé.",
    },
    domains: [
      {
        title: "Architecture & scalabilité",
        items: [
          "Conception ou revue d’architecture AWS",
          "Découpage en comptes et isolation",
          "Migration et chemins de réversibilité",
          "Objectifs de disponibilité et de reprise",
        ],
      },
      {
        title: "Sécurité & conformité",
        items: [
          "IAM, rôles fédérés et moindre privilège",
          "Gouvernance multi-comptes : Organizations, SCP",
          "Durcissement Kubernetes et exigences réglementaires",
          "Traçabilité des changements et auditabilité",
        ],
      },
      {
        title: "FinOps & exploitation",
        items: [
          "Analyse de la facture et postes de dérive",
          "Dimensionnement et autoscaling",
          "Standards d’exploitation et objectifs de service",
          "Plan d’action chiffré sur les coûts",
        ],
      },
    ],
    process: {
      eyebrow: "Déroulé",
      title: "Quatre étapes,",
      accent: "un périmètre écrit.",
      lede: "Une seule règle traverse ces quatre étapes : rien n’est construit avant que le coût et les arbitrages soient validés. Vous gardez la décision, et vous gardez ce qui a été produit.",
    },
    phases: [
      {
        step: "01",
        title: "Cadrage",
        detail:
          "Un échange sur votre objectif. Vous savez à la fin si un audit est utile, et ce qu’il couvrirait.",
        items: [
          "Objectif et contraintes écrits",
          "Critères de succès retenus",
          "Avis sur l’utilité d’un audit",
        ],
      },
      {
        step: "02",
        title: "Audit",
        detail:
          "Architecture, sécurité, coûts et pratiques d’exploitation, par ordre de priorité. Chaque constat est rattaché à son impact et à son effort de correction.",
        items: [
          "Constats classés par priorité et par impact",
          "Analyse de la facture et des postes de dérive",
          "Points de sécurité et de conformité relevés",
        ],
      },
      {
        step: "03",
        title: "Conception",
        detail:
          "Options, arbitrages et coût estimé. Vous validez avant toute construction, et la décision reste écrite.",
        items: [
          "Options comparées et chiffrées",
          "Schéma cible et plan de mise en œuvre",
          "Coût estimé validé avant construction",
        ],
      },
      {
        step: "04",
        title: "Mise en œuvre et passation",
        detail:
          "Implémentation, documentation et formation. Vous reprenez la main avec ce qui a été produit, pas avec une dette de connaissance.",
        items: [
          "Décisions implémentées sur la plateforme",
          "Documentation d’exploitation à jour",
          "Vos équipes formées au run",
        ],
      },
    ],
    proofHeading: {
      eyebrow: "Repères",
      title: "Des plateformes",
      accent: "qui ne sont pas des maquettes.",
      lede: "Ces chiffres viennent de missions réelles. Les cas clients en détaillent le contexte, la contrainte et le résultat.",
    },
    proofs: [
      {
        value: "~150",
        text: "microservices Azure/Kubernetes exploités, éditeur SaaS",
      },
    ],
    criteriaHeading: {
      eyebrow: "Critères",
      title: "Quand ce format",
      accent: "est le bon.",
      lede: "Ces critères disent ce pour quoi ce format est fait, et le dernier dit ce pour quoi il ne l’est pas. Mieux vaut le lire avant l’appel que le découvrir après.",
    },
    criteria: [
      {
        title: "Une décision d’architecture à trancher",
        body: "Un choix de services, de découpage en comptes ou de chemin de migration, avec des conséquences durables sur le coût et l’exploitabilité.",
      },
      {
        title: "Une plateforme qui coûte plus qu’elle ne devrait",
        body: "La facture a dérivé, ou personne ne sait dire quels postes la composent. L’analyse des coûts fait partie de l’audit.",
      },
      {
        title: "Une exécution pure, sans décision à prendre",
        body: "Ce n’est pas le bon format : je conçois et j’implémente, vous restez décideur. Je le dis au cadrage, y compris quand la réponse est non.",
      },
      {
        title: "Une plateforme neuve, ou à exploiter au quotidien",
        body: "La conception d’une plateforme complète et son exploitation quotidienne ont leurs propres formats, avec leurs propres pages.",
      },
    ],
    caseHighlight: {
      heading: {
        eyebrow: "Cas client",
        title: "La conformité",
        accent: "par l’outillage.",
      },
      caseId: "bpifrance",
      extract:
        "Une équipe de dix personnes livrait des solutions cloud à des clients internes. La gouvernance Kubernetes devait être renforcée, avec une exigence réglementaire sur la traçabilité des changements. J’ai conçu et développé l’outil de traçabilité des changements de cluster et son module de reporting, puis mené la R&D sur Knative pour évaluer la réversibilité vis-à-vis d’AWS, directives étatiques à l’appui. Les workflows CI/CD déploient et surveillent ces nouveaux services, et l’équipe a été formée à la pratique de traçabilité. L’exigence de conformité est couverte par un outillage réellement utilisé.",
    },
  },

  ai: {
    slug: "ia",
    title: "IA appliquée: agents LLM et automatisation",
    metaTitle: "IA appliquée : agents LLM en production",
    description:
      "IA appliquée pour ETI, PME et startups : agents LLM connectés à vos données, extraction documentaire, industrialisation MLOps. Freelance à Lyon.",
    breadcrumb: "IA appliquée",
    hero: {
      eyebrow: "IA appliquée",
      title: "IA appliquée : des agents qui travaillent sur",
      accent: "vos données, en production.",
      lede: "La plupart des projets d’IA s’arrêtent à la démonstration. Je m’occupe de ce qui vient après : raccorder le modèle à vos données, mesurer la qualité, maîtriser le coût, mettre en exploitation.",
    },
    cta: {
      primary: "Discuter d’un cas d’usage",
      secondary: "Voir aussi le conseil",
      secondaryHref: "/conseil/",
    },
    useCasesHeading: {
      eyebrow: "Cas d’usage",
      title: "Trois manières",
      accent: "de commencer.",
      lede: "Le premier cas est une porte d’entrée volontairement courte : un résultat vérifiable, sur un périmètre restreint, avant d’engager davantage.",
    },
    useCases: [
      {
        step: "01",
        title: "Exploiter vos archives documentaires",
        detail:
          "Vos documents existent, mais personne ne peut les interroger. Contrats, factures, dossiers clients, comptes rendus : une recherche qui répond en citant la source, au lieu de renvoyer une liste de fichiers.",
        items: [
          "Recherche en langage naturel dans vos documents",
          "Réponse avec citation de la source et de la page",
          "Extraction de champs vers vos outils existants",
          "Périmètre restreint, résultat vérifiable en quelques semaines",
        ],
      },
      {
        step: "02",
        title: "Automatiser un traitement répétitif",
        detail:
          "Un agent qui lit, classe, contrôle ou prépare ce que vos équipes font à la main. La valeur vient rarement du modèle seul : elle vient du raccordement propre à vos données et de la vérification du résultat.",
        items: [
          "Rapprochements et contrôles de cohérence",
          "Préparation de dossiers et de synthèses",
          "Classement et routage de pièces entrantes",
          "Journalisation pour auditer ce que l’agent a décidé",
        ],
      },
      {
        step: "03",
        title: "Industrialiser et maîtriser les coûts",
        detail:
          "La maquette fonctionne, la mise en production révèle les vrais problèmes : dérive de qualité, coût par appel imprévisible, absence de supervision. C’est là que la plupart des projets s’arrêtent.",
        items: [
          "Évaluation continue de la qualité des réponses",
          "Suivi du coût par appel et par utilisateur",
          "Supervision, alerting et journaux exploitables",
          "Choix raisonné entre modèle hébergé, API ou local",
        ],
      },
    ],
    cautionsHeading: {
      eyebrow: "Points de vigilance",
      title: "Trois décisions",
      accent: "à prendre tôt.",
      lede: "Ces trois décisions se prennent tôt. Prises tard, elles coûtent cher à corriger, souvent en reprenant tout le raccordement aux données.",
    },
    cautions: [
      {
        title: "Vos données ne sortent pas sans décision",
        body: "Le choix entre API externe, modèle hébergé dans votre cloud ou modèle local est un arbitrage, pas un défaut. Il se tranche selon la sensibilité des données et vos obligations.",
      },
      {
        title: "Un agent se mesure, il ne se croit pas sur parole",
        body: "Sans jeu d’évaluation, une régression passe inaperçue pendant des semaines. La mesure de qualité se met en place dès la première version, pas après.",
      },
      {
        title: "Le coût par appel se pilote",
        body: "Une IA non surveillée coûte cher en silence. Le suivi du coût par usage est un indicateur de production, au même titre que la latence.",
      },
    ],
    credentialsHeading: {
      eyebrow: "Expérience",
      title: "Ce n’est pas",
      accent: "un premier projet.",
      lede: "Je fais tourner de l’IA en production depuis 2018, et j’ai industrialisé une plateforme LLM d’éditeur.",
    },
    credentials: [
      {
        label: "Hartza Capital",
        detail:
          "Agents LLM d’interprétation de données de marché, en production depuis 2018.",
      },
      {
        label: "Yseop",
        detail:
          "Plateforme d’intelligence artificielle de type LLM SaaS, déployée sur AWS et en on-premise. Industrialisation de la chaîne MLOps et durcissement des environnements.",
      },
      {
        label: "Cloud Partners",
        detail:
          "Collectif membre du réseau de partenaires AWS, avec une offre dédiée AI/Machine Learning : SageMaker, MLOps, NLP, vision par ordinateur.",
      },
    ],
    criteriaHeading: {
      eyebrow: "Critères",
      title: "Quand ce format",
      accent: "est le bon.",
      lede: "Ces critères disent ce pour quoi ce format est fait, et le dernier dit ce pour quoi il ne l’est pas.",
    },
    criteria: [
      {
        title: "Un cas d’usage précis, avec un résultat vérifiable",
        body: "Une recherche documentaire qui cite ses sources, un traitement répétitif à supprimer de votre quotidien : un objectif qui se mesure avant d’engager la suite.",
      },
      {
        title: "Des données sensibles, ou mal rangées",
        body: "Le raccordement à vos documents et le choix de l’hébergement du modèle se décident selon leur sensibilité et vos obligations, pas par défaut.",
      },
      {
        title: "Une démonstration qui ne passe pas en production",
        body: "Qualité qui dérive, coût par appel imprévisible, supervision absente : c’est le point où je suis appelé le plus souvent.",
      },
      {
        title: "Une maquette destinée à impressionner",
        body: "Ce n’est pas le bon format : je livre des cas d’usage qui tournent et qui se mesurent, pas des démonstrations.",
      },
    ],
    caseHighlight: {
      heading: {
        eyebrow: "Cas client",
        title: "Une plateforme LLM",
        accent: "industrialisée.",
      },
      caseId: "yseop",
      extract:
        "Une équipe de cinq personnes construisait une plateforme SaaS d’IA déployée à la fois sur AWS et en on-premise. J’ai mis en place les architectures sécurisées sur AWS, EKS vanilla et déploiements Helm/Kustomize sous Terraform, puis industrialisé les workflows MLOps avec SageMaker et ArgoCD. Les pipelines CI/CD sont automatisés et l’infrastructure décrite en code, pour la reproductibilité et la traçabilité. Résultat : un meilleur usage des ressources SageMaker, une authentification et des rôles sécurisés dans AWS, et Terraform installé pour la première fois dans les projets cloud.",
    },
  },

  managedServices: {
    slug: "infogerance",
    title: "Infogérance AWS & Kubernetes EKS",
    description:
      "Infogérance AWS et Kubernetes pour ETI, PME et startups : clusters EKS exploités, supervision, incidents et maîtrise des coûts. Freelance à Lyon.",
    breadcrumb: "Infogérance",
    hero: {
      eyebrow: "Infogérance",
      title: "Infogérance AWS & Kubernetes EKS : j’exploite la plateforme,",
      accent: "vous faites le produit.",
      lede: "Vous gardez vos équipes produit, je prends en charge l’exploitation : supervision, mises à jour, incidents et coûts.",
    },
    cta: {
      primary: "Discuter du périmètre",
      secondary: "Voir aussi le conseil",
      secondaryHref: "/conseil/",
    },
    scope: {
      eyebrow: "Périmètre",
      title: "Ce que recouvre",
      accent: "l’exploitation déléguée.",
      lede: "L’exploitation déléguée couvre trois choses : faire tourner la plateforme, la surveiller, et expliquer la facture. Ce qui n’est pas couvert est écrit au contrat, avant de commencer.",
    },
    coverage: [
      {
        title: "Exploitation quotidienne",
        items: [
          "Clusters EKS et mises à jour",
          "Cycle de vie des images et rollbacks",
          "Secrets, certificats et accès",
          "Stockage persistant et cycle de vie des volumes",
        ],
      },
      {
        title: "Supervision & incidents",
        items: [
          "Métriques, journaux et tableaux de bord",
          "Alerting sans fatigue d’alerte",
          "Diagnostic et résolution des incidents",
          "Rétention des journaux et historique interrogeable sur plusieurs mois",
        ],
      },
      {
        title: "Fiabilité & coûts",
        items: [
          "Objectifs de service définis avec vous",
          "Dimensionnement et autoscaling",
          "Suivi de la facture AWS",
          "Revue de capacité avant vos pics de charge",
        ],
      },
    ],
    commitmentsHeading: {
      eyebrow: "Engagements",
      title: "Cadre de",
      accent: "l’intervention.",
      lede: "Ces engagements sont le cadre minimum. Les niveaux exacts, dont la prise en charge d’un incident, sont fixés au contrat.",
    },
    commitments: [
      {
        label: "Réponse à une demande",
        value: "1 jour ouvré",
        note: "Vos demandes courantes : évolution, question d’exploitation, arbitrage à rendre.",
      },
      {
        label: "Prise en charge d’un incident",
        value: "Selon contrat",
        note: "Le niveau dépend de la criticité et des horaires couverts, fixés au contrat.",
      },
      {
        label: "Fenêtre de maintenance",
        value: "Planifiée avec vous",
        note: "Annoncée à l’avance, et choisie avec vos contraintes de production.",
      },
      {
        label: "Engagement",
        value: "Défini au contrat",
        note: "Ce document fixe le périmètre, les objectifs de service et ce qui reste chez vous.",
      },
    ],
    hygieneHeading: {
      eyebrow: "Pourquoi moi",
      title: "Exploiter, c’est connaître",
      accent: "les décisions d’architecture.",
      lede: "Trois raisons de confier l’exploitation à la personne qui a conçu l’architecture, plutôt que de séparer les deux.",
    },
    hygiene: [
      {
        step: "01",
        title: "Une seule personne sur le pont",
        detail:
          "Pas de rotation ni de passation entre un architecte et un exploitant qui ne se sont jamais parlé. La personne qui traite l’incident est celle qui a dimensionné la plateforme.",
        items: [],
      },
      {
        step: "02",
        title: "Le code et l’infrastructure ensemble",
        detail:
          "Je développe aussi : un incident venu du code ne reste pas bloqué à la frontière. La cause se corrige, plutôt que d’être compensée côté infrastructure.",
        items: [],
      },
      {
        step: "03",
        title: "Un coût qui reste explicable",
        detail:
          "La facture AWS est suivie et commentée, pas seulement payée. Chaque poste qui dérive a une explication et une action associées.",
        items: [],
      },
    ],
    criteriaHeading: {
      eyebrow: "Critères",
      title: "Quand ce format",
      accent: "est le bon.",
      lede: "Ces critères disent ce pour quoi ce format est fait, et le dernier dit ce pour quoi il ne l’est pas.",
    },
    criteria: [
      {
        title: "Une plateforme en production, sans équipe d’exploitation",
        body: "Les clusters portent votre produit et personne n’en a la charge au quotidien.",
      },
      {
        title: "Vous voulez garder la main sur les décisions",
        body: "Le périmètre, les objectifs de service et les fenêtres de maintenance se définissent avec vous, pas à votre place.",
      },
      {
        title: "Une facture qui doit rester explicable",
        body: "Le suivi de la facture AWS fait partie de l’exploitation : elle est commentée, pas seulement payée.",
      },
      {
        title: "Décider de l’architecture, ou reprendre une plateforme",
        body: "L’audit et la conception ont leur propre format, avec leur propre page.",
      },
    ],
    caseHighlight: {
      heading: {
        eyebrow: "Cas client",
        title: "Le parc Kubernetes",
        accent: "d’un opérateur national.",
      },
      caseId: "sncf",
      extract:
        "Une équipe de plus de dix ingénieurs avait la charge de l’exploitation et de l’évolution du parc Kubernetes de la SNCF et de ses filiales, sur cloud privé et public. J’ai assuré le lead technique du projet de cloud privé : des microservices Go reproduisant les briques AWS, Fargate, EC2, S3 et CloudWatch, sur un socle Kubernetes avec ClusterAPI, KubeVirt et ArgoCD, supervisé par Mimir, FluentBit et OpenTelemetry. À cette échelle, l’exploitation impose ses propres règles de capacité, de supervision et de cycle de vie des clusters.",
    },
  },
}

export default fr
