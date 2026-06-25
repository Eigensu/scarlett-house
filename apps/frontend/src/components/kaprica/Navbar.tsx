'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setHeroVisible(false);
      return;
    }

    let animationFrameId: number;
    const checkHero = () => {
      const heroEl = document.querySelector('div.fixed.inset-0.z-\\[100\\].bg-\\[\\#080F0F\\]') as HTMLElement;
      if (!heroEl) {
        setHeroVisible(false);
      } else {
        const rect = heroEl.getBoundingClientRect();
        // As long as the bottom of the hero overlay is within the viewport, keep the navbar hidden
        if (rect.bottom > 10) {
          setHeroVisible(true);
        } else {
          setHeroVisible(false);
        }
      }
      animationFrameId = requestAnimationFrame(checkHero);
    };

    checkHero();
    return () => cancelAnimationFrame(animationFrameId);
  }, [pathname]);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOverlayOpen]);

  // Hide the header only on the home page when the hero is still visible
  const isHomePage = pathname === '/';
  const hideHeader = isHomePage && heroVisible && !isOverlayOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          isOverlayOpen ? 'mix-blend-normal' : 'mix-blend-difference'
        } ${
          scrolled ? 'py-4' : 'bg-transparent py-6'
        } ${hideHeader ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'}`}
      >
        <div className="w-full px-6 md:px-12 grid grid-cols-3 items-center">
          {/* Left: Menu */}
          <div className="flex justify-start">
            <button
              onClick={() => setIsOverlayOpen(true)}
              className="flex items-center gap-2 text-[#841F27] hover:opacity-70 transition-opacity"
              aria-label="Open Menu"
            >
              <span className="font-serif text-[18px] md:text-[20px]">Menu</span>
            </button>
          </div>

          {/* Center: Kaprica Logo */}
          <div className="flex justify-center">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <h1 className="font-serif text-[36px] md:text-[70px] text-[#841F27] tracking-tight leading-none">
                Kaprica
              </h1>
            </Link>
          </div>

          {/* Right: Book Now */}
          <div className="flex justify-end">
            <Link
              href="/booking"
              className="hidden md:inline-flex px-6 py-2.5 bg-[#841F27] text-[#FDF0D5] rounded-[40px] hover:opacity-80 transition-opacity font-sans text-[13px] md:text-[14px] tracking-wide"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Book Now Button */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-[80] flex justify-center px-6 pointer-events-none mix-blend-difference">
        <Link
          href="/booking"
          className="pointer-events-auto bg-[#841F27] text-[#FDF0D5] px-8 py-4 rounded-full font-sans text-[14px] tracking-wide shadow-lg hover:opacity-90 transition-opacity"
        >
          Book Now
        </Link>
      </div>

      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[110] bg-[#EBE3D5] flex flex-col items-center justify-between py-6 md:py-8 overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="w-full px-6 md:px-12 grid grid-cols-3 items-center shrink-0">
              <div className="flex justify-start">
                <button
                  onClick={() => setIsOverlayOpen(false)}
                  className="font-serif text-[24px] md:text-[30px] text-[#841F27] hover:opacity-70 transition-opacity"
                >
                  Close
                </button>
              </div>
              <div className="flex justify-center">
                <Link href="/" onClick={() => setIsOverlayOpen(false)} className="inline-block hover:opacity-80 transition-opacity">
                  <h2 className="font-serif text-[40px] md:text-[60px] text-[#080F0F] tracking-tight leading-none">
                    Kaprica
                  </h2>
                </Link>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/booking"
                  onClick={() => setIsOverlayOpen(false)}
                  className="px-6 py-2.5 bg-[#841F27] text-[#FDF0D5] rounded-[40px] hover:opacity-80 transition-opacity font-sans text-[13px] md:text-[14px] tracking-wide"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Main Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 mt-8 md:mt-12 shrink-0">
              {[
                { name: 'Eat at Kaprica', href: '/eat' },
                { name: 'Drink at Kaprica', href: '/drink' },
                { name: 'Parties', href: '/functions' },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOverlayOpen(false)}
                    className="font-serif text-[50px] md:text-[70px] text-[#080F0F] hover:text-[#841F27] transition-colors leading-[1.2]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
                className="mt-6 md:mt-10"
              >
                <Link
                  href="/vouchers"
                  onClick={() => setIsOverlayOpen(false)}
                  className="font-serif text-[50px] md:text-[70px] text-[#080F0F] hover:text-[#841F27] transition-colors leading-[1.2]"
                >
                  Voucher
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center text-center font-serif text-[20px] md:text-[24px] text-[#080F0F] leading-[1.2] mt-8 pb-4 shrink-0"
            >
              <p>4pm-10pm, Mon - Thurs</p>
              <p>Noon - 10pm, Fri - Sun</p>
              <p>50 Grattan Street, Carlton</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
