'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-kaiser-dark text-kaiser-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-kaiser-teal border-opacity-30">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Kaiser Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
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
            © 2026 Kaiser Ingeniería S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61587629696821&locale=es_LA" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-kaiser-light hover:text-kaiser-teal transition duration-300 flex items-center gap-2"
            >
              <FiFacebook size={20} />
              Facebook
            </a>
            <a 
              href="https://www.linkedin.com/company/kaiser-ingenieria/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-kaiser-light hover:text-kaiser-teal transition duration-300 flex items-center gap-2"
            >
              <FiLinkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/kaiseringenieria_cl/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-kaiser-light hover:text-kaiser-teal transition duration-300 flex items-center gap-2"
            >
              <FiInstagram size={20} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
