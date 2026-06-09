'use client';

import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Política de Privacidad</span>
          </div>
        </div>
      </div>

      <div className="container-app py-16 max-w-3xl">
        <h1 className="font-display text-5xl font-bold text-neutral-900 mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-neutral-700">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. Información que Recopilamos</h2>
            <p>Recopilamos información que voluntariamente nos proporcionas, como nombre, email y teléfono cuando completas formularios de contacto o realiza pedidos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Uso de la Información</h2>
            <p>Utilizamos tu información para: procesar pedidos, enviar confirmaciones, responder consultas y mejorar nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad para proteger tus datos personales contra acceso no autorizado, alteración o divulgación.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">4. Cookies</h2>
            <p>Nuestro sitio utiliza cookies para mejorar tu experiencia de navegación. Puedes desactivarlas en la configuración de tu navegador.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">5. Derechos del Usuario</h2>
            <p>Tienes derecho a acceder, rectificar o eliminar tus datos personales. Contáctanos para ejercer estos derechos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">6. Contacto</h2>
            <p>Para consultas sobre privacidad: <a href="mailto:coquecom@hotmail.com" className="text-brand-600 hover:text-brand-500">coquecom@hotmail.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}