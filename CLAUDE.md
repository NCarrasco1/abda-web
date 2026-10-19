# ABDA web

Catálogo vidriera de ABDA (maquillaje, Mendoza). Sin carrito, cuentas ni pagos: cada compra se cierra por WhatsApp. Astro 5, sitio 100 % estático, publicado en GitHub Pages: <https://ncarrasco1.github.io/abda-web/>.

Antes de cambiar algo, leé según corresponda:
- `PRODUCT.md`: público, propósito, restricciones y lo que no se puede inventar.
- `DESIGN.md` (y `.impeccable/design.json`): el sistema visual construido (tokens, componentes, reglas).
- `PENDIENTES.md`: datos sin confirmar con la dueña.
- `.impeccable/surfaces/src-pages-index-astro.md`: el contrato de dirección de la home ("Tablero de capturas").

## Comandos

- `npm run dev`: el sitio queda en `http://localhost:4321/abda-web/` (con la base; `localhost:4321/` solo da 404).
- `npm run build`: genera `dist/`. `npx astro check` revisa los tipos.
- Publicar = push a `main`. `.github/workflows/deploy.yml` arma y despliega solo. No subas `dist/` a mano.

## Reglas que no son obvias

- **Base `/abda-web`.** Todo link interno, imagen, favicon o URL absoluta pasa por `ruta()` de `src/lib/catalogo.ts`. Nunca escribas `href="/..."` ni `src="/..."` a mano: en producción da 404. Las URLs absolutas se arman con `new URL(ruta(...), Astro.site)`.
- **Una sola fuente de datos.** Todo producto, precio y categoría sale de `productos.json` (raíz), leído en `src/lib/catalogo.ts`. Nada de listas de productos escritas en componentes. La dueña no programa: cualquier cambio al formato del JSON tiene que seguir siendo editable a mano y quedar documentado en el `README.md`.
- **Sin stock** = `stock: false` o `precio: null` (ver `disponible()`). Esos productos se muestran atenuados, al final de su categoría, con "Avisame cuando vuelva".
- **No inventar contenido.** Ni descripciones, ni marcas, ni variantes, ni testimonios, ni promesas de entrega, envío o medios de pago. `descripcion` y `variante` vacías son a propósito; el bloque se oculta solo. Lo dudoso va a `PENDIENTES.md`.
- **Mensaje de WhatsApp.** Se arma en `waProducto()`: "Hola ABDA! 🩷 Me interesa: {nombre} {variante} ({precio}). ¿Está disponible?" más el link al producto. Si hay nombres repetidos sin variante, se agrega "· opción N de M".
- **Precios** siempre con `Intl.NumberFormat('es-AR')` (`formatoPesos`, `precio()`): `$ 9.500`.
- **Fotos de producto:** `public/img/productos/<id>.webp` (800 px) y `<id>-400.webp` (400 px, para `srcset`). Para compartir: `public/og/<id>.jpg`; sin ese archivo se usa `public/og.jpg`. Los `.webp.json` de al lado guardan de qué página del PDF salió cada foto: no los borres.
- **Imágenes nuevas** generadas o convertidas: registrá su origen con `embed-prompt` de la skill impeccable (WebP usa sidecar `.json`; PNG/JPG lo guardan adentro).

## Diseño

- Paleta y tipografía vienen fijadas por el catálogo de la dueña: fondo `#FBEBEA`, `powder` `#F2D2CD`, `rose` `#9A4A40` para acción y precio; Barlow Condensed en mayúsculas; la script Mrs Saint Delafield **solo** en "Catálogo" y "Guía de compra". Tokens en `src/styles/global.css`.
- `blush` (`#DD8E80`) es solo decorativo: no sirve para texto (no llega a AA). El rosa sobre `powder` tampoco: ahí va `rose-deep`.
- El lenguaje del sitio es la foto pegada con cinta (`Shot.astro`, `.tape`): rotaciones chicas, cinta variada, se "despega" al pasar o enfocar. Sin stock = contorno punteado + sello.
- Mobile first: casi todo el tráfico viene de Instagram en el celular. Objetivos táctiles de 44 px, contraste AA, foco visible. El botón fijo de WhatsApp tapa el borde inferior: `scroll-padding-bottom` y el padding del pie lo compensan.
- Textos en español rioplatense con voseo ("Elegí", "Escribinos"), con algún emoji puntual como en el catálogo.

## Git

- Commits en español, describiendo el cambio. La rama `main` publica: probá con `npm run build` antes de hacer push.
- `*.pdf` está en `.gitignore` (el catálogo original pesa 34 MB y queda solo en local).
