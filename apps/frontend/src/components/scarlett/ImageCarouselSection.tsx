'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ImageMap, getCloudinaryUrl, getRandomItems } from '@/lib/cloudinary';

export default function ImageCarouselSection() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mixed = getRandomItems(ImageMap.carousel, ImageMap.carousel.length);
    setImages(mixed.length > 0 ? mixed.map(id => getCloudinaryUrl(id)) : [getCloudinaryUrl(ImageMap.hero[0])]);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds auto-scroll

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
    <section className="relative w-full h-[80svh] md:h-[100svh] md:min-h-[100svh] bg-[#080F0F] z-20 overflow-hidden flex-shrink-0">
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
          {/* Subtle dark overlay to match Scarlett House's moody lighting */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
