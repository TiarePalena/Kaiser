'use client';

import { useState } from 'react';
import { QuoteItem, INDUSTRIES } from '@/lib/cotizador-data';
import { quoterService } from '@/lib/services';

interface QuoteSummaryProps {
  items: QuoteItem[];
  onBack: () => void;
  onRemoveItem: (index: number) => void;
  onAddMore: () => void;
}

export default function QuoteSummary({ items, onBack, onRemoveItem, onAddMore }: QuoteSummaryProps) {
  const [contact, setContact] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (field: string, value: string) => {
    setContact((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, boolean> = {};
    let valid = true;
    const required = ['name', 'company', 'email', 'phone', 'industry'];
    required.forEach((field) => {
      if (!contact[field as keyof typeof contact]) {
        newErrors[field] = true;
        valid = false;
      }
    });
    // Basic email validation
    if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = true;
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const quoteData = {
        items: items.map((item) => ({
          productId: item.product.id,
          productTitle: item.product.title,
          selectedSpecs: item.selectedSpecs,
          quantity: item.quantity,
          notes: item.notes,
        })),
        contact,
      };

      await quoterService.generateQuote(quoteData);
      setSubmitted(true);
    } catch (err) {
      setSubmitError('Error al enviar la cotización. Por favor intente nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  // Success state
  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-12 space-y-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-kaiser-dark">¡Cotización Enviada!</h2>
        <p className="text-gray-600">
          Hemos recibido su solicitud de cotización con <strong>{items.length} producto(s)</strong>.
          Nuestro equipo técnico la revisará y se pondrá en contacto con usted a la brevedad.
        </p>
        <div className="bg-kaiser-teal/5 rounded-xl p-4 text-sm text-kaiser-dark">
          <p><strong>Referencia:</strong> KQ-{Date.now().toString(36).toUpperCase()}</p>
          <p className="mt-1">Se envió una copia a <strong>{contact.email}</strong></p>
        </div>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-kaiser-teal text-white rounded-lg font-bold hover:bg-kaiser-teal/90 transition"
        >
          Volver al Inicio
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-kaiser-dark">
          Resumen de <span className="text-kaiser-teal">Cotización</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Revise los productos seleccionados y complete sus datos de contacto
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Items */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="font-bold text-kaiser-dark text-lg flex items-center gap-2">
            <svg className="w-5 h-5 text-kaiser-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Productos ({items.length})
          </h3>

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 relative group"
            >
              <button
                onClick={() => onRemoveItem(index)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100"
                title="Eliminar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-kaiser-dark">{item.product.title}</h4>
                  <p className="text-xs text-kaiser-teal font-semibold">{item.product.category}</p>
                  <p className="text-sm text-gray-600 mt-1">Cantidad: <strong>{item.quantity}</strong></p>
                </div>
              </div>

              {/* Selected specs */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(item.selectedSpecs).map(([specName, specValue]) => {
                    const spec = item.product.specs.find((s) => s.name === specName);
                    const option = spec?.options.find((o) => o.id === specValue);
                    return (
                      <div key={specName} className="text-xs">
                        <span className="text-gray-400">{specName}:</span>{' '}
                        <span className="font-semibold text-kaiser-dark">{option?.label || specValue}</span>
                      </div>
                    );
                  })}
                </div>
                {item.notes && (
                  <p className="text-xs text-gray-500 mt-2 italic">
                    📝 {item.notes}
                  </p>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={onAddMore}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-kaiser-teal hover:text-kaiser-teal transition-all font-semibold text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Agregar otro producto
          </button>
        </div>

        {/* Right: Contact form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-5 sticky top-24">
            <h3 className="font-bold text-kaiser-dark text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-kaiser-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Datos de Contacto
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition ${
                    errors.name ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:ring-2 focus:ring-kaiser-teal focus:border-transparent'
                  }`}
                  placeholder="Juan Pérez"
                />
              </div>

              {/* Company */}
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Empresa *
                </label>
                <input
                  type="text"
                  value={contact.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition ${
                    errors.company ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:ring-2 focus:ring-kaiser-teal focus:border-transparent'
                  }`}
                  placeholder="Mi Empresa S.A."
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition ${
                    errors.email ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:ring-2 focus:ring-kaiser-teal focus:border-transparent'
                  }`}
                  placeholder="correo@empresa.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition ${
                    errors.phone ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:ring-2 focus:ring-kaiser-teal focus:border-transparent'
                  }`}
                  placeholder="+56 9 1234 5678"
                />
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Industria *
              </label>
              <select
                value={contact.industry}
                onChange={(e) => handleChange('industry', e.target.value)}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition bg-white ${
                  errors.industry ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:ring-2 focus:ring-kaiser-teal focus:border-transparent'
                }`}
              >
                <option value="">Seleccione una industria</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Mensaje Adicional
              </label>
              <textarea
                value={contact.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-kaiser-teal focus:border-transparent resize-none"
                placeholder="Contexto adicional sobre su proyecto, plazos, etc."
              />
            </div>

            {/* Error */}
            {submitError && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
                {submitError}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onBack}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition font-semibold text-sm"
              >
                ← Volver
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting || items.length === 0}
                className="flex-1 px-6 py-3 bg-kaiser-teal hover:bg-kaiser-teal/90 text-white rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Cotización
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
