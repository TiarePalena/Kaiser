'use client';

import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMapPin,
      label: 'Ubicación',
      value: 'Pasaje República Nº3 Of F',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'aolguin@kaiseringenieria.cl',
    },
    {
      icon: FiClock,
      label: 'Horario de Atención',
      value: '08:30 – 18:00',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-wider">
                CONTACTO
              </p>
              <h2 className="text-4xl font-bold mt-4 mb-4">
                Hablemos de su <span className="text-blue-600">Próximo desafío</span>
              </h2>
              <p className="text-gray-600">
                Nuestras oficinas centrales están preparadas para recibir sus
                requerimientos técnicos. Un ingeniero de nuestro equipo lo
                contactará en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {info.label}
                      </p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <form action="https://formsubmit.co/aolguin@kaiseringenieria.cl" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  EMAIL DE TRABAJO
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="juan@empresa.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  INDUSTRIA
                </label>
                <select
                  name="Industria"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300 appearance-none cursor-pointer"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Petroquímica">Petroquímica</option>
                  <option value="Minería">Minería</option>
                  <option value="Gas & Oil">Gas & Oil</option>
                  <option value="Energía">Energía</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  MENSAJE / REQUERIMIENTO
                </label>
                <textarea
                  name="Mensaje"
                  placeholder="Describa brevemente su proyecto..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Hidden input para redirección después del envío */}
              <input type="hidden" name="_next" value="https://localhost:3000/thank-you" />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/30 transform hover:scale-105"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
