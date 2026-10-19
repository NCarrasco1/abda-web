# Prompt inicial para Claude Code — Sitio web ABDA

> Antes de pegarlo: creá una carpeta `abda-web/`, poné adentro `productos.json`, el PDF del catálogo, el logo y (si los tenés) las fotos originales de los productos en `fotos/`. Abrí Claude Code en esa carpeta y pegá todo lo que sigue.

---

## Contexto

Vamos a construir el sitio web de **ABDA**, un emprendimiento chico de maquillaje y belleza de Mendoza, Argentina (Instagram: @abda.beauty). Hoy venden por Instagram y WhatsApp con un catálogo armado en Canva (`Catalogo_ABDA.pdf` en esta carpeta).

El sitio es un **catálogo vidriera**, no una tienda: no hay carrito, ni login, ni pagos. La compra se cierra por WhatsApp. El objetivo es que una clienta que llega desde Instagram vea los productos con foto, precio y descripción, y en un toque le escriba a ABDA por el producto que le interesa.

## Público y uso

- Mujeres jóvenes que llegan desde el link de la bio de Instagram o desde un mensaje de WhatsApp. **Casi todo el tráfico es desde celular**: diseñá mobile-first y después adaptá a escritorio.
- La dueña no programa. Cambiar un precio o marcar algo sin stock tiene que ser editar `productos.json`, nada más.

## Contenido

- `productos.json`: 92 productos en 5 categorías (Rostro, Labios, Ojos, Varios, Victoria's Secret). Cada producto tiene `id`, `nombre`, `categoria`, `precio` (número en pesos, `null` si no hay stock), `stock`, `descripcion` y `variante` (vacíos por ahora) e `imagen`.
- Hay varios productos con el mismo nombre (ej. 5 "Lip oil", 4 "Rimel") que son marcas o tonos distintos. Mientras `variante` esté vacío, diferencialos por la foto; no inventes nombres de marcas.
- **Imágenes**: si existe `fotos/`, usá esas. Si no, extraé las fotos del PDF (`pdfimages`) y asocialas a cada producto mirando las páginas renderizadas; anotá en un `PENDIENTES.md` las que no puedas asociar con certeza. Convertí todo a WebP optimizado (≈800px de lado, con `srcset`).
- Contacto: WhatsApp **+54 9 2634 76-3965** → `https://wa.me/5492634763965`, Instagram **@abda.beauty**.

## Identidad visual (sacada del catálogo, respetala)

- **Fondo** rosa muy pálido `#FBEBEA`, bloques en rosa empolvado `#F2D2CD`, acentos en un rosa viejo / terracota suave (tomá el tono exacto del logo y del "Catálogo" en cursiva).
- **Tipografía**: el catálogo usa una sans condensada (Anicon Sans) para nombres y precios, y una script fina (Amsterdam Two) para títulos como "Catálogo" y "Guía de compra". Buscá equivalentes libres en Google Fonts (ej. *Oswald* / *Barlow Condensed* + una script delicada tipo *Mrs Saint Delafield* o *Allura*). La script solo para 1–2 títulos decorativos, nunca para texto que haya que leer.
- Logo ABDA: serif clásica en rosa. Usalo tal cual.
- Fotos de producto sobre fondos claros/pastel, femenino pero no recargado. Tono cercano, con voseo y algún emoji puntual (como el catálogo: 🩷 💌).

## Referencia

**https://citygirlbeauty.com/** (marca de belleza argentina). Tomá de ahí:
- Barra de anuncio arriba (ej. "Envíos a todo Mendoza · Consultas por WhatsApp").
- Navegación clara por categorías.
- Grilla de productos limpia: foto grande, nombre en mayúsculas, precio con formato argentino (`$ 9.500`).
- Bloques destacados en la home (ej. "Lo nuevo", "Victoria's Secret").
- Mezcla natural de español con términos en inglés del rubro (lip oil, gloss, blush).

No copies su marca, colores ni textos; es referencia de estructura y nivel de calidad. Ignorá todo lo que es de tienda (carrito, cuenta, cuotas, gift cards).

## Páginas y funcionalidades

1. **Home**: hero con el logo y una frase corta, accesos a las 5 categorías, un bloque de productos destacados y la "Guía de compra" del catálogo convertida en 3–4 pasos visuales (elegí → escribinos por WhatsApp → coordinamos pago y entrega).
2. **Catálogo**: grilla con filtro por categoría (chips arriba, sticky en mobile) y buscador simple por nombre. Productos sin stock: visibles pero atenuados con etiqueta "Sin stock" y al final de cada categoría; agregá un toggle "Ocultar sin stock".
3. **Detalle de producto** (página o modal): foto grande, nombre, variante, precio, descripción y botón **"Consultar por WhatsApp"** con mensaje precargado: `Hola ABDA! 🩷 Me interesa: {nombre} {variante} ({precio}). ¿Está disponible?`. Si no hay stock: "Avisame cuando vuelva".
4. **Botón flotante de WhatsApp** en todas las páginas.
5. **Footer**: Instagram, WhatsApp, zona (Mendoza) y el mensaje de agradecimiento del catálogo.
6. SEO básico: `title`/`description` por página, Open Graph con imagen (para que el link se vea lindo al compartirlo por WhatsApp/Instagram), favicon con el logo.

## Stack y restricciones

- **Astro** (sitio estático) + CSS propio o Tailwind. Nada de backend ni base de datos.
- Los datos salen **solo** de `productos.json`; ninguna lista de productos hardcodeada en componentes.
- Precios formateados con `Intl.NumberFormat('es-AR')`.
- Objetivo de rendimiento: Lighthouse ≥ 90 en mobile (imágenes lazy, fuentes con `display=swap`, sin librerías pesadas).
- Accesibilidad: contraste AA (ojo con texto rosa sobre rosa), foco visible, `alt` en todas las fotos, tamaños táctiles ≥ 44px.
- Debe poder publicarse en Netlify, Vercel o Cloudflare Pages con `npm run build`. Agregá un `README.md` explicando, para alguien no técnico, cómo cambiar un precio, marcar sin stock y agregar un producto con su foto.

## Forma de trabajo

1. Usá las skills de diseño instaladas (**taste-skill, ui-ux-pro-max, impeccable**) en todas las decisiones visuales.
2. **Primero proponé 2–3 direcciones visuales** para la home (solo mobile, como páginas estáticas o capturas), todas dentro de la identidad del catálogo. Esperá a que elija una antes de construir el resto.
3. Construí el sitio completo con la dirección elegida. Usá git y hacé commits por etapa.
4. Al terminar, lanzá **subagentes auditores independientes** que no hayan participado del diseño:
   - Diseño/UX: consistencia, jerarquía, que no parezca plantilla genérica.
   - Mobile y accesibilidad: revisar en 375px y 768px con capturas reales del navegador.
   - Rendimiento y SEO: Lighthouse, pesos de imágenes, metadatos.
   - Contenido: que cada producto del JSON aparezca, precios correctos contra el PDF, links de WhatsApp funcionando.
   Corregí lo que encuentren y mostrame el resumen.
5. No inventes descripciones de productos. Dejá `descripcion` vacía y mostrá el detalle sin ese bloque; voy a completarlas con la dueña.
