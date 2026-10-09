/**
 * English case study content.
 *
 * Mirrors `fr.ts` field by field: the shared interface guarantees that a missing
 * case or a renamed field fails the build rather than shipping a page with a hole
 * in it.
 *
 * Client names are kept but framed for an international reader, as on the
 * references page: a European infrastructure buyer recognises "the French national
 * railway operator" or "a French public investment bank", whereas the bare acronym
 * means nothing outside France.
 */
import type { CaseStudyBundle } from "./types"

const en: CaseStudyBundle = {
  title: "AWS, Kubernetes and DevOps case studies",
  description:
    "Eight infrastructure engagements told in full: context and constraint, what was delivered, outcome. Bpifrance, SNCF, Yseop, Seiitra, Doctolib, Canal+.",
  breadcrumb: "Case studies",
  hero: {
    title: "One engagement,",
    accent: "told in full.",
    lede: "The context, the constraint and what was delivered. What lets you judge infrastructure work is the detail, not the logo.",
  },
  cases: [
    {
      id: "hartza-capital",
      slug: "algorithmic-trading-platform-hartza-capital",
      client: "Hartza Capital",
      clientType: "My own platform, in production",
      period: "since 2018",
      title: "Automating risk arbitrage on the financial markets",
      summary:
        "An AWS platform that continuously ingests and analyses market data, to automate risk arbitrage across five geographies.",
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
        "This investment vehicle automates its risk arbitrage on the financial markets (Europe, North America, China, Japan, Australia), leaning on an AWS platform that continuously ingests and analyses market data, quotes, financial ratios and sovereign risk.",
      ],
      delivered: [
        "Designing a serverless AWS architecture (Lambda, Step Functions, API Gateway), to orchestrate the arbitrage and analysis workflows.",
        "Developing and implementing financial risk arbitrage and portfolio management strategies, embedding scoring and prediction algorithms.",
        "Continuous ingestion and processing of financial data (news, quotes, ratios, sovereign risk) through S3, Kinesis and AWS Glue.",
        "Putting risk measurement and control models in place (VaR, stress testing), and financial dashboards for steering and tracking performance.",
        "Designing and optimising databases (Aurora DSQL, DynamoDB), to guarantee scalability and reliability.",
        "Infrastructure as Code (Terraform, CloudFormation), to ensure reproducibility, traceability and regulatory compliance.",
        "Designing a desktop application (Linux, macOS, Windows) for portfolio management.",
        "History: the platform was hosted at Scaleway, with five years of Kubernetes and Kafka.",
      ],
      outcome: [
        "The platform has been running in production since 2018.",
        "It serves as the technical reference for the engagements carried out at client sites.",
      ],
    },
    {
      id: "bpifrance",
      slug: "kubernetes-change-traceability-bpifrance",
      client: "Bpifrance",
      clientType: "French public investment bank",
      period: "2024-2025",
      title: "Regulatory Kubernetes change traceability and AWS reversibility",
      summary:
        "Cluster change audit tooling with its reporting, R&D on Knative for reversibility away from AWS, and recurring AWS support for the team.",
      stack: [
        "Kubernetes",
        "Knative",
        "Helm",
        "CI/CD (Jenkins)",
        "Datadog",
        "Python/Bash",
        "Go",
        "Compliance",
        "AWS reversibility",
      ],
      context: [
        "Part of a ten-person team delivering cloud solutions to internal customers, I was tasked with strengthening Kubernetes governance and exploring new serverless services.",
      ],
      delivered: [
        "Design and development of cluster change audit tooling on Kubernetes (regulatory compliance), and of its reporting module.",
        "R&D and deployment of Knative, to assess reversibility away from AWS and answer state directives.",
        "CI/CD workflows wired in to deploy and monitor these new services.",
        "Documentation and training for the team on traceability practice and on running change tracking.",
      ],
      outcome: [
        "The compliance requirement is covered by tooling that can actually be used, reporting included.",
        "The team stands on its own for traceability and change tracking.",
        "Reversibility away from AWS and state directives is tooled and assessed.",
      ],
      misc: ["AWS environment security.", "Incident management."],
    },
    {
      id: "yseop",
      slug: "mlops-industrialisation-yseop",
      client: "Yseop",
      clientType: "Software vendor, LLM platform",
      period: "2023-2024",
      title: "Securing AWS and industrialising MLOps",
      summary:
        "Build and FinOps on a SaaS AI platform: secure AWS architectures, MLOps workflows industrialised with SageMaker and ArgoCD, CI/CD and IaC.",
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
        "Part of a five-person team, I contributed to the build and the FinOps of a SaaS AI (LLM) platform deployed both on AWS and on-premise. My goal was to put AWS and Kubernetes good practice in place and optimise it, to guarantee secure environments and smooth the MLOps chain.",
      ],
      delivered: [
        "Setting up secure architectures on AWS (EKS vanilla and through Helm/Kustomize, Terraform).",
        "Deploying and industrialising MLOps workflows with SageMaker and ArgoCD.",
        "Automating the CI/CD pipelines and managing IaC, guaranteeing reproducibility and traceability.",
        "Sharing good practice with the team, to speed up run activity and optimise AWS environment management.",
      ],
      outcome: [
        "Better use of SageMaker resources.",
        "Secured authentication and roles (human/robot) within AWS.",
        "Terraform introduced in the Cloud projects for the first time.",
      ],
    },
    {
      id: "sncf",
      slug: "private-cloud-managed-services-sncf",
      client: "SNCF",
      clientType: "French national railway operator",
      period: "2022-2023",
      title: "Technical lead: Go microservices reproducing the AWS services",
      summary:
        "Technical lead on SNCF’s private cloud and its subsidiaries: Go microservices that reproduce the AWS services (Fargate, EC2, S3, CloudWatch…).",
      stack: [
        "Go (microservices)",
        "AWS services reproduced (Fargate, EC2, S3, CloudWatch)",
        "ClusterAPI",
        "KubeVirt",
        "Storage (Rook, OpenEBS)",
        "ArgoCD / FluxCD",
        "Mimir / FluentBit / OpenTelemetry",
        "RKE2 / KubeAdm / Talos",
      ],
      context: [
        "Within the DEA – ASO Division (Tech Team Containers) in Lyon, I joined a team of more than ten engineers running and evolving the Kubernetes estate of SNCF and its subsidiaries, across private and public cloud. I was the technical lead on the private cloud project.",
      ],
      delivered: [
        "Technical lead on building Go microservices that reproduce the AWS building blocks (Fargate, EC2, S3, RDS, CloudWatch, Secrets Manager…), to secure and industrialise Kubernetes deployments.",
        "Automating cluster and service management through ClusterAPI and KubeVirt, within those same microservices.",
        "R&D and cluster deployment (RKE2, KubeAdm, Talos), and GitOps orchestration with ArgoCD and FluxCD.",
        "Setting up monitoring and observability (Mimir, FluentBit, OpenTelemetry), and managing cloud-native storage (Rook, OpenEBS).",
        "Contributions to open source projects and internal R&D, to improve cluster resilience and scalability.",
      ],
      outcome: [
        "Kubernetes deployments are tooled and industrialised.",
        "The cloud-native foundation covers compute, storage and observability.",
        "The open source contributions fed into cluster resilience and scalability.",
      ],
    },
    {
      id: "seiitra",
      slug: "securing-azure-kubernetes-seiitra",
      client: "Seiitra",
      clientType: "SaaS vendor, ~150 microservices in operation",
      period: "2021-2022",
      title: "Security and reliability of an Azure/Kubernetes platform",
      summary:
        "Strengthening the security and reliability of the Powimo product’s Azure/Kubernetes environments, for the SaaS offering and for on-premise deployments alike.",
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
        "At SEIITRA in Grenoble, I took charge of the Powimo product, with a mandate to strengthen the security and reliability of the Azure and Kubernetes environments, for the SaaS offering as much as for on-premise deployments.",
      ],
      delivered: [
        "Orchestrating and structuring the AKS clusters and the Azure services through Terraform, holding high security standards (Azure Vault, Linkerd).",
        "Rolling out FinOps tooling and putting a unified authentication system in place for the internal tools.",
        "Designing and configuring an alerting and monitoring framework (Prometheus, Jaeger, GrayLog, Grafana).",
        "Introducing GitOps practice with ArgoCD, ApplicationSet and ArgoWorkflows, to automate the deployment of around 150 microservices (C# and Java).",
        "Building DevOps tools in Go to simplify and harden the CI/CD pipelines (Bitbucket, Jenkins).",
      ],
      outcome: [
        "The Azure and Kubernetes environments are tooled and held by Terraform.",
        "Deployment of around 150 microservices is automated in GitOps.",
        "Security, observability and cost each rest on tooling.",
      ],
    },
    {
      id: "descours-cabaud",
      slug: "moving-sales-online-descours-cabaud",
      client: "Descours & Cabaud",
      clientType: "B2B distribution mid-cap, e-commerce project",
      period: "2020-2021",
      title:
        "A Kubernetes standard for every application in the company, starting with e-commerce",
      summary:
        "Solution architect: a Kubernetes BareMetal foundation and an architecture and operations standard, designed to carry every application of the company, starting with its e-commerce platform (OroCommerce).",
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
        "As part of the shift to e-commerce (the DCCLIC project), I designed the architecture standard and the SRE practice, to cut operating costs and shorten time to market.",
        "The move happened in the middle of the COVID period, with physical retail constrained: the deadline pressure was real.",
        "The underlying goal was to prepare the company’s move to cloud: a Kubernetes platform serving as the model for hosting the company’s applications.",
      ],
      delivered: [
        "Designing the Kubernetes BareMetal architecture for the e-commerce platform (OroCommerce).",
        "Setting up an observability stack (Prometheus, EFK, Blackfire) and an SRE / Continuous Feedback approach.",
        "Designing the CI/CD integration (GitLab, Trivy, BrowserStack) and GitOps deployment with ArgoCD.",
        "Securing and optimising the network through Cloudflare.",
      ],
      outcome: [
        "The Kubernetes standard is in place: it serves as the model for hosting the company’s other applications as it moves to cloud.",
        "The e-commerce platform runs on that standard, as the first use case.",
        "Observability and Continuous Feedback underpin production reliability.",
      ],
    },
    {
      id: "doctolib",
      slug: "bare-metal-to-kubernetes-doctolib",
      client: "Doctolib",
      clientType: "Healthcare platform, sensitive data",
      period: "2019",
      title: "Migrating from bare metal to AWS",
      summary:
        "Migrating a bare metal estate to AWS, to absorb the growth in traffic. The application foundation is a Kubernetes (Kops) platform.",
      stack: ["AWS", "Kubernetes", "Kops", "Healthcare"],
      context: [
        "The company needed to scale with traffic: the pre-existing bare metal estate had to be replaced.",
        "Health data hosting was a prerequisite: AWS covered it during the engagement, with Doctolib accompanying the provider along that path.",
      ],
      delivered: [
        "Migrating the bare metal estate to AWS.",
        "Testing the database and the application components, to validate the migration.",
        "Setting up a Kubernetes (Kops) foundation on AWS, in collaboration with a DevOps team.",
        "Putting in place the security rules that guarantee the system’s security.",
      ],
      outcome: [
        "The bare metal estate was replaced by AWS.",
        "The ability to absorb the load served the following year, during COVID.",
        "The health data hosting prerequisite is cleared, without waiting for the end of the journey.",
      ],
    },
    {
      id: "canal-plus",
      slug: "cicd-pipelines-kubernetes-canal-plus",
      client: "Canal+",
      clientType: "Broadcaster",
      period: "2019",
      title: "Kubernetes CI/CD pipelines and load spread across three clouds",
      summary:
        "Replacing the Jenkins pipelines with an ephemeral Kubernetes system, in a multi-cloud setting: spreading load across private cloud, AWS and Alibaba to cut dependency, with the CI/CD R&D that comes with it.",
      stack: [
        "Kubernetes",
        "Private cloud / bare metal",
        "AWS",
        "Alibaba Cloud",
        "TektonCD, DroneIO, JenkinsX",
        "CI/CD",
      ],
      context: [
        "The infrastructure rested on three clouds: a private cloud on bare metal, AWS and Alibaba Cloud.",
        "The point was to spread load across those three environments, to cut dependency on a single provider, and to carry out the corresponding CI/CD R&D.",
      ],
      delivered: [
        "Substituting the Jenkins-managed CI/CD pipelines with a Kubernetes-based system, aimed at maximising how ephemeral the resources were.",
        "Exploring TektonCD, DroneIO and JenkinsX and feeding back on them, in serverless mode.",
        "Preparing, together with the teams, the migration of the different kinds of workload onto the new system.",
        "Spreading load across private cloud, AWS and Alibaba Cloud, to cut dependency.",
      ],
      outcome: [
        "The Jenkins pipelines were replaced with ephemeral Kubernetes pipelines.",
        "The workloads were migrated onto the new system.",
        "The multi-cloud split limits dependency on a single provider.",
      ],
    },
    {
      id: "claranet",
      slug: "cloud-infrastructure-aws-gcp-claranet",
      client: "Claranet",
      clientType: "Cloud provider, apprenticeship",
      period: "2017-2018",
      title:
        "Cloud infrastructure as a service, monitoring and DevOps guidance",
      summary:
        "Building cloud infrastructure as a service (IaaS), monitoring and logging, and guiding customers towards DevOps practice and cloud-native development.",
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
        "At Claranet, as an apprentice, I took part in a cloud infrastructure as a service (IaaS) platform, with its monitoring and logging.",
        "The customers ranged from a charity to the energy and music streaming sectors, and the guidance covered tooling as much as practice.",
      ],
      delivered: [
        "Building the cloud infrastructure as a service (IaaS).",
        "Implementing monitoring and logging solutions.",
        "Assisting and advising on the adoption of DevOps methodologies and cloud-native development.",
        "Building new infrastructures and production deployments for customers such as Restos du Cœur, Dalkia and Qobuz, on AWS.",
        "Feeding back on the Google Cloud tooling (GKE, CloudSQL, Endpoints, CloudFunctions, Deployment Manager).",
      ],
      outcome: [
        "Customers were able to deploy to production on infrastructures built for them.",
        "The cloud-native tooling was put to the test and the experience shared.",
        "The IaaS foundation supported those deployments.",
      ],
    },
  ],
}

export default en
