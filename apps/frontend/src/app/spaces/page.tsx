import React from 'react';
import Image from 'next/image';
import SpacesSection from '@/components/scarlett/SpacesSection';
import { ImageMap, getCloudinaryUrl } from '@/lib/cloudinary';

export default function SpacesPage() {
  const heroImage = getCloudinaryUrl(ImageMap.hero[1] || ImageMap.hero[0]);

  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Spaces at Scarlett House"
            fill
            unoptimized={true}
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <p className="font-serif text-[18px] md:text-[24px] text-[#FDF0D5]/80 mb-4 tracking-widest uppercase">
            Scarlett House
          </p>
          <h1 className="font-serif text-[60px] md:text-[90px] lg:text-[120px] text-[#FDF0D5] leading-none drop-shadow-xl">
            Spaces
          </h1>
        </div>
      </section>

      <SpacesSection />
    </main>
  );
}
