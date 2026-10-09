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
import type { PillarBundle } from "./types"

const en: PillarBundle = {
  consulting: {
    slug: "consulting",
    title: "AWS & Kubernetes audit and consulting",
    description:
      "AWS and Kubernetes consulting for SMEs, mid-caps and startups: architecture reviews, multi-account governance and FinOps. Based in Lyon, working across Europe.",
    breadcrumb: "Consulting",
    hero: {
      eyebrow: "Consulting",
      title: "AWS & Kubernetes consulting: audit, design, then",
      accent: "leave you in control.",
      lede: "I step in when architecture decisions have to be made and owned. Nine years of experience, from a handful of services to entire platforms.",
    },
    cta: {
      primary: "Talk through your needs",
      secondary: "See Cloud Native design",
      secondaryHref: "/en/#prestations",
    },
    scope: {
      eyebrow: "Scope",
      title: "What a consulting",
      accent: "engagement covers.",
      lede: "An engagement starts with a written scope: what gets examined, what does not, and what you are left holding at the end. These three areas are where I am called in most often.",
    },
    domains: [
      {
        title: "Architecture & scalability",
        items: [
          "Designing or reviewing AWS architecture",
          "Account segmentation and isolation",
          "Migration and reversibility paths",
          "Availability and recovery objectives",
        ],
      },
      {
        title: "Security & compliance",
        items: [
          "IAM, federated roles and least privilege",
          "Multi-account governance: Organizations, SCPs",
          "Kubernetes hardening and regulatory requirements",
          "Change traceability and auditability",
        ],
      },
      {
        title: "FinOps & operations",
        items: [
          "Reading the bill and finding where it drifts",
          "Sizing and autoscaling",
          "Operating standards and service objectives",
          "A costed action plan",
        ],
      },
    ],
    process: {
      eyebrow: "How it runs",
      title: "Four steps,",
      accent: "a written scope.",
      lede: "One rule runs through those four steps: nothing gets built before the cost and the trade-offs are approved. You keep the decision, and you keep what was produced.",
    },
    phases: [
      {
        step: "01",
        title: "Scoping",
        detail:
          "One conversation about your objective. By the end you know whether an audit is worth it, and what it would cover.",
        items: [
          "Objective and constraints written down",
          "Success criteria agreed",
          "A view on whether an audit is worth it",
        ],
      },
      {
        step: "02",
        title: "Audit",
        detail:
          "Architecture, security, cost and operating practice, ranked by priority. Each finding is tied to its impact and to the effort it takes to fix.",
        items: [
          "Findings ranked by priority and by impact",
          "Bill analysis and where it drifts",
          "Security and compliance points flagged",
        ],
      },
      {
        step: "03",
        title: "Design",
        detail:
          "Options, trade-offs and estimated cost. You approve before anything is built, and the decision stays written down.",
        items: [
          "Options compared and costed",
          "Target architecture and delivery plan",
          "Estimated cost approved before building",
        ],
      },
      {
        step: "04",
        title: "Implementation and handover",
        detail:
          "Building it, documenting it and training your team. You take back control with what was produced, not with a knowledge debt.",
        items: [
          "Decisions implemented on the platform",
          "Operating documentation kept current",
          "Your team trained to run it",
        ],
      },
    ],
    proofHeading: {
      eyebrow: "Track record",
      title: "Platforms that are",
      accent: "not mock-ups.",
      lede: "These figures come from real engagements. The case studies detail the context, the constraint and the outcome behind each one.",
    },
    proofs: [
      {
        value: "~150",
        text: "Azure/Kubernetes microservices in operation, SaaS vendor",
      },
    ],
    criteriaHeading: {
      eyebrow: "Fit",
      title: "When this format",
      accent: "is the right one.",
      lede: "These criteria say what this format is for, and the last one says what it is not for. Worth reading before the call rather than after it.",
    },
    criteria: [
      {
        title: "An architecture decision to make",
        body: "Choosing services, account segmentation or a migration path, with lasting consequences for cost and operability.",
      },
      {
        title: "A platform costing more than it should",
        body: "The bill has drifted, or nobody can say what makes it up. Cost analysis is part of the audit.",
      },
      {
        title: "Pure execution, with no decision to make",
        body: "This is not the right format: I design and I implement, you stay the decision maker. I say so at scoping, including when the answer is no.",
      },
      {
        title: "A greenfield platform, or day-to-day running",
        body: "Designing a whole platform and running one day to day have their own formats, and their own pages.",
      },
    ],
    caseHighlight: {
      heading: {
        eyebrow: "Case study",
        title: "Compliance",
        accent: "through tooling.",
      },
      caseId: "bpifrance",
      extract:
        "A ten-person team delivered cloud solutions to internal customers. Kubernetes governance needed strengthening, with a regulatory requirement on change traceability. I designed and built the cluster change audit tooling and its reporting module, then ran the R&D on Knative to assess reversibility away from AWS, state directives included. CI/CD workflows deploy and monitor those new services, and the team was trained on traceability practice. The compliance requirement is covered by tooling that is actually used.",
    },
  },

  ai: {
    slug: "ai",
    title: "Applied AI: LLM agents and automation",
    description:
      "Applied AI for SMEs, mid-caps and startups: LLM agents connected to your data, document extraction, MLOps industrialisation. Independent consultant in Lyon.",
    breadcrumb: "Applied AI",
    hero: {
      eyebrow: "Applied AI",
      title: "Applied AI: agents that work on",
      accent: "your data, in production.",
      lede: "Most AI projects stop at the demo. I handle what comes after: connecting the model to your data, measuring quality, controlling cost, putting it into production.",
    },
    cta: {
      primary: "Talk about a use case",
      secondary: "See consulting",
      secondaryHref: "/en/consulting/",
    },
    useCasesHeading: {
      eyebrow: "Use cases",
      title: "Three ways",
      accent: "to start.",
      lede: "The first case is a deliberately short entry point: a verifiable result, on a narrow scope, before committing further.",
    },
    useCases: [
      {
        step: "01",
        title: "Make your document archives searchable",
        detail:
          "The documents exist, but nobody can query them. Contracts, invoices, client files, meeting notes: search that answers while citing the source, instead of returning a list of files.",
        items: [
          "Natural-language search across your documents",
          "Answers citing the source and the page",
          "Field extraction into your existing tools",
          "Narrow scope, verifiable result within weeks",
        ],
      },
      {
        step: "02",
        title: "Automate a repetitive process",
        detail:
          "An agent that reads, sorts, checks or prepares what your teams do by hand. The value rarely comes from the model alone: it comes from cleanly connecting your data and verifying the outcome.",
        items: [
          "Reconciliation and consistency checks",
          "Preparing files and summaries",
          "Sorting and routing incoming documents",
          "Logging so you can audit what the agent decided",
        ],
      },
      {
        step: "03",
        title: "Industrialise and control cost",
        detail:
          "The prototype works; going live reveals the real problems: quality drift, unpredictable cost per call, no monitoring. This is where most projects stop.",
        items: [
          "Continuous evaluation of answer quality",
          "Cost tracking per call and per user",
          "Monitoring, alerting and usable logs",
          "A reasoned choice between hosted model, API or local",
        ],
      },
    ],
    cautionsHeading: {
      eyebrow: "Watch out for",
      title: "Three decisions",
      accent: "to make early.",
      lede: "Those three decisions are taken early. Taken late, they are expensive to fix, often by reworking the whole connection to your data.",
    },
    cautions: [
      {
        title: "Your data does not leave without a decision",
        body: "Choosing between an external API, a model hosted in your own cloud or a local model is a trade-off, not a default. It is settled by how sensitive the data is and what you are obliged to do.",
      },
      {
        title: "An agent is measured, not taken on faith",
        body: "Without an evaluation set, a regression goes unnoticed for weeks. Quality measurement goes in with the first version, not after it.",
      },
      {
        title: "Cost per call can be steered",
        body: "Unmonitored AI is expensive in silence. Tracking cost per use is a production indicator, in the same way latency is.",
      },
    ],
    credentialsHeading: {
      eyebrow: "Experience",
      title: "This is not",
      accent: "a first project.",
      lede: "I have been running AI in production since 2018, and I industrialised a software vendor’s LLM platform.",
    },
    credentials: [
      {
        label: "Hartza Capital",
        detail:
          "LLM agents interpreting market data, in production since 2018.",
      },
      {
        label: "Yseop",
        detail:
          "A SaaS LLM artificial intelligence platform deployed both on AWS and on-premise. Industrialising the MLOps chain and hardening environments.",
      },
      {
        label: "Cloud Partners",
        detail:
          "A collective within the AWS partner network, with a dedicated AI/Machine Learning offering: SageMaker, MLOps, NLP, computer vision.",
      },
    ],
    criteriaHeading: {
      eyebrow: "Fit",
      title: "When this format",
      accent: "is the right one.",
      lede: "These criteria say what this format is for, and the last one says what it is not for.",
    },
    criteria: [
      {
        title: "A specific use case with a verifiable result",
        body: "Document search that cites its sources, a repetitive process taken off your teams: an objective you can measure before committing further.",
      },
      {
        title: "Sensitive data, or poorly organised data",
        body: "How the model connects to your documents, and where it is hosted, are settled by how sensitive the data is and what you are obliged to do — not by default.",
      },
      {
        title: "A demo that does not survive production",
        body: "Quality drifting, unpredictable cost per call, no monitoring: this is where I am called in most often.",
      },
      {
        title: "A prototype meant to impress",
        body: "This is not the right format: I deliver use cases that run and can be measured, not demos.",
      },
    ],
    caseHighlight: {
      heading: {
        eyebrow: "Case study",
        title: "An LLM platform",
        accent: "industrialised.",
      },
      caseId: "yseop",
      extract:
        "A five-person team was building a SaaS AI platform deployed both on AWS and on-premise. I set up the secure AWS architectures, EKS vanilla and Helm/Kustomize deployments under Terraform, then industrialised the MLOps workflows with SageMaker and ArgoCD. The CI/CD pipelines are automated and the infrastructure described as code, for reproducibility and traceability. The result: better use of SageMaker resources, secured authentication and roles within AWS, and Terraform introduced in the cloud projects for the first time.",
    },
  },

  managedServices: {
    slug: "managed-services",
    title: "AWS & Kubernetes EKS managed services",
    description:
      "AWS and Kubernetes managed services for SMEs, mid-caps and startups: running EKS clusters, monitoring, upgrades and cost control. Based in Lyon, across Europe.",
    breadcrumb: "Managed services",
    hero: {
      eyebrow: "Managed services",
      title: "AWS & Kubernetes EKS managed services: I run the platform,",
      accent: "you build the product.",
      lede: "You keep your product teams; I take on operations: monitoring, upgrades, incidents and cost.",
    },
    cta: {
      primary: "Talk through the scope",
      secondary: "See consulting",
      secondaryHref: "/en/consulting/",
    },
    scope: {
      eyebrow: "Scope",
      title: "What delegated",
      accent: "operations covers.",
      lede: "Delegated operations cover three things: keeping the platform running, watching it, and explaining the bill. What is not covered is written into the contract, before we start.",
    },
    coverage: [
      {
        title: "Day-to-day operations",
        items: [
          "EKS clusters and upgrades",
          "Image lifecycle and rollbacks",
          "Secrets, certificates and access",
          "Persistent storage and volume lifecycle",
        ],
      },
      {
        title: "Monitoring & incidents",
        items: [
          "Metrics, logs and dashboards",
          "Alerting without alert fatigue",
          "Diagnosing and resolving incidents",
          "Log retention and a history you can search over months",
        ],
      },
      {
        title: "Reliability & cost",
        items: [
          "Service objectives agreed with you",
          "Sizing and autoscaling",
          "Tracking the AWS bill",
          "Capacity reviews ahead of peak load",
        ],
      },
    ],
    commitmentsHeading: {
      eyebrow: "Commitments",
      title: "The frame around",
      accent: "the engagement.",
      lede: "These commitments are the minimum frame. The exact levels, incident handling included, are set in the contract.",
    },
    commitments: [
      {
        label: "Response to a request",
        value: "1 business day",
        note: "Your everyday requests: a change, an operations question, a decision to hand back.",
      },
      {
        label: "Incident handling",
        value: "Per contract",
        note: "The level depends on criticality and on the hours covered, both set in the contract.",
      },
      {
        label: "Maintenance window",
        value: "Planned with you",
        note: "Announced ahead of time, and chosen around your production constraints.",
      },
      {
        label: "Commitment",
        value: "Defined in the contract",
        note: "That document sets the scope, the service objectives, and what stays with you.",
      },
    ],
    hygieneHeading: {
      eyebrow: "Why me",
      title: "Running a platform means knowing",
      accent: "the architecture decisions.",
      lede: "Three reasons to hand operations to the person who designed the architecture, rather than separating the two.",
    },
    hygiene: [
      {
        step: "01",
        title: "One person on the bridge",
        detail:
          "No rotation, no handover between an architect and an operator who have never spoken to each other. The person handling the incident is the one who sized the platform.",
        items: [],
      },
      {
        step: "02",
        title: "Code and infrastructure together",
        detail:
          "I write code as well: an incident that starts in the application does not stop at the boundary. The cause gets fixed, rather than compensated for in the infrastructure.",
        items: [],
      },
      {
        step: "03",
        title: "A cost that stays explainable",
        detail:
          "The AWS bill is tracked and commented on, not merely paid. Every line that drifts comes with an explanation and an action attached.",
        items: [],
      },
    ],
    criteriaHeading: {
      eyebrow: "Fit",
      title: "When this format",
      accent: "is the right one.",
      lede: "These criteria say what this format is for, and the last one says what it is not for.",
    },
    criteria: [
      {
        title: "A production platform with no operations team",
        body: "The clusters carry your product and nobody owns them day to day.",
      },
      {
        title: "You want to keep the decisions",
        body: "The scope, the service objectives and the maintenance windows are agreed with you, not decided for you.",
      },
      {
        title: "A bill that has to stay explainable",
        body: "Tracking the AWS bill is part of operations: it is commented on, not merely paid.",
      },
      {
        title: "Deciding on architecture, or taking over a platform",
        body: "Auditing and designing have their own format, and their own page.",
      },
    ],
    caseHighlight: {
      heading: {
        eyebrow: "Case study",
        title: "A national operator’s",
        accent: "Kubernetes fleet.",
      },
      caseId: "sncf",
      extract:
        "A team of more than ten engineers owned the operations and the evolution of the SNCF and its subsidiaries’ Kubernetes fleet, across private and public cloud. I was technical lead on the private cloud project: Go microservices reproducing the AWS building blocks, Fargate, EC2, S3 and CloudWatch, on a Kubernetes base with ClusterAPI, KubeVirt and ArgoCD, monitored with Mimir, FluentBit and OpenTelemetry. At that scale, operations imposes its own rules on capacity, monitoring and cluster lifecycle.",
    },
  },
}

export default en
