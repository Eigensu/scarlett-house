'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageMap, getCloudinaryUrl } from '@/lib/cloudinary';

export default function LandingHero() {
  const [isVisible, setIsVisible] = useState(true);
  const [images, setImages] = useState<string[]>([getCloudinaryUrl(ImageMap.hero[0])]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const selected = ImageMap.hero.map(id => getCloudinaryUrl(id));
    setImages(selected);
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

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
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-[#080F0F]">
            {images.map((src, index) => (
              <motion.div
                key={src}
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                initial={{ opacity: index === 0 ? 1 : 0 }}
              >
                <Image 
                  src={src} 
                  alt="Scarlett House" 
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          <div className="relative z-20 flex items-center justify-center h-full w-full pointer-events-none">
            <h1 className="font-serif text-[#FDF0D5] text-[60px] md:text-[120px] lg:text-[170px] tracking-tight leading-none drop-shadow-2xl text-center px-4">
              Scarlett House
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
