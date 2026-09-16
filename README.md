# Arktos Consulting — site web

Site de présentation des prestations de conseil AWS/Kubernetes et d'infogérance
d'Arktos Consulting. Construit avec Astro, rendu entièrement en HTML statique.

## Démarrage

```bash
bun install
bun run dev      # serveur de développement sur http://localhost:4321
bun run build    # build de production dans dist/
bun run preview  # prévisualisation du build
```

## Vérifications

```bash
bunx tsc --noEmit    # typage TypeScript
bunx astro check     # vérification des composants Astro
```

Les deux commandes doivent sortir sans erreur avant tout envoi.

## Stack

| Rôle | Choix | Version |
| --- | --- | --- |
| Framework | Astro | 7.3.2 |
| Styles | Tailwind CSS | 4.3.3 |
| Typage | TypeScript | 6.0.3 |
| Polices | Inter + Sora, auto-hébergées | sous-ensemble latin |
| Hébergement | GitHub Pages + Cloudflare | statique |

**TypeScript reste volontairement en 6.x.** TypeScript 7 est disponible et
largement plus rapide, mais il ne fournit pas encore d'API programmatique : le
type-checking des templates Astro et l'outillage ESLint ne fonctionnent pas avec.
La montée de version attend l'API annoncée pour 7.1.

**React n'est pas monté.** Le site n'a aucun îlot interactif. Les dépendances
`react` et `react-dom` restent déclarées, prêtes à l'emploi dès qu'un composant
le justifiera — l'activer ajouterait environ 200 Ko de JavaScript par page.

## Structure

```
src/
  consts.ts              identité, coordonnées, repères de carrière, navigation
  content.config.ts      schéma de la collection d'articles
  content/blog/          articles en Markdown
  data/content.ts        contenu éditorial (prestations, missions, FAQ)
  utils/career.ts        calcul des années d'expérience
  utils/blog.ts          dates, temps de lecture, récupération des articles
  utils/seo.ts           graphe JSON-LD et fil d'Ariane
  layouts/BaseLayout.astro
  components/            entête, sections, cartes d'article, pied de page
  pages/                 accueil, conseil, cloud souverain, IA, infogérance,
                         blog, références, 404, mentions légales
public/
  images/                logos clients (silhouettes), logo.svg, image de partage
  fonts/                 sous-ensembles latins d'Inter et Sora
  files/cv.pdf
  robots.txt
```

## Publier un article

Créer un fichier Markdown dans `src/content/blog/`. Le nom du fichier devient
l'URL : `src/content/blog/mon-sujet.md` est publié sur `/blog/mon-sujet/`.

```markdown
---
title: "Titre de l'article"
description: "Résumé d'une phrase, utilisé dans le listing et les métadonnées."
publishedAt: 2026-09-08
updatedAt: 2026-10-01        # facultatif
tags: ["AWS", "FinOps"]
summary: "Paragraphe d'accroche affiché en tête d'article."
draft: false                 # true pour garder l'article hors ligne
---

Le contenu en Markdown. Les titres `##` alimentent la table des matières.
```

Le schéma de `src/content.config.ts` valide le frontmatter au build : une date
mal formée ou un `description` manquant fait échouer la construction plutôt que
de produire une page cassée en production.

Ajouter un article le publie automatiquement dans le listing, le flux RSS, le
plan du site, les métadonnées Open Graph et le balisage `BlogPosting`. Rien
d'autre à modifier.

Les brouillons (`draft: true`) sont exclus du listing, du RSS et du sitemap.

## Conventions de contenu

- Les textes affichés vivent dans `src/data/content.ts`, pas dans les composants.
  Une donnée affichée à deux endroits finit par diverger.
- Les années d'expérience sont **calculées** à partir de `CAREER` dans
  `src/consts.ts`, jamais écrites en dur. Un chiffre recopié devient faux à la
  première année suivante.
- Le graphe JSON-LD est produit par `src/utils/seo.ts` à partir des mêmes
  sources : le balisage et le contenu visible ne peuvent pas se contredire.
- Les réponses de la FAQ sont reprises mot pour mot dans le balisage `FAQPage`.
  Modifier une réponse implique de vérifier que le balisage suit.

## Référencement

Le site est optimisé pour les moteurs de recherche classiques et pour les
moteurs de réponse génératifs.

**Ce qui est en place :** titres et descriptions uniques par page, URL
canoniques, données structurées (`ProfessionalService`, `Person`, `WebSite`,
`WebPage`, `FAQPage`, `BreadcrumbList`), plan du site généré au build, métadonnées
Open Graph et Twitter Card, image de partage 1200×630.

**robots.txt distingue deux décisions distinctes.** Les robots de recherche et de
réponse sont autorisés (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`) :
les bloquer retirerait le site des réponses de ChatGPT, Perplexity et Claude. Les
robots d'entraînement sont refusés (`GPTBot`, `ClaudeBot`, `CCBot`,
`Google-Extended`) : ils alimentent les corpus sans générer de trafic de réponse.
Cette distinction est le point le plus souvent raté, et la plus coûteuse à rater.

**llms.txt n'est pas publié volontairement.** Google a déclaré ne pas l'utiliser,
et les mesures d'accès montrent que les robots qui génèrent des citations ne le
demandent quasiment jamais. Le fichier ne produit pas de citations.

## Performance

Le site ne livre aucun JavaScript : le HTML est complet sans exécution de script,
ce qui le rend directement lisible par les robots d'indexation et par les moteurs
de réponse.

| Élément | Poids |
| --- | --- |
| Page d'accueil (HTML) | ~42 Ko |
| CSS | ~28 Ko |
| JavaScript | 0 |
| Polices (2 fichiers, latin) | 80 Ko |

Les polices sont limitées au sous-ensemble latin : les jeux cyrillique, grec et
vietnamien représenteraient environ 170 Ko supplémentaires jamais utilisés. Elles
sont servies depuis le domaine plutôt que par un CDN tiers, ce qui retire une
connexion externe du chemin d'affichage.

## Déploiement

`.github/workflows/deploy.yml` construit et publie le site sur GitHub Pages à
chaque push sur `main`. Le typage et la vérification Astro s'exécutent avant le
build : une erreur bloque la mise en production.

Cloudflare sert de frontal sur le domaine, ce qui permet d'ajouter les en-têtes
de sécurité et le cache des ressources que GitHub Pages ne gère pas seul.
