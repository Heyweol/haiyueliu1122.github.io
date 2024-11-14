"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Haiyue (Morgan) Liu</h1>
        <nav className="flex gap-2">
          <Button variant="ghost" className="mr-2" onClick={() => window.open('/resume-Haiyue-Liu.pdf', '_blank')}>
            Resume
          </Button>
          <Link href="/gis-portfolio" passHref>
            <Button variant="ghost">GIS Portfolio</Button>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}