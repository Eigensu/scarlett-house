'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { foodImages, drinkImages, getRandomItems } from '@/lib/assets';

export default function SplitMenuSection() {
  const [eatBg, setEatBg] = useState<string>(foodImages[0] || '');
  const [eatHover, setEatHover] = useState<string>(foodImages[1] || '');
  
  const [drinkBg, setDrinkBg] = useState<string>(drinkImages[0] || foodImages[2] || '');
  const [drinkHover, setDrinkHover] = useState<string>(foodImages[3] || '');

  useEffect(() => {
    // Randomize Eat images
    const eatSelected = getRandomItems(foodImages, 2);
    setEatBg(eatSelected[0] || foodImages[0]);
    setEatHover(eatSelected[1] || foodImages[1]);

    // Randomize Drink images
    // If only 1 drink image exists, fallback to food for the hover state
    const allDrinks = drinkImages.length > 0 ? drinkImages : foodImages;
    const drinkSelected1 = getRandomItems(allDrinks, 1)[0] || '';
    
    const remaining = foodImages.filter(img => img !== eatSelected[0] && img !== eatSelected[1] && img !== drinkSelected1);
    const drinkSelected2 = getRandomItems(remaining.length > 0 ? remaining : foodImages, 1)[0] || '';

    setDrinkBg(drinkSelected1);
    setDrinkHover(drinkSelected2);
  }, []);

  return (
    <section className="w-full min-h-screen h-[100svh] bg-[#080F0F] grid grid-cols-1 md:grid-cols-2 z-30 relative overflow-hidden">
      
      {/* Left Side: Eat */}
      <Link href="/eat" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Default Visible Background */}
        <div className="absolute inset-0 z-0">
          {eatBg && (
            <Image 
              src={eatBg} 
              alt="Eat at Scarlett House" 
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
          )}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        </div>

        {/* Hover Inset Mask (Enhancement) */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none">
          <div className="absolute inset-0 border-4 border-[#FDF0D5]/20 rounded-[45px] z-10" />
          {eatHover && (
            <Image 
              src={eatHover} 
              alt="View Food Menu Detail" 
              fill
              sizes="50vw"
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" 
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 pointer-events-none">
          <span className="font-serif text-[#47682C] text-[120svh] leading-[105svh] opacity-80 mix-blend-screen">S</span>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Eat at Scarlett House</h2>
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 drop-shadow-lg">View Food Menu</h2>
      </Link>

      {/* Right Side: Drink */}
      <Link href="/drink" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Default Visible Background */}
        <div className="absolute inset-0 z-0">
          {drinkBg && (
            <Image 
              src={drinkBg} 
              alt="Drink at Scarlett House" 
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
          )}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        </div>

        {/* Hover Inset Mask (Enhancement) */}
        <div className="absolute inset-4 md:inset-8 z-0 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 overflow-hidden rounded-[45px] pointer-events-none">
          <div className="absolute inset-0 border-4 border-[#FDF0D5]/20 rounded-[45px] z-10" />
          {drinkHover && (
            <Image 
              src={drinkHover} 
              alt="View Drink Menu Detail" 
              fill
              sizes="50vw"
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" 
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 pointer-events-none">
          <span className="font-serif text-[#080F0F] text-[120svh] leading-[105svh] opacity-80 mix-blend-multiply">S</span>
        </div>

        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Drink at Scarlett House</h2>
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 drop-shadow-lg">View Drink Menu</h2>
      </Link>

    </section>
  );
}
