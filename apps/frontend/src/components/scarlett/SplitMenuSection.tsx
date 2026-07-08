'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCloudinaryUrl, EAT_AT_SCARLETT, VIEW_FOOD_MENU, DRINK_AT_SCARLETT, VIEW_DRINK_MENU } from '@/lib/cloudinary';

export default function SplitMenuSection() {
  const [eatBg, setEatBg] = useState<string>('');
  const [eatHover, setEatHover] = useState<string>('');
  
  const [drinkBg, setDrinkBg] = useState<string>('');
  const [drinkHover, setDrinkHover] = useState<string>('');

  useEffect(() => {
    setEatBg(getCloudinaryUrl(EAT_AT_SCARLETT));
    setEatHover(getCloudinaryUrl(VIEW_FOOD_MENU));
    setDrinkBg(getCloudinaryUrl(DRINK_AT_SCARLETT));
    setDrinkHover(getCloudinaryUrl(VIEW_DRINK_MENU));
  }, []);

  return (
    <section className="w-full min-h-screen h-[100svh] bg-[#080F0F] grid grid-cols-1 md:grid-cols-2 z-30 relative overflow-hidden">
      
      {/* Left Side: Eat */}
      <Link href="/eat" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {eatBg && (
            <Image 
              src={eatBg} 
              alt="Eat at Scarlett House" 
              fill
              sizes="50vw"
              className="object-cover transition-opacity duration-600 ease-in-out opacity-100 group-hover:opacity-0" 
            />
          )}
          {eatHover && (
            <Image 
              src={eatHover} 
              alt="View Food Menu Detail" 
              fill
              sizes="50vw"
              className="object-cover transition-opacity duration-600 ease-in-out opacity-0 group-hover:opacity-100" 
            />
          )}
          <div className="absolute inset-0 bg-black/60 transition-colors duration-600 ease-in-out group-hover:bg-black/40 pointer-events-none" />
        </div>

        {/* Large S */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 pointer-events-none">
          <span className="font-serif text-[#851F27] text-[120svh] leading-[105svh] opacity-80 mix-blend-multiply">S</span>
        </div>

        {/* Text */}
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Eat at Scarlett</h2>
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 drop-shadow-lg">View Food Menu</h2>
      </Link>

      {/* Right Side: Drink */}
      <Link href="/drink" className="group relative w-full h-full overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {drinkBg && (
            <Image 
              src={drinkBg} 
              alt="Drink at Scarlett House" 
              fill
              sizes="50vw"
              className="object-cover transition-opacity duration-600 ease-in-out opacity-100 group-hover:opacity-0" 
            />
          )}
          {drinkHover && (
            <Image 
              src={drinkHover} 
              alt="View Drink Menu Detail" 
              fill
              sizes="50vw"
              className="object-cover transition-opacity duration-600 ease-in-out opacity-0 group-hover:opacity-100" 
            />
          )}
          <div className="absolute inset-0 bg-black/60 transition-colors duration-600 ease-in-out group-hover:bg-black/40 pointer-events-none" />
        </div>

        {/* Large S */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 pointer-events-none">
          <span className="font-serif text-[#851F27] text-[120svh] leading-[105svh] opacity-80 mix-blend-multiply">S</span>
        </div>

        {/* Text */}
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 transition-opacity duration-600 ease-in-out group-hover:opacity-0 drop-shadow-lg">Drink at Scarlett</h2>
        <h2 className="absolute z-20 font-serif text-[#FDF0D5] text-[40px] md:text-[60px] leading-none text-center px-4 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 drop-shadow-lg">View Drink Menu</h2>
      </Link>

    </section>
  );
}
