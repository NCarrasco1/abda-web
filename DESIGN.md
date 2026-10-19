---
name: ABDA · Belleza consciente
description: Catálogo vidriera de maquillaje de Mendoza; fotos pegadas con cinta sobre una pared rosa, y la consulta por WhatsApp a un toque.
colors:
  ground: "#fbebea"
  powder: "#f2d2cd"
  blush: "#dd8e80"
  rose: "#9a4a40"
  rose-deep: "#7f3b33"
  ink: "#3a2422"
  ink-soft: "#6b4743"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "'Mrs Saint Delafield', cursive"
    fontSize: "clamp(4rem, 19vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.6rem, 11.8vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 9vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  body:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.35
  body-light:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 300
    lineHeight: 1.4
  label:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
  price:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.25
    fontFeature: "tnum"
rounded:
  none: "0px"
  focus: "2px"
  field: "23px"
  pill: "27px"
  round: "50%"
spacing:
  gutter: "16px"
  photo-border: "6px"
  touch: "44px"
  button: "54px"
  max: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.rose-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  chip:
    backgroundColor: "{colors.powder}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 15px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.paper}"
  input-search:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "46px"
  shot:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "{spacing.photo-border}"
  step-note:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px 20px 20px"
  announcement-bar:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.ground}"
    padding: "8px 16px"
---

# Design System: ABDA · Belleza consciente

## Overview

**Creative North Star: "La pared de capturas"**

El sitio es la pared rosa donde la clienta pega las capturas de lo que quiere pedir, igual que la tapa del catálogo de Instagram y el paso "sacale captura" de la guía de compra. Cada producto es una foto real con borde blanco, apenas torcida y sostenida por un trozo de cinta washi a rayas; los títulos son una sans condensada en mayúsculas, y una script fina firma solo dos palabras de todo el sitio ("Catálogo" y "Guía de compra").

La densidad es de vidriera, no de tienda: grillas de 2 columnas en el celular y 3 o 4 en escritorio, mucho aire entre secciones (72 a 96px) y nada de cajas, bordes ni tarjetas genéricas. La profundidad viene del papel: sombras suaves y difusas bajo las fotos, como fotos pegadas sobre una pared, nunca sombras duras. La cinta es el lenguaje de estado: se levanta cuando la foto se despega al tocarla, y cuando un producto no tiene stock queda el hueco punteado con su cinta y el sello "Sin stock".

Todo está pensado para el pulgar: objetivos táctiles de 44px como mínimo, botón fijo de WhatsApp de 54px abajo, y el rosa viejo reservado para la acción, los precios y el estado activo.

**Key Characteristics:**
- Fotos con borde blanco de 6px, sombra suave y rotaciones chicas (entre −3° y 4°).
- Cinta washi a rayas como marca de foto, de paso y de estado.
- Barlow Condensed en mayúsculas para nombres, precios, títulos y navegación.
- Script (Mrs Saint Delafield) solo en "Catálogo" y "Guía de compra".
- Esquinas rectas en papel y fotos; solo los controles (botón, buscador, interruptor) son redondos.
- Rosa viejo para acción, precio y estado activo; tinta marrón para el texto.

## Colors

Una paleta de rosas empolvados con una tinta marrón cálida, tomada del catálogo y del logo; un solo acento fuerte, el rosa viejo.

### Primary
- **Rosa viejo** (`rose`): botón de WhatsApp, precios, chip activo, texto en script, sello y contorno de "Sin stock", anillo de foco, selección de texto y barra de anuncio. Cumple AA como texto sobre `ground` (cerca de 5,3:1).
- **Rosa viejo hondo** (`rose-deep`): hover del botón principal, título "Guía de compra", números de los pasos e íconos del pie.

### Secondary
- **Rosa coral de cinta** (`blush`): solo decorativo y nunca texto. Rayas de la cinta (al 55 %), contorno punteado del hueco sin stock y barra de desplazamiento.

### Neutral
- **Rosa pared** (`ground`): fondo de todo el sitio, de los pasos de la guía y de la barra de filtros fija.
- **Rosa empolvado** (`powder`): bloques: pie, sección de la guía, chips de categoría, fondo de la foto mientras carga y línea bajo los títulos de categoría del catálogo.
- **Papel** (`paper`): borde de las fotos y fondo del buscador; también el texto sobre los botones.
- **Tinta** (`ink`): texto principal y botón secundario ("Ver todo el catálogo", "Ir al catálogo").
- **Tinta suave** (`ink-soft`): datos secundarios: "Opción 1 de 5", conteos, placeholder, "Volver" y la nota del detalle.

### Named Rules
**La regla del rosa que actúa.** El rosa viejo marca solo lo que se toca o lo que importa decidir: la acción, el precio, lo activo y el estado. No se usa para decorar superficies grandes; la única franja llena es la barra de anuncio, de una línea.

**La regla de la cinta muda.** `blush` nunca lleva texto: no llega a AA sobre los rosas. Cualquier texto de estado va en `rose`.

## Typography

**Display Font:** Mrs Saint Delafield (con cursive)
**Body Font:** Barlow Condensed (con Arial Narrow, sans-serif), pesos 300, 500 y 600
**Label/Mono Font:** la misma Barlow Condensed en mayúsculas con tracking

**Character:** Una sans condensada y firme, en mayúsculas, que se lee como las etiquetas del catálogo de Canva, y una firma manuscrita fina que aparece dos veces y nunca en texto de lectura.

### Hierarchy
- **Display** (script, 400, `clamp(4rem, 19vw, 6rem)` en la guía y `clamp(4.5rem, 22vw, 7rem)` en el título del catálogo, interlineado 1): solo "Catálogo" y "Guía de compra", torcidas entre −3° y −6°. En la pared de la home "Catálogo" escala con el contenedor (21,5cqi).
- **Headline** (600, `clamp(2.6rem, 11.8vw, 4.75rem)`, 0.92, mayúsculas): el H1 de la home, en dos líneas, con la segunda en rosa viejo. El H1 del detalle usa `clamp(2.5rem, 11vw, 4rem)` y 0.95.
- **Title** (600, `clamp(2.25rem, 9vw, 3.5rem)`, interlineado 1, mayúsculas): títulos de sección ("Destacados", "Categorías"). Los grupos del catálogo y "Otros" usan `clamp(2rem, 8vw, 2.75rem)`; las etiquetas de categoría, 1.75rem.
- **Body** (500, 1.1875rem, 1.35): texto corrido. El texto largo y amable (agradecimiento del pie, bajada de la home) va en 300, de 1.375 a 1.5rem, con 30 a 34ch de ancho.
- **Label** (500, 1.0625rem, tracking 0.05em, mayúsculas): navegación, chips, nombres de producto (1.125rem) y conteos. La barra de anuncio usa 0.8125rem con 0.06em.
- **Precio** (600, rosa viejo, cifras tabulares, sin cortes): 1.3rem en la tarjeta y 2.5rem en el detalle, con formato `$ 9.500`.

### Named Rules
**La regla de las dos firmas.** La script aparece solo en "Catálogo" y "Guía de compra". Nunca en nombres, precios, botones ni párrafos.

**La regla de la etiqueta.** Nombres, títulos, navegación, chips y botones van en mayúsculas con tracking de 0.04 a 0.06em. Los párrafos van en caja normal.

## Layout

Primero el celular. El contenido vive en un contenedor de `min(100% − 32px, 1120px)` con 16px de margen. Las tiras horizontales (chips de categoría) y la pared de la home se escapan hasta el borde con márgenes negativos del gutter.

- **Pared de la home:** un lienzo con proporción 390/470 donde cada pieza se ubica en porcentajes y la tipografía escala en `cqi`. Hay una portada grande, torcida a la izquierda, dos productos destacados a la derecha y el hueco de un producto sin stock. Desde 900px, el texto y los chips van a la izquierda y la pared (hasta 680px) a la derecha.
- **Grillas de producto:** 2 columnas en el celular (separación de 36–40px por 16–18px), 3 desde 640px y 4 desde 1000px en el catálogo (720px en "Otros" del detalle). La separación vertical siempre es mayor que la horizontal, para que se lean el nombre y el precio debajo de cada foto.
- **Ritmo de secciones:** de 72 a 96px entre bloques de la home; 28px entre un título y su grilla.
- **Elementos fijos:** botón de WhatsApp abajo, de ancho completo en el celular, flotando a la derecha (24px) desde 720px y como círculo de 54px en celular apaisado (alto ≤ 500px). Los filtros del catálogo quedan fijos arriba y se sueltan en apaisado. El scroll reserva lugar para ambos (`scroll-padding`).
- **Puntos de corte observados:** 640px, 720px, 900px, 1000px y alto de 500px.

## Elevation & Depth

Profundidad de papel pegado: las superficies son planas y lo único que se eleva son las fotos y las notas, con sombras suaves, difusas y tintadas con la tinta marrón, nunca grises ni duras. Al despegar la foto, la sombra crece.

### Shadow Vocabulary
- **Foto pegada** (`box-shadow: 0 10px 22px -8px rgb(58 36 34 / 0.35)`, token `--shadow-photo`): fotos de producto, portada y franjas de categoría.
- **Foto despegada** (`box-shadow: 0 18px 30px -12px rgb(58 36 34 / 0.4)`): hover o foco de una tarjeta.
- **Nota** (`box-shadow: 0 8px 18px -10px rgb(58 36 34 / 0.35)`): pasos de la guía.
- **Cinta** (`box-shadow: 0 1px 2px rgb(58 36 34 / 0.12)`): el grosor de la cinta.
- **Botón** (`box-shadow: 0 8px 18px -6px rgb(154 74 64 / 0.6)`; en tinta, `rgb(58 36 34 / 0.55)`): resplandor bajo los botones con el color del botón.
- **Filtros fijos** (`box-shadow: 0 10px 18px -14px rgb(58 36 34 / 0.45)`): aparece solo cuando la barra queda pegada arriba.

### Named Rules
**La regla del papel.** Toda sombra es difusa, con offset negativo y tintada de `ink` o `rose`. Nada de sombras duras desplazadas ni grises neutros.

## Shapes

Papel recortado: fotos, notas, chips y franjas tienen esquinas rectas (0). Lo redondo queda para lo que se toca como control: el botón píldora (27px), el buscador (23px), el interruptor "Ocultar sin stock" (13px, con perilla circular) y el logo circular. Las rotaciones son parte de la forma. Las fotos van de −3° a 4°, las franjas y notas de ±1–1,5°, la cinta de −7° a 5° y el sello de −4°. Sin stock, el borde pasa a ser un contorno punteado de 1.5px en `blush`.

## Components

### Buttons
Píldoras macizas y táctiles con un resplandor del mismo color.
- **Shape:** píldora (27px de radio), 54px de alto.
- **Primary:** rosa viejo con texto blanco, label de 600 y 1.25rem en mayúsculas (0.05em), 26px de padding lateral e ícono SVG de 22px. Es "Escribinos por WhatsApp" y "Consultar por WhatsApp".
- **Hover / Focus:** pasa a `rose-deep` en 0.2s; al presionar baja 1px. El foco es el anillo global de 2px en `rose`, separado 3px.
- **Ink:** fondo `ink`, hover `#24130f`, para la navegación secundaria ("Ver todo el catálogo", "Ir al catálogo").

### Chips
- **Style:** bloque `powder` de esquinas rectas, 44px de alto, label de 500 y 1.0625rem en mayúsculas, sin borde.
- **State:** el activo (`aria-current`) va en `rose` con texto blanco. En el catálogo, el hover oscurece el empolvado; en la home los atajos pasan a `rose` en hover. En el celular forman una tira con scroll horizontal y desde 900px se envuelven en filas.

### Cards / Containers
- **Tarjeta de producto:** foto pegada (ver "Foto con cinta") con nombre en mayúsculas, la "Opción n de m" en `ink-soft` y el precio debajo, sin caja. Sin stock, el precio se cambia por "Avisame cuando vuelva" subrayado en `rose`.
- **Franja de categoría:** foto panorámica (1600/372) en papel blanco, con la etiqueta debajo (nombre de 1.75rem y dato en `ink-soft`), tilt de ±1° y cinta.
- **Nota de paso:** bloque `ground` sobre la sección `powder`, con número grande en `rose-deep`, cinta y tilt chico.
- **Corner Style:** rectas (0).
- **Shadow Strategy:** ver Elevation & Depth.
- **Internal Padding:** 6px de papel en fotos; 22px 20px 20px en notas.

### Inputs / Fields
- **Style:** buscador con fondo `paper`, borde de 1.5px en rosa medio, radio de 23px, 46px de alto e ícono de lupa SVG en `rose`.
- **Focus:** el borde pasa a `rose` y suma el anillo de 2px.
- **Interruptor:** pista `powder` con borde `rose` de 44×26px; encendido, pista `rose` y perilla blanca corrida 18px.

### Navigation
- **Barra de anuncio:** franja `rose` de una línea, en mayúsculas de 0.8125rem: "Pedidos y consultas por WhatsApp · Mendoza".
- **Cabecera:** logo circular de 76px a la izquierda y dos enlaces en mayúsculas (500, 1.0625rem, 44px de alto) a la derecha. La página actual va en `rose` con subrayado de 2px separado 6px.
- **Pie:** bloque `powder` con el logo de 104px, el agradecimiento en 300 y los contactos con íconos SVG de trazo de 1.8 en `rose-deep`.

### Foto con cinta (componente firma)
La pieza del sistema. Es una foto cuadrada con 6px de papel blanco, sombra de foto pegada, tilt por variable y un trozo de cinta washi (rayas de 6px en `blush`/`powder` semitransparentes, 22px de alto, hasta 96px de ancho y centrada 11px por encima del borde). Cada tarjeta varía el tilt y la inclinación de la cinta para que una grilla no se repita.
- **Despegar (hover/foco):** en 0.3s con `cubic-bezier(0.16, 1, 0.3, 1)`, la foto se endereza a 0°, sube 4px y su sombra crece, mientras la cinta se levanta 5px y gira a −7°. En el detalle, la foto ya aparece despegada.
- **Sin stock:** sin papel ni sombra, con contorno punteado `blush`, la foto al 42 % y desaturada, y el sello "Sin stock" en `rose` sobre `ground`, con borde de 1.5px y torcido −4°.
- **Hueco:** sin foto, solo el contorno punteado con su cinta y el texto (home y 404).
- **Transición:** la foto conserva su nombre de view transition entre la tarjeta y el detalle. Con movimiento reducido, todo es instantáneo.

## Do's and Don'ts

### Do:
- **Do** pegar cada foto de producto con 6px de papel blanco, `--shadow-photo` y una cinta, con un tilt de −3° a 4° que varíe entre vecinas.
- **Do** usar la cinta para el estado: se levanta al despegar la foto y queda sobre el hueco punteado cuando no hay stock.
- **Do** escribir nombres, títulos, navegación y botones en Barlow Condensed en mayúsculas con tracking, y los precios en 600, `rose` y cifras tabulares.
- **Do** mantener todo objetivo táctil en 44px como mínimo y el botón de WhatsApp en 54px.
- **Do** tintar las sombras con `ink` o `rose` y mantenerlas difusas.
- **Do** respetar `prefers-reduced-motion`: sin despegues ni view transitions.

### Don't:
- **Don't** usar la script fuera de "Catálogo" y "Guía de compra".
- **Don't** poner texto en `blush`; para estados en texto, usar `rose`.
- **Don't** redondear fotos, notas, chips ni franjas: el papel tiene esquinas rectas y lo redondo es solo para controles.
- **Don't** usar sombras duras desplazadas ni grises neutros.
- **Don't** usar íconos de fuente ni glifos como íconos: los íconos son SVG de un solo trazo (1.8) en `currentColor`.
- **Don't** alterar el logo: va tal cual, circular.
