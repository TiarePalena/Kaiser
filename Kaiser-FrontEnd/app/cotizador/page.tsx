'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/cotizador/StepIndicator';
import ProductSelection from '@/components/cotizador/ProductSelection';
import ProductConfiguration from '@/components/cotizador/ProductConfiguration';
import QuoteSummary from '@/components/cotizador/QuoteSummary';
import { Product, QuoteItem } from '@/lib/cotizador-data';

const STEPS = ['Seleccionar Producto', 'Configurar', 'Cotización'];

export default function CotizadorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  // Step 1 → 2
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Step 2 → 3
  const handleAddToQuote = (config: { selectedSpecs: Record<string, string>; quantity: number; notes: string }) => {
    if (!selectedProduct) return;
    const newItem: QuoteItem = {
      product: selectedProduct,
      selectedSpecs: config.selectedSpecs,
      quantity: config.quantity,
      notes: config.notes,
    };
    setQuoteItems((prev) => [...prev, newItem]);
    setSelectedProduct(null);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to step 1
  const handleBackToSelection = () => {
    setSelectedProduct(null);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to step 2 (from summary)
  const handleBackToConfig = () => {
    setCurrentStep(2);
    // Re-select last product if available
    if (quoteItems.length > 0 && !selectedProduct) {
      setSelectedProduct(quoteItems[quoteItems.length - 1].product);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add more from summary
  const handleAddMore = () => {
    setSelectedProduct(null);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Remove item
  const handleRemoveItem = (index: number) => {
    setQuoteItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero banner */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-kaiser-dark to-kaiser-dark/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Cotizador de <span className="text-kaiser-teal">Productos</span>
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Configure sus productos con especificaciones técnicas precisas y solicite una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StepIndicator currentStep={currentStep} totalSteps={3} labels={STEPS} />

          {/* Step content */}
          {currentStep === 1 && (
            <ProductSelection onSelect={handleProductSelect} />
          )}

          {currentStep === 2 && selectedProduct && (
            <ProductConfiguration
              product={selectedProduct}
              onBack={handleBackToSelection}
              onAddToQuote={handleAddToQuote}
            />
          )}

          {currentStep === 3 && (
            <QuoteSummary
              items={quoteItems}
              onBack={quoteItems.length > 0 ? handleBackToConfig : handleBackToSelection}
              onRemoveItem={handleRemoveItem}
              onAddMore={handleAddMore}
            />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
