'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/scarlett/Footer';
import Navbar from '@/components/scarlett/Navbar';
import { ImageMap, getCloudinaryUrl, NEW_EXPERIENCES_SET_MENU, EXP_WINE_CHEESE, EXP_BUGGIE, EXP_DELIVERIES, EXP_ATTIC, EXP_BRUNCH, AMBIENCE } from '@/lib/cloudinary';

interface ExperienceSectionProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  extraContent?: React.ReactNode;
}

function ExperienceSection({ title, description, imageSrc, imageAlt, extraContent }: ExperienceSectionProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full relative aspect-[3/4] overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            unoptimized={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[10s] hover:scale-105"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center z-10 px-4 py-8 md:px-6"
        >
          <h2 className="font-serif text-[32px] md:text-[38px] text-[#FDF0D5] leading-tight mb-6 drop-shadow-md">
            {title}
          </h2>
          <div className="font-serif text-[16px] md:text-[18px] text-[#FDF0D5]/80 flex flex-col gap-4 max-w-[500px] leading-relaxed">
            {description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {extraContent}
        </motion.div>

      </div>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={getCloudinaryUrl(ImageMap.experiences[0])} 
            alt="Experiences at Scarlett House" 
            fill 
            unoptimized={true}
            priority
            sizes="100vw" 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        >
          <p className="font-serif text-[18px] md:text-[24px] text-[#FDF0D5]/80 mb-4 tracking-widest uppercase">
            Scarlett House
          </p>
          <h1 className="font-serif text-[60px] md:text-[90px] lg:text-[120px] text-[#FDF0D5] leading-none drop-shadow-xl">
            Experiences
          </h1>
        </motion.div>
      </section>

      {/* Experiences Grid */}
      <section className="w-full py-10 md:py-14 px-6 md:px-12 bg-[#080F0F]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">

      {/* Experience 1: Set Menu */}
      <ExperienceSection
        title="Set Menu"
        description={[
          "Our set menu brings together some of Scarlett House’s most-loved dishes in a thoughtfully curated dining experience.",
          "Gather around the table and experience the best of Scarlett House."
        ]}
        imageSrc={getCloudinaryUrl(NEW_EXPERIENCES_SET_MENU)}
        imageAlt="Set Menu"
        extraContent={
          <Link
            href="/experiences/set-menu"
            className="mt-12 inline-block font-serif text-[16px] md:text-[18px] text-[#FDF0D5] border border-[#FDF0D5]/60 px-8 py-3 tracking-widest uppercase hover:bg-[#FDF0D5] hover:text-[#080F0F] transition-colors"
          >
            View Set Menu
          </Link>
        }
      />

      {/* Experience 2: Wine & Cheese */}
      <ExperienceSection 
        title="Wine & Cheese Experience"
        description={[
          "A thoughtfully paired selection of wines and artisanal cheeses, designed for slow evenings and great conversation.",
          "Discover new favourites while savouring a timeless combination in true Scarlett House style."
        ]}
        imageSrc={getCloudinaryUrl(EXP_WINE_CHEESE)}
        imageAlt="Wine and Cheese"
        reverse={true}
      />

      {/* Experience 3: Buggie */}
      <ExperienceSection 
        title="Buggie"
        description={[
          "Arrive with ease aboard the Scarlett House buggie service.",
          "A thoughtful touch designed to make your journey to and from Scarlett House Bandra as comfortable as your time with us."
        ]}
        /* TODO: Replace with official buggy photograph when available */
        imageSrc={getCloudinaryUrl(EXP_BUGGIE)}
        imageAlt="Scarlett House Buggie"
      />

      {/* Experience 4: Home Deliveries */}
      <ExperienceSection 
        title="Home Deliveries – Juhu"
        description={[
          "Enjoy the warmth and flavours of Scarlett House from the comfort of your home.",
          "Our Juhu delivery menu brings your favourite dishes straight from our house to yours."
        ]}
        imageSrc={getCloudinaryUrl(EXP_DELIVERIES)}
        imageAlt="Home Deliveries"
        reverse={true}
      />

      {/* Experience 5: The Red Room */}
      <ExperienceSection 
        title="The Red Room"
        description={[
          "An intimate private dining and events space for celebrations, gatherings, and special occasions.",
          "Complete with a dedicated bartender, The Red Room offers a personalised Scarlett House experience."
        ]}
        imageSrc={getCloudinaryUrl(ImageMap.hero[0])}
        imageAlt="The Red Room"
      />

      {/* Experience 6: The Glass House */}
      <ExperienceSection 
        title="The Glass House – Juhu"
        description={[
          "Tucked away from the bustle of the city, The Glass House is a serene space designed for slow mornings and unhurried afternoons.",
          "Settle in with a cup of coffee, a perfectly whisked matcha, and a moment to simply relax."
        ]}
        imageSrc={getCloudinaryUrl(AMBIENCE[5])}
        imageAlt="The Glass House Juhu"
        reverse={true}
      />

      {/* Experience 7: The Attic */}
      <ExperienceSection 
        title="The Attic – Bandra"
        description={[
          "A cosy hideaway above the city, The Attic is made for intimate gatherings, thoughtful cocktails, and conversations that linger long after the last sip.",
          "Warm, inviting, and effortlessly comfortable, it’s a space to settle in and stay awhile."
        ]}
        imageSrc={getCloudinaryUrl(EXP_ATTIC)}
        imageAlt="The Attic Bandra"
      />

      {/* Experience 8: Scarlett Brunch */}
      <ExperienceSection 
        title="Scarlett Brunch"
        description={[
          "Ease into the weekend with a leisurely brunch designed for slow afternoons and good company.",
          "With live music, interactive food stations, and our signature electrolyte gola bar, it’s a celebration of good food, great company, and unhurried afternoons.",
          "Available at both our Bandra and Juhu locations."
        ]}
        imageSrc={getCloudinaryUrl(EXP_BRUNCH)}
        imageAlt="Scarlett Brunch"
        reverse={true}
      />

        </div>
      </section>

    </main>
  );
}
