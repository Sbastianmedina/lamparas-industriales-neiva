'use client';

import Link from 'next/link';
import { Truck, Clock, MapPin } from 'lucide-react';

export default function EnviosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Envíos y Devoluciones</span>
          </div>
        </div>
      </div>

      <div className="container-app py-16 max-w-3xl">
        <h1 className="font-display text-5xl font-bold text-neutral-900 mb-8">
          Envíos y Devoluciones
        </h1>

        <div className="space-y-8">
          <section>
            <div className="flex items-start gap-4 mb-4">
              <Truck className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">Envíos</h2>
                <p className="text-neutral-700 mb-2">Realizamos envíos a toda Colombia mediante diferentes transportistas.</p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  <li>Ciudades Principales: 2-3 días hábiles</li>
                  <li>Bogotá: 3-5 días hábiles</li>
                  <li>Otras ciudades: 5-7 días hábiles</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">Tiempo de Preparación</h2>
                <p className="text-neutral-700">Los pedidos se preparan en 24-48 horas hábiles después de confirmado el pago. Productos personalizados pueden tomar más tiempo.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">Costos de Envío</h2>
                <p className="text-neutral-700">El costo de envío depende del destino y peso del producto. Se calculará en el carrito antes de finalizar la compra o en WhatsApp.</p>
              </div>
            </div>
          </section>

          <section className="bg-neutral-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Política de Devoluciones</h2>
            <div className="space-y-3 text-neutral-700">
              <p><strong>Plazo:</strong> Tienes 7 días desde la recepción del producto para solicitar una devolución.</p>
              <p><strong>Condiciones:</strong> El producto debe estar en perfecto estado, sin uso y con empaque original.</p>
              <p><strong>Proceso:</strong> Contacta a nuestro equipo en WhatsApp para iniciar el proceso de devolución.</p>
              <p><strong>Reembolso:</strong> Una vez verificado, procesaremos el reembolso en 5-7 días hábiles.</p>
              <p><strong>Gastos de envío:</strong> El cliente corre con los gastos de envío de devolución.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">¿Preguntas?</h2>
            <p className="text-neutral-700 mb-4">Para consultas sobre envíos o devoluciones, contacta a:</p>
            <a href="https://wa.me/573013991153" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
              💬 WhatsApp: +57 301 399 1153
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}