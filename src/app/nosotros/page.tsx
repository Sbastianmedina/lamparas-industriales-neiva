'use client';

import Link from 'next/link';
import { Lightbulb, Users, Award } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Nosotros</span>
          </div>
        </div>
      </div>

      <div className="container-app py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Sobre Lamparas Industriales Neiva
          </h1>
          <p className="text-xl text-neutral-600">
            Creadores de lámparas artesanales únicas con estilo industrial y steampunk desde Neiva
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl font-bold text-neutral-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              Lamparas industriales neiva nace de la pasión por la creatividad y el diseño artesanal. Lo que comenzó como un hobby se transformó en una misión: crear lámparas únicas que combinen funcionalidad, arte y estilo.
            </p>
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              Cada pieza es hecha a mano en Neiva, utilizando materiales de calidad y técnicas artesanales que respetan el medio ambiente. Creemos que cada lámpara debe contar una historia.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Nuestros diseños fusionan la estética industrial y steampunk con la modernidad, creando piezas que transforman cualquier espacio en algo especial.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <Lightbulb className="w-24 h-24 text-brand-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-neutral-900">
                Hecho a Mano
              </h3>
              <p className="text-neutral-600 mt-2">
                Cada lámpara es creada con amor y dedicación
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-neutral-900 mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                Calidad
              </h3>
              <p className="text-neutral-700">
                Utilizamos los mejores materiales y técnicas para garantizar que cada lámpara sea duradera y hermosa.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                Creatividad
              </h3>
              <p className="text-neutral-700">
                Cada diseño es único y original. Buscamos constantemente nuevas formas de expresar el arte a través de la luz.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                Compromiso
              </h3>
              <p className="text-neutral-700">
                Nos comprometemos con nuestros clientes a ofrecer piezas que transformen sus espacios y vidas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            ¿Te gustaría una lámpara personalizada?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Contáctanos para crear algo especial para ti
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors"
          >
            Ir a Contacto
          </Link>
        </div>
      </div>
    </main>
  );
}