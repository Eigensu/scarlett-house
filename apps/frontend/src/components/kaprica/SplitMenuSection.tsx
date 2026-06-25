'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SplitMenuSection() {
  return (
    <section className="w-full min-h-screen h-[100svh] bg-[#080F0F] grid grid-cols-1 md:grid-cols-2 z-30 relative overflow-hidden">
      
      {/* Left Side: Eat */}
      <Link href="/eat" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Default Visible Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601" 
            alt="Eat at Kaprica" 
            fill
            sizes="50vw"
            unoptimized={true}
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        </div>

        {/* Hover Inset Mask (Enhancement) */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none">
          <div className="absolute inset-0 border-4 border-[#FDF0D5]/20 rounded-[45px] z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
            alt="View Food Menu Detail" 
            fill
            sizes="50vw"
            unoptimized={true}
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 pointer-events-none">
          <span className="font-serif text-[#47682C] text-[120svh] leading-[105svh] opacity-80 mix-blend-screen">K</span>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Eat at Kaprica</h2>
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 drop-shadow-lg">View Food Menu</h2>
      </Link>

      {/* Right Side: Drink */}
      <Link href="/drink" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Default Visible Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3" 
            alt="Drink at Kaprica" 
            fill
            sizes="50vw"
            unoptimized={true}
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        </div>

        {/* Hover Inset Mask (Enhancement) */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none">
          <div className="absolute inset-0 border-4 border-[#FDF0D5]/20 rounded-[45px] z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b" 
            alt="View Drink Menu Detail" 
            fill
            sizes="50vw"
            unoptimized={true}
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 pointer-events-none">
          <span className="font-serif text-[#080F0F] text-[120svh] leading-[105svh] opacity-80 mix-blend-multiply">K</span>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Drink at Kaprica</h2>
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 drop-shadow-lg">View Drink Menu</h2>
      </Link>

    </section>
  );
}
