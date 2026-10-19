import fs from 'node:fs';
import path from 'node:path';
import data from '../../productos.json';

export type Producto = (typeof data.productos)[number];
export type Categoria = (typeof data.categorias)[number];

export const marca = data.marca;
export const categorias: Categoria[] = data.categorias;
export const productos: Producto[] = data.productos;

export const ANUNCIO = 'Pedidos y consultas por WhatsApp · Mendoza';
export const instagramUrl = `https://www.instagram.com/${marca.instagram}/`;
export const whatsappVisible = '+54 9 2634 76-3965';

const pesos = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

/** Un producto se vende solo si tiene stock y precio cargado. */
export const disponible = (p: Producto) => p.stock === true && typeof p.precio === 'number';

export const precio = (p: Producto) => (disponible(p) ? pesos.format(p.precio as number) : null);

export const formatoPesos = (n: number) => pesos.format(n);

export const nombreCompleto = (p: Producto) => [p.nombre, p.variante].filter(Boolean).join(' ');

export const categoriaDe = (p: Producto) =>
  categorias.find((c) => c.id === p.categoria) ?? { id: p.categoria, nombre: p.categoria };

// Varios productos comparten nombre (5 "Lip oil"). Mientras no tengan variante,
// "Opción 2 de 5" ayuda a distinguirlos además de la foto.
const repetidos = new Map<string, string[]>();
for (const p of productos) {
  const clave = `${p.categoria}|${nombreCompleto(p).toLowerCase()}`;
  repetidos.set(clave, [...(repetidos.get(clave) ?? []), p.id]);
}
export const opcion = (p: Producto) => {
  const ids = repetidos.get(`${p.categoria}|${nombreCompleto(p).toLowerCase()}`) ?? [];
  return ids.length > 1 ? `Opción ${ids.indexOf(p.id) + 1} de ${ids.length}` : null;
};

/** Productos de una categoría, con los que no tienen stock al final. */
export const deCategoria = (id: string) => {
  const lista = productos.filter((p) => p.categoria === id);
  return [...lista.filter(disponible), ...lista.filter((p) => !disponible(p))];
};

export const desde = (id: string) => {
  const precios = productos.filter((p) => p.categoria === id && disponible(p)).map((p) => p.precio as number);
  return precios.length ? pesos.format(Math.min(...precios)) : null;
};

export const destacados = () => productos.filter((p) => p.destacado && disponible(p));

export const urlProducto = (p: Producto) => `/producto/${p.id}/`;

const whatsapp = (texto: string) => `https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(texto)}`;

export const waGeneral = whatsapp('Hola ABDA! 🩷 Quería hacer una consulta.');

/** Mensaje precargado del detalle. El link deja a ABDA ver exactamente qué foto eligió la clienta. */
export const waProducto = (p: Producto, link: string) => {
  const cual = opcion(p);
  const quien = cual ? `${nombreCompleto(p)} · ${cual.toLowerCase()}` : nombreCompleto(p);
  const texto = disponible(p)
    ? `Hola ABDA! 🩷 Me interesa: ${quien} (${precio(p)}). ¿Está disponible?`
    : `Hola ABDA! 🩷 Me interesa: ${quien}, que figura sin stock. ¿Me avisás cuando vuelva?`;
  return whatsapp(`${texto}\n${link}`);
};

// Las fotos viven en public/. Si existe la versión chica (-400) se ofrece en srcset;
// si la foto falta, el sitio muestra el logo en su lugar en vez de una imagen rota.
const publico = path.resolve('public');
const existe = (rel: string) => fs.existsSync(path.join(publico, rel));

export const foto = (rel: string) => {
  const limpio = rel.replace(/^\/+/, '');
  if (!limpio || !existe(limpio)) return { src: '/img/logo-240.webp', srcset: undefined, falta: true };
  const chica = limpio.replace(/(\.\w+)$/, '-400$1');
  return {
    src: `/${limpio}`,
    srcset: existe(chica) ? `/${chica} 400w, /${limpio} 800w` : undefined,
    falta: false,
  };
};

/** WhatsApp no siempre muestra WebP al compartir: cada producto tiene su JPEG en public/og/. */
export const imagenParaCompartir = (p: Producto) =>
  existe(`og/${p.id}.jpg`)
    ? { src: `/og/${p.id}.jpg`, ancho: 800, alto: 800 }
    : { src: '/og.jpg', ancho: 1200, alto: 630 };
