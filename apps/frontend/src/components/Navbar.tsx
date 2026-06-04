'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-[100] bg-cream border-b-[1.5px] border-brand-red bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22400%22_height=%22400%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.75%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22400%22_height=%22400%22_filter=%22url(%23n)%22_opacity=%220.04%22/%3E%3C/svg%3E')]">
      <div className="grid grid-cols-3 items-center h-14 px-[clamp(1.5rem,4vw,3.5rem)] max-w-site-container mx-auto">
        {/* Desktop Left Links */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="#valentines"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-brand-red transition-colors font-sans"
            >
              Plates
            </Link>
          </li>
          <li>
            <Link
              href="#story"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-brand-red transition-colors font-sans"
            >
              Story
            </Link>
          </li>
          <li>
            <Link
              href="#spaces"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-brand-red transition-colors font-sans"
            >
              Spaces
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-ink hover:text-brand-red transition-colors p-1 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>

        {/* Brand Logo */}
        <div className="font-serif text-[16px] md:text-[22px] font-semibold tracking-[0.15em] text-center uppercase text-ink whitespace-nowrap">
          <span className="text-brand-red">Scarlett House</span>
        </div>

        {/* Desktop Right Links */}
        <ul className="hidden md:flex gap-8 list-none justify-end">
          <li>
            <Link
              href="#journal"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-brand-red transition-colors font-sans"
            >
              Journal
            </Link>
          </li>
          <li>
            <Link
              href="#reserve"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-brand-red transition-colors font-sans"
            >
              Reserve
            </Link>
          </li>
          <li>
            <Link
              href="#cocktails"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-brand-red transition-colors font-sans"
            >
              Experiences
            </Link>
          </li>
        </ul>

        {/* Mobile Right Reserve Button */}
        <div className="flex md:hidden justify-end">
          <Link
            href="#reserve"
            className="text-[9px] font-medium tracking-[0.15em] uppercase border border-brand-red px-3 py-1.5 hover:bg-brand-red hover:text-cream transition-all font-sans text-brand-red"
          >
            Reserve
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[150] bg-cream/98 backdrop-blur-md flex flex-col justify-between p-8 md:hidden fade-in">
          {/* Top Row inside drawer */}
          <div className="flex justify-between items-center h-14 border-b border-brand-red/10">
            <div className="font-serif text-[16px] font-semibold tracking-[0.15em] uppercase text-ink">
              <span className="text-brand-red">Scarlett House</span>
            </div>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-ink hover:text-brand-red transition-colors p-1 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 py-12">
            <Link
              href="#story"
              onClick={toggleMenu}
              className="font-serif text-[2.5rem] font-light text-ink hover:text-brand-red transition-colors"
            >
              Story
            </Link>
            <Link
              href="#spaces"
              onClick={toggleMenu}
              className="font-serif text-[2.5rem] font-light text-ink hover:text-brand-red transition-colors"
            >
              Spaces
            </Link>
            <Link
              href="#valentines"
              onClick={toggleMenu}
              className="font-serif text-[2.5rem] font-light text-ink hover:text-brand-red transition-colors"
            >
              Plates
            </Link>
            <Link
              href="#journal"
              onClick={toggleMenu}
              className="font-serif text-[2.5rem] font-light text-ink hover:text-brand-red transition-colors"
            >
              Journal
            </Link>
            <Link
              href="#cocktails"
              onClick={toggleMenu}
              className="font-serif text-[2.5rem] font-light text-ink hover:text-brand-red transition-colors"
            >
              Experiences
            </Link>
            <Link
              href="#reserve"
              onClick={toggleMenu}
              className="font-serif text-[2.5rem] font-light text-ink hover:text-brand-red transition-colors"
            >
              Reserve
            </Link>
          </div>

          {/* Footer inside drawer */}
          <div className="text-center border-t border-brand-red/10 pt-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-ink-faint font-sans">
              Bandra & Juhu — Mumbai
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
