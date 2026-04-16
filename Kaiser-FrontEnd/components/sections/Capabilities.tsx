'use client';

import {
  FiShoppingCart,
  FiBriefcase,
  FiZap,
} from 'react-icons/fi';

export default function Capabilities() {
  const capabilities = [
    {
      icon: FiShoppingCart,
      title: 'Ingeniería de Detalle',
      description:
        'Desarrollamos planos y especificaciones técnicas precisas para proyectos de infraestructura industrial compleja.',
    },
    {
      icon: FiBriefcase,
      title: 'Montaje e Instalación',
      description:
        'Equipos especializados para la puesta en marcha de sistemas de carga en sitios remotos y plantas activas.',
    },
    {
      icon: FiZap,
      title: 'Mantenimiento Predictivo',
      description:
        'Uso de tecnología IoT para monitorear el estado de sus equipos y prevenir paradas no programadas.',
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestras <span className="text-blue-400">capacidades</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ofrecemos un ciclo completo de vida para sus activos industriales,
            desde la concepción hasta el mantenimiento preventivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-l-4 border-blue-500 rounded-lg p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/50 transition duration-500 transform hover:-translate-y-1 space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg hover:shadow-blue-600/50 transition duration-300 transform hover:scale-110">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{cap.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {cap.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block text-blue-400 hover:text-blue-300 font-semibold text-sm pt-4 hover:translate-x-1 transition duration-300"
                >
                  Saber más →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
