// ============================================================
// Kaiser Ingeniería - Datos del Cotizador / Configurador
// ============================================================

export interface ProductOption {
  id: string;
  label: string;
  description?: string;
}

export interface ProductSpec {
  name: string;
  options: ProductOption[];
  required?: boolean;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
}

export interface QuoteItem {
  product: Product;
  selectedSpecs: Record<string, string>;
  quantity: number;
  notes: string;
}

export interface QuoteRequest {
  items: QuoteItem[];
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
    industry: string;
    message: string;
  };
}

// ---------- Categorías de aplicación ----------
export const APPLICATION_FILTERS: ProductOption[] = [
  { id: 'petroquimica', label: 'Petroquímica' },
  { id: 'mineria', label: 'Minería' },
  { id: 'maritimo', label: 'Marítimo / Portuario' },
  { id: 'gas-petroleo', label: 'Gas & Petróleo' },
  { id: 'quimica', label: 'Industria Química' },
  { id: 'alimentos', label: 'Alimentos & Bebidas' },
];

// ---------- Catálogo de Productos ----------
export const PRODUCTS: Product[] = [
  {
    id: 'acoples-secos',
    title: 'Acoples Secos',
    category: 'SUMINISTROS INDUSTRIALES',
    description:
      'Acoples de desconexión rápida sin derrame para aplicaciones industriales críticas. Diseñados para transferencia segura de fluidos en entornos exigentes.',
    image: '/imagenes/Acople-Seco-ASK.jpg',
    features: [
      'Conexión/desconexión rápida',
      'Cero derrames',
      'Múltiples materiales disponibles',
      'Certificación internacional',
    ],
    applications: ['petroquimica', 'quimica', 'gas-petroleo', 'mineria'],
    specs: [
      {
        name: 'Tamaño (Diámetro)',
        required: true,
        options: [
          { id: '1', label: '1"', description: 'DN25' },
          { id: '1.5', label: '1½"', description: 'DN40' },
          { id: '2', label: '2"', description: 'DN50' },
          { id: '3', label: '3"', description: 'DN80' },
          { id: '4', label: '4"', description: 'DN100' },
          { id: '6', label: '6"', description: 'DN150' },
        ],
      },
      {
        name: 'Material del Cuerpo',
        required: true,
        options: [
          { id: 'al', label: 'Aluminio' },
          { id: 'ss316', label: 'Acero Inoxidable 316' },
          { id: 'cs', label: 'Acero al Carbono' },
          { id: 'bronze', label: 'Bronce' },
        ],
      },
      {
        name: 'Tipo de Conexión',
        required: true,
        options: [
          { id: 'brida', label: 'Brida ANSI 150' },
          { id: 'brida-300', label: 'Brida ANSI 300' },
          { id: 'rosca-npt', label: 'Rosca NPT' },
          { id: 'rosca-bsp', label: 'Rosca BSP' },
        ],
      },
      {
        name: 'Sello',
        options: [
          { id: 'buna', label: 'Buna-N (NBR)' },
          { id: 'viton', label: 'Viton (FKM)' },
          { id: 'epdm', label: 'EPDM' },
          { id: 'ptfe', label: 'PTFE' },
        ],
      },
      {
        name: 'Presión de Trabajo',
        options: [
          { id: '150psi', label: '150 PSI (10 bar)' },
          { id: '300psi', label: '300 PSI (20 bar)' },
          { id: '500psi', label: '500 PSI (35 bar)' },
        ],
      },
    ],
  },
  {
    id: 'acoples-camlock',
    title: 'Acoples Camlock',
    category: 'SUMINISTROS INDUSTRIALES',
    description:
      'Sistema de acoplamiento modular camlock para transferencia de fluidos seguros. Disponibles en múltiples tipos (A, B, C, D, E, F, DC, DP).',
    image: '/imagenes/Acople-Seco-ASK.jpg',
    features: [
      'Conexión rápida',
      'Diversos tamaños',
      'Compatible con múltiples fluidos',
      'Intercambiabilidad universal',
    ],
    applications: ['petroquimica', 'quimica', 'alimentos', 'mineria'],
    specs: [
      {
        name: 'Tipo Camlock',
        required: true,
        options: [
          { id: 'A', label: 'Tipo A', description: 'Adaptador macho' },
          { id: 'B', label: 'Tipo B', description: 'Acoplador hembra' },
          { id: 'C', label: 'Tipo C', description: 'Acoplador con manguera' },
          { id: 'D', label: 'Tipo D', description: 'Acoplador hembra con rosca' },
          { id: 'E', label: 'Tipo E', description: 'Adaptador con manguera' },
          { id: 'F', label: 'Tipo F', description: 'Adaptador macho con rosca' },
          { id: 'DC', label: 'Tipo DC', description: 'Tapa ciega' },
          { id: 'DP', label: 'Tipo DP', description: 'Tapón ciego' },
        ],
      },
      {
        name: 'Tamaño (Diámetro)',
        required: true,
        options: [
          { id: '0.5', label: '½"' },
          { id: '0.75', label: '¾"' },
          { id: '1', label: '1"' },
          { id: '1.5', label: '1½"' },
          { id: '2', label: '2"' },
          { id: '3', label: '3"' },
          { id: '4', label: '4"' },
          { id: '6', label: '6"' },
        ],
      },
      {
        name: 'Material',
        required: true,
        options: [
          { id: 'al', label: 'Aluminio' },
          { id: 'ss316', label: 'Acero Inoxidable 316' },
          { id: 'pp', label: 'Polipropileno' },
          { id: 'bronze', label: 'Bronce' },
          { id: 'nylon', label: 'Nylon' },
        ],
      },
      {
        name: 'Sello',
        options: [
          { id: 'buna', label: 'Buna-N (NBR)' },
          { id: 'viton', label: 'Viton (FKM)' },
          { id: 'epdm', label: 'EPDM' },
          { id: 'ptfe', label: 'PTFE Encapsulado' },
        ],
      },
    ],
  },
  {
    id: 'valvulas-breakaway',
    title: 'Válvulas Breakaway',
    category: 'SEGURIDAD',
    description:
      'Válvulas de alivio automático que previenen derrames durante desconexión de emergencia. Certificadas para aplicaciones críticas.',
    image: '/imagenes/valvulas-breakway.jpg',
    features: [
      'Cierre automático',
      'Protección medio ambiente',
      'Certificación internacional',
      'Reconexión rápida',
    ],
    applications: ['petroquimica', 'gas-petroleo', 'maritimo', 'quimica'],
    specs: [
      {
        name: 'Tamaño (Diámetro)',
        required: true,
        options: [
          { id: '2', label: '2"', description: 'DN50' },
          { id: '3', label: '3"', description: 'DN80' },
          { id: '4', label: '4"', description: 'DN100' },
          { id: '6', label: '6"', description: 'DN150' },
          { id: '8', label: '8"', description: 'DN200' },
        ],
      },
      {
        name: 'Material',
        required: true,
        options: [
          { id: 'al', label: 'Aluminio' },
          { id: 'ss316', label: 'Acero Inoxidable 316' },
          { id: 'cs', label: 'Acero al Carbono' },
        ],
      },
      {
        name: 'Tipo de Conexión',
        required: true,
        options: [
          { id: 'brida-150', label: 'Brida ANSI 150' },
          { id: 'brida-300', label: 'Brida ANSI 300' },
          { id: 'camlock', label: 'Camlock' },
        ],
      },
      {
        name: 'Fuerza de Separación',
        options: [
          { id: 'baja', label: 'Baja (< 500 lbs)', description: 'Para mangueras livianas' },
          { id: 'media', label: 'Media (500-1000 lbs)', description: 'Estándar' },
          { id: 'alta', label: 'Alta (> 1000 lbs)', description: 'Para brazos de carga' },
        ],
      },
      {
        name: 'Certificación',
        options: [
          { id: 'ul', label: 'UL Listed' },
          { id: 'atex', label: 'ATEX' },
          { id: 'api', label: 'API' },
        ],
      },
    ],
  },
  {
    id: 'mangueras-marinas',
    title: 'Mangueras Marinas',
    category: 'TRANSPORTE',
    description:
      'Mangueras especializadas para transferencia de carga en operaciones marítimas. Diseñadas para soportar las condiciones más exigentes del ambiente marino.',
    image: '/imagenes/Mangueras-Marinas.jpg',
    features: [
      'Resistencia a presión',
      'Durabilidad marina',
      'Flexibilidad extrema',
      'OCIMF aprobadas',
    ],
    applications: ['maritimo', 'petroquimica', 'gas-petroleo'],
    specs: [
      {
        name: 'Tipo de Servicio',
        required: true,
        options: [
          { id: 'petrolero', label: 'Petrolero', description: 'Crudo y derivados' },
          { id: 'quimico', label: 'Químico', description: 'Productos químicos' },
          { id: 'lpg', label: 'LPG / LNG', description: 'Gas licuado' },
          { id: 'spm', label: 'SPM / CALM Buoy', description: 'Boya de carga' },
        ],
      },
      {
        name: 'Diámetro Nominal',
        required: true,
        options: [
          { id: '4', label: '4"' },
          { id: '6', label: '6"' },
          { id: '8', label: '8"' },
          { id: '10', label: '10"' },
          { id: '12', label: '12"' },
          { id: '16', label: '16"' },
          { id: '20', label: '20"' },
          { id: '24', label: '24"' },
        ],
      },
      {
        name: 'Longitud',
        required: true,
        options: [
          { id: '6m', label: '6 metros' },
          { id: '9m', label: '9 metros' },
          { id: '10.7m', label: '10.7 metros (35 ft)' },
          { id: '12m', label: '12 metros' },
          { id: 'custom', label: 'Longitud personalizada' },
        ],
      },
      {
        name: 'Presión de Trabajo',
        options: [
          { id: '150psi', label: '150 PSI (10 bar)' },
          { id: '232psi', label: '232 PSI (16 bar)' },
          { id: '300psi', label: '300 PSI (21 bar)' },
        ],
      },
      {
        name: 'Conexión de Brida',
        options: [
          { id: 'ansi-150', label: 'ANSI 150' },
          { id: 'ansi-300', label: 'ANSI 300' },
          { id: 'tabla-d', label: 'Tabla D (BS)' },
          { id: 'tabla-e', label: 'Tabla E (BS)' },
        ],
      },
    ],
  },
  {
    id: 'brazos-de-carga',
    title: 'Brazos de Carga',
    category: 'INFRAESTRUCTURA',
    description:
      'Sistemas articulados para carga y descarga de camiones cisterna, vagones ferroviarios y buques. Ingeniería de precisión para operaciones seguras.',
    image: '/imagenes/Brazo-de-Carga.jpg',
    features: [
      'Rotación 360°',
      'Sistema de bloqueo',
      'Acero reforzado',
      'Diseño ergonómico',
    ],
    applications: ['petroquimica', 'gas-petroleo', 'maritimo', 'quimica', 'mineria'],
    specs: [
      {
        name: 'Tipo de Brazo',
        required: true,
        options: [
          { id: 'top-loading', label: 'Carga Superior (Top Loading)', description: 'Para camiones cisterna' },
          { id: 'bottom-loading', label: 'Carga Inferior (Bottom Loading)', description: 'Para vagones y camiones' },
          { id: 'marine', label: 'Brazo Marino', description: 'Para buques y barcazas' },
          { id: 'rack', label: 'Brazo para Rack', description: 'Instalación en isla de carga' },
        ],
      },
      {
        name: 'Tamaño (Diámetro)',
        required: true,
        options: [
          { id: '2', label: '2"', description: 'DN50' },
          { id: '3', label: '3"', description: 'DN80' },
          { id: '4', label: '4"', description: 'DN100' },
          { id: '6', label: '6"', description: 'DN150' },
          { id: '8', label: '8"', description: 'DN200' },
          { id: '10', label: '10"', description: 'DN250' },
          { id: '12', label: '12"', description: 'DN300' },
        ],
      },
      {
        name: 'Material',
        required: true,
        options: [
          { id: 'cs', label: 'Acero al Carbono' },
          { id: 'ss316', label: 'Acero Inoxidable 316' },
          { id: 'ss304', label: 'Acero Inoxidable 304' },
          { id: 'al', label: 'Aluminio' },
        ],
      },
      {
        name: 'Tipo de Producto',
        options: [
          { id: 'petrolero', label: 'Petróleo y Derivados' },
          { id: 'quimico', label: 'Químicos' },
          { id: 'lpg', label: 'LPG / LNG' },
          { id: 'asfalto', label: 'Asfalto / Productos Calientes' },
          { id: 'alimenticio', label: 'Grado Alimenticio' },
        ],
      },
      {
        name: 'Accesorios',
        options: [
          { id: 'purga', label: 'Sistema de Purga' },
          { id: 'vapor', label: 'Recuperación de Vapores' },
          { id: 'calefaccion', label: 'Sistema de Calefacción' },
          { id: 'contrapeso', label: 'Contrapeso con Resorte' },
          { id: 'swivel', label: 'Junta Rotatoria Premium' },
        ],
      },
    ],
  },
];

// ---------- Industrias para formulario de contacto ----------
export const INDUSTRIES: ProductOption[] = [
  { id: 'petroquimica', label: 'Petroquímica' },
  { id: 'mineria', label: 'Minería' },
  { id: 'maritimo', label: 'Marítimo / Portuario' },
  { id: 'gas-petroleo', label: 'Gas & Petróleo' },
  { id: 'quimica', label: 'Industria Química' },
  { id: 'alimentos', label: 'Alimentos & Bebidas' },
  { id: 'otra', label: 'Otra' },
];
