'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/context/cartStore';
import { NAV_LINKS } from '@/data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <nav className="container-app h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="text-brand-600">💡</span>
          <span>Lámparas Industriales Neiva</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className="text-neutral-700 hover:text-brand-600 font-semibold transition-colors py-2"
              >
                {link.label}
              </Link>

              {/* Dropdown */}
              {link.children && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-brand-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden sm:flex items-center">
            {showSearch ? (
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => setShowSearch(false)}
                autoFocus
                className="px-4 py-2 bg-neutral-100 rounded-full text-sm outline-none w-48 animate-scale-in"
              />
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-neutral-700" />
              </button>
            )}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573013991153"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            <span className="text-lg">💬</span>
          </a>

          {/* Carrito */}
          <button
            onClick={openCart}
            className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-neutral-700" />
            {cartItems > 0 && (
              <span className="absolute top-1 right-1 bg-brand-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-in">
                {cartItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 animate-slide-up">
          <div className="container-app py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-semibold text-neutral-700 hover:text-brand-600 py-2"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-2 mt-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-neutral-600 hover:text-brand-600 py-1"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://wa.me/573013991153"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-green-600 font-semibold hover:text-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
