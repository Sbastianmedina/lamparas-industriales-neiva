export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  category: string;
  images: string[];
  features: string[];
  specifications: {
    material: string;
    dimensions: string;
    bulbType: string;
    voltage: string;
    weight: string;
  };
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Lámpara Robot Dorado Industrial',
    slug: 'lampara-robot-dorado-industrial',
    price: 450000,
    originalPrice: 520000,
    description: 'Lámpara de mesa única con diseño de robot articulado. Acabado en bronce dorado envejecido con cable textil rojo.',
    longDescription: 'Pieza artesanal única hecha completamente a mano con tuberías de hierro galvanizado y acabado en bronce envejecido. El robot presenta múltiples articulaciones y cuenta con dos puntos de luz independientes con cable textil trenzado de alta calidad. Perfecta para decoración industrial, estudios creativos o espacios modernos. Cada pieza es única y puede presentar variaciones que la hacen especial.',
    category: 'Mesa',
    images: ['/images/products/lampara-robot-dorado.png'],
    features: [
      'Diseño de robot articulado 100% artesanal',
      'Acabado en bronce dorado envejecido',
      'Cable textil rojo trenzado de alta calidad',
      'Base de madera maciza',
      'Dos puntos de luz independientes',
      'Pieza única, sin producción en serie'
    ],
    specifications: {
      material: 'Tubería de hierro galvanizado, bronce, madera maciza',
      dimensions: '35cm alto x 25cm ancho x 15cm profundidad',
      bulbType: 'E27 Edison vintage (incluye 2 bombillos)',
      voltage: '110V - 220V',
      weight: '2.5 kg aprox.'
    },
    inStock: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: '2',
    name: 'Lámpara Araña Steampunk',
    slug: 'lampara-arana-steampunk',
    price: 380000,
    description: 'Lámpara colgante con diseño de araña. Estructura en tubería industrial con acabado bronce antiguo.',
    longDescription: 'Impresionante lámpara colgante inspirada en el steampunk con forma de araña de 8 patas. Fabricada íntegramente con codos y tubos industriales con acabado en bronce oxidado. Cuenta con dos portalámparas Edison que crean un ambiente cálido e industrial. Ideal para techos altos, lofts, restaurantes o espacios con decoración industrial.',
    category: 'Colgante',
    images: ['/images/products/lampara-arana-bronce.png'],
    features: [
      'Diseño de araña con 8 patas articuladas',
      'Acabado bronce oxidado auténtico',
      'Doble iluminación Edison',
      'Perfecta para techos altos',
      'Instalación con cadena regulable',
      'Obra de arte funcional'
    ],
    specifications: {
      material: 'Tubería industrial, bronce, hierro',
      dimensions: '40cm diámetro x 30cm alto',
      bulbType: 'E27 Edison (incluye 2 bombillos vintage)',
      voltage: '110V - 220V',
      weight: '3.2 kg aprox.'
    },
    inStock: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3',
    name: 'Lámpara Escorpión Triple Luz',
    slug: 'lampara-escorpion-triple-luz',
    price: 520000,
    originalPrice: 590000,
    description: 'Espectacular lámpara de mesa con forma de escorpión. Triple punto de luz con bombillos Edison vintage.',
    longDescription: 'Una de nuestras piezas más impresionantes: lámpara escorpión con tres puntos de luz independientes. La estructura simula perfectamente las patas y cola del arácnido utilizando codos industriales. Los bombillos tipo Edison vintage crean un efecto visual impactante. Acabado en bronce oscuro envejecido. Perfecta como pieza central en escritorios, librerías o mesas auxiliares.',
    category: 'Mesa',
    images: ['/images/products/lampara-escorpion-triple.png'],
    features: [
      'Diseño escorpión con anatomía realista',
      'Triple punto de luz independiente',
      'Bombillos Edison tipo tubo incluidos',
      'Acabado bronce oscuro premium',
      'Base estable con sistema anti-vuelco',
      'Pieza de colección artesanal'
    ],
    specifications: {
      material: 'Tubería de hierro, bronce envejecido',
      dimensions: '45cm largo x 35cm ancho x 30cm alto',
      bulbType: 'E27 Edison tubo vintage (incluye 3 bombillos)',
      voltage: '110V - 220V',
      weight: '3.8 kg aprox.'
    },
    inStock: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: '4',
    name: 'Lámpara Humanoide Madera Natural',
    slug: 'lampara-humanoide-madera-natural',
    price: 420000,
    description: 'Lámpara escultórica con forma humana. Base de madera maciza y tubería industrial patinada.',
    longDescription: 'Lámpara de mesa con diseño antropomórfico que simula una figura humana sosteniendo un bombillo. La combinación de tubería industrial oscura con base de madera maciza veteada crea un contraste elegante. Acabado en pátina natural que resalta la textura del metal. Ideal para decoración moderna, estudios de diseño o espacios creativos.',
    category: 'Mesa',
    images: ['/images/products/lampara-humanoide-madera.png'],
    features: [
      'Diseño antropomórfico único',
      'Base de madera maciza veteada',
      'Acabado pátina oscura natural',
      'Postura dinámica y expresiva',
      'Bombillo Edison globo incluido',
      'Perfecta para escritorio o mesita de noche'
    ],
    specifications: {
      material: 'Tubería de hierro, madera maciza nogal',
      dimensions: '30cm alto x 18cm ancho x 15cm profundidad',
      bulbType: 'E27 Edison globo (incluye 1 bombillo)',
      voltage: '110V - 220V',
      weight: '2.2 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '5',
    name: 'Lámpara Medidor de Presión Industrial',
    slug: 'lampara-medidor-presion-industrial',
    price: 480000,
    description: 'Lámpara industrial con medidor de presión BOSS original. Diseño steampunk con base de madera clara.',
    longDescription: 'Pieza única que incorpora un auténtico medidor de presión industrial marca BOSS. La lámpara combina elementos industriales reales con iluminación vintage creando una obra de arte funcional. La base de madera clara contrasta perfectamente con el metal oscuro. El medidor es funcional y añade un toque auténtico al diseño steampunk. Ideal para oficinas, estudios o espacios con temática industrial.',
    category: 'Mesa',
    images: ['/images/products/lampara-medidor-presion.png'],
    features: [
      'Medidor de presión BOSS auténtico',
      'Base de madera natural clara',
      'Acabado industrial vintage',
      'Estructura de tubería compleja',
      'Bombillo globo transparente',
      'Elemento decorativo único'
    ],
    specifications: {
      material: 'Tubería de hierro, latón, madera pino',
      dimensions: '32cm alto x 20cm ancho x 18cm profundidad',
      bulbType: 'E27 Edison globo transparente (incluido)',
      voltage: '110V - 220V',
      weight: '2.8 kg aprox.'
    },
    inStock: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '6',
    name: 'Lámpara Robot Gimnasta',
    slug: 'lampara-robot-gimnasta',
    price: 390000,
    description: 'Robot articulado en pose dinámica. Base circular de madera con acabado bronce premium.',
    longDescription: 'Lámpara escultórica que representa un robot en postura de gimnasta, con un brazo extendido sosteniendo el bombillo. La postura dinámica y expresiva hace de esta pieza una verdadera escultura funcional. Acabado en bronce envejecido con detalles en dorado. Base circular de madera maciza. Perfecta para estanterías, escritorios o como pieza decorativa central.',
    category: 'Mesa',
    images: ['/images/products/lampara-robot-gimnasta.png'],
    features: [
      'Postura dinámica de gimnasta',
      'Acabado bronce con detalles dorados',
      'Base circular de madera maciza',
      'Articulaciones precisas',
      'Bombillo globo ámbar incluido',
      'Escultura funcional única'
    ],
    specifications: {
      material: 'Tubería de hierro, bronce, madera',
      dimensions: '28cm alto x 22cm ancho x 12cm diámetro base',
      bulbType: 'E27 Edison globo ámbar (incluido)',
      voltage: '110V - 220V',
      weight: '2.0 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '7',
    name: 'Lámpara Robot Levantador de Pesas',
    slug: 'lampara-robot-levantador-pesas',
    price: 550000,
    description: 'Impresionante robot sosteniendo pesas industriales. Doble iluminación con ruedas funcionales.',
    longDescription: 'Una de nuestras piezas más elaboradas: robot atleta levantando una barra de pesas hecha con válvulas industriales reales. La estructura cuenta con ruedas funcionales tipo steampunk y doble punto de luz. El nivel de detalle es excepcional, con múltiples articulaciones y acabado en bronce envejecido multicapa. Pieza de colección perfecta para gimnasios boutique, estudios o espacios con personalidad.',
    category: 'Mesa',
    images: ['/images/products/lampara-robot-levantador.png'],
    features: [
      'Robot en pose de levantador de pesas',
      'Ruedas industriales funcionales',
      'Doble punto de iluminación',
      'Válvulas industriales auténticas',
      'Acabado bronce premium multicapa',
      'Pieza de colección de alto valor'
    ],
    specifications: {
      material: 'Tubería de hierro, válvulas industriales, bronce',
      dimensions: '38cm alto x 30cm ancho x 20cm profundidad',
      bulbType: 'E27 Edison (incluye 2 bombillos vintage)',
      voltage: '110V - 220V',
      weight: '4.2 kg aprox.'
    },
    inStock: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: '8',
    name: 'Lámpara Escritorio Minimalista',
    slug: 'lampara-escritorio-minimalista',
    price: 340000,
    description: 'Diseño clean con brazo ajustable. Cable textil rojo y acabado industrial oscuro.',
    longDescription: 'Lámpara de escritorio con diseño minimalista pero industrial. Brazo articulado que permite ajustar la altura y dirección de la luz. Cable textil trenzado en rojo intenso que añade un toque de color. Base sólida de tubería industrial con acabado oscuro patinado. Perfecta para espacios de trabajo, estudios o como lámpara de lectura. Funcional y decorativa.',
    category: 'Mesa',
    images: ['/images/products/lampara-escritorio-simple.png'],
    features: [
      'Brazo articulado ajustable',
      'Cable textil rojo de alta calidad',
      'Base estable tipo trípode',
      'Acabado industrial oscuro',
      'Diseño minimalista funcional',
      'Ideal para trabajo y lectura'
    ],
    specifications: {
      material: 'Tubería de hierro, cable textil',
      dimensions: '32cm alto x 25cm alcance x 12cm base',
      bulbType: 'E27 Edison tubo (incluido)',
      voltage: '110V - 220V',
      weight: '1.8 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '9',
    name: 'Lámpara Perro Cuadrúpedo',
    slug: 'lampara-perro-cuadrupedo',
    price: 460000,
    description: 'Lámpara con forma de perro en cuatro patas. Diseño orgánico con tubería industrial.',
    longDescription: 'Lámpara escultórica que representa un perro o animal cuadrúpedo en posición natural. La estructura de tuberías crea una anatomía sorprendentemente realista. Acabado en bronce envejecido con detalles dorados que resaltan las articulaciones. Bombillo tipo Edison vintage que simula la cabeza del animal. Pieza conversacional perfecta para espacios creativos, oficinas modernas o estudios de diseño.',
    category: 'Mesa',
    images: ['/images/products/lampara-perro-cuadruple.png'],
    features: [
      'Diseño cuadrúpedo realista',
      'Anatomía con tubería articulada',
      'Acabado bronce con detalles dorados',
      'Postura natural y dinámica',
      'Bombillo Edison vintage incluido',
      'Pieza escultórica conversacional'
    ],
    specifications: {
      material: 'Tubería de hierro, bronce envejecido',
      dimensions: '30cm largo x 20cm ancho x 25cm alto',
      bulbType: 'E27 Edison vintage (incluido)',
      voltage: '110V - 220V',
      weight: '2.6 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: true
  },
  {
    id: '10',
    name: 'Lámpara Dual Base Madera',
    slug: 'lampara-dual-base-madera',
    price: 410000,
    description: 'Lámpara vertical con dos bombillos Edison. Base de madera maciza y estructura alta.',
    longDescription: 'Elegante lámpara vertical tipo poste con doble iluminación Edison. La base de madera maciza oscura proporciona estabilidad mientras la estructura de tubería vertical crea una silueta estilizada. Los dos bombillos Edison tipo filamento vintage crean un ambiente cálido. Cable textil negro trenzado. Perfecta para rincones de lectura, recámaras o como lámpara auxiliar en salas.',
    category: 'Piso',
    images: ['/images/products/lampara-dual-madera.png'],
    features: [
      'Diseño vertical tipo poste',
      'Doble iluminación Edison',
      'Base de madera maciza oscura',
      'Cable textil negro trenzado',
      'Estructura alta y estilizada',
      'Perfecta para rincones'
    ],
    specifications: {
      material: 'Tubería de hierro, madera maciza',
      dimensions: '45cm alto x 15cm base x 12cm profundidad',
      bulbType: 'E27 Edison filamento (incluye 2 bombillos)',
      voltage: '110V - 220V',
      weight: '2.4 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '11',
    name: 'Lámpara Robot Corredor',
    slug: 'lampara-robot-corredor',
    price: 430000,
    description: 'Robot en posición de carrera. Base circular de madera con bombillo vintage.',
    longDescription: 'Lámpara escultórica que captura el movimiento de un corredor en plena acción. La postura inclinada hacia adelante con un brazo extendido sosteniendo la luz transmite velocidad y dinamismo. Acabado en bronce envejecido con pátina natural. Base circular de madera maciza. Los detalles en las articulaciones muestran el nivel artesanal de la pieza. Ideal para oficinas deportivas, estudios creativos o espacios modernos.',
    category: 'Mesa',
    images: ['/images/products/lampara-robot-corredor.png'],
    features: [
      'Postura dinámica de corredor',
      'Sensación de movimiento',
      'Base circular de madera',
      'Acabado bronce envejecido',
      'Bombillo vintage incluido',
      'Escultura cinética funcional'
    ],
    specifications: {
      material: 'Tubería de hierro, bronce, madera',
      dimensions: '32cm alto x 25cm ancho x 14cm diámetro',
      bulbType: 'E27 Edison vintage (incluido)',
      voltage: '110V - 220V',
      weight: '2.3 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '12',
    name: 'Lámpara Marco Industrial Vertical',
    slug: 'lampara-marco-industrial-vertical',
    price: 495000,
    description: 'Estructura vertical tipo marco con placa "PIPE STORY". Bombillo globo Edison.',
    longDescription: 'Lámpara de diseño arquitectónico con estructura tipo marco o portal. Incluye placa decorativa "PIPE STORY" que celebra el arte de trabajar con tubería. La estructura vertical crea una silueta elegante mientras el bombillo globo grande tipo Edison proporciona luz cálida y decorativa. Acabado en bronce y hierro envejecido. Con válvula decorativa funcional. Perfecta como pieza decorativa en librerías, estudios o espacios industriales.',
    category: 'Mesa',
    images: ['/images/products/lampara-marco-industrial.png'],
    features: [
      'Diseño tipo marco arquitectónico',
      'Placa "PIPE STORY" incluida',
      'Válvula decorativa funcional',
      'Bombillo globo grande Edison',
      'Acabado hierro envejecido',
      'Estructura vertical elegante'
    ],
    specifications: {
      material: 'Tubería de hierro, latón, válvula industrial',
      dimensions: '42cm alto x 18cm ancho x 15cm profundidad',
      bulbType: 'E27 Edison globo G125 (incluido)',
      voltage: '110V - 220V',
      weight: '3.0 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '13',
    name: 'Lámpara Válvulas Rojas Steampunk',
    slug: 'lampara-valvulas-rojas-steampunk',
    price: 470000,
    description: 'Lámpara compacta con válvulas rojas decorativas. Base de madera grabada y diseño steampunk.',
    longDescription: 'Pieza steampunk auténtica con válvulas industriales rojas funcionales que añaden color y contraste. La base de madera maciza está grabada con diseño personalizado. Estructura compacta pero visualmente impactante con tuberías entrecruzadas. Acabado en hierro oscuro que resalta las válvulas rojas. Bombillo Edison tipo tubo vintage. Perfecta para coleccionistas de steampunk, estudios creativos o como pieza única en estanterías.',
    category: 'Mesa',
    images: ['/images/products/lampara-valvulas-rojas.png'],
    features: [
      'Válvulas industriales rojas auténticas',
      'Base de madera con grabado',
      'Diseño steampunk genuino',
      'Estructura compacta',
      'Bombillo Edison tubo vintage',
      'Pieza de colección'
    ],
    specifications: {
      material: 'Tubería de hierro, válvulas rojas, madera grabada',
      dimensions: '25cm alto x 18cm ancho x 15cm profundidad',
      bulbType: 'E27 Edison tubo vintage (incluido)',
      voltage: '110V - 220V',
      weight: '2.1 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: true
  },
  {
    id: '14',
    name: 'Lámpara Robot Sentado Pensador',
    slug: 'lampara-robot-sentado-pensador',
    price: 440000,
    description: 'Robot en posición sentada contemplativa. Base de madera maciza con acabado premium.',
    longDescription: 'Lámpara escultórica que evoca "El Pensador" de Rodin en versión industrial. Robot sentado en pose contemplativa con excelente balance y estabilidad. Base de madera maciza veteada que añade calidez al metal oscuro. Acabado en pátina verde-bronce envejecido con detalles en cobre. Bombillo Edison vintage que ilumina desde la "cabeza". Pieza perfecta para escritorios, estudios o espacios de reflexión.',
    category: 'Mesa',
    images: ['/images/products/lampara-robot-sentado.png'],
    features: [
      'Postura contemplativa tipo "Pensador"',
      'Base de madera veteada premium',
      'Acabado pátina verde-bronce',
      'Balance y estabilidad perfectos',
      'Bombillo Edison vintage',
      'Pieza filosófica decorativa'
    ],
    specifications: {
      material: 'Tubería de hierro, bronce, madera maciza',
      dimensions: '28cm alto x 20cm ancho x 18cm profundidad',
      bulbType: 'E27 Edison vintage (incluido)',
      voltage: '110V - 220V',
      weight: '2.5 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: '15',
    name: 'Lámpara Robot Colgante Vertical',
    slug: 'lampara-robot-colgante-vertical',
    price: 400000,
    description: 'Diseño vertical suspendido. Figura antropomórfica con bombillo Edison horizontal.',
    longDescription: 'Lámpara con diseño único de figura suspendida verticalmente. La estructura antropomórfica sostiene un bombillo Edison en posición horizontal creando un efecto visual interesante. Acabado en bronce dorado envejecido. Las "piernas" articuladas crean estabilidad mientras mantienen la ilusión de suspensión. Perfecta como pieza de conversación en estudios, lofts o espacios con decoración moderna industrial.',
    category: 'Mesa',
    images: ['/images/products/lampara-robot-colgante.png'],
    features: [
      'Diseño vertical suspendido',
      'Bombillo en posición horizontal',
      'Acabado bronce dorado',
      'Figura antropomórfica articulada',
      'Efecto visual único',
      'Pieza conversacional'
    ],
    specifications: {
      material: 'Tubería de hierro, bronce dorado',
      dimensions: '35cm alto x 18cm ancho x 12cm profundidad',
      bulbType: 'E27 Edison vintage (incluido)',
      voltage: '110V - 220V',
      weight: '1.9 kg aprox.'
    },
    inStock: true,
    isFeatured: false,
    isNew: false
  }
];

export const categories = [
  { id: 'all', name: 'Todos', slug: 'todos' },
  { id: 'mesa', name: 'Mesa', slug: 'mesa' },
  { id: 'piso', name: 'Piso', slug: 'piso' },
  { id: 'colgante', name: 'Colgante', slug: 'colgante' },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all' || category === 'todos') return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};
