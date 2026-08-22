import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/scarlett/Navbar';
import Footer from '@/components/scarlett/Footer';
import { ImageMap, getCloudinaryUrl } from '@/lib/cloudinary';

export default function PartiesPage() {
  const heroImage = getCloudinaryUrl(ImageMap.parties[0] || ImageMap.hero[0]);

  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section - Private Parties */}
      <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage} 
            alt="Private Parties at Scarlett House" 
            fill 
            unoptimized={true}
            priority
            sizes="100vw" 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 fade-in">
          <p className="font-serif text-[18px] md:text-[24px] text-[#FDF0D5]/80 mb-4 tracking-widest uppercase">
            Scarlett House
          </p>
          <h1 className="font-serif text-[60px] md:text-[90px] lg:text-[120px] text-[#FDF0D5] leading-none drop-shadow-xl">
            Private Parties
          </h1>
          <div className="mt-8 flex flex-col items-center">
            <p className="font-serif text-[#FDF0D5] mb-2 uppercase tracking-widest">Call us at:</p>
            <a
              href="tel:9870306675"
              className="inline-block font-serif text-[16px] md:text-[18px] text-[#FDF0D5] border border-[#FDF0D5]/60 px-8 py-3 tracking-widest uppercase hover:bg-[#FDF0D5] hover:text-[#080F0F] transition-colors"
            >
              9870306675 / 9819098092
            </a>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="relative w-full py-24 md:py-32 bg-[#851F27] flex flex-col items-center px-6">
        <div className="max-w-[900px] flex flex-col items-center text-center">
          <h2 className="font-serif text-[40px] md:text-[60px] text-[#FDF0D5] mb-12 drop-shadow-md">
            Private Events
          </h2>
          
          <div className="space-y-6 text-[#FDF0D5]/90 text-[16px] md:text-[20px] leading-relaxed font-sans max-w-[800px]">
            <p>
              Every celebration has a story. At Scarlett House, we’ve created spaces that bring people together over thoughtful food, heartfelt hospitality, and memorable experiences.
            </p>
            <p>
              Whether you’re planning an intimate gathering, a milestone celebration, a corporate event, or an evening with friends, our versatile spaces provide the perfect setting for every occasion.
            </p>
            <p>
              From cosy private rooms to vibrant communal spaces, each venue can be tailored to suit your event. Paired with curated menus, handcrafted cocktails, and bespoke experiences, we make every gathering feel personal, effortless, and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Check Out Our Spaces Section */}
      <section className="relative w-full py-24 bg-[#080F0F] flex flex-col items-center justify-center text-center px-6">
        <Link
          href="/parties/spaces"
          className="inline-block font-serif text-[18px] md:text-[20px] text-[#080F0F] bg-[#FDF0D5] px-10 py-4 tracking-widest uppercase hover:bg-transparent hover:text-[#FDF0D5] border border-[#FDF0D5] transition-colors"
        >
          Check out our spaces
        </Link>
      </section>

    </main>
  );
}
