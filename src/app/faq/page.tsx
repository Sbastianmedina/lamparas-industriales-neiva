'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo realizo un pedido?',
      a: 'Explora nuestro catálogo en la sección Productos, agrega los artículos que te interesan al carrito y haz clic en "Comprar por WhatsApp". Nos contactaremos para confirmar tu pedido.'
    },
    {
      q: '¿Aceptan pagos online?',
      a: 'Actualmente, procesamos pagos principalmente a través de WhatsApp. Te enviaremos las opciones de pago disponibles una vez confirmes tu pedido.'
    },
    {
      q: '¿Cuánto tiempo tarda mi pedido?',
      a: 'El tiempo depende de tu ubicación. En Bogotá: 3-5 días. Ciudades principales: 2-3 días. Otras ciudades: 5-7 días hábiles.'
    },
    {
      q: '¿Hacen envíos internacionales?',
      a: 'Actualmente solo hacemos envíos dentro de Colombia. Contáctanos en WhatsApp para consultas especiales.'
    },
    {
      q: '¿Puedo personalizar un producto?',
      a: 'Sí, aceptamos pedidos personalizados. Contáctanos por WhatsApp para discutir tus requerimientos específicos.'
    },
    {
      q: '¿Cuál es la garantía de los productos?',
      a: 'Todos nuestros productos son artesanales y resistentes. Si hay defectos de fabricación, ofrecemos reemplazo dentro de 30 días.'
    },
    {
      q: '¿Cómo cuido mis lámparas?',
      a: 'Limpia regularmente con un paño suave seco. Evita exposición directa a agua. Las lámparas son resistentes pero manejar con cuidado.'
    },
    {
      q: '¿Tienen showroom físico?',
      a: 'Actualmente operamos de forma digital. Puedes ver nuestros productos en Instagram @lamparasindustriales_neiva o visitarnos por WhatsApp.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Preguntas Frecuentes</span>
          </div>
        </div>
      </div>

      <div className="container-app py-16 max-w-3xl">
        <h1 className="font-display text-5xl font-bold text-neutral-900 mb-8">
          Preguntas Frecuentes
        </h1>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors"
              >
                <h3 className="font-semibold text-neutral-900 text-left">{faq.q}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">¿No encontraste tu respuesta?</h2>
          <p className="text-neutral-700 mb-6">Estamos aquí para ayudarte. Contáctanos directamente.</p>
          <a href="https://wa.me/573013991153" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            💬 Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}