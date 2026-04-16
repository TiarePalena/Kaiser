'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'INICIO', href: '/' },
    { label: 'PRODUCTOS', href: '/#products' },
    { label: 'CAPACIDADES', href: '/#capabilities' },
    /*{ label: 'COTIZADOR', href: '/cotizador' },
    { label: 'SOBRE NOSOTROS', href: '/nosotros' },*/
  ];

  return (
    <header className={`${isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'} fixed w-full top-0 z-50 backdrop-blur-sm transition duration-300`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Kaiser Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-blue-300 transition duration-300 text-xs font-bold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="#contact"
              className="bg-kaiser-teal hover:bg-kaiser-teal/90 text-white px-6 py-2 rounded-full font-bold text-sm transition duration-300"
            >
              COTIZAR AHORA
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiMenu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded transition duration-300 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-kaiser-teal text-white rounded font-bold hover:bg-kaiser-teal/90 transition duration-300 text-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              COTIZAR AHORA
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
