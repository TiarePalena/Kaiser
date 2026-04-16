'use client';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'Acoples Secos',
      category: 'SUMINISTROS INDUSTRIALES',
      description:
        'Acoples de desconexión rápida sin derrame para aplicaciones industriales críticas.',
      features: [
        'Conexión/desconexión rápida',
        'Cero derrames',
        'Múltiples materiales disponibles',
      ],
      image: '/imagenes/Acople-Seco-ASK.jpg',
    },
    {
      id: 2,
      title: 'Acoples Camlock',
      category: 'SUMINISTROS INDUSTRIALES',
      description:
        'Sistema de acoplamiento modular camlock para transferencia de fluidos seguros.',
      features: [
        'Conexión rápida',
        'Diversos tamaños',
        'Compatible con múltiples fluidos',
      ],
      image: '/imagenes/Camlock GLP 2.jpg',
    },
    {
      id: 3,
      title: 'Válvulas Breakaway',
      category: 'SEGURIDAD',
      description:
        'Válvulas de alivio automático que previenen derrames durante desconexión de emergencia.',
      features: [
        'Cierre automático',
        'Protección medio ambiente',
        'Certificación internacional',
      ],
      image: '/imagenes/valvulas-breakway.jpg',
    },
    {
      id: 4,
      title: 'Mangueras Marinas',
      category: 'TRANSPORTE',
      description:
        'Mangueras especializadas para transferencia de carga en operaciones marítimas.',
      features: [
        'Resistencia a presión',
        'Durabilidad marina',
        'Flexibilidad extrema',
      ],
      image: '/imagenes/Mangueras-Marinas.jpg',
    },
    {
      id: 5,
      title: 'Brazos de Carga',
      category: 'INFRAESTRUCTURA',
      description:
        'Sistemas articulados para carga y descarga de camiones cisterna y vagones.',
      features: [
        'Rotación 360°',
        'Sistema de bloqueo',
        'Acero reforzado',
      ],
      image: '/imagenes/Brazo-de-Carga.jpg',
    },
  ];

  return (
    <section
      id="products"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-wider">
            SUMINISTROS DE INGENIERÍA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Equipamiento de clase <span className="text-blue-600">mundial</span>{' '}
            para entornos <span className="text-blue-600">críticos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestros productos están certificados bajo normativas internacionales
            para garantizar la integridad de su operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-400 transition duration-500 transform hover:-translate-y-2 group"
            >
              {/* Product image */}
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-blue-600 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Ver Especificaciones - Próximamente */}
                {/* <button className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold text-sm pt-4 border-t border-gray-200 transition duration-300 py-3 rounded-b">
                  Ver Especificaciones →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
