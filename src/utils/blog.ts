import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Formatage des dates du blog.
 *
 * Le site est francophone : les dates sont rendues en français, avec le mois en
 * toutes lettres. Le fuseau est forcé pour que le rendu au build soit identique
 * quelle que soit la machine qui construit.
 */
const DATE_FORMATTER = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Paris',
});

/** Formatage court, pour les listes denses. */
const SHORT_DATE_FORMATTER = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'Europe/Paris',
});

/**
 * Rend une date au format long français.
 *
 * @param date Date à formater
 * @returns La date en toutes lettres, par exemple « 12 août 2026 »
 */
export function formatDate(date: Date): string {
  return DATE_FORMATTER.format(date);
}

/**
 * Rend une date au format court français.
 *
 * @param date Date à formater
 * @returns La date au format JJ/MM/AAAA
 */
export function formatDateShort(date: Date): string {
  return SHORT_DATE_FORMATTER.format(date);
}

/**
 * Rend une date au format attendu par les données structurées et le RSS.
 *
 * @param date Date à formater
 * @returns La date au format ISO 8601 (AAAA-MM-JJ)
 */
export function formatDateIso(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}

/**
 * Calcule un temps de lecture approximatif à partir du corps de l'article.
 *
 * @param markdownSource Contenu Markdown de l'article
 * @returns Le nombre de minutes de lecture, au minimum 1
 */
export function readingTime(markdownSource: string): number {
  const wordsPerMinute = 200;
  const wordCount = markdownSource.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}

/**
 * Récupère les articles publiés, du plus récent au plus ancien.
 *
 * Les brouillons sont écartés : ils ne doivent apparaître ni dans le listing,
 * ni dans le flux RSS, ni dans le plan du site.
 *
 * @returns Les articles publiés, triés par date de publication décroissante
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((first, second) => {
    return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
  });
}

/**
 * Construit le fil d'Ariane d'un article.
 *
 * @param title Titre de l'article
 * @param slug Slug de l'article
 * @returns Les étapes du fil, de l'accueil à l'article
 */
export function postBreadcrumbs(
  title: string,
  slug: string,
): { name: string; path: string }[] {
  return [
    { name: 'Accueil', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: title, path: `/blog/${slug}/` },
  ];
}
