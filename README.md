# 🔥 Mundiluz - Tienda de Lámparas Industriales

Tienda online de lámparas artesanales estilo industrial y steampunk hechas con tubería. Proyecto completo desarrollado con Next.js 14, TypeScript, Tailwind CSS y Zustand.

## 🎨 Características

- ✅ **15 productos únicos** con imágenes profesionales
- ✅ **Diseño responsive** mobile-first
- ✅ **Carrito de compras** con persistencia local
- ✅ **Integración WhatsApp** para ventas
- ✅ **Filtros por categoría** (Mesa, Piso, Colgante)
- ✅ **Páginas de detalle** de producto completas
- ✅ **SEO optimizado** con metadata
- ✅ **Animaciones suaves** y microinteracciones
- ✅ **100% TypeScript** para mejor desarrollo
- ✅ **Navbar y Footer** completamente funcionales

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter de código
```

## 🏗️ Estructura del Proyecto

```
mundiluz-project/
├── public/
│   └── images/
│       └── products/          # 15 imágenes de productos
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Estilos globales
│   │   ├── productos/
│   │   │   └── page.tsx       # Catálogo con filtros
│   │   └── producto/
│   │       └── [slug]/        # Detalle de producto
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Navegación
│   │   │   ├── Footer.tsx     # Pie de página
│   │   │   └── NewsletterForm.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx       # Hero section
│   │   │   ├── Features.tsx   # Características
│   │   │   └── CTA.tsx        # Call to action
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductGrid.tsx
│   │   └── cart/
│   │       └── CartDrawer.tsx # Carrito lateral
│   ├── context/
│   │   └── cartStore.ts       # Store de Zustand
│   ├── data/
│   │   ├── products.ts        # Base de datos productos
│   │   └── navigation.ts      # Links de navegación
│   └── lib/
│       └── utils.ts           # Utilidades
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 💰 Productos Incluidos

| # | Producto | Precio COP | Categoría |
|---|----------|------------|-----------|
| 1 | Lámpara Robot Dorado Industrial | $450.000 | Mesa |
| 2 | Lámpara Araña Steampunk | $380.000 | Colgante |
| 3 | Lámpara Escorpión Triple Luz | $520.000 | Mesa |
| 4 | Lámpara Humanoide Madera Natural | $420.000 | Mesa |
| 5 | Lámpara Medidor de Presión Industrial | $480.000 | Mesa |
| 6 | Lámpara Robot Gimnasta | $390.000 | Mesa |
| 7 | Lámpara Robot Levantador de Pesas | $550.000 | Mesa |
| 8 | Lámpara Escritorio Minimalista | $340.000 | Mesa |
| 9 | Lámpara Perro Cuadrúpedo | $460.000 | Mesa |
| 10 | Lámpara Dual Base Madera | $410.000 | Piso |
| 11 | Lámpara Robot Corredor | $430.000 | Mesa |
| 12 | Lámpara Marco Industrial Vertical | $495.000 | Mesa |
| 13 | Lámpara Válvulas Rojas Steampunk | $470.000 | Mesa |
| 14 | Lámpara Robot Sentado Pensador | $440.000 | Mesa |
| 15 | Lámpara Robot Colgante Vertical | $400.000 | Mesa |

## 🎯 Funcionalidades Principales

### Carrito de Compras
- Agregar/eliminar productos
- Ajustar cantidades
- Persistencia en localStorage
- Checkout por WhatsApp

### Filtros de Productos
- Por categoría (Mesa, Piso, Colgante)
- Productos nuevos
- Productos destacados
- Responsive mobile

### Páginas de Producto
- Galería de imágenes
- Especificaciones técnicas
- Características detalladas
- Productos relacionados
- Botón de WhatsApp directo

## 🎨 Paleta de Colores

```css
brand-500: #f5870f  /* Naranja principal */
brand-600: #c46c0c  /* Naranja hover */
neutral-900: #171717 /* Negro */
white: #ffffff      /* Blanco */
```

## 📱 Contacto de la Tienda

- **WhatsApp:** +57 318 483 3330
- **Dirección:** Calle 79c #11B-17, Bogotá
- **Instagram:** @mundiluz
- **TikTok:** @mundiluz

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Estado:** Zustand
- **Iconos:** Lucide React
- **Optimización de imágenes:** Next/Image

## 📝 Notas de Desarrollo

### Código de Nivel Senior
- ✅ TypeScript estricto en todo el proyecto
- ✅ Componentes reutilizables y modulares
- ✅ Separación de lógica de negocio
- ✅ Performance optimizada con Next.js
- ✅ SEO-friendly con metadata
- ✅ Accesibilidad (ARIA labels)
- ✅ Mobile-first responsive design

### Próximos Pasos Sugeridos
1. Integrar pasarela de pago (Stripe, PayU)
2. Panel de administración
3. Sistema de reviews
4. Blog de contenido
5. Newsletter funcional
6. Google Analytics
7. Chat en vivo

## 📄 Licencia

Proyecto desarrollado para Mundiluz © 2024

---

**Desarrollado con ❤️ para Mundiluz**
# lamparas-industriales-neiva
