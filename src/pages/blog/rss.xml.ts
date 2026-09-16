/**
 * Blog RSS feed, French.
 *
 * Produced at build time as a static route. An RSS feed is not a ranking signal,
 * but it lets a reader follow the site without coming back to it, and it feeds
 * technical aggregators.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '@/consts';
import { getDictionary } from '@/i18n';
import { getPublishedPosts, formatDateIso } from '@/utils/blog';

/**
 * Builds the RSS feed from the published posts.
 *
 * @param context Astro route context, providing the site URL
 * @returns The HTTP response carrying the XML feed
 */
export async function GET(context: APIContext) {
  const locale = 'fr' as const;
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
      link: `/blog/${post.id}/`,
      categories: [...post.data.tags],
      author: SITE.email,
      ...(post.data.updatedAt && {
        customData: `<updated>${formatDateIso(post.data.updatedAt)}</updated>`,
      }),
    })),
    customData: `<language>${locale}</language>`,
  });
}
