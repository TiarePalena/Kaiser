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
          src="/imagenes/hero-background.jpg"
          alt="Kaiser Ingeniería Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay mejorado con gradiente */}
        <div className="absolute inset-0 bg-slate-900 opacity-55"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl text-white">
              Ingeniería de{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">precisión</span> para la{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">gran industria</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-lg drop-shadow-md">
              Expertos en soluciones integrales de carga y descarga para los
              sectores Petroquímico y Minero. Garantizamos eficiencia operativa
              y los más altos estándares de seguridad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#products"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/50 transform hover:scale-105"
              >
                Explorar Productos <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 backdrop-blur-sm transform hover:scale-105"
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
