/**
 * Flux RSS du blog.
 *
 * Le fichier est produit au build comme une route statique. Un flux RSS n'est
 * pas un signal de référencement, mais il permet à un lecteur de suivre le site
 * sans revenir le consulter, et il alimente les agrégateurs techniques.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '@/consts';
import { getPublishedPosts, formatDateIso } from '@/utils/blog';

/**
 * Construit le flux RSS à partir des articles publiés.
 *
 * @param context Contexte de la route Astro, fournissant l'URL du site
 * @returns La réponse HTTP contenant le flux XML
 */
export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${SITE.name} — notes techniques`,
    description:
      "Notes sur l'architecture AWS, Kubernetes et l'exploitation de plateformes.",
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
    customData: `<language>${SITE.lang}</language>`,
  });
}
