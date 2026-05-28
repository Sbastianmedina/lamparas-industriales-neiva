'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 bg-neutral-800 text-white rounded border border-neutral-700 focus:border-brand-400 outline-none transition-colors text-sm"
          required
        />
        <button
          type="submit"
          disabled={isSubmitted}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 disabled:bg-green-600 text-white rounded transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          {isSubmitted ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">¡Suscrito!</span>
            </>
          ) : (
            <>
              <ArrowRight className="w-4 h-4" />
              <span className="hidden sm:inline">Suscribir</span>
            </>
          )}
        </button>
      </div>
      <p className="text-xs text-neutral-500">
        No compartimos tu email con nadie.
      </p>
    </form>
  );
}
