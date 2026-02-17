'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'INICIO', href: '/' },
    { label: 'PRODUCTOS', href: '/#products' },
    { label: 'PRODUCTOS', href: '/#capabilities' },
    { label: 'SOBRE NOSOTROS', href: '/nosotros' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-kaiser-dark rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="hidden sm:inline font-bold text-kaiser-dark text-base">
              KAISER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-kaiser-dark hover:text-kaiser-teal transition duration-300 text-xs font-bold"
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
              <FiX size={24} className="text-kaiser-dark" />
            ) : (
              <FiMenu size={24} className="text-kaiser-dark" />
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
                className="block px-4 py-2 text-kaiser-dark hover:text-kaiser-teal hover:bg-kaiser-light rounded transition duration-300 font-medium text-sm"
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
