'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ambienceImages, getRandomItems } from '@/lib/assets';

export default function StorySection() {
  const [bgImage, setBgImage] = useState<string>(ambienceImages[5] || '');

  useEffect(() => {
    setBgImage(getRandomItems(ambienceImages, 1)[0]);
  }, []);
  return (
    <section className="relative w-full h-[100svh] bg-[#080F0F] flex flex-col justify-center items-center overflow-hidden z-20 px-6">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src={bgImage} 
          alt="Scarlett House Ambience" 
          fill
          unoptimized={true}
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-6 z-10 relative px-4 pt-[80px] md:pt-[110px]">
        <div className="font-serif text-[20px] leading-[28px] text-[#FDF0D5] w-full max-w-[720px] text-left drop-shadow-md flex flex-col gap-4 mx-auto">
          <p>
            Scarlett House is a hospitality concept brought to life by Malaika Arora, Dhaval Udeshi, Malaya Nagpal, and Arhaan Khan.
          </p>
          <p>
            Built around the idea of nostalgia, comfort, and connection, Scarlett House reimagines dining as an experience that feels warm, familiar, and deeply personal.
          </p>
          <p>
            While each location offers its own unique personality, both Scarlett House Bandra and Scarlett House Juhu are united by a common philosophy: creating memorable spaces where guests can gather, celebrate, and experience the comfort of nostalgia through food, design, and community.
          </p>
          <p>
            More than a restaurant, Scarlett House is a home away from home—where every meal is accompanied by a story, every space sparks a memory, and every visit leaves guests wanting to return.
          </p>
        </div>
      </div>
    </section>
  );
}
