import { defineConfig } from 'astro/config';

// La URL pública se usa para los links de WhatsApp y las vistas previas al compartir.
// Netlify, Vercel y Cloudflare Pages la informan solas; SITE_URL la pisa si hay dominio propio.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL ||
  process.env.URL ||
  process.env.CF_PAGES_URL ||
  (vercel ? `https://${vercel}` : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'always',
});
