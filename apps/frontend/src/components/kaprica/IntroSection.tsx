'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const INTRO_IMAGES = [
  "https://cdn.sanity.io/images/4asd31jo/production/1f01e67bd0cb138eb63a18b272c9e253764be9ff-1776x1185.jpg?w=1200&auto=format",
  "https://cdn.sanity.io/images/4asd31jo/production/7d2e0cee0ed08a853c714ff3453f1429a90d7121-2097x1573.jpg?w=1200&auto=format",
  "https://cdn.sanity.io/images/4asd31jo/production/8914bc8ea8412549e15a743d869e318a612a4745-6989x5242.jpg?w=1200&auto=format",
  "https://cdn.sanity.io/images/4asd31jo/production/2490a4b9b2fe89952ffd9f11e9b217cba13a27c4-2097x1573.jpg?w=1200&auto=format",
  "https://cdn.sanity.io/images/4asd31jo/production/9821a52638ae16c742fbb2699ec5dfb123660908-6989x5242.jpg?w=1200&auto=format"
];

export default function IntroSection() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % INTRO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          {Array(20).fill("...still learning the new system so feel free to call us... 0447 043 404 • ").map((text, i) => (
            <span key={i} className="px-4 whitespace-pre">{text}</span>
          ))}
        </div>
      </div>

      <div className="w-[588px] max-w-full flex flex-col items-center justify-center text-left gap-[35px] z-10 relative px-4 md:px-0">
        <p className="font-serif text-[20px] leading-[20px] text-[#FDF0D5] text-left w-full">
          Kaprica is the final stop. The table where all walks sit together in search of a taste of home.
        </p>

        {/* Center Image Carousel - 2:1 aspect ratio */}
        <div className="relative w-full aspect-[2/1]">
          {INTRO_IMAGES.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt="Kaprica Atmosphere"
              fill
              sizes="(max-width: 768px) 100vw, 588px"
              priority={idx === 0}
              unoptimized={true}
              className={`object-cover transition-opacity duration-1000 absolute inset-0 ${
                idx === imgIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <p className="font-serif text-[20px] leading-[20px] text-[#FDF0D5] text-left w-full">
          Market fresh ingredients cooked in a certain type of way, met with hospitality and an old world charm. Life as it was, and always should be.
        </p>
      </div>

    </section>
  );
}
