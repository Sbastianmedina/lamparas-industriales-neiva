'use client';

import { Truck, Shield, Headphones, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: '100% Artesanal',
    description: 'Cada lámpara es única, hecha a mano con dedicación y maestría',
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Materiales premium y acabados profesionales en cada pieza',
  },
  {
    icon: Truck,
    title: 'Envío Seguro',
    description: 'Empaque especial para garantizar que llegue en perfecto estado',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Atención personalizada por WhatsApp cuando lo necesites',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-neutral-200 hover:border-brand-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
