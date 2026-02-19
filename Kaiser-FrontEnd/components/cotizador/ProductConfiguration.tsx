'use client';

import { useState } from 'react';
import { Product } from '@/lib/cotizador-data';

interface ProductConfigurationProps {
  product: Product;
  onBack: () => void;
  onAddToQuote: (config: { selectedSpecs: Record<string, string>; quantity: number; notes: string }) => void;
}

export default function ProductConfiguration({ product, onBack, onAddToQuote }: ProductConfigurationProps) {
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSpecChange = (specName: string, value: string) => {
    setSelectedSpecs((prev) => ({ ...prev, [specName]: value }));
    setErrors((prev) => ({ ...prev, [specName]: false }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, boolean> = {};
    let valid = true;
    product.specs.forEach((spec) => {
      if (spec.required && !selectedSpecs[spec.name]) {
        newErrors[spec.name] = true;
        valid = false;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onAddToQuote({ selectedSpecs, quantity, notes });
  };

  const completedRequired = product.specs.filter((s) => s.required).length;
  const filledRequired = product.specs.filter((s) => s.required && selectedSpecs[s.name]).length;
  const progress = completedRequired > 0 ? (filledRequired / completedRequired) * 100 : 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Product image & info */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden sticky top-24">
            <div className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <span className="inline-block text-xs font-bold text-kaiser-teal bg-kaiser-teal/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-kaiser-dark">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>

              {/* Progress */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">Configuración</span>
                  <span className="font-semibold text-kaiser-teal">{filledRequired}/{completedRequired} campos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-kaiser-teal h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                onClick={onBack}
                className="w-full text-sm text-gray-500 hover:text-kaiser-teal font-medium flex items-center justify-center gap-1 pt-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Cambiar producto
              </button>
            </div>
          </div>
        </div>

        {/* Configuration form */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-kaiser-dark">
              Configure su <span className="text-kaiser-teal">{product.title}</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Seleccione las especificaciones técnicas requeridas
            </p>
          </div>

          {/* Spec selectors */}
          {product.specs.map((spec) => (
            <div key={spec.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="flex items-center gap-2 text-sm font-bold text-kaiser-dark mb-3">
                {spec.name}
                {spec.required && <span className="text-red-500 text-xs">*Requerido</span>}
                {selectedSpecs[spec.name] && (
                  <span className="ml-auto text-xs font-normal text-kaiser-teal bg-kaiser-teal/10 px-2 py-0.5 rounded-full">
                    ✓ {spec.options.find((o) => o.id === selectedSpecs[spec.name])?.label}
                  </span>
                )}
              </label>
              {errors[spec.name] && (
                <p className="text-red-500 text-xs mb-2">Debe seleccionar una opción</p>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {spec.options.map((option) => {
                  const isSelected = selectedSpecs[spec.name] === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSpecChange(spec.name, option.id)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 text-sm
                        ${isSelected
                          ? 'border-kaiser-teal bg-kaiser-teal/5 ring-2 ring-kaiser-teal/30 shadow-sm'
                          : 'border-gray-200 hover:border-kaiser-teal/50 hover:bg-gray-50'
                        }
                        ${errors[spec.name] ? 'border-red-300' : ''}
                      `}
                    >
                      <span className={`font-semibold ${isSelected ? 'text-kaiser-teal' : 'text-kaiser-dark'}`}>
                        {option.label}
                      </span>
                      {option.description && (
                        <span className="block text-xs text-gray-400 mt-0.5">{option.description}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quantity */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <label className="text-sm font-bold text-kaiser-dark mb-3 block">
              Cantidad
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-kaiser-dark hover:bg-gray-50 transition font-bold"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-kaiser-teal focus:border-transparent outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-kaiser-dark hover:bg-gray-50 transition font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <label className="text-sm font-bold text-kaiser-dark mb-3 block">
              Notas Adicionales <span className="text-gray-400 font-normal">(Opcional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Especificaciones adicionales, condiciones de operación, etc."
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-kaiser-teal focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition font-semibold text-sm"
            >
              ← Volver
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-kaiser-teal hover:bg-kaiser-teal/90 text-white rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Agregar a Cotización →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
