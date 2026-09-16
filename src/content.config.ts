import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection des articles de blog.
 *
 * Les articles vivent en Markdown dans `src/content/blog/`. Le schéma valide le
 * frontmatter au build : une date mal formée ou un résumé manquant fait échouer
 * la construction au lieu de produire une page cassée en production.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** Titre affiché et utilisé comme `headline` dans les données structurées. */
    title: z.string(),
    /** Résumé d'une phrase, réutilisé dans le listing, le RSS et les métadonnées. */
    description: z.string(),
    /** Date de publication, au format AAAA-MM-JJ. */
    publishedAt: z.coerce.date(),
    /** Date de dernière révision, si l'article a été mis à jour. */
    updatedAt: z.coerce.date().optional(),
    /** Sujets traités, affichés en étiquettes et déclarés en `keywords`. */
    tags: z.array(z.string()).default([]),
    /** Masque l'article du listing sans le supprimer. */
    draft: z.boolean().default(false),
    /** Paragraphe de synthèse affiché en tête d'article. */
    summary: z.string().optional(),
  }),
});

export const collections = { blog };
