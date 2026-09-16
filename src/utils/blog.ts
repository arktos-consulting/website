import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n';

/**
 * Blog helpers.
 *
 * Dates are rendered in the locale of the page, and the time zone is forced so
 * the build output is identical whatever machine builds it. English and French
 * posts live in separate collections, because a translation is a distinct
 * document with its own URL and its own publication date rather than a variant
 * of the same file.
 */

/** Long date formatters, one per locale. */
const DATE_FORMATTERS: Record<Locale, Intl.DateTimeFormat> = {
  fr: new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Paris',
  }),
  en: new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Paris',
  }),
};

/** Short formatters, for dense lists. */
const SHORT_DATE_FORMATTERS: Record<Locale, Intl.DateTimeFormat> = {
  fr: new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Paris',
  }),
  en: new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Paris',
  }),
};

/** Astro collection holding the posts of a locale. */
export const BLOG_COLLECTIONS = {
  fr: 'blog',
  en: 'blogEn',
} as const;

/** Astro collection name for a locale's posts. */
export type BlogCollection = (typeof BLOG_COLLECTIONS)[Locale];

/** A blog post entry, whichever locale it belongs to. */
export type PostEntry = CollectionEntry<'blog'> | CollectionEntry<'blogEn'>;

/**
 * Renders a date in the long format of a locale.
 *
 * @param date Date to format
 * @param locale Locale the date is written for
 * @returns The date spelled out, for example « 12 août 2026 » or `12 August 2026`
 */
export function formatDate(date: Date, locale: Locale): string {
  return DATE_FORMATTERS[locale].format(date);
}

/**
 * Renders a date in the short format of a locale.
 *
 * @param date Date to format
 * @param locale Locale the date is written for
 * @returns The date in DD/MM/YYYY format
 */
export function formatDateShort(date: Date, locale: Locale): string {
  return SHORT_DATE_FORMATTERS[locale].format(date);
}

/**
 * Renders a date in the format expected by structured data and RSS.
 *
 * @param date Date to format
 * @returns The date in ISO 8601 format (YYYY-MM-DD)
 */
export function formatDateIso(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}

/**
 * Computes an approximate reading time from the article body.
 *
 * @param markdownSource Markdown content of the article
 * @returns The number of reading minutes, at least 1
 */
export function readingTime(markdownSource: string): number {
  const wordsPerMinute = 200;
  const wordCount = markdownSource.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}

/**
 * Retrieves published posts for a locale, most recent first.
 *
 * Drafts are excluded: they must not appear in the listing, the RSS feed or the
 * sitemap.
 *
 * @param locale Locale whose posts to retrieve
 * @returns The published posts, sorted by publication date descending
 */
export async function getPublishedPosts(
  locale: Locale,
): Promise<PostEntry[]> {
  const posts = await getCollection(
    BLOG_COLLECTIONS[locale] as 'blog',
    ({ data }) => !data.draft,
  );
  return (posts as PostEntry[]).sort((first, second) => {
    return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
  });
}

/**
 * Builds the breadcrumb trail of an article.
 *
 * @param title Article title
 * @param slug Article slug
 * @param locale Locale the trail is written for
 * @returns The steps of the trail, from home to the article
 */
export function postBreadcrumbs(
  title: string,
  slug: string,
  locale: Locale,
): { name: string; path: string }[] {
  const home = locale === 'fr' ? '/' : '/en/';
  const blog = locale === 'fr' ? '/blog/' : '/en/blog/';
  const post = `${blog}${slug}/`;

  return [
    { name: locale === 'fr' ? 'Accueil' : 'Home', path: home },
    { name: 'Blog', path: blog },
    { name: title, path: post },
  ];
}
