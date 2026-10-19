import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicado en GitHub Pages como sitio de proyecto: https://ncarrasco1.github.io/abda-web/
// `site` es el dominio y `base` la carpeta del repositorio. Los links internos pasan por ruta()
// (src/lib/catalogo.ts) para incluir la base; si algún día hay dominio propio, se cambian estas dos líneas.
export default defineConfig({
  site: 'https://ncarrasco1.github.io',
  base: '/abda-web',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: {
    inlineStylesheets: 'always',
  },
});
