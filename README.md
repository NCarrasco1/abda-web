# Sitio web de ABDA

Catálogo online de ABDA (@abda.beauty). Muestra los productos con foto y precio, y cada consulta se cierra por WhatsApp. No tiene carrito, cuentas ni pagos.

Todo lo que se ve en el sitio sale de un solo archivo: **`productos.json`**. Para cambiar un precio, marcar algo sin stock o sumar un producto, se edita ese archivo y nada más.

---

## Cómo editar `productos.json`

Cada producto es un bloque como este:

```json
{
  "id": "lip-oil-2",
  "nombre": "Lip oil",
  "categoria": "labios",
  "precio": 6000,
  "stock": true,
  "destacado": false,
  "descripcion": "",
  "variante": "",
  "imagen": "img/productos/lip-oil-2.webp"
}
```

Reglas para no romper nada:

- Los textos van **entre comillas**. Los números (`precio`) y `true`/`false` van **sin comillas**.
- Cada bloque termina con `}` y, si viene otro después, con una coma: `},`
- Después del último campo de un bloque **no** va coma.
- Si algo se rompe, pegá el archivo en <https://jsonlint.com> y te marca la línea con el error.

### Cambiar un precio

Buscá el producto (con Ctrl+F, por su nombre) y cambiá el número de `"precio"`. Va sin puntos ni signo `$`:

```json
"precio": 7500,
```

El sitio lo muestra solo como `$ 7.500`.

### Marcar un producto sin stock

Cambiá `"stock"` a `false`:

```json
"precio": null,
"stock": false,
```

El producto sigue apareciendo, pero se ve apagado, con la etiqueta "Sin stock", y queda al final de su categoría. El botón cambia a "Avisame cuando vuelva". Cuando vuelva a entrar, poné `"stock": true` y cargá el precio de nuevo.

### Destacar un producto en la página de inicio

Poné `"destacado": true`. En la home, los dos primeros destacados aparecen pegados arriba, junto a la foto de tapa, y el resto en el bloque "Destacados". Los productos sin stock no se destacan aunque tengan `true`.

### Agregar una variante o descripción

- `"variante"`: el tono o modelo, por ejemplo `"Red Rose"`. Se muestra junto al nombre y se incluye en el mensaje de WhatsApp. Sirve para distinguir productos con el mismo nombre (hay 5 "Lip oil").
- `"descripcion"`: un texto corto. Si queda vacío (`""`), en el detalle no aparece ese bloque.

### Agregar un producto nuevo

1. **La foto:** cuadrada, de 800×800 px, en formato `.webp` (podés convertirla en <https://squoosh.app>). Guardala en `public/img/productos/` con un nombre sin espacios ni acentos, por ejemplo `iluminador-perlado.webp`. Si además guardás una copia de 400×400 con el mismo nombre terminado en `-400` (`iluminador-perlado-400.webp`), el sitio la usa en los celulares y carga más rápido.
2. **El bloque:** copiá un producto existente en `productos.json`, pegalo justo debajo y cambiá:
   - `"id"`: único, sin espacios ni acentos (`"iluminador-perlado"`). Es la dirección de la página: `/producto/iluminador-perlado/`.
   - `"nombre"`, `"precio"`, `"stock"`, `"destacado"`.
   - `"categoria"`: una de `rostro`, `labios`, `ojos`, `varios`, `victorias-secret`.
   - `"imagen"`: `"img/productos/iluminador-perlado.webp"`.

Si la foto todavía no está, el producto se muestra igual con el logo en lugar de la foto.

Junto a cada foto del catálogo hay un archivo `.json` con el mismo nombre (por ejemplo `lip-oil.webp.json`). Solo anota de qué página del PDF salió la foto. Para las fotos nuevas no hace falta crearlo.

### Sacar un producto

Borrá su bloque completo, desde `{` hasta `},`. Revisá que no quede una coma suelta antes del `]` final.

---

## Publicar el sitio

El sitio está publicado en **GitHub Pages**: <https://ncarrasco1.github.io/abda-web/>

Cada vez que se sube un cambio a la rama `main` del repositorio <https://github.com/NCarrasco1/abda-web>, el workflow `.github/workflows/deploy.yml` arma el sitio y lo publica solo, en uno o dos minutos. El progreso se ve en la pestaña **Actions** del repositorio.

La forma más simple de cambiar un precio sin instalar nada: abrí `productos.json` en GitHub, tocá el lápiz (Edit), hacé el cambio y apretá **Commit changes**. El sitio se actualiza solo.

**Dominio propio:** si compran un dominio (por ejemplo `abda.com.ar`), hay que cargarlo en GitHub (Settings → Pages → Custom domain) y cambiar en `astro.config.mjs` la línea `site` por `https://abda.com.ar` y borrar la línea `base`. Así los links de WhatsApp y las vistas previas usan la dirección nueva.

## Para quien programe

- Astro 5, sitio 100 % estático. Sin backend ni base de datos.
- `npm install`, luego `npm run dev` (en `localhost:4321/abda-web/`) o `npm run build`.
- El sitio vive bajo `base: '/abda-web'`. Todo link interno o imagen pasa por `ruta()` de `src/lib/catalogo.ts`; no escribas rutas que empiecen con `/` a mano.
- Datos: `productos.json`, leído en `src/lib/catalogo.ts`. Ningún componente tiene productos escritos a mano.
- Las fuentes Barlow Condensed y Mrs Saint Delafield se sirven desde el propio sitio (`@fontsource`), con `font-display: swap`.
- Las fotos se sacaron del PDF del catálogo; el origen de cada una está embebido en el archivo. Ver `PENDIENTES.md`.
