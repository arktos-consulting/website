/**
 * Site identity constants.
 *
 * These values feed search metadata, structured data, the contact details shown
 * on the page and the computed years of experience. They must stay consistent
 * with external profiles (LinkedIn, business registry): answer engines
 * aggregate those sources, and a diverging description blurs the entity.
 *
 * Navigation is deliberately absent here. Each locale owns its translated URL
 * segments, so the links live in `src/i18n/<locale>.ts`.
 */

/** Company and consultant identity. */
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
  calendly: 'https://calendly.com/aperrier-arktos/30min',
  cvPath: '/files/cv.pdf',
  /** Approximate coordinates of Lyon, for structured data. */
  geo: { latitude: 45.764, longitude: 4.8357 },
} as const;

/** Verifiable external profiles, declared in `sameAs`. */
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
 * Career markers used to compute years of experience automatically.
 *
 * The dates are deliberately single-sourced: showing "8 years" here and "9
 * years" there destroys credibility, and a hand-copied figure goes stale the
 * following year. Compute it, do not retype it.
 */
export const CAREER = {
  /** First professional experience (Claranet, apprenticeship). */
  start: { year: 2016, month: 12 },
  /** First Kubernetes production work (Doctolib, via Wescale). */
  kubernetesStart: { year: 2018, month: 12 },
  /** Move to independent work (first freelance engagement, SEIITRA). */
  freelanceStart: { year: 2021, month: 8 },
  /** Company incorporation. */
  companyStart: { year: 2021, month: 9 },
} as const;
