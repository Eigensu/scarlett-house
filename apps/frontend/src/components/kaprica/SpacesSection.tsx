'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ambienceImages, getRandomItems } from '@/lib/assets';

function SpaceCard({ title, subtitle, href, imgSrc }: { title: string, subtitle: string, href: string, imgSrc: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className="flex-1 flex">
      <motion.div 
        className="relative flex-1 flex flex-col justify-center items-center rounded-3xl overflow-hidden bg-[#851F27] border border-transparent cursor-pointer w-full h-full min-h-[140px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        whileHover={{ 
          scale: 1.01, 
          backgroundColor: '#93222D',
          borderColor: 'rgba(253, 240, 213, 0.15)',
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)" 
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 1. Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {imgSrc && <Image src={imgSrc} alt={title} fill unoptimized={true} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />}
        </div>

        {/* 2. Red Overlay to hide/reveal image */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none" 
          animate={{ backgroundColor: isHovered ? 'rgba(147, 34, 45, 0.5)' : 'rgba(133, 31, 39, 0.85)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-10 w-full h-full max-w-[400px] mx-auto">
          
          <motion.div
            className="flex flex-col items-center text-center w-full"
            animate={{ y: isHovered ? -8 : 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title */}
            <h3 className="font-serif text-[24px] md:text-[32px] lg:text-[36px] text-[#FDF0D5] leading-tight drop-shadow-sm">
              {title}
            </h3>
          </motion.div>

          <div className="relative w-full h-0 flex items-center justify-center">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                  className="absolute top-0 flex flex-col items-center w-full mt-4"
                >
                  <div className="w-8 h-[1px] bg-[#FDF0D5]/30 mb-4" />
                  <p className="font-serif text-[12px] md:text-[14px] text-[#FDF0D5]/90 tracking-widest uppercase text-center">
                    {subtitle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function SpacesSection() {
  const [images, setImages] = useState<string[]>([
    ambienceImages[2] || '',
    ambienceImages[3] || '',
    ambienceImages[4] || ''
  ]);

  useEffect(() => {
    setImages(getRandomItems(ambienceImages, 3));
  }, []);

  return (
    <section className="relative w-full h-[100svh] bg-[#080F0F] flex flex-col items-center justify-center overflow-hidden z-20">
      
      {/* Heading Container */}
      <div className="w-full pt-[100px] md:pt-[130px] flex flex-col items-center z-30 pointer-events-none shrink-0 px-6">
        <h2 className="font-serif text-[36px] md:text-[50px] lg:text-[60px] text-[#FDF0D5] tracking-tight leading-none text-center drop-shadow-md">
          Spaces & Experiences
        </h2>
        <div className="w-12 h-[1px] bg-[#FDF0D5]/20 my-5 md:my-6" />
        <p className="font-serif text-[18px] md:text-[22px] text-[#FDF0D5]/80 text-center drop-shadow-md">
          Discover every corner of Scarlett House.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full h-[65vh] md:h-[50vh] max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-8 py-6 md:py-8 z-20 overflow-hidden mt-2 md:mt-4">
        
        <SpaceCard 
          title="Private Spaces"
          subtitle="Intimate gatherings"
          href="/spaces"
          imgSrc={images[0] || ''}
        />

        <SpaceCard 
          title="Dining Experiences"
          subtitle="Culinary journeys"
          href="/experiences"
          imgSrc={images[1] || ''}
        />

        <SpaceCard 
          title="Special Moments"
          subtitle="Curated events"
          href="/moments"
          imgSrc={images[2] || ''}
        />
        
      </div>
    </section>
  );
}
