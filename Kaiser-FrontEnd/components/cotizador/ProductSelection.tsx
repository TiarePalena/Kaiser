'use client';

import { useState } from 'react';
import { PRODUCTS, APPLICATION_FILTERS, Product } from '@/lib/cotizador-data';

interface ProductSelectionProps {
  onSelect: (product: Product) => void;
}

export default function ProductSelection({ onSelect }: ProductSelectionProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesFilter = !activeFilter || product.applications.includes(activeFilter);
    const matchesSearch =
      !searchTerm ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-kaiser-dark">
          Seleccione un <span className="text-kaiser-teal">Producto</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Elija el tipo de equipamiento que necesita cotizar
        </p>
      </div>

      {/* Search bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kaiser-teal focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      {/* Application filters */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            !activeFilter
              ? 'bg-kaiser-teal text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        {APPLICATION_FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFilter === filter.id
                ? 'bg-kaiser-teal text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => onSelect(product)}
            className="group text-left bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-kaiser-teal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-kaiser-teal"
          >
            {/* Image */}
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 bg-kaiser-teal text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <span className="inline-block text-xs font-bold text-kaiser-teal bg-kaiser-teal/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h3 className="text-lg font-bold text-kaiser-dark group-hover:text-kaiser-teal transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

              {/* Features preview */}
              <ul className="space-y-1">
                {product.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                    <span className="text-kaiser-teal">✓</span> {f}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-gray-100">
                <span className="text-kaiser-teal font-semibold text-sm group-hover:underline">
                  Configurar y Cotizar →
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500 text-lg">No se encontraron productos</p>
          <p className="text-gray-400 text-sm mt-1">Intente con otro filtro o término de búsqueda</p>
        </div>
      )}
    </div>
  );
}
