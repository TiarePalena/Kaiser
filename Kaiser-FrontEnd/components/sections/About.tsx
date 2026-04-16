'use client';

import { FiTarget, FiEye, FiAward, FiShield, FiUsers, FiTrendingUp, FiCheckCircle, FiSettings, FiHeart } from 'react-icons/fi';

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-600">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Somos una empresa que brinda soluciones en operaciones de carga y 
            descarga para la industria Minera y Petroquímica.
          </p>
        </div>

        {/* Main Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FiShield size={24} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Protección y Seguridad</h3>
            <p className="text-gray-700 leading-relaxed">
              Ofrecemos productos y tecnologías que protegen al medio ambiente y 
              permiten una operación segura en terminales marítimos, plantas de 
              almacenamiento, distribución y de procesos.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FiUsers size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Colaboración Técnica</h3>
            <p className="text-gray-700 leading-relaxed">
              Colaboramos técnicamente con ingenierías y usuarios finales para dar 
              soluciones a los distintos problemas que pueden presentarse en la 
              ejecución de los proyectos.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FiTarget size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Obtener una reputación de excelencia garantizando el mejor resultado 
              a través del desarrollo de todos los procesos de producción desde la 
              confianza y el prestigio de expertos fabricantes y ser partner fuerte 
              y fiable de nuestros clientes.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FiEye size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Generar un impacto positivo en nuestros clientes y colaborar en la 
              protección al medio ambiente y las personas.
            </p>
          </div>
        </div>

        {/* ¿Por qué Preferirnos? */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-12 text-white">
          <div className="text-center mb-12">
            <div className="inline-block w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <FiAward size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4">¿Por qué Preferirnos?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: FiTrendingUp, 
                text: 'Compromiso a emplear los mejores recursos posibles para brindar a nuestros clientes mejoras continuas y seguras en sus procesos.'
              },
              { 
                icon: FiSettings, 
                text: 'Disponer con los recursos técnicos que el cliente necesita para diseñar y operar un sistema de manejo confiable y eficiente.'
              },
              { 
                icon: FiShield, 
                text: 'Brindar productos que cumplan con todas las leyes aplicables en materia ambiental y de seguridad.'
              },
              { 
                icon: FiCheckCircle, 
                text: 'Respaldo de nuestros productos con una experimentada y rápida respuesta a nuestros clientes.'
              },
              { 
                icon: FiUsers, 
                text: 'Constante soporte de mantenimiento y capacitación a los usuarios finales.'
              },
              { 
                icon: FiHeart, 
                text: 'Proteger el medio ambiente donde se implementarán los productos.'
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
            >
              CONTACTAR AHORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
