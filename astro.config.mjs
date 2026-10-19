import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La URL pública se usa para los links de WhatsApp y las vistas previas al compartir.
// Netlify y Vercel la informan solas; en Cloudflare Pages o con dominio propio hay que cargar SITE_URL.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || process.env.URL || (vercel ? `https://${vercel}` : 'http://localhost:4321');

if (process.argv.includes('build') && site.startsWith('http://localhost')) {
  console.warn(
    '\n⚠  Este build usa http://localhost:4321 como dirección del sitio.\n' +
      '   Los links de WhatsApp y las vistas previas no van a funcionar si se publica así.\n' +
      '   Publicá desde Netlify o Vercel conectados al repositorio, o definí SITE_URL (ver README).\n',
  );
}

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: {
    inlineStylesheets: 'always',
  },
});
