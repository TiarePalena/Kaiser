'use client';

import Image from 'next/image';

export default function Clients() {
  const clients = [
    { name: 'Copec', logo: '/imagenes/Copec_2015.png' },
    { name: 'Cliente', logo: '/imagenes/descarga.png' },
    { name: 'Cliente', logo: '/imagenes/logo-1.jpg' },
    { name: 'Cliente', logo: '/imagenes/logob.jpg' },
    { name: 'Terquim', logo: '/imagenes/terquim.png' },
  ];

  // Duplicar logos para efecto infinito
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-wider">
            NUESTROS CLIENTES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Confían en <span className="text-blue-600">nuestra experiencia</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las empresas más importantes de la industria minera
            y petroquímica en Chile.
          </p>
        </div>

        {/* Carrusel infinito */}
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-8 w-48 h-32 flex items-center justify-center"
              >
                <div className="relative w-full h-full bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center hover:shadow-lg transition duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={100}
                    className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
