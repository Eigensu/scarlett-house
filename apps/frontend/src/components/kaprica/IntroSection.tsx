'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { ambienceImages, getRandomItems } from '@/lib/assets';

export default function IntroSection() {
  const [imgIndex, setImgIndex] = useState(0);
  const [images, setImages] = useState<string[]>([ambienceImages[0] || '']);

  useEffect(() => {
    // 5 random ambience images
    const available = ambienceImages.slice(1);
    const selected = [ambienceImages[0], ...getRandomItems(available, Math.min(4, available.length))];
    
    // Shuffle the tail
    const tail = getRandomItems(selected.slice(1), selected.length - 1);
    setImages([selected[0], ...tail]);
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative w-full h-[100svh] bg-[#851F27] flex flex-col justify-center items-center overflow-hidden z-20">
      
      {/* Diagonal Scrolling Banner (Behind Content) */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[35px] bg-[#080F0F] -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] z-0 flex items-center overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            white-space: nowrap;
            animation: marquee 50s linear infinite;
          }
        `}} />
        <div className="animate-marquee font-serif text-[20px] leading-[20px] tracking-wide text-[#FDF0D5]">
          {Array(20).fill("Experiences • Wine & Cheese • Red Room • Set Menu • Malla Special • Delivery • Brunch • Retail • ").map((text, i) => (
            <span key={i} className="px-4 whitespace-pre">{text}</span>
          ))}
        </div>
      </div>

      <div className="w-[780px] max-w-full flex flex-col items-center justify-center gap-[25px] z-10 relative px-4 md:px-0 pt-[60px] md:pt-[80px]">
        <div className="font-serif text-[20px] leading-[20px] text-[#FDF0D5] text-center w-full max-w-[640px] mx-auto flex flex-col gap-4">
          <p>Warm, nostalgic, and effortlessly sophisticated.</p>
          <p>Scarlett doesn’t speak like a fine dining restaurant trying to impress you with complicated words, nor do we believe in using imposing language such as “dangerous” or “ruin.” Instead, our voice feels personal, inviting, and comforting.</p>
        </div>

        {/* Center Image Carousel - cinematic aspect ratio */}
        <div className="relative w-full aspect-[2.25/1]">
          {images.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt="Scarlett House Atmosphere"
              fill
              unoptimized={true}
              sizes="(max-width: 768px) 100vw, 780px"
              priority={idx === 0}
              className={`object-cover transition-opacity duration-1000 absolute inset-0 ${
                idx === imgIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="font-serif text-[20px] leading-[20px] text-[#FDF0D5] text-center w-full max-w-[640px] mx-auto">
          <p>Our brand language is rooted in comfort, community, and storytelling while maintaining a sense of understated luxury. It balances old-world charm with contemporary taste, making guests feel as though they're stepping into a home rather than just another restaurant.</p>
        </div>
      </div>

    </section>
  );
}
