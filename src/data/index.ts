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

export type {
  Service,
  Mission,
  Differentiator,
  FaqEntry,
} from './content';

/** Every content export a locale provides, shared by both languages. */
export interface ContentBundle {
  /** The services offered, in display order. */
  SERVICES: readonly import('./content').Service[];
  /** Reassurance arguments. */
  DIFFERENTIATORS: readonly import('./content').Differentiator[];
  /** Public engagements used as references. */
  MISSIONS: readonly import('./content').Mission[];
  /** Frequently asked questions, mirrored into `FAQPage` markup. */
  FAQ: readonly import('./content').FaqEntry[];
  /** Client logos for the trust strip. */
  CLIENT_LOGOS: typeof CLIENT_LOGOS;
}

const BUNDLES: Record<Locale, ContentBundle> = {
  fr: {
    SERVICES: fr.SERVICES,
    DIFFERENTIATORS: fr.DIFFERENTIATORS,
    MISSIONS: fr.MISSIONS,
    FAQ: fr.FAQ,
    CLIENT_LOGOS,
  },
  en: {
    SERVICES: en.SERVICES,
    DIFFERENTIATORS: en.DIFFERENTIATORS,
    MISSIONS: en.MISSIONS,
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

export { CLIENT_LOGOS, fr, en };
