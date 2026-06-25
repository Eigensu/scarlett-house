'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingHero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If the user refreshes while already scrolled down the page,
    // we don't want to trap them in the hero overlay.
    if (window.scrollY > 50) {
      setIsVisible(false);
      return;
    }

    // Lock scrolling while the hero is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleInteraction = (e: Event) => {
      // Prevent default on the first interaction so the page doesn't instantly jump
      if (isVisible) {
        setIsVisible(false);
      }
    };

    // Listen for wheel, touch, or click to dismiss the hero
    window.addEventListener('wheel', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('click', handleInteraction);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080F0F] cursor-pointer"
        >
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <Image 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
              alt="Kaprica Table Setting" 
              fill
              priority
              sizes="100vw"
              unoptimized={true}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          <div className="relative z-20 flex items-center justify-center h-full w-full pointer-events-none">
            <h1 className="font-serif text-[#FDF0D5] text-[100px] md:text-[180px] lg:text-[240px] tracking-tight leading-none drop-shadow-2xl">
              Kaprica
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
