'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories, getProductsByCategory } from '@/data/products';
import { Filter, X } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const categoria = searchParams.get('categoria');
    const filter = searchParams.get('filter');

    if (categoria) {
      setSelectedCategory(categoria);
      setFilteredProducts(getProductsByCategory(categoria));
    } else if (filter === 'nuevos') {
      setFilteredProducts(products.filter(p => p.isNew));
    } else if (filter === 'destacados') {
      setFilteredProducts(products.filter(p => p.isFeatured));
    } else {
      setSelectedCategory('all');
      setFilteredProducts(products);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setFilteredProducts(getProductsByCategory(categoryId));
    setShowFilters(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-16">
        <div className="container-app">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Explora nuestra colección de lámparas industriales artesanales
          </p>
        </div>
      </section>

      <div className="container-app py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Categorías
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-brand-500 text-white font-semibold'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-600">
                  <strong className="text-neutral-900">{filteredProducts.length}</strong> productos encontrados
                </p>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold px-6 py-3 rounded-lg"
            >
              <Filter className="w-5 h-5" />
              Filtros
            </button>
          </div>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setShowFilters(false)}>
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 animate-slide-up" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-xl">Categorías</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? 'bg-brand-500 text-white font-semibold'
                          : 'bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
