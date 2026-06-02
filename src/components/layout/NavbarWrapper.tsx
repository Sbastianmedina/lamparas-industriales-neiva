'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Navbar />;
}