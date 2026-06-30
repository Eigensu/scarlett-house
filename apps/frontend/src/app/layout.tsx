import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans } from 'next/font/google';
import './globals.css';
import ScrollObserver from '@/components/ScrollObserver';
import Navbar from '@/components/scarlett/Navbar';
import Footer from '@/components/scarlett/Footer';

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
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
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased snap-y snap-mandatory scroll-smooth overflow-y-auto`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollObserver />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
