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
  legalName: 'SASU Arktos Consulting',
  legalForm: 'SASU',
  shareCapital: '1 000 €',
  /**
   * SIREN, the company identifier shown to the public. The SIRET is not shown:
   * it identifies a single establishment, and the registered one moved from Lyon
   * to Paris, so a stored SIRET goes stale with the address.
   */
  siren: '908786619',
  vatId: 'FR65908786619',
  /** City of the registry where the company is registered (RCS). */
  rcsCity: 'Paris',
  registryUrl:
    'https://annuaire-entreprises.data.gouv.fr/entreprise/arktos-consulting-908786619',
  founder: 'Aurélien Perrier',
  /**
   * Job title declared in the structured data. DevOps describes the path that
   * led here, not the position held today.
   */
  founderJobTitle: 'AWS Cloud Architect',
  /** Year of first publication of the site, used as the copyright start. */
  copyrightFrom: 2022,
  email: 'aperrier@arktos.consulting',
  emailHref: 'mailto:aperrier@arktos.consulting',
  /** Where the work is carried out; not the registered head office. */
  city: 'Lyon',
  region: 'Auvergne-Rhône-Alpes',
  /**
   * Registered head office. The legal notices and the structured data state it;
   * it is not where the work is carried out.
   */
  headOffice: {
    /** Full address, written the way the legal notices display it. */
    full: '200 rue de la Croix Nivert, 75015 Paris, France',
    city: 'Paris',
    region: 'Île-de-France',
  },
  country: 'FR',
  calendly: 'https://calendly.com/aperrier-arktos/30min',
  cvPath: '/files/cv.pdf',
  /** Approximate coordinates of the head office, for structured data. */
  geo: { latitude: 48.8381, longitude: 2.2892 },
} as const;

/** Verifiable external profiles, declared in `sameAs`. */
export const PROFILES = {
  linkedin: 'https://www.linkedin.com/in/perriea/',
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

/**
 * Matomo audience measurement, configured for the CNIL consent exemption.
 *
 * The values are placeholders. `MATOMO_CONFIGURED` stays false until they are
 * replaced with the Matomo Cloud URL and site identifier, so the tracking code
 * is not emitted at all and no request reaches a host that does not exist.
 *
 * The exemption holds only while the instance keeps Matomo's defaults: cookies
 * disabled, IP anonymised before processing, no cross-domain identifier, no
 * User ID, no data reuse and no transfer outside the European Union.
 */
export const MATOMO = {
  /** Base URL of the Matomo instance, trailing slash included. */
  url: 'https://MATOMO_URL/',
  /** Site identifier in the Matomo account. */
  siteId: 'MATOMO_SITE_ID',
} as const;

/** Whether the Matomo placeholders above have been replaced with real values. */
export const MATOMO_CONFIGURED =
  !MATOMO.url.includes('MATOMO_URL') && !MATOMO.siteId.includes('MATOMO_SITE_ID');

/**
 * Hosting provider, as the legal notices must declare it.
 *
 * The LCEN requires its name, address and phone number. The values stay
 * language-neutral here; only their labels are translated.
 */
export const HOSTING = {
  /** Corporate name of the provider. */
  entity: 'Amazon Web Services EMEA SARL',
  /** Postal address of the provider. */
  address: '38 avenue John F. Kennedy, L-1855 Luxembourg',
  /** Phone number, as published by the provider. */
  phone: '+352 2789 0057',
  /** Same number, dialable. */
  phoneHref: 'tel:+35227890057',
} as const;
