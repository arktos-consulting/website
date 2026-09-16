/**
 * Configuration Astro du site Arktos Consulting.
 *
 * Le site est entièrement pré-rendu : `dist/` ne contient que du HTML, du CSS
 * et des images statiques, servis par GitHub Pages derrière Cloudflare.
 * Aucun serveur Node n'est requis au runtime.
 *
 * L'intégration React n'est pas montée : le site n'a aucun îlot interactif, et
 * l'embarquer ajouterait environ 200 Ko de JavaScript par page. React reste une
 * dépendance déclarée, prête à l'emploi dès qu'un composant le justifiera.
 */
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Configuration du build statique.
 */
export default defineConfig({
  site: 'https://www.arktos.consulting',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/mentions-legales'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
