import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from './analytics';

export const metadata: Metadata = {
  title: 'Kaiser Ingeniería - Precisión en Logística de Carga',
  description: 'Expertos en soluciones integrales de carga y descarga para sectores Petroquímico y Minero. Más de 25 años de experiencia.',
  keywords: 'ingeniería, logística, carga, descarga, petroquímica, minería',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Kaiser Ingeniería - Precisión en Logística de Carga',
    description: 'Soluciones de clase mundial para la industria',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
