# Pendientes para revisar con la dueña

Las 92 fotos se sacaron de `Catálogo ABDA.pdf`. Cada una se asoció con su producto comparando, en el mismo orden que el catálogo, el nombre y el precio que tiene debajo. Coincidieron los 92 productos y todos los precios. Ninguna foto quedó con una asociación dudosa.

Lo que sigue son datos para confirmar. No se cargó nada de esto en `productos.json`.

## Posible error del catálogo

- **`perfume-day-to-day-candy-3`** (página 16): en el catálogo dice "Perfume day to day candy", pero en la foto se lee **"Happy Summer"**. ¿Es otro aroma?
- **"Perfume Day to Day Candy" aparece 3 veces** (`perfume-day-to-day-candy`, `-2`, `-3`), las tres sin stock y con fotos distintas. ¿Son productos diferentes o hay que borrar alguna repetida?

## Variantes que se leen en las fotos

Mientras el campo `variante` esté vacío, el sitio los distingue solo por la foto. Si la dueña los confirma, se pueden cargar en `variante`:

| id | Lo que se lee en la foto |
|---|---|
| `fragrance-mist` | Magnetic bloom |
| `fragrance-mist-2` | Powerful wink |
| `fragrance-mist-3` | Sunset treat |
| `perfume-day-to-day-aura` | Warm aura |
| `perfume-day-to-day-honey` | Warm honey |
| `perfume-day-to-day-candy` | Sweet candy |
| `crema-corporal-500-ml` | Rose bliss |
| `paleta-contorno-2` | Contour kiss |
| `lip-oil` | Red rose (en la foto de portada aparece el mismo lip oil) |

Marcas que se ven en los envases: City Girl, TEI, Mely y Pink21. Por pedido del brief no se agregaron a los nombres.

## Elecciones provisorias del sitio

- **Destacados:** marqué 8 productos con `"destacado": true` como punto de partida: lip-oil, blush-liquido, base-bb-cream, gloss-tornasol, paleta-de-sombras, rimel-4, fragrance-mist y darling-vanilla-jazmine. La dueña puede cambiarlos (ver README).
- **Mensaje de WhatsApp:** al mensaje del brief se le suma el link al producto, para que ABDA vea exactamente qué foto eligió la clienta. Cuando hay productos repetidos se aclara cuál es (por ejemplo, "Lip oil · opción 2 de 5").
- **Guía de compra:** se adaptó el paso 2 del catálogo ("Sacale captura") a "Tocá 'Consultar por WhatsApp' en el producto, o sacale captura 📸", y el paso 3 a "Mandanos el mensaje y lo vemos juntas 💌".
- **Frase de la home:** "Tu make favorito, a un mensaje." Es nueva, no sale del catálogo: confirmarla con la dueña.

## Datos sin confirmar

- **Entrega:** zona, envíos, retiro y costos. El sitio no promete nada sobre esto hasta tenerlo confirmado.
- **Medios de pago:** el catálogo solo dice "Te ayudamos con tu pedido y los medios de pago".
- **Descripciones:** están todas vacías, a propósito.

## Imágenes generadas

- `public/img/productos/<id>.webp` (800 px) y `<id>-400.webp` (400 px), para `srcset`.
- `public/img/categorias/<categoria>.webp` (1600 px) y `-800.webp`: la franja de foto que encabeza cada categoría en el catálogo.
- `public/img/portada.webp`: la foto de la tapa del catálogo.
- `public/img/logo.png`: el logo circular "ABDA · Belleza consciente", con fondo transparente, en 400×400. No hay versión vectorial: si existe, conviene conseguirla para el favicon y el logo en pantallas grandes.
