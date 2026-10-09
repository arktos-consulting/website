/**
 * Case study content entry point.
 *
 * Resolves case study prose by locale, and looks up the URL segment of each case
 * from the shared slug list. The segments are written there rather than in the
 * content modules, so the shared translation table can read them without pulling in
 * this module and its aliases.
 */
import type { Locale } from '@/i18n';
import { caseSlug } from './slugs';
import type { CaseStudy, CaseStudyBundle } from './types';
import fr from './fr';
import en from './en';

const BUNDLES: Record<Locale, CaseStudyBundle> = { fr, en };

/**
 * Fails the build when a content module and the slug list disagree.
 *
 * The URL a case answers on and its `hreflang` alternate are derived from the slug
 * list, so a slug typed twice must not be able to drift: a mismatch would publish
 * a page whose canonical URL is not the one the translation table declares.
 */
for (const locale of ['fr', 'en'] as const) {
  for (const entry of BUNDLES[locale].cases) {
    const declared = caseSlug(entry.id, locale);
    if (entry.slug !== declared) {
      throw new Error(
        `Case study "${entry.id}" (${locale}): slug "${entry.slug}" does not match the shared slug "${declared}".`,
      );
    }
  }
}

/**
 * Returns the case study content for a locale.
 *
 * @param locale Locale to load content for
 * @returns The hub page prose and every published case for that locale
 */
export function getCaseStudies(locale: Locale): CaseStudyBundle {
  return BUNDLES[locale];
}

/**
 * Returns the URL path of a case study page.
 *
 * @param id Case study key
 * @param locale Locale the path is written in
 * @returns The absolute path, with leading and trailing slashes
 */
export function casePath(id: string, locale: Locale): string {
  const segment = caseSlug(id, locale);
  return locale === 'fr' ? `/cas-clients/${segment}/` : `/en/case-studies/${segment}/`;
}

/**
 * Returns the path of the case study hub page.
 *
 * @param locale Locale the path is written in
 * @returns The hub page path, with leading and trailing slashes
 */
export function caseHubPath(locale: Locale): string {
  return locale === 'fr' ? '/cas-clients/' : '/en/case-studies/';
}

export type { CaseStudy, CaseStudyBundle } from './types';
