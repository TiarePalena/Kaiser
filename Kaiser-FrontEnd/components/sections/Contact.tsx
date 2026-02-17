'use client';

import { useState } from 'react';
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { contactService } from '@/lib/services';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      await contactService.sendContact(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', industry: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      label: 'Ubicación',
      value: 'Pasaje República Nº3 Of F',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'ventas@kaiseringenieria.cl',
    },
    {
      icon: FiPhone,
      label: 'Teléfono',
      value: '+56 9 6371 1607',
    },
    {
      icon: FiClock,
      label: 'Horario de Atención',
      value: '08:30 – 18:00',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-wider">
                CONTACTO
              </p>
              <h2 className="text-4xl font-bold mt-4 mb-4">
                Hablemos de su <span className="text-blue-600">Próximo Desafío</span>
              </h2>
              <p className="text-gray-600">
                Nuestras oficinas centrales están preparadas para recibir sus
                requerimientos técnicos. Un ingeniero de nuestro equipo lo
                contactará en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {info.label}
                      </p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  EMAIL DE TRABAJO
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  INDUSTRIA
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="petroquimica">Petroquímica</option>
                  <option value="mineria">Minería</option>
                  <option value="gasoil">Gas & Oil</option>
                  <option value="energia">Energía</option>
                  <option value="otra">Otra</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  MENSAJE / REQUERIMIENTO
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describa brevemente su proyecto..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                {isLoading ? 'Enviando...' : 'ENVIAR MENSAJE'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Mensaje enviado correctamente. Nos contactaremos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg">
                  ✕ Error al enviar el mensaje. Intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
