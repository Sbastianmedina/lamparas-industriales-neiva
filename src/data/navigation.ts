export const NAV_LINKS = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Productos',
    href: '/productos',
    children: [
      { label: 'Todos los Productos', href: '/productos' },
      { label: 'Lámparas de Mesa', href: '/productos?categoria=mesa' },
      { label: 'Lámparas de Piso', href: '/productos?categoria=piso' },
      { label: 'Lámparas Colgantes', href: '/productos?categoria=colgante' },
      { label: 'Nuevos Ingresos', href: '/productos?filter=nuevos' },
      { label: 'Destacados', href: '/productos?filter=destacados' },
    ],
  },
  {
    label: 'Nosotros',
    href: '/nosotros',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
];

export const FOOTER_CATEGORIES = [
  { label: 'Lámparas de Mesa', href: '/productos?categoria=mesa' },
  { label: 'Lámparas de Piso', href: '/productos?categoria=piso' },
  { label: 'Lámparas Colgantes', href: '/productos?categoria=colgante' },
  { label: 'Colección Robot', href: '/productos?coleccion=robot' },
  { label: 'Nuevos Ingresos', href: '/productos?filter=nuevos' },
];

export const FOOTER_TERMS = [
  { label: 'Términos y Condiciones', href: '/terminos' },
  { label: 'Política de Privacidad', href: '/privacidad' },
  { label: 'Envíos y Devoluciones', href: '/envios' },
  { label: 'Preguntas Frecuentes', href: '/faq' },
];
