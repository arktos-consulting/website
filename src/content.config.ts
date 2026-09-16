import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Shared frontmatter schema for blog posts, in both languages.
 *
 * A post written in English and a post written in French must carry the same
 * metadata, so the schema is defined once and applied to both collections.
 */
const postSchema = z.object({
  /** Title displayed and used as `headline` in structured data. */
  title: z.string(),
  /** One-sentence summary, reused in the listing, the RSS feed and metadata. */
  description: z.string(),
  /** Publication date, in YYYY-MM-DD format. */
  publishedAt: z.coerce.date(),
  /** Last revision date, if the post was updated. */
  updatedAt: z.coerce.date().optional(),
  /** Topics covered, displayed as tags and declared in `keywords`. */
  tags: z.array(z.string()).default([]),
  /** Hides the post from the listing without deleting it. */
  draft: z.boolean().default(false),
  /** Summary paragraph displayed at the top of the post. */
  summary: z.string().optional(),
});

/**
 * Posts live as Markdown in `src/content/blog/` (French) and
 * `src/content/blog-en/` (English). The schema validates the frontmatter at
 * build time: a malformed date or a missing description fails the build instead
 * of producing a broken page in production.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: postSchema,
});

export const collections = { blog, blogEn };
