'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-kaiser-dark text-kaiser-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-kaiser-teal border-opacity-30">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-kaiser-teal rounded flex items-center justify-center shadow-md">
                <span className="text-kaiser-dark font-bold text-lg">K</span>
              </div>
              <div>
                <span className="block font-bold text-white">Kaiser</span>
                <span className="block text-xs text-kaiser-cyan">Ingeniería</span>
              </div>
            </div>
            <p className="text-sm text-kaiser-light opacity-75">
              Soluciones de ingeniería de precisión para la gran industria.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-kaiser-teal mb-4 uppercase text-sm">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Productos
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-kaiser-teal mb-4 uppercase text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Ingeniería de Detalle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Instalación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-kaiser-teal mb-4 uppercase text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kaiser-teal transition duration-300 text-kaiser-light">
                  HSE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-kaiser-light opacity-70">
            © 2024 Kaiser Ingeniería S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-kaiser-light hover:text-kaiser-teal transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-kaiser-light hover:text-kaiser-teal transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-kaiser-light hover:text-kaiser-teal transition duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
