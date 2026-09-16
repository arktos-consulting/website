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
    brandSub: 'Consulting',
    backToTop: 'Retour en haut',
    skipToContent: 'Aller au contenu principal',
    readMore: 'En savoir plus',
    allArticles: 'Tous les articles',
    readingTimeSuffix: 'min de lecture',
    byAuthor: 'Par',
    updatedOn: 'Article mis à jour le',
    onThisPage: 'Sur cette page',
    publishedIn: 'Publié le',
  },

  /** Header and navigation. */
  nav: {
    openMenu: 'Ouvrir le menu de navigation',
    mainNavigation: 'Navigation principale',
    home: "retour à l'accueil",
    cta: 'Parlons de votre projet',
    languageSwitch: 'Changer de langue',
    links: [
      { href: '/conseil/', label: 'Conseil' },
      { href: '/cloud-souverain/', label: 'Cloud souverain' },
      { href: '/ia/', label: 'IA' },
      { href: '/infogerance/', label: 'Infogérance' },
      { href: '/blog/', label: 'Blog' },
      { href: '/references/', label: 'Références' },
    ],
  },

  /** Home page — hero section. */
  hero: {
    /** Full home page title, used when the page overrides the layout default. */
    metaTitle: 'Freelance AWS, Kubernetes & Ingénierie à Lyon',
    /** Home page meta description. */
    metaDescription:
      "Freelance AWS et Kubernetes à Lyon : audit d'architecture, cloud souverain, agents LLM et automatisation, exploitation de clusters EKS, maîtrise des coûts.",
    eyebrow: 'Freelance AWS & Kubernetes · Lyon',
    titleLead: 'J’exploite et je fiabilise',
    titleAccent: 'votre plateforme cloud.',
    lede:
      'Audit d’architecture, gouvernance multi-comptes, plans FinOps. Exploitation de clusters EKS, supervision, incidents, mises à jour. Agents LLM et automatisation sur vos données métier. Conception et construction de services managés pour un cloud souverain.',
    ctaPrimary: 'Parlons de votre projet',
    ctaSecondary: 'Voir les prestations',
    clientsLabel: 'Ils m’ont fait confiance',
    /** Stat labels. Values are computed or fixed, never translated. */
    statYears: "ans d'expérience",
    statKubernetes: 'ans sur Kubernetes',
    statClusters: 'clusters opérés',
    statClustersValue: '300+',
  },

  /** Home page — services. */
  services: {
    eyebrow: 'Prestations',
    title: 'Ce que je prends',
    accent: 'en charge.',
    lede:
      'Quatre domaines, tenus par la même personne — de l’audit à l’exploitation. Chaque mission est cadrée avant d’être facturée.',
  },

  /** Home page — differentiators. */
  whyUs: {
    eyebrow: 'Pourquoi travailler avec moi',
    title: 'Un interlocuteur unique,',
    accent: 'du cadrage à la production.',
  },

  /** Home page and references page. */
  references: {
    eyebrow: 'Références',
    title: 'Des missions dont',
    accent: 'le détail technique est public.',
    ledeCompact:
      'Bpifrance, SNCF, Doctolib, Canal+, Yseop. Le détail de chaque mission est sur la page Références.',
    ledeFull:
      'Les missions longues chez Bpifrance, SNCF, Doctolib, Canal+ et Yseop sont nommées. Ce qui compte pour juger un travail d’infrastructure reste toutefois le détail : contexte, contraintes, technologies.',
    seeAll: 'Les',
    seeAllSuffix: 'missions',
    footnote: 'Les missions nommées le sont avec l’accord des clients concernés.',
    /** References page hero. */
    pageTitle: 'Références — missions AWS & Kubernetes',
    heroTitle: 'Le détail technique',
    heroAccent: 'plutôt que les logos.',
    heroLedeLead: 'missions : contexte, contrainte et résultat.',
  },

  /** Cloud Partners section. */
  cloudPartners: {
    eyebrow: 'Le collectif',
    title: 'Pas une ESN.',
    accent: 'Un collectif d’experts AWS.',
    bodyOneLead: 'Arktos Consulting est membre de',
    bodyOne:
      ', un collectif d’architectes et d’ingénieurs AWS certifiés. Ce n’est pas un réseau commercial : chaque membre s’engage directement sur les projets qu’il porte.',
    bodyTwoLead:
      'Concrètement, vous gardez un interlocuteur unique sur votre projet, mais vous accédez à dix spécialistes quand le sujet l’exige : sécurité, données, machine learning, FinOps, IoT. Le partenariat AWS',
    bodyTwoTail: 'est porté par le collectif et ses 50+ certifications.',
    ctaPrimary: 'Découvrir le collectif',
    ctaSecondary: 'Fiche partenaire AWS',
    badgeAlt: 'AWS Select Consulting Partner',
    stats: [
      { value: '50+', label: 'certifications AWS maintenues' },
      { value: '11', label: "domaines d'expertise couverts" },
      { value: '10', label: 'architectes et ingénieurs' },
    ],
  },

  /** FAQ section. */
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Avant de',
    accent: 'démarrer.',
  },

  /** Contact section. */
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de',
    accent: 'votre plateforme.',
    lede:
      'Réponse sous un jour ouvré. Je vous dis si je suis la bonne personne — y compris quand la réponse est non.',
    emailLabel: 'E-mail',
    locationLabel: 'Localisation',
    location: 'Lyon, France · remote accepté',
    linkedinLabel: 'LinkedIn',
    calendlyHint: 'Ou réservez directement trente minutes.',
    calendlyCta: 'Réserver un créneau',
  },

  /** Contact form. */
  form: {
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    companyLabel: 'Société',
    companyOptional: '(facultatif)',
    companyPlaceholder: 'Nom de votre société',
    needLabel: 'Votre besoin',
    needPlaceholder:
      'Décrivez en quelques lignes le contexte et ce que vous cherchez à résoudre.',
    submit: 'Préparer le message',
    success:
      'Votre client de messagerie devrait s’ouvrir avec le message pré-prérempli. S’il ne s’ouvre pas, écrivez directement à',
    privacy:
      'Aucune donnée n’est envoyée à un serveur : le message est composé dans votre messagerie, que vous relisez avant envoi.',
    subject: 'Demande de contact',
    fieldName: 'Nom',
    fieldCompany: 'Société',
  },

  /** Footer. */
  footer: {
    tagline:
      'Conseil et infogérance AWS & Kubernetes pour des plateformes qui doivent tenir en production.',
    servicesHeading: 'Prestations',
    ecosystemHeading: 'Écosystème',
    contactHeading: 'Contact',
    rss: 'Flux RSS',
    legalNotices: 'Mentions légales',
    companyRecord: 'Fiche entreprise',
    rights: 'Arktos Consulting',
  },

  /** 404 page. */
  notFound: {
    title: '404 — Ressource introuvable',
    description:
      "La page demandée n'existe pas sur ce domaine. Liens vers les sections du site.",
    eyebrow: 'Erreur 404',
    titleLead: 'Cette clé n’existe pas',
    titleAccent: 'dans ce bucket.',
    lede:
      'La ressource demandée a été supprimée, déplacée, ou n’a jamais été publiée. Aucune action de votre côté n’est nécessaire.',
    errorLabel: "Réponse d'erreur du service",
    recoveryHeading: 'Reprendre depuis une section connue',
    footQuestion: 'Vous cherchiez autre chose ?',
    footContact: 'Écrivez-moi',
    footTail: ', je vous oriente.',
    entries: [
      { href: '/', label: 'Accueil', detail: 'Conseil et infogérance AWS/Kubernetes' },
      { href: '/conseil/', label: 'Conseil', detail: 'Audit et architecture cloud' },
      { href: '/infogerance/', label: 'Infogérance', detail: 'Exploitation de plateformes EKS' },
      { href: '/references/', label: 'Références', detail: 'Missions et contexte technique' },
    ],
  },

  /** Blog. */
  blog: {
    title: 'Blog — notes d’architecture AWS',
    eyebrow: 'Blog',
    headingLead: 'Ce que le terrain',
    headingAccent: 'apprend.',
    lede:
      'Notes sur l’architecture AWS, Kubernetes et l’exploitation de plateformes. Publié quand il y a quelque chose de précis à dire, jamais pour tenir un rythme.',
    rssCta: 'Flux RSS',
    countSingular: 'article',
    countPlural: 'articles',
    empty: 'Aucun article publié pour le moment. Le premier arrive bientôt —',
    emptyContact: 'écrivez-moi',
    emptyTail: 'si un sujet vous intéresse.',
    breadcrumb: 'Blog',
    articleFootLead: 'Un sujet à creuser, ou une plateforme dans cet état ?',
    articleFootCta: 'Parlons-en.',
    feedTitle: 'Arktos Consulting — notes techniques',
    feedDescription:
      "Notes sur l'architecture AWS, Kubernetes et l'exploitation de plateformes.",
  },

  /** Legal notices. */
  legal: {
    title: 'Mentions légales',
    description:
      'Mentions légales et informations sur les données personnelles du site Arktos Consulting.',
    heading: 'Mentions légales',
    lede:
      'Informations légales relatives à l’éditeur du site et au traitement des données personnelles.',
    publisherHeading: 'Éditeur du site',
    denomination: 'Dénomination',
    legalForm: 'Forme juridique',
    siretLabel: 'SIRET',
    registeredOffice: 'Siège',
    contactLabel: 'Contact',
    registryText: 'Informations vérifiables sur l’annuaire des entreprises :',
    registryLink: 'fiche Arktos Consulting',
    hostingHeading: 'Hébergement',
    hostingText:
      'Le site est hébergé par GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis) et distribué via le réseau Cloudflare.',
    dataHeading: 'Données personnelles',
    dataTextOne:
      'Ce site ne dépose aucun cookie de mesure d’audience ni de suivi publicitaire, et n’utilise aucun outil d’analyse tiers.',
    dataTextTwo:
      'Le formulaire de contact ne transmet aucune donnée à un serveur : il compose un brouillon de message dans votre propre logiciel de messagerie, que vous relisez et envoyez vous-même. Les informations que vous choisissez d’envoyer par e-mail ou par LinkedIn sont traitées dans le seul but de répondre à votre demande, et conservées le temps nécessaire à cet échange.',
    dataTextThree:
      'Conformément au Règlement général sur la protection des données, vous disposez d’un droit d’accès, de rectification et d’effacement des données vous concernant. Pour l’exercer, écrivez à',
    ipHeading: 'Propriété intellectuelle',
    ipTextLead:
      'Les contenus de ce site, textes et éléments graphiques, sont la propriété d’',
    ipTextTail:
      ', sauf mention contraire. Les marques et logos de clients cités appartiennent à leurs titulaires respectifs et sont reproduits à titre de référence.',
    shareCapital: 'au capital de',
  },
} as const;

/**
 * Dictionary shape, with every value widened to `string`.
 *
 * Without this transformation, `as const` would freeze the French text and make
 * any translation invalid. The goal is to constrain the structure, not the
 * content. Arrays and keys stay `readonly` so they remain assignable to the
 * source dictionary, which is declared `as const`.
 */
type Shape<T> = T extends readonly (infer U)[]
  ? readonly Shape<U>[]
  : T extends object
    ? { readonly [K in keyof T]: Shape<T[K]> }
    : string;

export type Dictionary = Shape<typeof fr>;

export default fr;
