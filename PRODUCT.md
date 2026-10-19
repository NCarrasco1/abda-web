# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro (sitio estático, sin backend ni base de datos), elegido en el brief. CSS propio o Tailwind: delegado. Deploy en Netlify, Vercel o Cloudflare Pages con `npm run build`.

## Users
Mujeres jóvenes de Mendoza que llegan desde el link de la bio de Instagram (@abda.beauty) o desde un mensaje de WhatsApp, casi siempre desde el celular. Quieren ver qué hay, cuánto sale y escribirle a ABDA por un producto en un toque.
Usuaria secundaria: la dueña, que no programa y mantiene precios y stock editando solo `productos.json`.

## Product Purpose
ABDA es un emprendimiento chico de maquillaje y belleza de Mendoza, Argentina. El sitio es un catálogo vidriera que reemplaza al catálogo de Canva: foto, precio y (cuando exista) descripción de cada producto, con la consulta por WhatsApp a un toque. No es una tienda: no hay carrito, cuentas ni pagos. Hay éxito cuando la visitante pasa de Instagram a un chat de WhatsApp con el producto ya identificado.

## Positioning
Abierto: el diferencial de ABDA frente a otras cuentas de maquillaje no está confirmado. Lo único confirmado es que es un emprendimiento local de Mendoza que cierra cada venta en persona por WhatsApp.

## Operating Context
- Viaje: bio de Instagram o mensaje de WhatsApp → catálogo → detalle → WhatsApp con mensaje precargado: `Hola ABDA! 🩷 Me interesa: {nombre} {variante} ({precio}). ¿Está disponible?`. Sin stock: "Avisame cuando vuelva".
- Guía de compra textual del catálogo: "1. Elegí tus productos favoritos🩷 · 2. Sacale captura a los que más te gusten📸 · 3. Envianos las capturas por mensaje privado💌 · 4. Te ayudamos con tu pedido y los medios de pago💰". En el sitio, el botón de WhatsApp con el mensaje precargado reemplaza el paso de la captura.
- Mensaje de agradecimiento del catálogo: "Gracias por acompañar este pequeño emprendimiento que se hace con tanto amor🫶🏻 Cada compra, mensaje y recomendación ayuda a que ABDA siga creciendo 🩷".
- Contacto: WhatsApp +54 9 2634 76-3965 (`https://wa.me/5492634763965`), Instagram @abda.beauty.
- Mantenimiento: la dueña edita `productos.json`, que tiene que ser la única fuente de datos.

## Capabilities and Constraints
- 92 productos en 5 categorías (Rostro, Labios, Ojos, Varios, Victoria's Secret). Campos: `id`, `nombre`, `categoria`, `precio` (pesos; `null` sin stock), `stock`, `descripcion`, `variante`, `imagen`.
- Hay nombres repetidos (por ejemplo 5 "Lip oil" y 4 "Rimel") que son marcas o tonos distintos. Mientras `variante` esté vacío, se diferencian por la foto. Nunca inventar marcas.
- `descripcion` está vacía a propósito: no se escriben descripciones y el bloque se oculta cuando falta.
- Los productos sin stock se ven, pero atenuados y al final de cada categoría, con un toggle "Ocultar sin stock".
- Precios con `Intl.NumberFormat('es-AR')` (`$ 9.500`).
- Lighthouse mobile ≥ 90. README para alguien no técnico.
- Abierto: zona de entrega (envíos, retiro, alcance) y medios de pago. "Envíos a todo Mendoza" era solo un ejemplo del brief y no se publica hasta confirmarlo con la dueña.

## Brand Commitments
Compromisos del brief, sacados del catálogo:
- Fondo rosa muy pálido `#FBEBEA`, bloques en rosa empolvado `#F2D2CD`, acentos en rosa viejo / terracota suave, con el tono exacto tomado del logo y del "Catálogo" en cursiva.
- Tipografía: sans condensada para nombres y precios (en el catálogo, Anicon Sans) y script fina (Amsterdam Two) solo en 1 o 2 títulos decorativos, nunca en texto de lectura. Hay que usar equivalentes libres de Google Fonts.
- Logo ABDA usado tal cual: una flor de línea fina sobre "ABDA" en serif clásica rosa y la bajada "Belleza consciente", dentro de un círculo rosa pálido (`public/img/logo.png`).
- Voz cercana, con voseo y algún emoji puntual (🩷 💌). Mezcla natural de términos del rubro en inglés (lip oil, gloss, blush).
- Referencia de estructura y nivel de calidad: citygirlbeauty.com. No copiar su marca, sus colores ni sus textos, ni nada propio de una tienda.

## Evidence on Hand
- `productos.json`: precios y stock reales.
- `Catálogo ABDA.pdf` (21 páginas): la fuente de todo lo visual. De ahí se extrajeron:
  - las 92 fotos de producto, verificadas una por una contra el nombre y el precio: `public/img/productos/<id>.webp` y `-400.webp`;
  - las franjas de foto de cada categoría: `public/img/categorias/`;
  - la foto de tapa: `public/img/portada.webp`;
  - el logo: `public/img/logo.png`, en 400 px con transparencia.
- Las fotos son de producto sobre fondos claros, lilas o rosas. En los envases se ven las marcas City Girl, TEI, Mely, Pink21 y Victoria's Secret. City Girl es la misma marca de la referencia citygirlbeauty.com.
- Las dudas de datos (variantes que se leen en las fotos y un posible error en "Day to Day Candy") están en `PENDIENTES.md`.
- No hay: fotos originales en alta, logo vectorial, descripciones, testimonios ni datos de entrega o pago. No fabricarlos.

## Product Principles
1. Del Instagram al WhatsApp en un toque: cada pantalla acerca a la consulta.
2. Pensado para el celular primero, porque ahí está casi todo el tráfico.
3. La dueña es autónoma: `productos.json` es la única fuente y un cambio no requiere tocar código.
4. Solo lo verdadero: sin descripciones, marcas ni promesas de entrega inventadas.

## Accessibility & Inclusion
Contraste AA (cuidado con el texto rosa sobre fondo rosa), foco visible, `alt` en todas las fotos y objetivos táctiles de al menos 44px.
