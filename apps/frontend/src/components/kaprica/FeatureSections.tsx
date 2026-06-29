'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ambienceImages, getRandomItems } from '@/lib/assets';

export default function FeatureSections() {
  const [images, setImages] = useState<string[]>([
    ambienceImages[0] || '',
    ambienceImages[1] || ''
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(getRandomItems(ambienceImages, 3));
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images]);
  return (
    <>
      {/* Parties Section */}
      {/* Parties Section */}
      <section className="snap-start flex-shrink-0 relative w-full h-[100svh] bg-[#080F0F] flex items-center justify-center z-20 group">
        
        {/* Background Slideshow Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0 z-0 pointer-events-none"
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              initial={{ opacity: index === 0 ? 1 : 0 }}
            >
              <Image src={src} alt="Scarlett House Parties" fill unoptimized={true} sizes="100vw" className="object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Dark overlay that brightens slightly on hover */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-black/70 transition-colors duration-700 ease-in-out group-hover:bg-black/40" />

        <div className="w-full max-w-[1200px] px-4 z-10 relative">
          <Link href="/functions" className="block outline-none" aria-label="Parties">
            <div className="w-full relative">
              <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
                
                {/* GROUP A: Before Hover (5 top, 4 bottom) */}
                <g className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                  {/* Top 5 */}
                  <circle cx="150" cy="100" r="40" fill="#841F27" />
                  <circle cx="325" cy="100" r="40" fill="#841F27" />
                  <circle cx="500" cy="100" r="40" fill="#841F27" />
                  <circle cx="675" cy="100" r="40" fill="#841F27" />
                  <circle cx="850" cy="100" r="40" fill="#841F27" />
                  {/* Bottom 4 (2 left, 2 right) */}
                  <circle cx="150" cy="400" r="40" fill="#841F27" />
                  <circle cx="280" cy="400" r="40" fill="#841F27" />
                  <circle cx="720" cy="400" r="40" fill="#841F27" />
                  <circle cx="850" cy="400" r="40" fill="#841F27" />
                </g>

                {/* GROUP B: After Hover (8 top, 8 bottom) */}
                <g className="transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  {/* Top 8 */}
                  {[150, 250, 350, 450, 550, 650, 750, 850].map((cx) => (
                    <circle key={`top-${cx}`} cx={cx} cy="100" r="40" fill="#841F27" />
                  ))}
                  {/* Bottom 8 */}
                  {[150, 250, 350, 450, 550, 650, 750, 850].map((cx) => (
                    <circle key={`bottom-${cx}`} cx={cx} cy="400" r="40" fill="#841F27" />
                  ))}
                </g>

                {/* The Table Background (Always Red) */}
                <rect x="100" y="150" width="800" height="200" fill="#841F27" />

                {/* The Cream Middle (Appears on Hover) */}
                <rect 
                  x="100" y="210" width="800" height="80" fill="#FDF0D5" 
                  className="transition-all duration-500 ease-in-out opacity-0 scale-y-0 origin-center group-hover:scale-y-100 group-hover:opacity-100"
                />

                {/* Text (Appears on Hover) */}
                <text 
                  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
                  className="font-serif text-[70px] fill-[#080F0F] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                >
                  Parties
                </text>

              </svg>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
