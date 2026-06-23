'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function onScroll() {
      const p = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
      if (mediaRef.current) mediaRef.current.style.opacity = String(1 - p);
      if (wordRef.current) {
        wordRef.current.style.transform = `translateY(${-p * 30}vh)`;
        wordRef.current.style.opacity = String(1 - p * 0.7);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-svh overflow-hidden bg-wine" id="top">
      {/* Background image with fade on scroll */}
      <div ref={mediaRef} className="absolute inset-0">
        <Image
          src="/IMG_3929.JPEG"
          alt="Scarlett House"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/[0.72]" />
      </div>

      {/* Bottom-anchored wordmark */}
      <h1
        ref={wordRef}
        className="absolute z-10 font-fraunces text-[clamp(72px,19vw,300px)] leading-[0.78] tracking-[-0.02em] text-cream"
        style={{ left: 'clamp(20px, 5vw, 64px)', bottom: '6vh' }}
      >
        <span className="block overflow-hidden">
          <span
            className="inline-block transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: loaded ? 'translateY(0)' : 'translateY(110%)' }}
          >
            Scarlett
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="inline-block transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-75"
            style={{ transform: loaded ? 'translateY(0)' : 'translateY(110%)' }}
          >
            House
          </span>
        </span>
      </h1>

      {/* Vertical scroll cue */}
      <div
        className="scroll-cue absolute z-10 text-cream text-[11px] tracking-[0.2em] uppercase flex items-center gap-3"
        aria-hidden="true"
        style={{
          right: 'clamp(20px, 5vw, 64px)',
          bottom: '8vh',
          writingMode: 'vertical-rl',
          opacity: loaded ? 0.9 : 0,
          transition: 'opacity 1s ease 0.8s',
        }}
      >
        Scroll
      </div>
    </section>
  );
}
