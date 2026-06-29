'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ambienceImages, foodImages, drinkImages, getRandomItems } from '@/lib/assets';

export default function ImageCarouselSection() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Mixture of food, drink, and ambience
    const selectedAmbience = getRandomItems(ambienceImages, 2);
    const selectedFood = getRandomItems(foodImages, 2);
    const selectedDrink = getRandomItems(drinkImages, 1);
    
    // Shuffle them together
    const mixed = getRandomItems([...selectedAmbience, ...selectedFood, ...selectedDrink], 4);
    setImages(mixed.length > 0 ? mixed : [ambienceImages[0] || '']);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds auto-scroll

    return () => clearInterval(timer);
  }, [images]);

  const nextSlide = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
          {images.length > 0 && (
            <Image 
              src={images[currentIndex] || ''} 
              alt={`Scarlett House Carousel Image ${currentIndex + 1}`} 
              fill
              sizes="100vw"
              unoptimized={true}
              className="object-cover"
            />
          )}
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
