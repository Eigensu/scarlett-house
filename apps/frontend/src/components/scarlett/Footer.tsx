'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FDF0D5] text-[#080F0F] px-[20px] pt-[20px] pb-[8px] z-50">
      <div className="w-full h-full max-w-[1184px] mx-auto pt-12 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-[20px]">
          <div className="lg:col-start-1 lg:col-end-6 flex flex-col justify-between">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity mt-[-10px]">
              <h2 className="font-serif text-[40px] md:text-[128px] leading-[0.9] md:leading-[0.8] tracking-tight text-[#841F27]">
                SCARLETT HOUSE
              </h2>
            </Link>
          </div>

          <div className="lg:col-start-6 lg:col-end-8 flex flex-col justify-between mt-6 lg:mt-0">
            <p className="font-sans text-[15px] leading-[20px] max-w-sm">
              A space designed for gathering, sharing, and creating memories where comfort, community, and conversation are at the heart of every experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 font-sans text-[15px] leading-[15px] md:whitespace-nowrap text-center md:text-left">
          <span>
            © Scarlett House 2026 | All rights reserved.
          </span>
          <span>
            Powered by @Eigensu
          </span>
        </div>
      </div>
    </footer>
  );
}
