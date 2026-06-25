'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601', // Pasta
  'https://images.unsplash.com/photo-1513104890138-7c749659a591', // Pizza
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1', // Cooking/Flame
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb', // Wine
];

export default function ImageCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 10000); // 10 seconds auto-scroll

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[100svh] bg-[#080F0F] z-20 overflow-hidden flex-shrink-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={IMAGES[currentIndex]} 
            alt={`Kaprica Carousel Image ${currentIndex + 1}`} 
            fill
            sizes="100vw"
            unoptimized={true}
            className="object-cover"
          />
          {/* Subtle dark overlay to match Kaprica's moody lighting */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-4 md:px-12 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto p-4 text-white/50 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-4 text-white/50 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
        </button>
      </div>
    </section>
  );
}
