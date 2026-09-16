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
import type { Dictionary } from './fr';

const en: Dictionary = {
  common: {
    brandSub: 'Consulting',
    backToTop: 'Back to top',
    skipToContent: 'Skip to main content',
    readMore: 'Learn more',
    allArticles: 'All articles',
    readingTimeSuffix: 'min read',
    byAuthor: 'By',
    updatedOn: 'Updated on',
    onThisPage: 'On this page',
    publishedIn: 'Published on',
  },

  nav: {
    openMenu: 'Open navigation menu',
    mainNavigation: 'Main navigation',
    home: 'back to home',
    cta: 'Let’s talk',
    languageSwitch: 'Switch language',
    links: [
      { href: '/en/consulting/', label: 'Consulting' },
      { href: '/en/sovereign-cloud/', label: 'Sovereign cloud' },
      { href: '/en/ai/', label: 'AI' },
      { href: '/en/managed-services/', label: 'Managed services' },
      { href: '/en/blog/', label: 'Blog' },
      { href: '/en/references/', label: 'References' },
    ],
  },

  hero: {
    metaTitle: 'AWS, Kubernetes & Platform Engineering Consultant in Lyon',
    metaDescription:
      'Independent AWS and Kubernetes consultant in Lyon: architecture reviews, sovereign cloud, LLM agents and automation, EKS operations and cost control.',
    eyebrow: 'AWS & Kubernetes consultant · Lyon, France',
    titleLead: 'I run and harden',
    titleAccent: 'your cloud platform.',
    lede:
      'Architecture reviews, multi-account governance, FinOps programmes. EKS operations, monitoring, incidents, upgrades. LLM agents and automation over your business data. Designing and building the managed services behind an internal cloud.',
    ctaPrimary: 'Let’s talk about your project',
    ctaSecondary: 'See what I do',
    clientsLabel: 'Selected clients',
    statYears: 'years of experience',
    statKubernetes: 'years on Kubernetes',
    statClusters: 'clusters operated',
    statClustersValue: '300+',
  },

  services: {
    eyebrow: 'Services',
    title: 'What I take',
    accent: 'off your plate.',
    lede:
      'Four areas, handled by the same person — from audit through to operations. Every engagement is scoped before it is billed.',
  },

  whyUs: {
    eyebrow: 'Why work with me',
    title: 'One person to talk to,',
    accent: 'from scoping to production.',
  },

  references: {
    eyebrow: 'References',
    title: 'Engagements whose',
    accent: 'technical detail is public.',
    ledeCompact:
      'A French public investment bank, the national railway operator, a health platform, a broadcaster, an AI software vendor. Full detail on the references page.',
    ledeFull:
      'Long engagements with a French public investment bank, the national railway operator, a health booking platform, a broadcaster and an AI software vendor are named. What actually matters when judging infrastructure work is the detail: context, constraints, technologies.',
    seeAll: 'All',
    seeAllSuffix: 'engagements',
    footnote: 'Named engagements are listed with the client’s agreement.',
    pageTitle: 'References — AWS & Kubernetes engagements',
    heroTitle: 'The technical detail',
    heroAccent: 'rather than the logos.',
    heroLedeLead: 'engagements: context, constraint and outcome.',
  },

  cloudPartners: {
    eyebrow: 'The collective',
    title: 'Not a consultancy.',
    accent: 'A collective of AWS experts.',
    bodyOneLead: 'Arktos Consulting is a member of',
    bodyOne:
      ', a collective of certified AWS architects and engineers. It is not a sales network: every member commits personally to the projects they take on.',
    bodyTwoLead:
      'In practice, you keep a single point of contact on your project, while gaining access to ten specialists when the subject calls for it: security, data, machine learning, FinOps, IoT. The AWS',
    bodyTwoTail: 'partnership is held by the collective, alongside its 50+ certifications.',
    ctaPrimary: 'Meet the collective',
    ctaSecondary: 'AWS partner profile',
    badgeAlt: 'AWS Select Consulting Partner',
    stats: [
      { value: '50+', label: 'AWS certifications maintained' },
      { value: '11', label: 'areas of expertise covered' },
      { value: '10', label: 'architects and engineers' },
    ],
  },

  faq: {
    eyebrow: 'Frequently asked',
    title: 'Before we',
    accent: 'start.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about',
    accent: 'your platform.',
    lede:
      'Reply within one business day. I will tell you whether I am the right person — including when the answer is no.',
    emailLabel: 'Email',
    locationLabel: 'Based in',
    location: 'Lyon, France · remote across Europe',
    linkedinLabel: 'LinkedIn',
    calendlyHint: 'Or book thirty minutes directly.',
    calendlyCta: 'Book a slot',
  },

  form: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    companyLabel: 'Company',
    companyOptional: '(optional)',
    companyPlaceholder: 'Your company name',
    needLabel: 'What you need',
    needPlaceholder:
      'Describe the context in a few lines, and what you are trying to solve.',
    submit: 'Draft the message',
    success:
      'Your email client should open with the message pre-filled. If it does not, write directly to',
    privacy:
      'No data is sent to a server: the message is composed in your own mail client, which you review before sending.',
    subject: 'Contact request',
    fieldName: 'Name',
    fieldCompany: 'Company',
  },

  footer: {
    tagline:
      'AWS & Kubernetes consulting and managed services for platforms that have to hold up in production.',
    servicesHeading: 'Services',
    ecosystemHeading: 'Ecosystem',
    contactHeading: 'Contact',
    rss: 'RSS feed',
    legalNotices: 'Legal notices',
    companyRecord: 'Company record',
    rights: 'Arktos Consulting',
  },

  notFound: {
    title: '404 — Resource not found',
    description:
      'The requested page does not exist on this domain. Links to the site sections.',
    eyebrow: 'Error 404',
    titleLead: 'This key does not exist',
    titleAccent: 'in this bucket.',
    lede:
      'The requested resource was deleted, moved, or never published. No action is needed on your side.',
    errorLabel: 'Service error response',
    recoveryHeading: 'Start again from a known section',
    footQuestion: 'Looking for something else?',
    footContact: 'Get in touch',
    footTail: ' and I will point you the right way.',
    entries: [
      { href: '/en/', label: 'Home', detail: 'AWS/Kubernetes consulting and operations' },
      { href: '/en/consulting/', label: 'Consulting', detail: 'Audit and cloud architecture' },
      { href: '/en/managed-services/', label: 'Managed services', detail: 'Running EKS platforms' },
      { href: '/en/references/', label: 'References', detail: 'Engagements and technical context' },
    ],
  },

  blog: {
    title: 'Blog — AWS architecture notes',
    eyebrow: 'Blog',
    headingLead: 'What the field',
    headingAccent: 'teaches.',
    lede:
      'Notes on AWS architecture, Kubernetes and running platforms. Published when there is something specific to say, never to keep a cadence.',
    rssCta: 'RSS feed',
    countSingular: 'article',
    countPlural: 'articles',
    empty: 'No articles published yet. The first one is on its way —',
    emptyContact: 'get in touch',
    emptyTail: 'if a topic interests you.',
    breadcrumb: 'Blog',
    articleFootLead: 'A topic you want to dig into, or a platform in this state?',
    articleFootCta: 'Let’s talk.',
    feedTitle: 'Arktos Consulting — technical notes',
    feedDescription:
      'Notes on AWS architecture, Kubernetes and running platforms.',
  },

  legal: {
    title: 'Legal notices',
    description:
      'Legal notices and personal data information for the Arktos Consulting website.',
    heading: 'Legal notices',
    lede:
      'Legal information about the site publisher and how personal data is handled.',
    publisherHeading: 'Site publisher',
    denomination: 'Company name',
    legalForm: 'Legal form',
    siretLabel: 'Registration',
    registeredOffice: 'Registered office',
    contactLabel: 'Contact',
    registryText: 'Details verifiable on the French business registry:',
    registryLink: 'Arktos Consulting record',
    hostingHeading: 'Hosting',
    hostingText:
      'This site is hosted on GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States) and served through the Cloudflare network.',
    dataHeading: 'Personal data',
    dataTextOne:
      'This site sets no analytics or advertising cookies, and uses no third-party tracking tool.',
    dataTextTwo:
      'The contact form sends no data to a server: it composes a draft message in your own mail client, which you review and send yourself. Anything you choose to send by email or LinkedIn is used solely to answer your request, and kept only for the time that exchange requires.',
    dataTextThree:
      'Under the General Data Protection Regulation, you have the right to access, rectify and erase data concerning you. To exercise it, write to',
    ipHeading: 'Intellectual property',
    ipTextLead:
      'The content of this site, both text and graphic elements, is the property of ',
    ipTextTail:
      ', unless stated otherwise. Client trademarks and logos belong to their respective owners and are reproduced for reference.',
    shareCapital: 'with a share capital of',
  },
};

export default en;
