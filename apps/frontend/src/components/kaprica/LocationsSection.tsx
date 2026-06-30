'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ambienceImages, getRandomItems } from '@/lib/assets';

export default function LocationsSection() {
  const [bandraBg, setBandraBg] = useState<string>(ambienceImages[0] || '');
  const [juhuBg, setJuhuBg] = useState<string>(ambienceImages[2] || '');

  useEffect(() => {
    const selected = getRandomItems(ambienceImages, 2);
    if (selected.length === 2) {
      setBandraBg(selected[0]);
      setJuhuBg(selected[1]);
    }
  }, []);

  return (
    <section className="w-full min-h-screen h-[100svh] bg-[#080F0F] grid grid-cols-1 md:grid-cols-2 z-30 relative overflow-hidden">
      
      {/* Left Side: Bandra */}
      <Link href="/locations/bandra" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Default Visible Background */}
        <div className="absolute inset-0 z-0">
          {bandraBg && (
            <Image 
              src={bandraBg} 
              alt="Scarlett House Bandra" 
              fill
              unoptimized={true}
              sizes="50vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
          )}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        </div>

        {/* Hover Inset Mask - Solid Red with Text */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none bg-[#851F27] flex flex-col items-center justify-center p-8 md:p-12 text-center">
          <div className="absolute inset-0 border-4 border-[#FDF0D5]/20 rounded-[45px] z-10" />
          <div className="z-20 flex flex-col gap-6 font-serif text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#080F0F] max-w-[80%] mx-auto opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out">
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#080F0F] leading-tight mb-2">Heritage Bungalow</h3>
            <p>Housed within a beautifully restored 80-year-old bungalow in Bandra, Scarlett House offers guests the feeling of stepping into a home filled with stories and memories.</p>
            <p>The space has been thoughtfully designed to celebrate togetherness, with each room contributing to the character and charm of the house.</p>
          </div>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Scarlett House Bandra</h2>
      </Link>

      {/* Right Side: Juhu */}
      <Link href="/locations/juhu" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Default Visible Background */}
        <div className="absolute inset-0 z-0">
          {juhuBg && (
            <Image 
              src={juhuBg} 
              alt="Scarlett House Juhu" 
              fill
              unoptimized={true}
              sizes="50vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
          )}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        </div>

        {/* Hover Inset Mask - Solid Red with Text */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none bg-[#851F27] flex flex-col items-center justify-center p-8 md:p-12 text-center">
          <div className="absolute inset-0 border-4 border-[#FDF0D5]/20 rounded-[45px] z-10" />
          <div className="z-20 flex flex-col gap-6 font-serif text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#080F0F] max-w-[80%] mx-auto opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out">
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#080F0F] leading-tight mb-2">Glass House Experience</h3>
            <p>Scarlett House Juhu presents a distinctive Glass House experience, offering a bright and elegant setting surrounded by natural light and greenery.</p>
            <p>The space blends contemporary design with the warmth and hospitality that define the Scarlett House brand.</p>
          </div>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Scarlett House Juhu</h2>
      </Link>

    </section>
  );
}
