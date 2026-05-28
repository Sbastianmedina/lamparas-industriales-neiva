'use client';

import { useCartStore } from '@/context/cartStore';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const total = getTotalPrice();
  const whatsappMessage = `Hola! Estoy interesado en comprar:\n${items
    .map((item) => `- ${item.name} (x${item.quantity}): ${formatPrice(item.price * item.quantity)}`)
    .join('\n')}\n\nTotal: ${formatPrice(total)}`;
  
  const whatsappUrl = `https://wa.me/573013991153?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-brand-500" />
              <h2 className="font-display text-2xl font-bold text-neutral-900">
                Carrito
              </h2>
              <span className="bg-brand-500 text-white text-sm font-bold px-2.5 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-6 h-6 text-neutral-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-24 h-24 text-neutral-300 mb-4" />
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-neutral-500 mb-6">
                  Agrega productos para comenzar tu compra
                </p>
                <Link
                  href="/productos"
                  onClick={closeCart}
                  className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
                >
                  Ver Productos
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:border-brand-300 transition-colors"
                  >
                    {/* Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-900 mb-1 line-clamp-2 text-sm">
                        {item.name}
                      </h3>
                      <p className="text-brand-600 font-bold mb-3">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white border border-neutral-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 rounded-l-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 rounded-r-lg transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <p className="font-bold text-neutral-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-neutral-200 p-6 bg-neutral-50">
              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-neutral-700">
                  Total:
                </span>
                <span className="text-3xl font-bold text-neutral-900">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-center transition-colors"
                >
                  Comprar por WhatsApp
                </a>
                <Link
                  href="/productos"
                  onClick={closeCart}
                  className="block w-full bg-white hover:bg-neutral-100 text-neutral-900 font-semibold py-4 rounded-full text-center border-2 border-neutral-300 transition-colors"
                >
                  Seguir Comprando
                </Link>
              </div>

              <p className="text-xs text-neutral-500 text-center mt-4">
                El envío se calcula en WhatsApp según tu ubicación
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
