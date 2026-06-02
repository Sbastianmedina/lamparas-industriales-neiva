'use client';

import { useEffect, useState } from 'react';
import CartDrawer from './CartDrawer';

export default function CartDrawerWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <CartDrawer />;
}