'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Share2, Check, ChevronLeft, MessageCircle } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/context/cartStore';
import { formatPrice, formatDiscount } from '@/lib/utils';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/data/products';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? formatDiscount(product.originalPrice, product.price)
    : 0;

  const whatsappMessage = `Hola! Estoy interesado en: ${product.name} - ${formatPrice(product.price)}`;
  const whatsappUrl = `https://wa.me/573013991153?text=${encodeURIComponent(whatsappMessage)}`;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container-app">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-brand-600">Productos</Link>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-app py-12">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-brand-600 mb-8 font-semibold"
        >
          <ChevronLeft className="w-5 h-5" />
          Volver a productos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="sticky top-24">
              <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-brand-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      NUEVO
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      -{discount}% OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-brand-100 text-brand-700 text-sm font-bold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {product.name}
            </h1>

            <p className="text-xl text-neutral-600 mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-bold text-neutral-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-neutral-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdded}
                className="flex-1 bg-brand-500 hover:bg-brand-600 disabled:bg-neutral-300 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    ¡Agregado!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
                  </>
                )}
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-14 h-14 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-neutral-600'}`} />
              </button>

              <button className="w-14 h-14 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors">
                <Share2 className="w-6 h-6 text-neutral-600" />
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 mb-8"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </a>

            {/* Features */}
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <h3 className="font-display font-bold text-lg mb-4">Características</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="border border-neutral-200 rounded-xl p-6">
              <h3 className="font-display font-bold text-lg mb-4">Especificaciones</h3>
              <dl className="space-y-3">
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <dt className="text-neutral-600">Material:</dt>
                  <dd className="font-semibold text-neutral-900 text-right">{product.specifications.material}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <dt className="text-neutral-600">Dimensiones:</dt>
                  <dd className="font-semibold text-neutral-900 text-right">{product.specifications.dimensions}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <dt className="text-neutral-600">Tipo de Bombillo:</dt>
                  <dd className="font-semibold text-neutral-900 text-right">{product.specifications.bulbType}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <dt className="text-neutral-600">Voltaje:</dt>
                  <dd className="font-semibold text-neutral-900 text-right">{product.specifications.voltage}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-neutral-600">Peso:</dt>
                  <dd className="font-semibold text-neutral-900 text-right">{product.specifications.weight}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-16 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-neutral-900 mb-6">
            Descripción Detallada
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {product.longDescription}
          </p>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold text-neutral-900 mb-8 text-center">
              Productos Relacionados
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </main>
  );
}
