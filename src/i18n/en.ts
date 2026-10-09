/**
 * English dictionary.
 *
 * Typed against the shape derived from `fr.ts`, so a key that exists in French
 * and is missing here fails the build instead of rendering `undefined`.
 *
 * Client references are kept but framed for an international reader: a French
 * national railway operator is recognisable to a European infrastructure buyer,
 * whereas the bare acronym is not. Removing them would cost the strongest
 * evidence on the site.
 */
import type { Dictionary } from "./fr"

const en: Dictionary = {
  common: {
    brandSub: "Consulting",
    backToTop: "Back to top",
    skipToContent: "Skip to main content",
    allArticles: "All articles",
    readingTimeSuffix: "min read",
    byAuthor: "By",
    updatedOn: "Updated on",
    onThisPage: "On this page",
    publishedIn: "Published on",
  },

  nav: {
    openMenu: "Open navigation menu",
    mainNavigation: "Main navigation",
    home: "back to home",
    cta: "Let’s talk",
    languageSwitch: "Switch language",
    links: [
      { href: "/en/consulting/", label: "Consulting" },
      { href: "/en/ai/", label: "AI" },
      { href: "/en/managed-services/", label: "Managed services" },
      { href: "/en/blog/", label: "Blog" },
      { href: "/en/references/", label: "References" },
      { href: "/en/case-studies/", label: "Case studies" },
    ],
  },

  hero: {
    metaTitle: "AWS expert in Lyon for SMEs, mid-caps and startups",
    metaDescription:
      "Independent AWS expert in Lyon for SMEs, mid-caps and startups: architecture reviews, sovereign cloud, LLM agents, EKS operations and cost control.",
    eyebrow: "Independent AWS expert · Lyon, France",
    titleLead: "An AWS expert dedicated",
    titleAccent: "to your platform.",
    ledeLead:
      "You ship your product. I make sure the AWS architecture holds, costs right, and stays simple to run.",
    ledeModes: "One-off engagement or ongoing support",
    ledeReply: "reply within 24h.",
    definition:
      "Arktos Consulting, independent AWS expert since 2021, based in Lyon. Architecture review and AWS architecture: fifteen clients in France, with the same person from scoping through to production.",
    ctaPrimary: "Let’s discuss your needs",
    ctaSecondary: "See what I do",
    statYearsLabel: "years of experience",
    statClientsLabel: "clients served",
    portraitAlt: "Portrait of Aurélien Perrier",
  },

  services: {
    eyebrow: "Services",
    title: "What I take",
    accent: "off your plate.",
    lede: "Four areas, handled by the same person. Generic, reusable modules where relevant, custom work where required. Every engagement is scoped before it is billed.",
  },

  references: {
    eyebrow: "References",
    title: "Engagements whose technical detail is public.",
    ledeCompact:
      "A French public investment bank, the national railway operator, a health platform, a broadcaster, an AI software vendor. Full detail on the references page.",
    ledeFull:
      "Long engagements with a French public investment bank, the national railway operator, a health booking platform, a broadcaster and an AI software vendor are named. What actually matters when judging infrastructure work is the detail: context, constraints, technologies.",
    seeAll: "All",
    seeAllSuffix: "engagements",
    footnote:
      "Named engagements are listed with the client’s agreement, unless stated otherwise.",
    pageTitle: "References: AWS & Kubernetes engagements",
    heroTitle: "The technical detail of the engagements.",
    heroAccent: "",
    heroLedeLead: "engagements: context, constraint and outcome.",
  },

  caseStudy: {
    contextHeading: "Context & constraint",
    deliveredHeading: "What was delivered",
    outcomeHeading: "Outcome",
    stackHeading: "Stack",
    miscHeading: "Recurring work",
    otherCasesHeading: "Other case studies",
    allCases: "All case studies",
  },

  /** Notice on the case carried out for the parent company. */
  parentStudy: {
    badge: "My own company",
    notice:
      "Hartza Capital owns Arktos Consulting: this platform is mine, not a client’s.",
  },

  hartza: {
    eyebrow: "In production at my own company",
    title: "Your platform,",
    accent: "like mine.",
    body: "Hartza Capital, my fintech project for 8 years, has been running algorithmic trading on AWS in production for 4 years. That work has forged the HPC, data, API and event-driven workflow skills I now put at your disposal.",
    articlesHeading: "How it is built",
    articles: [
      {
        title: "Building an algorithmic trading platform on AWS",
      },
      {
        title: "Cutting the cost of an AI stack in production",
      },
      {
        title: "Real-time data pipelines for decision-making",
      },
    ],
    link: "hartza.capital",
  },

  cloudPartners: {
    eyebrow: "The collective",
    title: "I do not work alone.",
    accent: "A collective of certified AWS experts.",
    bodyOneLead: "Arktos Consulting is a member of",
    bodyOne:
      ", a collective of certified AWS architects and engineers. Every member commits personally to their projects.",
    bodyTwoLead:
      "You always talk to me. When a subject falls outside my scope, one of them steps in. The AWS",
    bodyTwoTail: "partnership is held by the collective.",
    ctaPrimary: "Meet the collective",
    badgeAlt: "AWS Select Consulting Partner",
    stats: [
      { value: "50+", label: "AWS certifications maintained" },
      { value: "11", label: "areas of expertise covered" },
      { value: "10", label: "architects and engineers" },
    ],
  },

  reassurance: {
    eyebrow: "How I work",
    title: "Four things",
    accent: "that do not change.",
  },

  faq: {
    eyebrow: "Questions",
    title: "What I get asked",
    accent: "before we start.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about",
    accent: "your platform.",
    lede: "Reply within one business day. I will tell you whether I am the right person, including when the answer is no.",
    emailLabel: "Email",
    locationLabel: "Based in",
    location:
      "Lyon, France · registered office in Paris · hybrid/remote across Europe",
    linkedinLabel: "LinkedIn",
    calendlyTitle: "Book a thirty-minute slot",
  },

  footer: {
    tagline:
      "AWS & Kubernetes consulting and managed services for platforms that have to hold up in production.",
    servicesHeading: "Services",
    ecosystemHeading: "Ecosystem",
    contactHeading: "Contact",
    rss: "RSS feed",
    legalNotices: "Legal notices",
    audienceMeasurement: "Audience measurement",
    companyRecord: "Company record",
    rights: "Arktos Consulting",
  },

  notFound: {
    title: "404: Resource not found",
    description:
      "The requested page does not exist on this domain. Links to the site sections.",
    eyebrow: "Error 404",
    titleLead: "This key does not exist",
    titleAccent: "in this bucket.",
    lede: "The requested resource was deleted, moved, or never published. No action is needed on your side.",
    errorLabel: "Service error response",
    recoveryHeading: "Start again from a known section",
    footQuestion: "Looking for something else?",
    footContact: "Get in touch",
    footTail: " and I will point you the right way.",
    entries: [
      {
        href: "/en/",
        label: "Home",
        detail: "AWS/Kubernetes consulting and operations",
      },
      {
        href: "/en/consulting/",
        label: "Consulting",
        detail: "Audit and cloud architecture",
      },
      {
        href: "/en/managed-services/",
        label: "Managed services",
        detail: "Running EKS platforms",
      },
      {
        href: "/en/references/",
        label: "References",
        detail: "Engagements and technical context",
      },
    ],
  },

  blog: {
    title: "Blog: AWS architecture notes",
    eyebrow: "Blog",
    headingLead: "What the field",
    headingAccent: "teaches.",
    lede: "Notes on AWS architecture, Kubernetes and running platforms. Published when there is something specific to say, never to keep a cadence.",
    rssCta: "RSS feed",
    countSingular: "article",
    countPlural: "articles",
    empty: "No articles published yet. The first one is on its way:",
    emptyContact: "get in touch",
    emptyTail: "if a topic interests you.",
    breadcrumb: "Blog",
    articleFootLead:
      "A topic you want to dig into, or a platform in this state?",
    articleFootCta: "Let’s talk.",
    feedTitle: "Arktos Consulting: technical notes",
    feedDescription:
      "Notes on AWS architecture, Kubernetes and running platforms.",
  },

  legal: {
    title: "Legal notices",
    description:
      "Legal notices and personal data information for the Arktos Consulting website.",
    heading: "Legal notices",
    lede: "Legal information about the site publisher and how personal data is handled.",
    publisherHeading: "Site publisher",
    denomination: "Company name",
    legalForm: "Legal form",
    siretLabel: "Registration",
    registeredOffice: "Registered office",
    contactLabel: "Contact",
    registryText: "Details verifiable on the French business registry:",
    registryLink: "Arktos Consulting record",
    rcsLabel: "Trade register (RCS)",
    vatLabel: "VAT number",
    parentLabel: "Parent company",
    parentName: "SASU Hartza Capital",
    hostingHeading: "Hosting",
    hostLabel: "Host",
    addressLabel: "Address",
    phoneLabel: "Phone",
    dataHeading: "Personal data",
    dataTextOne:
      "This site sets no analytics or advertising cookies. Audience measurement, described below, collects no personal data.",
    dataTextTwo:
      "The contact form sends no data to a server: it composes a draft message in your own mail client, which you review and send yourself. Anything you choose to send by email or LinkedIn is used solely to answer your request, and kept only for the time that exchange requires.",
    dataTextThree:
      "Under the General Data Protection Regulation, you have the right to access, rectify and erase data concerning you. To exercise it, write to",
    analyticsHeading: "Audience measurement",
    analyticsTextOne:
      "Audience is measured with Plausible, hosted in the European Union. Plausible sets no cookie, stores nothing in your browser, and keeps neither IP address nor device identifier: the measurements only serve to know which pages are read and how the site is used.",
    analyticsTextTwo:
      "The measurements are processed for my account only, on European infrastructure, and are neither resold nor cross-referenced with another processing activity. Since no cookie is set and no personal data is collected, there is nothing to consent to — you can still object to this measurement, below.",
    analyticsOptOutLead: "You are currently being measured.",
    analyticsOptOutButton: "Opt out of audience measurement",
    analyticsOptOutDone:
      "You are no longer measured: Plausible will collect nothing on your next visits from this browser.",
    analyticsOptInButton: "Re-enable audience measurement",
    ipHeading: "Intellectual property",
    ipTextLead:
      "The content of this site, both text and graphic elements, is the property of ",
    ipTextTail:
      ", unless stated otherwise. Client trademarks and logos belong to their respective owners and are reproduced for reference.",
    shareCapital: "with a share capital of",
  },
}

export default en
