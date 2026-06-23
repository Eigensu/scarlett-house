'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        padding: '18px clamp(20px, 5vw, 64px)',
        mixBlendMode: 'difference',
        color: '#fff',
      }}
    >
      <Link
        href="#panel"
        className="font-sans text-[12px] tracking-[0.18em] uppercase"
      >
        Menu
      </Link>
      <Link
        href="#book"
        className="font-sans text-[12px] tracking-[0.18em] uppercase border border-current rounded-full"
        style={{ padding: '8px 16px' }}
      >
        Book Now
      </Link>
    </nav>
  );
}
