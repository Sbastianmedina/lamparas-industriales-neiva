'use client';

import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-app relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            ¿Buscas algo personalizado?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Creamos lámparas únicas según tu visión. Contáctanos por WhatsApp 
            y cuéntanos tu idea. Transformaremos tu concepto en una obra de arte funcional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573013991153?text=Hola!%20Me%20gustaría%20una%20lámpara%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-neutral-100 transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Diseño Personalizado
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border-2 border-white/30 transition-all duration-200 hover:border-white/50"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
