import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Lámparas Industriales Neiva | Iluminación Steampunk Artesanal',
  description: 'Lámparas industriales únicas hechas a mano con tubería en Neiva, Huila. Diseños steampunk y vintage que transforman cualquier espacio. Artesanía de calidad.',
  keywords: 'lámparas industriales Neiva, iluminación industrial Neiva, lámparas steampunk Huila, lámparas industriales artesanales, tubería industrial neiva, lámparas vintage neiva',
  authors: [{ name: 'Lámparas Industriales Neiva' }],
  openGraph: {
    title: 'Lámparas Industriales Neiva - Iluminación Premium',
    description: 'Lámparas industriales únicas hechas a mano con tubería. Diseño steampunk artesanal en Neiva.',
    url: 'https://lamparasindustrialesneiva.com',
    siteName: 'Lámparas Industriales Neiva',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Navbar />
        {children}
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
