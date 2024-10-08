"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Timeline } from '@/components/Timeline';
import { Cat } from '@/components/Cat';
import { Header } from '@/components/Header';

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [currentFocus, setCurrentFocus] = useState('Started My Journey');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-24 relative">
        <Cat side="left" currentFocus={currentFocus} />
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl mx-auto"
        >
          <Timeline setCurrentFocus={setCurrentFocus} />
        </motion.div>
        <Cat side="right" currentFocus={currentFocus} />
      </div>
    </div>
  );
}