'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/context/cartStore';
import { formatPrice, formatDiscount } from '@/lib/utils';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const discount = product.originalPrice
    ? formatDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <Link href={`/producto/${product.slug}`}>
      <div className="group relative bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-brand-400 transition-all duration-300 hover:shadow-xl">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              NUEVO
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-neutral-600'
            }`}
          />
        </button>

        {/* Image */}
        <div className="relative aspect-square bg-neutral-50 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="bg-white text-neutral-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-500 hover:text-white transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 disabled:opacity-50"
            >
              <ShoppingCart className="w-5 h-5" />
              {isAdding ? 'Agregado!' : 'Agregar al Carrito'}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
            {product.category}
          </p>

          {/* Title */}
          <h3 className="font-display font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-neutral-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-neutral-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <p className="text-xs text-red-500 font-semibold mt-2">
              Agotado
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
