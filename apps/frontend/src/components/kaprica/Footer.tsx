'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FDF0D5] text-[#080F0F] p-[20px] z-50">
      <div className="w-full h-full max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-7 gap-[20px] py-12">
        
        <div className="col-start-1 col-end-6 flex flex-col justify-between">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity mt-[-10px]">
            <h2 className="font-serif text-[64px] md:text-[128px] leading-[0.8] tracking-tight text-[#841F27]">
              KAPRICA
            </h2>
          </Link>

          <p className="font-sans text-[15px] leading-[15px] max-w-sm mt-12 pb-2">
            Kaprica acknowedges the wurundjeri woi wurrung people of the kulin nation as the traditional owners of the land on which we live and work and pay our respects to elders past, present and future.
          </p>
        </div>

        <div className="col-start-6 col-end-8 flex flex-col justify-between gap-12 mt-12 lg:mt-0">
          <div className="flex flex-col gap-4 font-sans text-[15px] leading-[20px]">
            <p>
              4pm-10pm, Mon - Thurs<br/>
              Noon - 10pm, Fri - Sun<br/>
              50 Grattan Street, Carlton
            </p>
            <a href="tel:+610447043404" className="hover:text-[#841F27] transition-colors">
              0447 043 404
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-2 font-sans text-[15px] leading-[15px]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#841F27] transition-colors">
              instagram
            </a>
            <span className="text-left md:text-right">
              © Kaprica 2026 | All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
