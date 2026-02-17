'use client';

import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagenes/banner.jpeg"
          alt="Kaiser Ingeniería Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay para legibilidad */}
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-600 bg-opacity-20 border border-blue-500 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                LÍDERES EN LOGÍSTICA DE CARGA
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Ingeniería de{' '}
              <span className="text-blue-400">Precisión</span> para la{' '}
              <span className="text-blue-400">Gran Industria</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-lg drop-shadow-md">
              Expertos en soluciones integrales de carga y descarga para los
              sectores Petroquímico y Minero. Garantizamos eficiencia operativa
              y los más altos estándares de seguridad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300 shadow-lg"
              >
                Explorar Productos <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 backdrop-blur-sm"
              >
                Hablar con un Experto
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-400 border-opacity-50">
              <div>
                <p className="text-3xl font-bold text-blue-400 drop-shadow-md">25+</p>
                <p className="text-gray-200 text-sm drop-shadow">AÑOS DE EXPERIENCIA</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400 drop-shadow-md">500+</p>
                <p className="text-gray-200 text-sm drop-shadow">PROYECTOS EJECUTADOS</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400 drop-shadow-md">100%</p>
                <p className="text-gray-200 text-sm drop-shadow">CUMPLIMIENTO HSE</p>
              </div>
            </div>
          </div>

          {/* Right side - Removed placeholder */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
