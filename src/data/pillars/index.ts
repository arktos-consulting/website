/**
 * Pillar content entry point.
 *
 * Resolves pillar prose by locale. URLs are not handled here: the pair of paths a
 * pillar answers on lives in the shared translation table (`@/i18n/routes`), so
 * there is one place to change and one place to read.
 */
import type { Locale } from '@/i18n';
import type { PillarBundle } from './types';
import fr from './fr';
import en from './en';

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
