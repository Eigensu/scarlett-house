'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FDF0D5] text-[#080F0F] px-[20px] pt-[20px] pb-[4px] z-50">
      <div className="w-full h-full max-w-[1184px] mx-auto pt-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-[20px]">
          <div className="lg:col-start-1 lg:col-end-6 flex flex-col items-center lg:items-stretch justify-between text-center lg:text-left">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity mt-[-10px]">
              <h2 className="font-serif text-[34px] md:text-[136px] leading-[0.9] md:leading-[0.9] tracking-tight text-[#841F27] whitespace-nowrap">
                SCARLETT HOUSE
              </h2>
            </Link>
          </div>

          <div className="lg:col-start-6 lg:col-end-8 flex flex-col items-center lg:items-stretch justify-between mt-6 lg:mt-0 text-center lg:text-left">
            <p className="font-sans text-[13px] leading-[19px] max-w-none lg:max-w-none">
              A space designed for gathering, sharing, and creating memories where comfort, community, and conversation are at the heart of every experience.
            </p>

            <div className="mt-2 lg:pl-8 font-sans text-[12px] leading-[18px] flex flex-row gap-6 justify-center lg:justify-start">
              <div>
                <p className="uppercase tracking-[0.08em] opacity-60">Bandra</p>
                <a href="tel:+917400099990" className="hover:opacity-70 transition-opacity">
                  +91 74000 99990
                </a>
              </div>
              <div>
                <p className="uppercase tracking-[0.08em] opacity-60">Juhu</p>
                <a href="tel:+917900099997" className="hover:opacity-70 transition-opacity">
                  +91 79000 99997
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 font-sans text-[12px] leading-[18px] opacity-70 text-center lg:text-right">
          *Valet parking available
        </p>

        <div className="flex justify-center items-center mt-2 font-sans text-[15px] leading-[15px] text-center">
          <span>
            © Scarlett House 2026 | All rights reserved | Powered by @Eigensu
          </span>
        </div>
      </div>
    </footer>
  );
}
