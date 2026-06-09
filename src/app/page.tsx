'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import CTA from '@/components/home/CTA';
import ProductGrid from '@/components/products/ProductGrid';
import { getFeaturedProducts, getNewProducts } from '@/data/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <main>
      <Hero />
      <Features />
      
      {/* Featured Products */}
      <section id="destacados" className="py-20 bg-white">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Nuestras piezas más populares y exclusivas
            </p>
          </div>
          
          <ProductGrid products={featuredProducts.slice(0, 4)} />
          
          <div className="text-center mt-12">
            <Link
              href="/productos?filter=destacados"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-bold text-lg group"
            >
              Ver todos los destacados
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container-app">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-100 text-brand-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                NUEVA COLECCIÓN
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Últimas Creaciones
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Recién salidas del taller, piezas únicas disponibles ahora
              </p>
            </div>
            
            <ProductGrid products={newProducts.slice(0, 4)} />
            
            <div className="text-center mt-12">
              <Link
                href="/productos?filter=nuevos"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-bold text-lg group"
              >
                Ver todos los nuevos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}