'use client';

import Link from 'next/link';

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Términos y Condiciones</span>
          </div>
        </div>
      </div>

      <div className="container-app py-16 max-w-3xl">
        <h1 className="font-display text-5xl font-bold text-neutral-900 mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-neutral-700">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. Aceptación de Términos</h2>
            <p>Al acceder y usar este sitio web, aceptas estar vinculado por estos términos y condiciones. Si no estás de acuerdo con alguna parte, por favor no utilices el sitio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Licencia de Uso</h2>
            <p>Se te otorga una licencia limitada, no exclusiva e intransferible para acceder y usar este sitio únicamente para propósitos legales y de acuerdo con estos términos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Disclaimer de Productos</h2>
            <p>Todos nuestros productos son artesanales y hechos a mano. Pequeñas variaciones en color, tamaño y acabado son normales y reflejan la naturaleza única de cada pieza.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">4. Limitación de Responsabilidad</h2>
            <p>Lámparas Industriales Neiva no será responsable por daños directos, indirectos, incidentales o consecuentes resultantes del uso o incapacidad de usar el sitio o los productos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">5. Cambios en los Términos</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">6. Contacto</h2>
            <p>Para preguntas sobre estos términos, contacta a: <a href="mailto:coquecom@hotmail.com" className="text-brand-600 hover:text-brand-500">coquecom@hotmail.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}