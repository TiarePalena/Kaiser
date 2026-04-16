'use client';

import {
  FiCheck,
  FiSettings,
  FiFileText,
  FiZap,
  FiUsers,
  FiGlobe,
} from 'react-icons/fi';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: FiCheck,
      title: 'Compromiso con la Excelencia',
      description:
        'Compromiso a emplear los mejores recursos posibles para brindar a nuestros clientes mejoras continuas y seguras en sus procesos.',
    },
    {
      icon: FiSettings,
      title: 'Recursos Técnicos Especializados',
      description:
        'Disponer con los recursos técnicos que el cliente necesita para diseñar y operar un sistema de manejo confiable y eficiente.',
    },
    {
      icon: FiFileText,
      title: 'Cumplimiento Normativo',
      description:
        'Brindar productos que cumplen con todas las leyes aplicables en materia ambiental y de seguridad.',
    },
    {
      icon: FiZap,
      title: 'Respuesta Rápida',
      description:
        'Respaldo de nuestros productos con una experimentada y rápida respuesta a nuestros clientes.',
    },
    {
      icon: FiUsers,
      title: 'Soporte Continuo',
      description:
        'Constante soporte de mantenimiento y capacitación a los usuarios finales.',
    },
    {
      icon: FiGlobe,
      title: 'Protección Ambiental',
      description:
        'Proteger el medio ambiente donde se implementarán los productos.',
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-wider">
            VENTAJAS COMPETITIVAS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            ¿Por qué <span className="text-blue-600">preferirnos</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro compromiso es brindar soluciones de clase mundial con el
            más alto estándar de calidad y servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 space-y-4 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center shadow-lg transition duration-300 hover:scale-110 transform border-2 border-blue-200">
                  <Icon size={36} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
