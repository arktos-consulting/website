import { SITE, PROFILES, CAREER } from '@/consts';
import { SERVICES, FAQ, MISSIONS } from '@/data/content';

/**
 * Construit le graphe de données structurées JSON-LD du site.
 *
 * Le graphe décrit une seule entité `ProfessionalService` reliée à son
 * fondateur, à ses offres et à ses certifications. `@graph` avec des `@id`
 * stables permet de réutiliser la même entité sur toutes les pages plutôt que
 * de la redéclarer en fragments concurrents, ce que les moteurs génératifs
 * agrègent mal.
 *
 * @param options Pages et contenus à relier à l'entité principale
 * @param options.pageUrl URL canonique de la page en cours
 * @param options.pageTitle Titre de la page en cours
 * @param options.pageDescription Description de la page en cours
 * @param options.certifications Certifications AWS à déclarer comme titres
 * @returns L'objet sérialisable à placer dans une balise `application/ld+json`
 */
export function buildStructuredData(options: {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  certifications?: readonly string[];
}): Record<string, unknown> {
  const { pageUrl, pageTitle, pageDescription, certifications = [] } = options;

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
    knowsAbout: [
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
    availableLanguage: { '@type': 'Language', name: 'French', alternateName: 'fr' },
    founder: { '@id': founderId },
    employee: { '@id': founderId },
    knowsAbout: [
      'Infogérance Kubernetes',
      'Architecture AWS',
      'Cloud souverain',
      'Cloud privé',
      'Intelligence artificielle',
      'Agents LLM',
      'MLOps',
      'FinOps',
      'GitOps',
      'Site Reliability Engineering',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Cloud Partners',
      url: PROFILES.cloudPartners,
      description:
        'Collectif de dix architectes et ingénieurs AWS certifiés, partenariat AWS Select Consulting.',
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
      name: 'Prestations de conseil et d’infogérance',
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
    inLanguage: SITE.lang,
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
    inLanguage: SITE.lang,
  };

  const graph: Record<string, unknown>[] = [
    organization,
    founder,
    website,
    webpage,
  ];

  // La FAQ est déclarée en WebPage sur l'accueil, qui porte la section
  // complète : les réponses visibles et le balisage doivent correspondre.
  if (pageUrl === `${SITE.url}/`) {
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
 * Construit le fil d'Ariane structuré d'une page secondaire.
 *
 * @param trail Étapes du fil, de la racine vers la page courante
 * @returns L'objet `BreadcrumbList` sérialisable, ou `null` si le fil est vide
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
 * Sérialise des données structurées pour insertion dans le HTML.
 *
 * L'échappement de `<` empêche une chaîne de contenu de refermer prématurément
 * la balise `script` et d'injecter du balisage dans la page.
 *
 * @param data Objet à sérialiser en JSON-LD
 * @returns La chaîne JSON prête à être insérée
 */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** Nombre de missions publiées, exposé pour les textes de réassurance. */
export const missionCount = MISSIONS.length;
