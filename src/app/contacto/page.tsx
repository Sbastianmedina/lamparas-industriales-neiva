'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Check } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí normalmente enviarías a un servidor
    // Por ahora solo mostramos confirmación
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const whatsappMessage = `Hola, me gustaría información sobre sus productos.`;
  const whatsappUrl = `https://wa.me/573013991153?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Contacto</span>
          </div>
        </div>
      </div>

      <div className="container-app py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-neutral-600">
            ¿Tienes preguntas? Nos encantaría escucharte. Ponte en contacto con nosotros de cualquier forma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-8">
              Envíanos un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="+57 301 399 1153"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="Cuéntanos qué necesitas..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-green-500 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-8">
              Información de Contacto
            </h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Teléfono</h3>
                    <p className="text-neutral-600">+57 301 399 1153</p>
                    <p className="text-sm text-neutral-500 mt-1">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">contacto@mundiluz.com</p>
                    <p className="text-sm text-neutral-500 mt-1">Respondemos en 24 horas</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Ubicación</h3>
                    <p className="text-neutral-600">Neiva, Huila</p>
                    <p className="text-sm text-neutral-500 mt-1">Colombia</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar por WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="mt-8 bg-brand-50 border-l-4 border-brand-500 p-6 rounded">
              <h3 className="font-semibold text-neutral-900 mb-3">Horario de Atención</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>Lunes - Viernes: 9:00 AM - 6:00 PM</li>
                <li>Sábado: 10:00 AM - 4:00 PM</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}