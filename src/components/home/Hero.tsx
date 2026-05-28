'use client';

import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-app relative">
        <div className="py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-semibold text-brand-300">
                Iluminación Industrial Artesanal
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-scale-in">
              Transforma tu espacio con
              <span className="block text-brand-400 mt-2">
                Arte Industrial
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Lámparas únicas hechas a mano con tubería industrial. 
              Cada pieza es una obra de arte funcional que combina diseño 
              steampunk con iluminación vintage.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link
                href="/productos"
                className="group inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/50 hover:scale-105"
              >
                Ver Catálogo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#destacados"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border-2 border-white/20 transition-all duration-200 hover:border-white/40"
              >
                Productos Destacados
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 max-w-2xl">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-brand-400 mb-1">15+</p>
                <p className="text-sm text-neutral-400 uppercase tracking-wider">Diseños Únicos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-brand-400 mb-1">100%</p>
                <p className="text-sm text-neutral-400 uppercase tracking-wider">Artesanal</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-brand-400 mb-1">24/7</p>
                <p className="text-sm text-neutral-400 uppercase tracking-wider">Atención</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
