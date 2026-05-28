import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="font-display text-9xl font-bold text-brand-500 mb-4">404</h1>
        <h2 className="font-display text-4xl font-bold mb-4">Página No Encontrada</h2>
        <p className="text-xl text-neutral-300 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Ir al Inicio
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border-2 border-white/20 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver Atrás
          </button>
        </div>
      </div>
    </main>
  );
}
