'use client';

import React from 'react';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="relative w-full h-[100svh] bg-[#080F0F] flex flex-col justify-center items-center overflow-hidden z-20 px-6">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="https://cdn.sanity.io/images/4asd31jo/production/49c5fbc85a2b20ecceb49e0cf3472b0db73b77b9-5242x6989.jpg?w=2200&auto=format" 
          alt="Kaprica Table Setting" 
          fill
          priority
          sizes="100vw"
          unoptimized={true}
          className="object-cover"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-left gap-[35px] z-10 relative">
        <p className="font-serif text-[20px] leading-[20px] text-[#FDF0D5] w-full max-w-[588px] text-left drop-shadow-md">
          Kaprica is an ode to the family run trattorias that light the way through the Sicilian countryside. A homestyle eatery with a no fuss optimism. A promise that only the right things are worth worrying about. With the comfort of good food and better company, Kaprica transports you back to fond memories of carefree days and nights. Time well spent, that never asked to be earned.
        </p>

        <p className="font-serif text-[20px] leading-[20px] text-[#FDF0D5] w-full max-w-[588px] text-left drop-shadow-md">
          Pull up a chair. Start with, "Ciao", and end with, "Saluti." Every meal is scored to the concerto of a sugo gently bubbling, a kitchen busy at work and the celebratory clink of glasses brimming with good wine. In life, some things should never change. Your seat at the table is waiting. We'll see you soon.
        </p>
      </div>
    </section>
  );
}
