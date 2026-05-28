'use client';

import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-500 text-lg">
          No se encontraron productos
        </p>
      </div>
    );
  }

  return (
    <section className="py-12">
      {title && (
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
