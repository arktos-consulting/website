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
bun run verify       # la chaîne complète : types, composants, build, bilingue
bun run typecheck    # astro sync, puis astro check, puis tsc --noEmit
bun run build        # build de production dans dist/
bun run verify:i18n  # contrôle du HTML et du sitemap produits (après le build)
```

`bun run typecheck` lance `astro sync` avant `tsc` : les types des collections de
contenu (`astro:content`) sont générés dans `.astro/`, qui n'est pas versionné.
Sans cette étape, le typage échoue sur une machine neuve et en intégration
continue.

**`tsc` ne lit pas les fichiers `.astro`.** Il attrape les erreurs dans les
modules TypeScript, jamais dans les composants, les pages ou le layout. Un type
oublié dans un export passe donc `tsc` sans broncher et ne casse qu'à
l'exécution — constaté : 23 fichiers importaient un type qui n'était jamais
réexporté, `tsc --noEmit` était vert. C'est la raison pour laquelle `typecheck`
appelle `astro check` entre les deux.

Les quatre commandes doivent sortir sans erreur avant tout envoi.

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
  consts.ts              identité, coordonnées, repères de carrière
  content.config.ts      schéma des collections d'articles (fr et en)
  content/blog/          articles en français, en Markdown
  content/blog-en/       articles en anglais, en Markdown
  i18n/
    fr.ts                dictionnaire français : la source de vérité des libellés
    en.ts                dictionnaire anglais, typé sur la forme dérivée de fr.ts
    index.ts             getDictionary, locales, hreflang, og:locale
    routes.ts            table des paires de traduction FR/EN (source unique)
  data/
    content.ts           contenu éditorial français (prestations, missions, FAQ)
    content.en.ts        contenu éditorial anglais
    clients.ts           logos clients, indépendants de la langue
    index.ts             getContent(locale)
    pillars/             contenu des quatre pages piliers, par langue et typé
  utils/career.ts        calcul des années d'expérience
  utils/blog.ts          dates localisées, temps de lecture, récupération des articles
  utils/seo.ts           graphe JSON-LD et fil d'Ariane
  layouts/BaseLayout.astro
  components/            entête, sections, cartes d'article, pied de page
  components/pillars/    rendu des pages piliers, un composant pour les deux langues
  pages/                 routes françaises (racine)
  pages/en/              routes anglaises
scripts/
  verify-i18n.mjs        contrôle du bilingue sur le build produit
public/
  images/                logos clients (silhouettes), logo.svg, image de partage
  fonts/                 sous-ensembles latins d'Inter et Sora
  files/cv.pdf
  robots.txt
```

## Bilingue

Le français est servi à la racine, l'anglais sous `/en/`. Les deux sont des sites
distincts, pas une page unique traduite à la volée.

**Les segments d'URL sont traduits, pas préfixés.** `/conseil/` a pour pendant
`/en/consulting/`, et non `/en/conseil/`. Un lecteur anglophone obtient des URL
qui se lisent dans sa langue, et les URL françaises déjà indexées ne bougent pas.

### Où vit le texte

| Nature | Emplacement |
| --- | --- |
| Libellés d'interface (boutons, navigation, titres de section) | `src/i18n/{fr,en}.ts` |
| Contenu éditorial (prestations, missions, FAQ, pages piliers) | `src/data/` |
| Indépendant de la langue (logos clients, identité, coordonnées) | `src/consts.ts`, `src/data/clients.ts` |

**Le dictionnaire français est la source de vérité.** `en.ts` est typé sur la
forme dérivée de `fr.ts` : une clé présente en français et absente en anglais fait
échouer le build. C'est la raison pour laquelle ces fichiers sont en TypeScript et
non en JSON — un JSON ne produirait aucune erreur de compilation et laisserait
`undefined` s'afficher en production.

De même, `content.en.ts` et `data/pillars/en.ts` sont typés sur les interfaces du
côté français : un champ ajouté d'un côté seulement ne compile pas.

### Publier une page ou un article traduit

Ajouter la paire dans `ROUTE_PAIRS`, dans `src/i18n/routes.ts` :

```ts
{ fr: '/mon-sujet/', en: '/en/my-topic/' },
```

C'est la seule déclaration nécessaire. Le layout en déduit l'URL canonique, les
`hreflang` réciproques, le `x-default` et la cible du sélecteur de langue ; le
plan du site en déduit ses alternances. Une page absente de cette table est
traitée comme monolingue : elle reçoit une URL canonique et aucun `hreflang`, ce
qui est plus sûr qu'une alternance pointant vers une page qui n'existe pas dans
cette langue.

### Les quatre pièges

**1. `tsc` ne voit pas les `.astro`.** Voir la section Vérifications.

**2. Ne pas déclarer sa traduction est silencieux.** Une page pilier absente de
`ROUTE_PAIRS` n'échoue pas : elle perd simplement ses `hreflang`, sans erreur ni
avertissement. `bun run verify:i18n` comble ce trou en refusant toute page
indexable sans alternance complète.

**3. Le sitemap ne déduit rien des URL.** Les segments traduits rendent toute
inférence impossible : l'option `i18n` du greffon `@astrojs/sitemap` ne
correspond à aucune URL et produit un sitemap sans alternance, sans rien
signaler. Les alternances sont donc écrites depuis `ROUTE_PAIRS`, dans
`astro.config.mjs`.

**4. Le sélecteur de langue utilise un chemin, pas une URL absolue.** Sinon une
prévisualisation ou un déploiement de préproduction renverrait le visiteur vers la
production. Les balises `canonical` et `hreflang` restent, elles, absolues.

`bun run verify:i18n` contrôle les invariants du bilingue sur le build produit :
alternances réciproques dans le sitemap et dans le HTML, pages `noindex` exclues
des deux, langue déclarée correcte, et absence de texte français dans une page
anglaise.

### Traduire un article

Un article anglais est un document distinct, avec son propre slug et sa propre
date de publication — pas une copie de fichier. Il vit dans
`src/content/blog-en/`, et la paire est déclarée dans `ROUTE_PAIRS`.

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

- Les commentaires de code sont en **anglais**, sans exception : TSDoc, commentaires
  en ligne, bannières de section CSS et commentaires YAML.
- Les textes affichés vivent dans `src/i18n/` et `src/data/`, jamais dans les
  composants. Une donnée affichée à deux endroits finit par diverger.
- Une donnée qui ne dépend pas de la langue ne se duplique pas par langue. Les
  logos clients ont été un temps présents à l'identique dans les deux fichiers de
  contenu : un client ajouté d'un seul côté aurait fait diverger la bande de
  confiance selon la langue de la page, sans erreur.
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
canoniques, `hreflang` réciproques avec `x-default`, `og:locale` et
`og:locale:alternate`, données structurées (`ProfessionalService`, `Person`,
`WebSite`, `WebPage`, `FAQPage`, `BreadcrumbList`, `BlogPosting`), plan du site
généré au build avec ses alternances, métadonnées Open Graph et Twitter Card,
image de partage 1200×630.

Les données structurées déclarent la langue de la page (`inLanguage`) et les
sujets d'expertise dans la langue du lecteur : un moteur de réponse qui traite une
requête anglaise doit trouver le terme anglais pour relier l'entité au sujet.

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
