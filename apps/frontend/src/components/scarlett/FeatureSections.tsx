'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { ImageMap, getCloudinaryUrl } from '@/lib/cloudinary';
import { useTouchNavigation } from '@/hooks/useTouchNavigation';

export default function FeatureSections() {
  const { activeCardId, handleCardClick } = useTouchNavigation();

  return (
    <>
      {/* Parties Section */}
      {/* Parties Section */}
      <section className="snap-start flex-shrink-0 relative w-full h-[100svh] bg-[#080F0F] flex items-center justify-center z-20">
        <div className="w-full max-w-[1200px] px-4">
          <Link 
            href="/parties" 
            onClick={(e) => handleCardClick(e, 'parties')}
            data-touch-nav="true"
            className={clsx("block group outline-none", activeCardId === 'parties' && 'is-active')} 
            aria-label="Parties"
          >
            <div className="w-full relative">
              <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
                
                {/* GROUP A: Before Hover (5 top, 4 bottom) */}
                <g className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-[.is-active]:opacity-0">
                  {/* Top 5 */}
                  <circle cx="150" cy="100" r="40" fill="#841F27" />
                  <circle cx="325" cy="100" r="40" fill="#841F27" />
                  <circle cx="500" cy="100" r="40" fill="#841F27" />
                  <circle cx="675" cy="100" r="40" fill="#841F27" />
                  <circle cx="850" cy="100" r="40" fill="#841F27" />
                  {/* Bottom 4 (2 left, 2 right) */}
                  <circle cx="150" cy="400" r="40" fill="#841F27" />
                  <circle cx="280" cy="400" r="40" fill="#841F27" />
                  <circle cx="720" cy="400" r="40" fill="#841F27" />
                  <circle cx="850" cy="400" r="40" fill="#841F27" />
                </g>

                {/* GROUP B: After Hover (8 top, 8 bottom) */}
                <g className="transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100">
                  {/* Top 8 */}
                  {[150, 250, 350, 450, 550, 650, 750, 850].map((cx) => (
                    <circle key={`top-${cx}`} cx={cx} cy="100" r="40" fill="#841F27" />
                  ))}
                  {/* Bottom 8 */}
                  {[150, 250, 350, 450, 550, 650, 750, 850].map((cx) => (
                    <circle key={`bottom-${cx}`} cx={cx} cy="400" r="40" fill="#841F27" />
                  ))}
                </g>

                {/* The Table Background (Always Red) */}
                <rect x="100" y="150" width="800" height="200" fill="#841F27" />

                {/* The Cream Middle (Appears on Hover) */}
                <rect 
                  x="100" y="210" width="800" height="80" fill="#FDF0D5" 
                  className="transition-all duration-500 ease-in-out opacity-0 scale-y-0 origin-center group-hover:scale-y-100 group-[.is-active]:scale-y-100 group-hover:opacity-100 group-[.is-active]:opacity-100"
                />

                {/* Text (Appears on Hover) */}
                <text 
                  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
                  className="font-serif text-[70px] fill-[#080F0F] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100"
                >
                  Parties
                </text>

              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="snap-start flex-shrink-0 relative w-full h-[100svh] flex items-center justify-center overflow-hidden z-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src={getCloudinaryUrl(ImageMap.experiences[0])}
            alt="Scarlett House Setting" 
            fill
            sizes="100vw"
            unoptimized={true}
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-[#080F0F]/60 backdrop-blur-sm z-10" />
        </div>

        <div className="w-full max-w-[800px] px-[20px] z-20 relative flex justify-center">
          <Link 
            href="/experiences" 
            onClick={(e) => handleCardClick(e, 'experiences')}
            data-touch-nav="true"
            className={clsx("block group outline-none w-full max-w-[465px] relative", activeCardId === 'experiences' && 'is-active')} 
            aria-label="Experiences"
          >
            <div className="w-full relative">
              {/* TOP SVG (Before Hover) */}
              <svg viewBox="0 0 465 258" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transition-opacity duration-[400ms] ease-in-out opacity-100 group-hover:opacity-0 group-[.is-active]:opacity-0 relative z-10">
                <path d="M360.538 4.44643L63.5854 25.2114C58.2773 54.038 34.0353 76.7589 3.44322 78.8981L10.7658 183.616C41.3578 181.477 68.5261 200.603 77.7944 228.41L374.747 207.645C380.055 178.818 404.297 156.097 434.889 153.958L427.567 49.2405C396.975 51.3797 369.807 32.2537 360.538 4.44643Z" fill="#841F27" />
                <path d="M400.29 52.6593L102.682 46.2318C94.7645 74.4535 68.5497 94.8667 37.8901 94.2045L35.6235 199.154C66.2831 199.816 91.5921 221.342 98.2835 249.879L395.892 256.307C403.809 228.085 430.024 207.672 460.684 208.334L462.95 103.385C432.291 102.723 406.982 81.1965 400.29 52.6593Z" fill="#080F0F" />
              </svg>

              {/* BOTTOM SVG (After Hover) */}
              <svg viewBox="0 0 465 258" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-auto transition-opacity duration-[400ms] ease-in-out opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 z-20 pointer-events-none">
                <path d="M400.29 52.6593L102.682 46.2318C94.7645 74.4535 68.5497 94.8667 37.8901 94.2045L35.6235 199.154C66.2831 199.816 91.5921 221.342 98.2835 249.879L395.892 256.307C403.809 228.085 430.024 207.672 460.684 208.334L462.95 103.385C432.291 102.723 406.982 81.1965 400.29 52.6593Z" fill="#080F0F" />
                <path d="M50.5792 100.273C79.3251 100.679 103.869 82.454 111.453 57.1982L391.054 63.2369C397.54 88.7965 421.274 108.064 450.011 108.9L447.995 202.265C419.249 201.86 394.705 220.084 387.121 245.34L107.52 239.301C101.033 213.742 77.2994 194.474 48.5627 193.639L50.5792 100.273Z" stroke="#FDF0D5" />
                <path d="M360.538 4.44643L63.5854 25.2114C58.2773 54.038 34.0353 76.7589 3.44322 78.8981L10.7658 183.616C41.3578 181.477 68.5261 200.603 77.7944 228.41L374.747 207.645C380.055 178.818 404.297 156.097 434.889 153.958L427.567 49.2405C396.975 51.3797 369.807 32.2537 360.538 4.44643Z" fill="#841F27" />
                <path d="M16.6294 83.6744C45.2924 81.4545 68.07 61.0655 73.3169 35.2229L352.302 15.7143C361.095 40.5752 386.488 57.5957 415.181 55.805L421.696 148.965C393.033 151.185 370.255 171.574 365.008 197.416L86.0227 216.925C77.2303 192.064 51.8367 175.044 23.1438 176.834L16.6294 83.6744Z" stroke="#FDF0D5" />
                <text x="219" y="116" dominantBaseline="middle" textAnchor="middle" transform="rotate(-4 219 116)" className="font-serif text-[55px] fill-[#FDF0D5]">Experiences</text>
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
