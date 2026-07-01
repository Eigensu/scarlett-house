import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/scarlett/Footer';
import { ImageMap, getCloudinaryUrl } from '@/lib/cloudinary';
import Navbar from '@/components/scarlett/Navbar';

export default function PartiesPage() {
  const heroImage = getCloudinaryUrl(ImageMap.parties[0] || ImageMap.hero[0]);
  const contactImage = getCloudinaryUrl(ImageMap.carousel[1]);
  const packageImage = getCloudinaryUrl(ImageMap.carousel[2]);

  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section */}
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-24 md:py-32 bg-[#080F0F] flex flex-col items-center justify-center text-center px-6 border-b border-[#FDF0D5]/10">
        <p className="font-serif text-[20px] md:text-[28px] text-[#FDF0D5]/80 mb-6">
          For private events, please call us at
        </p>
        <h1 className="font-serif text-[50px] md:text-[70px] lg:text-[90px] text-[#FDF0D5] tracking-tight">
          9768583376
        </h1>
      </section>

      {/* Divider Image */}
      <section className="w-full h-[40vh] md:h-[60vh] relative">
        <Image 
          src={contactImage} 
          alt="Scarlett House Ambience" 
          fill 
          unoptimized={true}
          sizes="100vw" 
          className="object-cover" 
        />
      </section>

      {/* Sample Package Menu */}
      <section className="relative w-full py-24 md:py-32 bg-[#080F0F] flex flex-col items-center px-6">
        <h2 className="font-serif text-[40px] md:text-[60px] text-[#FDF0D5] mb-20 text-center drop-shadow-md">
          Sample Package Menu
        </h2>

        <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
          
          {/* Unlimited Food */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#FDF0D5] mb-8 border-b border-[#FDF0D5]/30 pb-4 inline-block">
              Unlimited Food
            </h3>
            <ul className="flex flex-col gap-6 font-serif text-[18px] md:text-[22px] text-[#FDF0D5]/80">
              <li>• 4 Small Plates</li>
              <li>• 3 Large Plates</li>
              <li>• 1 Dessert</li>
            </ul>
          </div>

          {/* Unlimited Alcohol */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#FDF0D5] mb-8 border-b border-[#FDF0D5]/30 pb-4 inline-block">
              Unlimited Alcohol
            </h3>
            <ul className="flex flex-col gap-5 font-serif text-[18px] md:text-[22px] text-[#FDF0D5]/80">
              <li>• Mocktails</li>
              <li>• Cocktails</li>
              <li>• Beer</li>
              <li>• Wine</li>
              <li>• Vodka</li>
              <li>• Whiskey</li>
              <li>• Gin</li>
              <li>• Rum</li>
              <li>• Soft Beverages</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Another Divider Image */}
      <section className="w-full h-[40vh] md:h-[60vh] relative">
        <Image 
          src={packageImage} 
          alt="Scarlett House Ambience" 
          fill 
          unoptimized={true}
          sizes="100vw" 
          className="object-cover" 
        />
      </section>

      {/* Closing Note */}
      <section className="relative w-full py-32 bg-[#851F27] flex flex-col items-center justify-center text-center px-6">
        <p className="font-serif text-[24px] md:text-[36px] lg:text-[42px] text-[#FDF0D5] max-w-[800px] leading-relaxed drop-shadow-sm">
          Please contact us for prices, customisation and more details.
        </p>
      </section>


    </main>
  );
}
