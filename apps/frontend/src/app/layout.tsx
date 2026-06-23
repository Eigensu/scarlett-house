import type { Metadata } from 'next';
import { Fraunces, Cormorant_Garamond, Cormorant, DM_Sans } from 'next/font/google';
import './globals.css';
import ScrollObserver from '@/components/ScrollObserver';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant({
  variable: '--font-serif-alt',
  subsets: ['latin'],
  weight: ['300', '400'],
});

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Scarlett House',
  description: 'The last table on the road — the one set for everyone.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorantGaramond.variable} ${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
