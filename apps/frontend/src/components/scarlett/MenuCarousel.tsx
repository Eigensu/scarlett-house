'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface MenuCarouselProps {
  images: { src: string; alt?: string }[];
  align: 'left' | 'right';
  className?: string;
}

export default function MenuCarousel({ images, align, className }: MenuCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={clsx("w-full py-[30px]", className)}>
      <div className="w-full grid grid-cols-7">
        <div 
          className={clsx(
            "relative w-full aspect-[2/3] overflow-hidden",
            align === 'left' ? "col-span-7 md:col-span-4 md:col-start-1" : "col-span-7 md:col-span-4 md:col-start-4"
          )}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={clsx(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image 
                src={img.src} 
                alt={img.alt || `Menu image ${idx + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={idx === 0}
              />
            </div>
          ))}

          {/* Navigation overlay */}
          <div className="absolute inset-0 z-20 flex">
            <button 
              className="w-1/2 h-full cursor-w-resize"
              onClick={prevSlide}
              aria-label="Previous image"
            />
            <button 
              className="w-1/2 h-full cursor-e-resize"
              onClick={nextSlide}
              aria-label="Next image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
