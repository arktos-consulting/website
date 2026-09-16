/**
 * Pillar content entry point.
 *
 * Resolves pillar prose by locale and owns the URL segments for both languages.
 * Centralising the routes here means `hreflang`, the language switch and the
 * canonical URL all read from one mapping: a translated slug cannot drift
 * between the two language versions of a page.
 */
import type { Locale } from '@/i18n';
import type { PillarBundle, PillarRoutes } from './types';
import fr from './fr';
import en from './en';

/**
 * URL segment of each pillar, per locale.
 *
 * English segments are translated rather than prefixed duplicates, so that the
 * English site reads as its own site: `/en/sovereign-cloud/` rather than
 * `/en/cloud-souverain/`.
 */
export const PILLAR_ROUTES: PillarRoutes = {
  consulting: { fr: 'conseil', en: 'consulting' },
  sovereignCloud: { fr: 'cloud-souverain', en: 'sovereign-cloud' },
  ai: { fr: 'ia', en: 'ai' },
  managedServices: { fr: 'infogerance', en: 'managed-services' },
};

const BUNDLES: Record<Locale, PillarBundle> = { fr, en };

/**
 * Returns the pillar content for a locale.
 *
 * @param locale Locale to load content for
 * @returns Every pillar page's content for that locale
 */
export function getPillars(locale: Locale): PillarBundle {
  return BUNDLES[locale];
}

/**
 * Builds the path of a pillar page in a given locale.
 *
 * @param id Pillar identifier
 * @param locale Locale the path is for
 * @returns The absolute path, with leading and trailing slashes
 */
export function pillarPath(id: keyof PillarRoutes, locale: Locale): string {
  const segment = PILLAR_ROUTES[id][locale];
  return locale === 'fr' ? `/${segment}/` : `/en/${segment}/`;
}

/**
 * Builds the equivalent paths of a pillar page in both locales.
 *
 * Shaped for the layout's `paths` prop, which derives the canonical URL, the
 * `hreflang` alternates and the language switch target from it.
 *
 * @param id Pillar identifier
 * @returns The path of that pillar in French and in English
 */
export function pillarPaths(id: keyof PillarRoutes): Record<Locale, string> {
  return { fr: pillarPath(id, 'fr'), en: pillarPath(id, 'en') };
}

export type {
  PillarBundle,
  PillarId,
  PillarBase,
  PillarPhase,
  PillarCard,
  PillarHeading,
  PillarProof,
  PillarCta,
  ConsultingPillar,
  SovereignCloudPillar,
  AiPillar,
  ManagedServicesPillar,
} from './types';
