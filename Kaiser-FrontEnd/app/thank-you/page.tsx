'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

export default function ThankYou() {
  useEffect(() => {
    // Google Analytics - Evento de conversión
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'value': 1.0,
        'currency': 'CLP',
        'transaction_id': 'contact_form_' + Date.now()
      });
    }

    // Facebook Pixel - Evento de conversión
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        'value': 1.0,
        'currency': 'CLP'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center space-y-6 animate-fade-in-up">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <FiCheckCircle size={40} className="text-green-600" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Gracias!
          </h1>
          <p className="text-gray-600">
            Tu mensaje ha sido enviado correctamente
          </p>
        </div>

        {/* Message */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-left">
          <p className="text-sm text-gray-700">
            Nos pondremos en contacto contigo en menos de <strong>24 horas</strong> para ayudarte con tu proyecto.
          </p>
        </div>

        {/* Details */}
        <div className="space-y-3 text-left">
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Email:</strong> aolguin@kaiseringenieria.cl
          </p>
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Teléfono:</strong> +56 9 6371 1607
          </p>
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Horario:</strong> 08:30 – 18:00
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Volver al Inicio
        </Link>

        {/* Additional text */}
        <p className="text-xs text-gray-500">
          Si tienes urgencias, puedes llamar directamente a nuestro equipo.
        </p>
      </div>
    </div>
  );
}
