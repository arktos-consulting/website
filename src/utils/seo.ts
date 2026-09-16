import { SITE, PROFILES, CAREER } from '@/consts';
import type { Locale } from '@/i18n';
import { OG_LOCALES, getDictionary } from '@/i18n';
import { getContent } from '@/data';

/**
 * Topics declared per locale in `knowsAbout`.
 *
 * Structured data is language-dependent: an answer engine matching an English
 * query needs the English term to connect the entity to the topic.
 */
const KNOWS_ABOUT: Record<Locale, readonly string[]> = {
  fr: [
    'Amazon Web Services',
    'Kubernetes',
    'Cloud souverain',
    'Cloud privé',
    'Intelligence artificielle',
    'Agents LLM',
    'Terraform',
    'GitOps',
    'Go',
    'Python',
    'FinOps',
    'Site Reliability Engineering',
  ],
  en: [
    'Amazon Web Services',
    'Kubernetes',
    'Sovereign cloud',
    'Private cloud',
    'Artificial intelligence',
    'LLM agents',
    'Terraform',
    'GitOps',
    'Go',
    'Python',
    'FinOps',
    'Site Reliability Engineering',
  ],
};

/**
 * Builds the site's JSON-LD structured data graph.
 *
 * The graph describes a single `ProfessionalService` entity connected to its
 * founder, its offers and its certifications. Using `@graph` with stable `@id`
 * values lets every page reuse the same entity instead of redeclaring competing
 * fragments, which generative engines aggregate poorly.
 *
 * @param options Page and content to connect to the main entity
 * @param options.pageUrl Canonical URL of the current page
 * @param options.pageTitle Title of the current page
 * @param options.pageDescription Description of the current page
 * @param options.locale Locale the page is written in
 * @param options.certifications AWS certifications to declare as credentials
 * @returns The serialisable object to place in an `application/ld+json` tag
 */
export function buildStructuredData(options: {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  locale: Locale;
  certifications?: readonly string[];
}): Record<string, unknown> {
  const { pageUrl, pageTitle, pageDescription, locale, certifications = [] } = options;
  const { SERVICES } = getContent(locale);

  const organizationId = `${SITE.url}/#organization`;
  const founderId = `${SITE.url}/#${SITE.founder.toLowerCase().replace(/[^a-z]+/g, '-')}`;
  const websiteId = `${SITE.url}/#website`;

  const founder = {
    '@type': 'Person',
    '@id': founderId,
    name: SITE.founder,
    jobTitle: SITE.founderJobTitle,
    url: `${SITE.url}/`,
    email: `mailto:${SITE.email}`,
    knowsAbout: KNOWS_ABOUT[locale],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    worksFor: { '@id': organizationId },
    sameAs: [PROFILES.linkedin, PROFILES.github],
  };

  const organization = {
    '@type': ['ProfessionalService', 'Organization'],
    '@id': organizationId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    email: `mailto:${SITE.email}`,
    foundingDate: `${CAREER.companyStart.year}-${String(CAREER.companyStart.month).padStart(2, '0')}`,
    vatID: SITE.vatId,
    taxID: SITE.siret,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Place', name: 'Europe' },
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'French', alternateName: 'fr' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    founder: { '@id': founderId },
    employee: { '@id': founderId },
    knowsAbout: KNOWS_ABOUT[locale],
    memberOf: {
      '@type': 'Organization',
      name: 'Cloud Partners',
      url: PROFILES.cloudPartners,
      description: describeCloudPartners(locale),
    },
    sameAs: [PROFILES.linkedin, PROFILES.github, SITE.registryUrl],
    ...(certifications.length > 0 && {
      hasCredential: certifications.map((name) => ({
        '@type': 'EducationalOccupationalCredential',
        name,
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' },
      })),
    }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: offerCatalogName(locale),
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          serviceType: service.title,
          provider: { '@id': organizationId },
          areaServed: { '@type': 'Country', name: 'France' },
        },
      })),
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: locale,
    publisher: { '@id': organizationId },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: { '@id': websiteId },
    about: { '@id': organizationId },
    inLanguage: locale,
  };

  const graph: Record<string, unknown>[] = [organization, founder, website, webpage];

  // The FAQ is declared as a WebPage on the home page, which carries the full
  // section: the visible answers and the markup must match.
  if (pageUrl === `${SITE.url}/` || pageUrl === `${SITE.url}/en/`) {
    const { FAQ } = getContent(locale);
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      isPartOf: { '@id': pageUrl },
      mainEntity: FAQ.map((entry) => ({
        '@type': 'Question',
        name: entry.question,
        acceptedAnswer: { '@type': 'Answer', text: entry.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Describes the Cloud Partners collective for structured data.
 *
 * @param locale Locale the description is written in
 * @returns The collective's description
 */
function describeCloudPartners(locale: Locale): string {
  return locale === 'fr'
    ? 'Collectif de dix architectes et ingénieurs AWS certifiés, partenariat AWS Select Consulting.'
    : 'A collective of ten certified AWS architects and engineers, an AWS Select Consulting partner.';
}

/**
 * Names the offer catalogue for structured data.
 *
 * @param locale Locale the name is written in
 * @returns The catalogue name
 */
function offerCatalogName(locale: Locale): string {
  return locale === 'fr'
    ? 'Prestations de conseil et d’infogérance'
    : 'Consulting and managed services';
}

/**
 * Builds the structured breadcrumb trail of a secondary page.
 *
 * @param trail Trail steps, from the root towards the current page
 * @returns The serialisable `BreadcrumbList` object, or `null` when the trail is empty
 */
export function buildBreadcrumbs(
  trail: readonly { name: string; url: string }[],
): Record<string, unknown> | null {
  if (trail.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.name,
      item: step.url,
    })),
  };
}

/**
 * Serialises structured data for insertion into HTML.
 *
 * Escaping `<` stops a content string from closing the `script` tag early and
 * injecting markup into the page.
 *
 * @param data Object to serialise as JSON-LD
 * @returns The JSON string, ready to be inserted
 */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * Builds the `og:locale` value for a page.
 *
 * @param locale Locale of the page
 * @returns The Open Graph locale tag, such as `fr_FR`
 */
export function ogLocale(locale: Locale): string {
  return OG_LOCALES[locale];
}

/**
 * Builds the language switch label pair used in the header.
 *
 * @param locale Current page locale
 * @returns The other locale and its dictionary, ready to be linked
 */
export function alternateDictionary(locale: Locale) {
  const target: Locale = locale === 'fr' ? 'en' : 'fr';
  return { target, dictionary: getDictionary(target) };
}
