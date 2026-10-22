# Pendientes para revisar con la dueña

Las 92 fotos se sacaron de `Catálogo ABDA.pdf`. Cada una se asoció con su producto comparando, en el mismo orden que el catálogo, el nombre y el precio que tiene debajo. Coincidieron los 92 productos y todos los precios. Ninguna foto quedó con una asociación dudosa.

La dueña contestó una primera tanda de preguntas en `abda.docx` (2026-10-20). Lo confirmado ya se cargó en `productos.json`; queda anotado acá para que quede el rastro.

## Resuelto (cargado en `productos.json`)

- **Los tres "Perfume Day to Day Candy"** eran tres aromas distintos, confirmados por la dueña:
  - `perfume-day-to-day-candy` → **Perfume Day to Day Sweet Candy**
  - `perfume-day-to-day-candy-2` → **Perfume Day to Day Smooth Almond**
  - `perfume-day-to-day-candy-3` → **Perfume Day to Day Happy Summer**
- **`rubor`** (sin stock, la foto con la latita "Pocket Contour"): confirmado que el producto es el contorno, no el rubor. Renombrado a **Pocket Contour**.
- **Destacados de la home:** a pedido de la dueña, sacamos `base-bb-cream` y `blush-liquido`, y pasamos `darling-vanilla-jazmine` (Victoria's Secret) al primer lugar, para que un body splash se vea apenas entra una clienta. Ella pidió "que se vean primero **algunos** body splash de Victoria's Secret" (plural) pero solo había uno ya destacado; si quiere sumar más de los otros siete (Romantic, Bare Vanilla, Amber Aperitif, Vanilla Intense, Aqua Kiss Shimmer, Pure Seduction Shimmer, Isla Hibiscus), que diga cuáles.
- **Logo:** mandó el archivo en mejor calidad (1507×1507, con transparencia) adjunto al final de `abda.docx`. Se regeneraron `logo.png`, `logo-152.webp`, `logo-240.webp`, `favicon-32.png` y `apple-touch-icon.png` a partir de ese archivo. Sigue sin ser vectorial.

## Confirmado, pendiente de redactar en el sitio

- **Entrega:** "Envíos a zona este y puntos de encuentro, tiene costo y varía según la zona" (respuesta textual de la dueña). Falta decidir dónde y cómo decirlo en el sitio (¿guía de compra? ¿pie de página?) — no se agregó todavía ninguna frase para no inventar la redacción exacta.
- **Medios de pago:** "Transferencia, efectivo y mercado pago" (respuesta textual). Mismo caso: falta decidir si reemplaza la frase genérica del paso 4 de la guía de compra ("Te ayudamos con tu pedido y los medios de pago 💰") o se agrega aparte.

## Todavía sin contestar (quedaron con el casillero vacío en `abda.docx`)

- **Variantes que se leen en las fotos** (sección 2 del documento): fragrance-mist (x3), perfume day to day aura/velvet/honey, crema corporal/paleta contorno/lip-oil. Ningún casillero "Está bien" quedó marcado ni se escribió una corrección. Sigue sin cargarse en `variante`.
- **Frase de la home** ("Tu make favorito, a un mensaje."): ni "Me gusta" ni "Prefiero" quedaron marcados.
- **Guía de compra adaptada:** tampoco se marcó el casillero.
- **Descripciones de producto:** no escribió ninguna.

## Variantes que se leen en las fotos

Mientras el campo `variante` esté vacío, el sitio los distingue solo por la foto. Si la dueña los confirma, se pueden cargar en `variante`:

| id | Lo que se lee en la foto |
|---|---|
| `fragrance-mist` | Magnetic bloom |
| `fragrance-mist-2` | Powerful wink |
| `fragrance-mist-3` | Sunset treat |
| `perfume-day-to-day-aura` | Warm aura |
| `perfume-day-to-day-velvet` | Velvet passion |
| `perfume-day-to-day-honey` | Warm honey |
| `crema-corporal-500-ml` | Rose bliss |
| `paleta-contorno-2` | Contour kiss |
| `lip-oil` | Red rose (en la foto de portada aparece el mismo lip oil) |

Marcas que se ven en los envases: City Girl, TEI, Mely y Pink21. Por pedido del brief no se agregaron a los nombres.

## Elecciones provisorias del sitio

- **Destacados:** quedaron 6, en este orden: darling-vanilla-jazmine, lip-oil, gloss-tornasol, rimel-4, paleta-de-sombras y fragrance-mist (ver "Resuelto" arriba). La dueña puede cambiarlos (ver README).
- **Mensaje de WhatsApp:** al mensaje del brief se le suma el link al producto, para que ABDA vea exactamente qué foto eligió la clienta. Cuando hay productos repetidos se aclara cuál es (por ejemplo, "Lip oil · opción 2 de 5").
- **Guía de compra:** se adaptó el paso 2 del catálogo ("Sacale captura") a "Tocá 'Consultar por WhatsApp' en el producto, o sacale captura 📸", y el paso 3 a "Mandanos el mensaje y lo vemos juntas 💌".
- **Frase de la home:** "Tu make favorito, a un mensaje." Es nueva, no sale del catálogo: confirmarla con la dueña.

- **Hueco "Sin stock" en la home:** la pared de la portada muestra el primer producto sin stock del JSON (hoy, Pocket Contour) para que se entienda cómo se ve lo que falta. Cambia solo cuando cambia el stock.
- **Nombres:** `productos.json` ya traía los nombres un poco corregidos respecto del PDF ("Sombra de ojos", "Piedra gua sha", "Bálsamo", "Mascarilla ojos y boca", etc.). Se mantuvieron.
- **"Opción N de M":** se numera por el orden del JSON y cambia si se agregan o reordenan productos con el mismo nombre. Lo que identifica de verdad el producto en el mensaje de WhatsApp es el link. Cargar `variante` lo reemplaza.

## Imágenes generadas

- `public/img/productos/<id>.webp` (800 px) y `<id>-400.webp` (400 px), para `srcset`.
- `public/img/categorias/<categoria>.webp` (1600 px) y `-800.webp`: la franja de foto que encabeza cada categoría en el catálogo.
- `public/img/portada.webp`: la foto de la tapa del catálogo.
- `public/img/logo.png`: el logo circular "ABDA · Belleza consciente", con fondo transparente, en 400×400, reducido desde el archivo en mejor calidad que mandó la dueña (1507×1507). Sigue sin haber versión vectorial.
