/**
 * Constantes d'identité du site.
 *
 * Ces valeurs alimentent le référencement, les données structurées, les
 * coordonnées affichées et le calcul des années d'expérience. Elles doivent
 * rester cohérentes avec les profils externes (LinkedIn, annuaire des
 * entreprises) : les moteurs génératifs agrègent ces sources et une
 * description divergente brouille l'entité.
 */

/** Identité de la société et du consultant. */
export const SITE = {
  url: 'https://www.arktos.consulting',
  name: 'Arktos Consulting',
  legalName: 'EURL Arktos Consulting',
  legalForm: 'EURL',
  shareCapital: '1 000 €',
  siret: '90878661900019',
  vatId: 'FR65908786619',
  registryUrl:
    'https://annuaire-entreprises.data.gouv.fr/entreprise/arktos-consulting-908786619',
  founder: 'Aurélien Perrier',
  founderJobTitle: 'Freelance DevOps & Cloud Architect',
  email: 'aperrier@arktos.consulting',
  emailHref: 'mailto:aperrier@arktos.consulting',
  city: 'Lyon',
  region: 'Auvergne-Rhône-Alpes',
  country: 'FR',
  locale: 'fr_FR',
  lang: 'fr',
  calendly: 'https://calendly.com/aperrier-arktos/30min',
  cvPath: '/files/cv.pdf',
  /** Coordonnées approximatives de Lyon, pour les données structurées. */
  geo: { latitude: 45.764, longitude: 4.8357 },
} as const;

/** Profils externes vérifiables, déclarés dans `sameAs`. */
export const PROFILES = {
  linkedin: 'https://www.linkedin.com/in/perriea-cloud/',
  github: 'https://github.com/perriea',
  meetup:
    'https://www.meetup.com/fr-FR/aws-lyon-amazon-web-services-user-group/',
  cloudPartners: 'https://www.cloud-partners.fr/',
  awsPartner:
    'https://partners.amazonaws.com/partners/0010h00001e9C3hAAE/Cloud%20Partners',
  hartza: 'https://www.hartza.capital/',
} as const;

/**
 * Repères de carrière servant au calcul automatique des années d'expérience.
 *
 * Les dates sont volontairement uniques : afficher « 8 ans » ici et « 9 ans »
 * là détruit la crédibilité, et un chiffre recopié à la main devient faux dès
 * l'année suivante. On calcule, on ne recopie pas.
 */
export const CAREER = {
  /** Première expérience professionnelle (Claranet, alternance). */
  start: { year: 2016, month: 12 },
  /** Première production Kubernetes (Doctolib, via Wescale). */
  kubernetesStart: { year: 2018, month: 12 },
  /** Passage en activité indépendante (première mission freelance, SEIITRA). */
  freelanceStart: { year: 2021, month: 8 },
  /** Création de la société. */
  companyStart: { year: 2021, month: 9 },
} as const;

/** Navigation principale, partagée entre l'entête et le pied de page. */
export const NAV_LINKS = [
  { href: '/conseil/', label: 'Conseil' },
  { href: '/cloud-souverain/', label: 'Cloud souverain' },
  { href: '/ia/', label: 'IA' },
  { href: '/infogerance/', label: 'Infogérance' },
  { href: '/blog/', label: 'Blog' },
  { href: '/references/', label: 'Références' },
] as const;
