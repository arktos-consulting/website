/**
 * Content entry point, resolving editorial data by locale.
 *
 * Importing from here rather than from the per-language files keeps components
 * and pages free of locale branching: a page asks for the content for its locale
 * and receives it.
 *
 * Language-neutral data (client logos) is re-exported from a single module
 * rather than duplicated per locale, so the trust strip cannot list different
 * clients depending on the language of the page.
 */
import type { Locale } from '@/i18n';
import * as fr from './content';
import * as en from './content.en';
import { CLIENT_LOGOS } from './clients';
import { CASE_SLUGS } from './case-studies/slugs';

export type {
  Service,
  Differentiator,
  FaqEntry,
} from './content';

/** Every content export a locale provides, shared by both languages. */
export interface ContentBundle {
  /** The services offered, in display order. */
  SERVICES: readonly import('./content').Service[];
  /** Reassurance arguments. */
  DIFFERENTIATORS: readonly import('./content').Differentiator[];
  /** Frequently asked questions, mirrored into `FAQPage` markup. */
  FAQ: readonly import('./content').FaqEntry[];
  /** Client logos for the trust strip. */
  CLIENT_LOGOS: typeof CLIENT_LOGOS;
}

const BUNDLES: Record<Locale, ContentBundle> = {
  fr: {
    SERVICES: fr.SERVICES,
    DIFFERENTIATORS: fr.DIFFERENTIATORS,
    FAQ: fr.FAQ,
    CLIENT_LOGOS,
  },
  en: {
    SERVICES: en.SERVICES,
    DIFFERENTIATORS: en.DIFFERENTIATORS,
    FAQ: en.FAQ,
    CLIENT_LOGOS,
  },
};

/**
 * Returns the editorial content for a locale.
 *
 * @param locale Locale to load content for
 * @returns The content bundle for that locale
 */
export function getContent(locale: Locale): ContentBundle {
  return BUNDLES[locale];
}

/**
 * Lists the client names of the published engagements.
 *
 * The names live in the case study content, which is why this is not part of a
 * content bundle: it would otherwise have to be maintained twice.
 *
 * @param locale Locale the names are written in
 * @returns The client name of every case study, in display order
 */
export function missionClientNames(locale: Locale): string[] {
  return CASE_SLUGS.map((entry) => entry.name[locale]);
}

export { CLIENT_LOGOS, fr, en };
