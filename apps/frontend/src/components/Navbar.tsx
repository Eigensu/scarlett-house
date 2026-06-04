'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#story', label: 'Story' },
  { href: '#spaces', label: 'Spaces' },
  { href: '#valentines', label: 'Plates' },
  { href: '#journal', label: 'Journal' },
  { href: '#cocktails', label: 'Experiences' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] bg-cream/97 backdrop-blur-sm border-b border-brand-red/10 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between h-14 px-[clamp(1.5rem,4vw,3.5rem)]">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-[15px] font-semibold tracking-[0.15em] uppercase text-brand-red whitespace-nowrap"
        >
          Scarlett House
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[9.5px] tracking-[0.2em] uppercase font-sans font-medium text-ink/65 hover:text-brand-red transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Reserve CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#reserve"
            className="hidden md:inline-flex items-center text-[9px] tracking-[0.2em] uppercase font-sans font-medium border border-brand-red text-brand-red px-5 py-2 hover:bg-brand-red hover:text-cream transition-all duration-300"
          >
            Reserve
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-1 text-ink hover:text-brand-red transition-colors"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-brand-red/10 px-[clamp(1.5rem,4vw,3.5rem)] pt-6 pb-8 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[11px] tracking-[0.22em] uppercase font-sans font-medium text-ink hover:text-brand-red transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#reserve"
            onClick={() => setMobileOpen(false)}
            className="mt-1 self-start text-[9px] tracking-[0.2em] uppercase font-sans font-medium border border-brand-red text-brand-red px-6 py-2.5 hover:bg-brand-red hover:text-cream transition-all"
          >
            Reserve a Table
          </Link>
        </div>
      )}
    </nav>
  );
}
