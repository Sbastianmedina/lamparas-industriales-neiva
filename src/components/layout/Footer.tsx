'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, Zap } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import { FOOTER_CATEGORIES, FOOTER_TERMS } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Content */}
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-brand-400" />
              <h3 className="font-display font-bold text-xl">Lámparas Industriales Neiva</h3>
            </div>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              Lámparas artesanales hechas a mano con tuberías industriales. Cada pieza es única y fue creada con pasión y maestría.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lamparasindustrialesneiva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@lamparasindustrialesneiva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-lg">🎵</span>
              </a>
              <a
                href="https://wa.me/573013991153"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="font-display font-bold mb-6">Categorías</h4>
            <ul className="space-y-3">
              {FOOTER_CATEGORIES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-bold mb-6">Contacto</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <p>
                <span className="font-semibold text-white">WhatsApp:</span>
                <br />
                <a
                  href="https://wa.me/573013991153"
                  className="text-brand-400 hover:text-brand-300"
                >
                  +57 301 399 1153
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Dirección:</span>
                <br />
                Neiva - Huila
                <br />
                Bogotá, Colombia
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold mb-6">Newsletter</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Suscríbete para recibir noticias sobre nuevos productos.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Métodos de Pago */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <h4 className="font-display font-bold mb-4">Métodos de Pago</h4>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-neutral-800 rounded text-sm">PSE</span>
            <span className="px-4 py-2 bg-neutral-800 rounded text-sm">Mastercard</span>
            <span className="px-4 py-2 bg-neutral-800 rounded text-sm">VISA</span>
            <span className="px-4 py-2 bg-neutral-800 rounded text-sm">Nequi</span>
            <span className="px-4 py-2 bg-neutral-800 rounded text-sm">PayU</span>
            <span className="px-4 py-2 bg-neutral-800 rounded text-sm">Codensa</span>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {FOOTER_TERMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-brand-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p>© 2024 Lámparas Industriales Neiva. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
