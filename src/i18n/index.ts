/**
 * Locale helpers.
 *
 * Pages import their dictionary through `getDictionary` rather than reading the
 * locale directly, so a missing locale fails loudly at build time instead of
 * silently rendering the wrong language.
 *
 * Translation pairs are re-exported from `./routes` so that pages, the layout and
 * the sitemap all import them from one place.
 */
import type { Dictionary } from './fr';
import fr from './fr';
import en from './en';

export type { Dictionary };

export {
  ROUTE_PAIRS,
  findRoutePair,
  pairPaths,
  alternatePath,
  alternateUrl,
  type RoutePair,
} from './routes';

/** Supported locales, mirroring the `i18n` block of the Astro config. */
export const LOCALES = ['fr', 'en'] as const;

/** A supported locale code. */
export type Locale = (typeof LOCALES)[number];

/** The locale served at the root of the domain. */
export const DEFAULT_LOCALE: Locale = 'fr';

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };

/** Human-readable locale tags for `og:locale` and structured data. */
export const OG_LOCALES: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
};

/** `hreflang` values, including the default used for unmatched languages. */
export const HREFLANG: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
};

/**
 * Narrows an arbitrary string to a supported locale.
 *
 * @param value Locale code to check, as returned by `Astro.currentLocale`
 * @returns The matching locale, or `null` when unsupported
 */
export function toLocale(value: string | undefined): Locale | null {
  if (!value) {
    return null;
  }
  return (LOCALES as readonly string[]).includes(value) ? (value as Locale) : null;
}

/**
 * Returns the dictionary for a locale.
 *
 * @param locale Locale code to load
 * @returns The dictionary for that locale
 * @throws Error when the locale is not supported
 */
export function getDictionary(locale: Locale): Dictionary {
  const dictionary = DICTIONARIES[locale];
  if (!dictionary) {
    throw new Error(
      `No dictionary for locale "${locale}". Add it to src/i18n/<locale>.ts and register it in LOCALES.`,
    );
  }
  return dictionary;
}

/**
 * Builds the equivalent URL of a page in another locale.
 *
 * Each page passes its own translated path, because URL segments are translated
 * (`/cloud-souverain/` on the French side, `/en/sovereign-cloud/` on the
 * English side) rather than prefixed. Pointing `hreflang` at the wrong URL is
 * worse than omitting it, so the mapping is explicit.
 *
 * @param pathByLocale The equivalent path in each locale, starting with a slash
 * @param targetLocale Locale to link to
 * @returns The absolute URL of that page in the target locale
 */
export function localizedPath(
  pathByLocale: Record<Locale, string>,
  targetLocale: Locale,
): string {
  return pathByLocale[targetLocale];
}

/** The site's primary language switch target, shown in the header. */
export const LANGUAGE_LABELS: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
};

/**
 * Returns the other locale of a pair.
 *
 * @param locale Current locale
 * @returns The locale to switch to
 */
export function alternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
