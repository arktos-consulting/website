/**
 * French case study content.
 *
 * Every factual element comes from the published record (CV, references page,
 * pillar pages): nothing is extrapolated. Client names are kept, as they already
 * are on the references page, with the client's agreement.
 */
import type { CaseStudyBundle } from "./types"

const fr: CaseStudyBundle = {
  title: "Cas clients AWS, Kubernetes et DevOps",
  description:
    "Huit missions d’infrastructure racontées en détail : contexte et contrainte, ce qui a été livré, résultat. Bpifrance, SNCF, Yseop, Seiitra, Doctolib, Canal+.",
  breadcrumb: "Cas clients",
  hero: {
    title: "Une mission,",
    accent: "racontée en entier.",
    lede: "Le contexte, la contrainte et ce qui a été livré. Ce qui permet de juger un travail d’infrastructure, c’est le détail, pas le logo.",
  },
  cases: [
    {
      id: "hartza-capital",
      slug: "plateforme-trading-algorithmique-hartza-capital",
      client: "Hartza Capital",
      clientType: "Ma propre plateforme, en production",
      period: "depuis 2018",
      title:
        "Automatisation des arbitrages de risque sur les marchés financiers",
      summary:
        "Une plateforme AWS qui ingère et analyse en continu les données de marché, pour automatiser les arbitrages de risque sur cinq zones géographiques.",
      stack: [
        "AWS serverless",
        "Lambda, Step Functions, API Gateway",
        "S3, Kinesis, AWS Glue",
        "Aurora DSQL, DynamoDB",
        "Terraform, CloudFormation",
        "Scaleway",
        "Kubernetes, Kafka",
        "Go",
      ],
      context: [
        "Ce véhicule d’investissement automatise ses arbitrages de risque sur les marchés financiers (Europe, Amérique du Nord, Chine, Japon, Australie), en s’appuyant sur une plateforme AWS qui ingère et analyse en continu données de marché, cotations, ratios financiers et risques étatiques.",
      ],
      delivered: [
        "Conception d’une architecture serverless AWS (Lambda, Step Functions, API Gateway), pour orchestrer les workflows d’arbitrage et d’analyse.",
        "Développement et implémentation de stratégies d’arbitrage de risques financiers et de gestion de portefeuille, intégrant des algorithmes de scoring et de prédiction.",
        "Ingestion et traitement continu de données financières (news, cotations, ratios, risques étatiques) via S3, Kinesis et AWS Glue.",
        "Mise en place de modèles de mesure et de contrôle des risques (VaR, stress testing), et de tableaux de bord financiers pour le pilotage et le suivi de la performance.",
        "Conception et optimisation de bases de données (Aurora DSQL, DynamoDB), pour garantir scalabilité et fiabilité.",
        "Infrastructure as Code (Terraform, CloudFormation), pour assurer reproductibilité, traçabilité et conformité réglementaire.",
        "Conception d’une application desktop (Linux, macOS, Windows), pour la gestion du portefeuille.",
        "Historique : plateforme hébergée chez Scaleway, cinq ans de Kubernetes et de Kafka.",
      ],
      outcome: [
        "La plateforme tourne en production depuis 2018.",
        "Elle sert de référence technique aux missions menées chez les clients.",
      ],
    },
    {
      id: "bpifrance",
      slug: "tracabilite-changements-kubernetes-bpifrance",
      client: "Bpifrance",
      clientType: "Organisme financier public",
      period: "2024-2025",
      title:
        "Traçabilité réglementaire des changements Kubernetes et réversibilité AWS",
      summary:
        "Un outil de traçabilité des changements Kubernetes et son reporting, la R&D sur Knative pour la réversibilité vis-à-vis d’AWS, et un appui récurrent de l’équipe sur AWS.",
      stack: [
        "Kubernetes",
        "Knative",
        "Helm",
        "CI/CD (Jenkins)",
        "Datadog",
        "Python/Bash",
        "Go",
        "Conformité",
        "Réversibilité AWS",
      ],
      context: [
        "Intégré à une équipe de dix personnes en charge du delivery de solutions cloud pour des clients internes, j’ai été mandaté pour renforcer la gouvernance Kubernetes et explorer de nouveaux services serverless.",
      ],
      delivered: [
        "Conception et développement d’un outil de traçabilité des changements sur Kubernetes (conformité réglementaire), et de son module de reporting.",
        "R&D et mise en place de Knative, pour évaluer la réversibilité vis-à-vis d’AWS et répondre aux directives étatiques.",
        "Intégration de workflows CI/CD pour déployer et superviser ces nouveaux services.",
        "Documentation et formation de l’équipe aux bonnes pratiques de traçabilité et d’exploitation du suivi des changements.",
      ],
      outcome: [
        "L’exigence de conformité est couverte par un outil exploitable, reporting compris.",
        "L’équipe est autonome sur la traçabilité et le suivi des changements.",
        "La réversibilité vis-à-vis d’AWS et des directives étatiques est outillée et évaluée.",
      ],
      misc: ["Sécurité des environnements AWS.", "Gestion des incidents."],
    },
    {
      id: "yseop",
      slug: "industrialisation-mlops-yseop",
      client: "Yseop",
      clientType: "Éditeur logiciel, plateforme LLM",
      period: "2023-2024",
      title: "Sécurisation AWS et industrialisation MLOps",
      summary:
        "Build et FinOps d’une plateforme SaaS d’IA : architectures AWS sécurisées, workflows MLOps industrialisés avec SageMaker et ArgoCD, CI/CD et IaC.",
      stack: [
        "AWS",
        "Kubernetes (EKS/Vanilla)",
        "Helm/Kustomize",
        "SageMaker (MLOps)",
        "PostgreSQL",
        "ArgoCD",
        "Terraform",
      ],
      context: [
        "Au sein d’une équipe de cinq personnes, j’ai contribué au build et au FinOps d’une plateforme SaaS d’IA (LLM) déployée à la fois sur AWS et on-premise. Mon objectif était de mettre en place et d’optimiser les meilleures pratiques AWS et Kubernetes, pour garantir des environnements sécurisés et fluidifier la chaîne MLOps.",
      ],
      delivered: [
        "Mise en place d’architectures sécurisées sur AWS (EKS vanilla et via Helm/Kustomize, Terraform).",
        "Déploiement et industrialisation des workflows MLOps avec SageMaker et ArgoCD.",
        "Automatisation des pipelines CI/CD et gestion IaC, garantissant reproductibilité et traçabilité.",
        "Partage de bonnes pratiques avec l’équipe, pour accélérer les activités de run et optimiser la gestion des environnements AWS.",
      ],
      outcome: [
        "Une meilleure utilisation des ressources SageMaker.",
        "Sécurisation de l’authentification et des rôles (humains/robots) au sein d’AWS.",
        "Première mise en place de Terraform dans les projets Cloud.",
      ],
    },
    {
      id: "sncf",
      slug: "cloud-prive-services-manages-sncf",
      client: "SNCF",
      clientType: "Opérateur ferroviaire national",
      period: "2022-2023",
      title:
        "Lead technique : des microservices Go reproduisant les services AWS",
      summary:
        "Lead technique du cloud privé de la SNCF et de ses filiales : des microservices Go qui reproduisent les services AWS (Fargate, EC2, S3, CloudWatch…).",
      stack: [
        "Go (microservices)",
        "Services AWS reproduits (Fargate, EC2, S3, CloudWatch)",
        "ClusterAPI",
        "KubeVirt",
        "Stockage (Rook, OpenEBS)",
        "ArgoCD / FluxCD",
        "Mimir / FluentBit / OpenTelemetry",
        "RKE2 / KubeAdm / Talos",
      ],
      context: [
        "Au sein de la Division DEA – ASO (Tech Team Containers) à Lyon, j’ai rejoint une équipe de plus de dix ingénieurs en charge de l’exploitation et de l’évolution du parc Kubernetes de la SNCF et de ses filiales, sur cloud privé et public. J’ai assuré le lead technique du projet de cloud privé.",
      ],
      delivered: [
        "Lead technique de la construction de microservices Go reproduisant les briques AWS (Fargate, EC2, S3, RDS, CloudWatch, Secrets Manager…), pour sécuriser et industrialiser les déploiements Kubernetes.",
        "Automatisation de la gestion des clusters et des services via ClusterAPI et KubeVirt, dans ces mêmes microservices.",
        "R&D et déploiement de clusters (RKE2, KubeAdm, Talos), et orchestration GitOps avec ArgoCD et FluxCD.",
        "Mise en place de solutions de monitoring et d’observabilité (Mimir, FluentBit, OpenTelemetry), et gestion du stockage cloud-native (Rook, OpenEBS).",
        "Contributions à des projets open source et R&D interne, pour optimiser la résilience et la scalabilité des clusters.",
      ],
      outcome: [
        "Les déploiements Kubernetes sont outillés et industrialisés.",
        "Le socle cloud-native couvre le calcul, le stockage et l’observabilité.",
        "Les contributions open source ont nourri la résilience et la scalabilité des clusters.",
      ],
    },
    {
      id: "seiitra",
      slug: "securisation-azure-kubernetes-seiitra",
      client: "Seiitra",
      clientType: "Éditeur SaaS, ~150 microservices exploités",
      period: "2021-2022",
      title: "Sécurité et fiabilité d’une plateforme Azure/Kubernetes",
      summary:
        "Renforcement de la sécurité et de la fiabilité des environnements Azure/Kubernetes du produit Powimo, pour l’offre SaaS comme pour les déploiements on-premise.",
      stack: [
        "Microsoft Azure",
        "Terraform",
        "Kubernetes (AKS)",
        "Linkerd",
        "Prometheus / Jaeger / GrayLog / Grafana",
        "Azure Vault",
        "MongoDB / Postgres / Elasticsearch / Redis / Oracle / RabbitMQ",
        "Bitbucket, Jenkins",
        "ArgoCD, ApplicationSet, ArgoWorkflows (GitOps)",
        "Go",
      ],
      context: [
        "Au sein de SEIITRA à Grenoble, j’ai pris en charge le produit Powimo, avec pour mission de renforcer la sécurité et la fiabilité des environnements Azure et Kubernetes, tant pour l’offre SaaS que pour les déploiements on-premise.",
      ],
      delivered: [
        "Orchestration et structuration des clusters AKS et des services Azure via Terraform, garantissant des standards de sécurité élevés (Azure Vault, Linkerd).",
        "Déploiement de solutions de FinOps et mise en place d’un système d’authentification unifiée pour les outils internes.",
        "Conception et configuration d’un framework d’alerting et de monitoring (Prometheus, Jaeger, GrayLog, Grafana).",
        "Introduction des pratiques GitOps avec ArgoCD, ApplicationSet et ArgoWorkflows, pour automatiser les déploiements d’environ 150 microservices (C# et Java).",
        "Développement d’outils DevOps en Go pour simplifier et fiabiliser les pipelines CI/CD (Bitbucket, Jenkins).",
      ],
      outcome: [
        "Les environnements Azure et Kubernetes sont outillés et tenus par Terraform.",
        "Les déploiements d’environ 150 microservices sont automatisés en GitOps.",
        "La sécurité, l’observabilité et le coût disposent chacun d’un socle outillé.",
      ],
    },
    {
      id: "descours-cabaud",
      slug: "bascule-vente-en-ligne-descours-cabaud",
      client: "Descours & Cabaud",
      clientType: "ETI de distribution B2B, projet e-commerce",
      period: "2020-2021",
      title:
        "Un standard Kubernetes pour toutes les applications de l’entreprise, à commencer par l’e-commerce",
      summary:
        "Architecte solutions : un socle Kubernetes BareMetal et un standard d’architecture et d’exploitation, conçus pour porter toutes les applications de l’entreprise, à commencer par sa plateforme e-commerce (OroCommerce).",
      stack: [
        "Kubernetes (BareMetal)",
        "OroCommerce (PHP)",
        "Prometheus / EFK / Blackfire",
        "PostgreSQL / Elasticsearch / Redis",
        "RabbitMQ",
        "GitLab, Trivy, BrowserStack",
        "ArgoCD (GitOps)",
        "Cloudflare",
      ],
      context: [
        "Dans le cadre de la réorientation vers le e-commerce (projet DCCLIC), j’ai conçu le standard d’architecture et les pratiques SRE, pour réduire les coûts opérationnels et accélérer la mise sur le marché.",
        "La bascule s’est faite en pleine période COVID, alors que le commerce physique était à l’étroit : la contrainte de délai était réelle.",
        "L’objectif de fond était de préparer le passage au cloud de l’entreprise : une plateforme Kubernetes servant de modèle pour y accueillir les applications de la société.",
      ],
      delivered: [
        "Élaboration de l’architecture Kubernetes BareMetal de la plateforme e-commerce (OroCommerce).",
        "Mise en place d’une stack d’observabilité (Prometheus, EFK, Blackfire) et d’une approche SRE et Continuous Feedback.",
        "Conception de l’intégration CI/CD (GitLab, Trivy, BrowserStack) et déploiement GitOps avec ArgoCD.",
        "Sécurisation et optimisation des réseaux via Cloudflare.",
      ],
      outcome: [
        "Le standard Kubernetes est posé : il sert de modèle pour accueillir les autres applications de l’entreprise lors du passage au cloud.",
        "La plateforme e-commerce tourne sur ce standard, comme premier cas d’usage.",
        "L’observabilité et le Continuous Feedback outillent la tenue en production.",
      ],
    },
    {
      id: "doctolib",
      slug: "migration-bare-metal-kubernetes-doctolib",
      client: "Doctolib",
      clientType: "Plateforme de santé, données sensibles",
      period: "2019",
      title: "Migration de bare metal vers AWS",
      summary:
        "Migration d’une infrastructure bare metal vers AWS, pour encaisser la montée en charge du trafic. Le socle applicatif repose sur un Kubernetes (Kops).",
      stack: ["AWS", "Kubernetes", "Kops", "Santé"],
      context: [
        "L’entreprise avait besoin de scaler face au trafic : l’infrastructure bare metal préexistante devait être remplacée.",
        "L’hébergement de données de santé était un préalable : AWS l’a couvert en cours de mission, Doctolib ayant accompagné le fournisseur sur cette voie.",
      ],
      delivered: [
        "Migration de l’infrastructure bare metal vers AWS.",
        "Tests de la base de données et des composants applicatifs, pour valider la migration.",
        "Mise en place d’un socle Kubernetes (Kops) sur AWS, en collaboration avec une équipe DevOps.",
        "Mise en place des directives de sécurité garantissant la sécurité du système.",
      ],
      outcome: [
        "L’infrastructure bare metal a été remplacée par AWS.",
        "La capacité à absorber la montée en charge a servi l’année suivante, pendant la COVID.",
        "Le préalable d’hébergement de données de santé est levé, sans attendre la fin du parcours.",
      ],
    },
    {
      id: "canal-plus",
      slug: "pipelines-ci-cd-kubernetes-canal-plus",
      client: "Canal+",
      clientType: "Groupe audiovisuel",
      period: "2019",
      title:
        "Pipelines CI/CD Kubernetes et répartition des charges sur trois clouds",
      summary:
        "Remplacement des pipelines Jenkins par un système Kubernetes éphémère, dans un contexte multi-cloud : répartir les charges entre cloud privé, AWS et Alibaba pour réduire la dépendance, et mener la R&D CI/CD qui va avec.",
      stack: [
        "Kubernetes",
        "Cloud privé / bare metal",
        "AWS",
        "Alibaba Cloud",
        "TektonCD, DroneIO, JenkinsX",
        "CI/CD",
      ],
      context: [
        "L’infrastructure reposait sur trois clouds : un cloud privé en bare metal, AWS et Alibaba Cloud.",
        "L’enjeu était de répartir les charges entre ces trois environnements, pour réduire la dépendance à un fournisseur et mener la R&D CI/CD correspondante.",
      ],
      delivered: [
        "Substitution des pipelines CI/CD gérés par Jenkins par un système basé sur Kubernetes, visant à maximiser l’éphémérité des ressources.",
        "Exploration et retour d’expérience sur TektonCD, DroneIO et JenkinsX en mode serverless.",
        "Préparation, avec les équipes, de la migration des différents types de charges de travail vers ce nouveau système.",
        "Répartition des charges entre cloud privé, AWS et Alibaba Cloud, pour réduire la dépendance.",
      ],
      outcome: [
        "Les pipelines Jenkins ont été remplacés par des pipelines Kubernetes éphémères.",
        "Les charges de travail ont été migrées vers le nouveau système.",
        "La répartition multi-cloud limite la dépendance à un fournisseur unique.",
      ],
    },
    {
      id: "claranet",
      slug: "infrastructure-cloud-aws-gcp-claranet",
      client: "Claranet",
      clientType: "Infogéreur cloud, en alternance",
      period: "2017-2018",
      title:
        "Infrastructure cloud en tant que service, supervision et accompagnement DevOps",
      summary:
        "Mise en place d’infrastructure cloud en tant que service (IaaS), supervision et journalisation, et accompagnement de clients vers le DevOps et le cloud natif.",
      stack: [
        "AWS",
        "GCP",
        "Docker, Kubernetes",
        "Terraform",
        "Ansible, SaltStack",
        "Debian, CentOS, Ubuntu, Windows Server",
        "MySQL, PostgreSQL, SQL Server, MongoDB, Redis",
        "Python, Go, Shell",
        "Git",
      ],
      context: [
        "Chez Claranet, en alternance, j’ai participé à une plateforme d’infrastructure cloud en tant que service (IaaS), avec sa supervision et sa journalisation.",
        "Les clients allaient de l’association aux secteurs de l’énergie et du streaming musical, et le conseil portait autant sur l’outillage que sur les pratiques.",
      ],
      delivered: [
        "Mise en place de l’infrastructure cloud en tant que service (IaaS).",
        "Implémentation de solutions de supervision et de journalisation.",
        "Assistance et conseil pour l’adoption des méthodologies DevOps et du développement cloud natif.",
        "Construction de nouvelles infrastructures et déploiements en production pour des clients tels que Restos du Cœur, Dalkia et Qobuz, sur AWS.",
        "Retour d’expérience sur l’outillage Google Cloud (GKE, CloudSQL, Endpoints, CloudFunctions, Deployment Manager).",
      ],
      outcome: [
        "Des clients ont pu déployer en production sur des infrastructures construites pour eux.",
        "L’outillage cloud natif a été éprouvé et son retour d’expérience partagé.",
        "Le socle IaaS a servi de base à ces déploiements.",
      ],
    },
  ],
}

export default fr
