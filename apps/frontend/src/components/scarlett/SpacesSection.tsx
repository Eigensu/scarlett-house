'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageMap, getCloudinaryUrl, NEW_AMBIENCE_CAROUSEL } from '@/lib/cloudinary';

export default function LocationsSection() {
  const bandraBg = getCloudinaryUrl(NEW_AMBIENCE_CAROUSEL);
  const juhuBg = getCloudinaryUrl(ImageMap.locations.juhu);

  return (
    <section className="w-full min-h-screen h-[100svh] bg-[#080F0F] grid grid-cols-1 md:grid-cols-2 z-30 relative overflow-hidden">
      
      {/* Left Side: Bandra */}
      <div className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
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

        {/* Hover Inset Mask - Text on Picture */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none flex flex-col items-center justify-center p-8 md:p-12 text-center">
          <div className="z-20 flex flex-col gap-6 font-serif text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#FDF0D5] max-w-[80%] mx-auto opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out drop-shadow-md">
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#FDF0D5] leading-tight mb-2 drop-shadow-md">Heritage Bungalow</h3>
            <p>Housed within a beautifully restored 80-year-old bungalow in Bandra, Scarlett House invites guests into a home filled with stories, nostalgia, and timeless charm.</p>
            <p>Thoughtfully designed to celebrate togetherness, each room has its own distinct character while contributing to the soul of the house.</p>
            <p>From the attic upstairs to the iconic Red Room and the welcoming living room below, every space offers a unique experience, all connected by a shared sense of warmth.</p>
          </div>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Scarlett House Bandra</h2>
      </div>

      {/* Right Side: Juhu */}
      <div className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
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

        {/* Hover Inset Mask - Text on Picture */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none flex flex-col items-center justify-center p-8 md:p-12 text-center">
          <div className="z-20 flex flex-col gap-6 font-serif text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#FDF0D5] max-w-[80%] mx-auto opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out drop-shadow-md">
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#FDF0D5] leading-tight mb-2 drop-shadow-md">Glass House Experience</h3>
            <p>Scarlett House Juhu is home to the Glass House, a bright and elegant space surrounded by natural light and greenery.</p>
            <p>Blending contemporary design with the warmth and hospitality that define Scarlett House, it offers an inviting setting for everything from leisurely lunches to intimate celebrations.</p>
            <p>The Glass House also plays host to Scarlett House&apos;s signature brunch experience, where guests can enjoy live music, interactive pasta and nacho stations, refreshing electrolyte golas, and a vibrant atmosphere designed to bring people together through great food, entertainment, and shared moments.</p>
          </div>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Scarlett House Juhu</h2>
      </div>

    </section>
  );
}
