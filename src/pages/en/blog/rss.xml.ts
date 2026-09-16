/**
 * Blog RSS feed, English.
 *
 * A separate feed from the French one: the two sites have their own articles, and
 * a subscriber who reads English should not receive French posts.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '@/consts';
import { getDictionary } from '@/i18n';
import { getPublishedPosts, formatDateIso } from '@/utils/blog';

/**
 * Builds the RSS feed from the published English posts.
 *
 * @param context Astro route context, providing the site URL
 * @returns The HTTP response carrying the XML feed
 */
export async function GET(context: APIContext) {
  const locale = 'en' as const;
  const t = getDictionary(locale);
  const posts = await getPublishedPosts(locale);

  return rss({
    title: t.blog.feedTitle,
    description: t.blog.feedDescription,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/en/blog/${post.id}/`,
      categories: [...post.data.tags],
      author: SITE.email,
      ...(post.data.updatedAt && {
        customData: `<updated>${formatDateIso(post.data.updatedAt)}</updated>`,
      }),
    })),
    customData: `<language>${locale}</language>`,
  });
}
