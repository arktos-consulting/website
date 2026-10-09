/**
 * French dictionary: the source of truth for interface labels.
 *
 * `en.ts` imports the type derived from this file. A key present in French and
 * missing in English fails the build, which makes shipping a page with an
 * untranslated label impossible. That is why this file is TypeScript rather
 * than JSON: JSON would produce no compile error and would let `undefined`
 * render in production.
 *
 * Values are typed `string` (never literals) so that a different translation
 * remains valid.
 *
 * URLs appear in `nav.links` and in `notFound.entries` on purpose: each locale
 * has its own translated URL segments, so they are content, not routing logic.
 */

const fr = {
  /** Labels shared across several pages. */
  common: {
    brandSub: "Consulting",
    backToTop: "Retour en haut",
    skipToContent: "Aller au contenu principal",
    allArticles: "Tous les articles",
    readingTimeSuffix: "min de lecture",
    byAuthor: "Par",
    updatedOn: "Article mis à jour le",
    onThisPage: "Sur cette page",
    publishedIn: "Publié le",
  },

  /** Header and navigation. */
  nav: {
    openMenu: "Ouvrir le menu de navigation",
    mainNavigation: "Navigation principale",
    home: "retour à l'accueil",
    cta: "Parlons de votre plateforme",
    languageSwitch: "Changer de langue",
    links: [
      { href: "/conseil/", label: "Conseil" },
      { href: "/ia/", label: "IA" },
      { href: "/infogerance/", label: "Infogérance" },
      { href: "/blog/", label: "Blog" },
      { href: "/references/", label: "Références" },
      { href: "/cas-clients/", label: "Cas clients" },
    ],
  },

  /** Home page — hero section. */
  hero: {
    /** Full home page title, used when the page overrides the layout default. */
    metaTitle: "Expert AWS indépendant, Kubernetes & Ingénierie à Lyon",
    /** Home page meta description. */
    metaDescription:
      "Expert AWS indépendant à Lyon : audit d'architecture, cloud souverain, agents LLM et automatisation, exploitation de clusters EKS, maîtrise des coûts.",
    eyebrow: "Expert AWS indépendant · Lyon",
    titleLead: "Un expert AWS dédié",
    titleAccent: "à votre plateforme.",
    ledeLead:
      "Vous livrez votre produit. Je fais en sorte que l’architecture AWS tienne, coûte juste, et s’exploite simplement.",
    ledeModes: "Mission ponctuelle ou accompagnement continu",
    ledeReply: "réponse sous 24 h.",
    ctaPrimary: "Discutons de votre besoin",
    ctaSecondary: "Voir les prestations",
    /** Stat values and labels: short and displayable in two columns. */
    statYearsLabel: "ans d'expérience",
    statClientsLabel: "clients servis",
    portraitAlt: "Portrait d’Aurelien Perrier",
  },

  /** Home page — services. */
  services: {
    eyebrow: "Prestations",
    title: "Ce que je prends",
    accent: "en charge.",
    lede: "Quatre domaines, tenus par la même personne. Modules génériques et réutilisables quand c’est pertinent, du sur-mesure quand ça l’exige. Chaque mission est cadrée avant d’être facturée.",
  },

  /** Home page and references page. */
  references: {
    eyebrow: "Références",
    title: "Des missions dont le détail technique est public.",
    ledeCompact:
      "Bpifrance, SNCF, Doctolib, Canal+, Yseop. Le détail de chaque mission est sur la page Références.",
    ledeFull:
      "Les missions longues chez Bpifrance, SNCF, Doctolib, Canal+ et Yseop sont nommées. Ce qui compte pour juger un travail d’infrastructure reste toutefois le détail : contexte, contraintes, technologies.",
    seeAll: "Les",
    seeAllSuffix: "missions",
    footnote:
      "Les missions nommées le sont avec l’accord des clients concernés, sauf mention contraire.",
    /** References page hero. */
    pageTitle: "Références: missions AWS & Kubernetes",
    heroTitle: "Le détail technique des missions.",
    heroAccent: "",
    heroLedeLead: "missions : contexte, contrainte et résultat.",
  },

  /** Case study pages. */
  caseStudy: {
    contextHeading: "Contexte & contrainte",
    deliveredHeading: "Ce qui a été livré",
    outcomeHeading: "Résultat",
    stackHeading: "Pile technique",
    miscHeading: "Travaux récurrents",
    otherCasesHeading: "Autres cas clients",
    allCases: "Tous les cas clients",
  },

  /** Notice on the case carried out for the parent company. */
  parentStudy: {
    badge: "Ma propre société",
    notice:
      "Hartza Capital détient Arktos Consulting : cette plateforme est la mienne, pas celle d’un client.",
  },

  /** Hartza Capital proof section. */
  hartza: {
    eyebrow: "En production chez moi",
    title: "Votre plateforme,",
    accent: "comme la mienne.",
    body: "Hartza Capital, ma fintech d’investissement, fait tourner du trading algorithmique en production sur AWS depuis 4 ans. HPC, data, API, workflows event-driven.",
    articlesHeading: "Comment c’est construit",
    articles: [
      {
        title: "Construire une plateforme de trading algorithmique sur AWS",
        href: "#",
      },
      {
        title: "Réduire les coûts d’une stack IA en production",
        href: "#",
      },
      {
        title: "Pipelines data en temps réel pour la prise de décision",
        href: "#",
      },
    ],
    link: "hartza.capital",
  },

  /** Cloud Partners section. */
  cloudPartners: {
    eyebrow: "Le collectif",
    title: "Je ne travaille pas seul.",
    accent: "Un collectif d’experts AWS certifiés.",
    bodyOneLead: "Arktos Consulting est membre de",
    bodyOne:
      ", un collectif d’architectes et d’ingénieurs AWS certifiés. Chaque membre s’engage directement sur ses projets.",
    bodyTwoLead:
      "Vous parlez toujours à moi. Quand un sujet sort de mon périmètre, c’est l’un d’eux qui intervient. Le partenariat AWS",
    bodyTwoTail: "est porté par le collectif.",
    ctaPrimary: "Découvrir le collectif",
    badgeAlt: "AWS Select Consulting Partner",
    stats: [
      { value: "50+", label: "certifications AWS maintenues" },
      { value: "11", label: "domaines d'expertise couverts" },
      { value: "10", label: "architectes et ingénieurs" },
    ],
  },

  /** Contact section. */
  contact: {
    eyebrow: "Contact",
    title: "Parlons de",
    accent: "votre plateforme.",
    lede: "Réponse sous un jour ouvré. Je vous dis si je suis la bonne personne, y compris quand la réponse est non.",
    emailLabel: "E-mail",
    locationLabel: "Localisation",
    location: "Lyon, France · hybride/remote accepté",
    linkedinLabel: "LinkedIn",
    calendlyTitle: "Réservez un créneau de trente minutes",
  },

  /** Footer. */
  footer: {
    tagline:
      "Conseil et infogérance AWS & Kubernetes pour des plateformes qui doivent tenir en production.",
    servicesHeading: "Prestations",
    ecosystemHeading: "Écosystème",
    contactHeading: "Contact",
    rss: "Flux RSS",
    legalNotices: "Mentions légales",
    audienceMeasurement: "Mesure d’audience",
    companyRecord: "Fiche entreprise",
    rights: "Arktos Consulting",
  },

  /** 404 page. */
  notFound: {
    title: "404: Ressource introuvable",
    description:
      "La page demandée n'existe pas sur ce domaine. Liens vers les sections du site.",
    eyebrow: "Erreur 404",
    titleLead: "Cette clé n’existe pas",
    titleAccent: "dans ce bucket.",
    lede: "La ressource demandée a été supprimée, déplacée, ou n’a jamais été publiée. Aucune action de votre côté n’est nécessaire.",
    errorLabel: "Réponse d'erreur du service",
    recoveryHeading: "Reprendre depuis une section connue",
    footQuestion: "Vous cherchiez autre chose ?",
    footContact: "Écrivez-moi",
    footTail: ", je vous oriente.",
    entries: [
      {
        href: "/",
        label: "Accueil",
        detail: "Conseil et infogérance AWS/Kubernetes",
      },
      {
        href: "/conseil/",
        label: "Conseil",
        detail: "Audit et architecture cloud",
      },
      {
        href: "/infogerance/",
        label: "Infogérance",
        detail: "Exploitation de plateformes EKS",
      },
      {
        href: "/references/",
        label: "Références",
        detail: "Missions et contexte technique",
      },
    ],
  },

  /** Blog. */
  blog: {
    title: "Blog: notes d’architecture AWS",
    eyebrow: "Blog",
    headingLead: "Ce que le terrain",
    headingAccent: "apprend.",
    lede: "Notes sur l’architecture AWS, Kubernetes et l’exploitation de plateformes. Publié quand il y a quelque chose de précis à dire, jamais pour tenir un rythme.",
    rssCta: "Flux RSS",
    countSingular: "article",
    countPlural: "articles",
    empty: "Aucun article publié pour le moment. Le premier arrive bientôt:",
    emptyContact: "écrivez-moi",
    emptyTail: "si un sujet vous intéresse.",
    breadcrumb: "Blog",
    articleFootLead: "Un sujet à creuser, ou une plateforme dans cet état ?",
    articleFootCta: "Parlons-en.",
    feedTitle: "Arktos Consulting: notes techniques",
    feedDescription:
      "Notes sur l'architecture AWS, Kubernetes et l'exploitation de plateformes.",
  },

  /** Legal notices. */
  legal: {
    title: "Mentions légales",
    description:
      "Mentions légales et informations sur les données personnelles du site Arktos Consulting.",
    heading: "Mentions légales",
    lede: "Informations légales relatives à l’éditeur du site et au traitement des données personnelles.",
    publisherHeading: "Éditeur du site",
    denomination: "Dénomination",
    legalForm: "Forme juridique",
    siretLabel: "SIREN",
    registeredOffice: "Siège",
    contactLabel: "Contact",
    registryText: "Informations vérifiables sur l’annuaire des entreprises :",
    registryLink: "fiche Arktos Consulting",
    rcsLabel: "RCS",
    vatLabel: "TVA intracommunautaire",
    parentLabel: "Société mère",
    parentName: "SASU Hartza Capital",
    hostingHeading: "Hébergement",
    hostLabel: "Hébergeur",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    dataHeading: "Données personnelles",
    dataTextOne:
      "Ce site ne dépose aucun cookie de mesure d’audience ni de suivi publicitaire, et n’utilise aucun outil d’analyse tiers pour son propre compte.",
    dataTextTwo:
      "Le formulaire de contact ne transmet aucune donnée à un serveur : il compose un brouillon de message dans votre propre logiciel de messagerie, que vous relisez et envoyez vous-même. Les informations que vous choisissez d’envoyer par e-mail ou par LinkedIn sont traitées dans le seul but de répondre à votre demande, et conservées le temps nécessaire à cet échange.",
    dataTextThree:
      "Conformément au Règlement général sur la protection des données, vous disposez d’un droit d’accès, de rectification et d’effacement des données vous concernant. Pour l’exercer, écrivez à",
    analyticsHeading: "Mesure d’audience",
    analyticsTextOne:
      "L’audience du site est mesurée avec Matomo, hébergé dans l’Union européenne. Aucune donnée n’est transmise à un tiers : les mesures servent uniquement à savoir quelles pages sont lues et comment le site est utilisé.",
    analyticsTextTwo:
      "Cette mesure est exemptée de consentement par la CNIL : Matomo fonctionne ici sans cookie, l’adresse IP est anonymisée avant tout traitement, et aucune donnée n’est recoupée avec un autre traitement ni suivie d’un site à l’autre. Vous pouvez à tout moment vous opposer à cette mesure.",
    analyticsOptOutLead: "Vous êtes actuellement mesuré.",
    analyticsOptOutButton: "M’opposer à la mesure d’audience",
    analyticsOptOutDone:
      "Vous n’êtes plus mesuré : aucune donnée n’est collectée sur votre visite sur ce navigateur.",
    analyticsOptInButton: "Réactiver la mesure d’audience",
    ipHeading: "Propriété intellectuelle",
    ipTextLead:
      "Les contenus de ce site, textes et éléments graphiques, sont la propriété d’",
    ipTextTail:
      ", sauf mention contraire. Les marques et logos de clients cités appartiennent à leurs titulaires respectifs et sont reproduits à titre de référence.",
    shareCapital: "au capital de",
  },
} as const

/** Recursively widens every leaf value of `T` to `string`, preserving object keys and `readonly` array shapes. */
type Shape<T> = T extends readonly (infer U)[]
  ? readonly Shape<U>[]
  : T extends object
    ? { readonly [K in keyof T]: Shape<T[K]> }
    : string

/** The dictionary type for a locale, with every value widened to `string`. */
export type Dictionary = Shape<typeof fr>

export default fr
