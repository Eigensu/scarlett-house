'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImageMap, getCloudinaryUrl, getRandomItems } from '@/lib/cloudinary';

export default function StorySection() {
  const [bgImage, setBgImage] = useState<string>(getCloudinaryUrl(ImageMap.carousel[0]));

  useEffect(() => {
    setBgImage(getCloudinaryUrl(getRandomItems(ImageMap.carousel, 1)[0]));
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
          <p className="italic">
            Warm, nostalgic, and effortlessly sophisticated.
          </p>
          <p>
            Scarlett House is a neighbourhood home for soulful food, thoughtful drinks, and meaningful conversation. Rooted in comfort, community, and storytelling, it blends old-world charm with contemporary taste to create an experience that feels personal, welcoming, and timeless.
          </p>
          <p>
            More than a restaurant, Scarlett House is where comfort, community, and conversation come together.
          </p>
        </div>
      </div>
    </section>
  );
}
