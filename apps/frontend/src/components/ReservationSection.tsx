import Section from './Section';
import Image from 'next/image';
import Link from 'next/link';

export default function ReservationSection() {
  return (
    <Section id="reserve" className="pt-8">
      {/* Full-bleed CTA image */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden fade-in">
        <div className="img-frame aspect-[4/3] md:aspect-[16/8]">
          <Image
            src="/IMG_3929.JPEG"
            alt="Reserve a table at Scarlett House"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="site-container pb-14 md:pb-20">
              <p className="text-[9px] tracking-[0.3em] uppercase text-cream/55 mb-4 font-sans font-medium">
                Reserve
              </p>
              <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light text-cream leading-[0.92]">
                Book Your Table
              </h2>
              <p className="font-serif text-[1rem] italic text-cream/65 mt-4">
                hello@scarletthouse.in
              </p>
              <Link
                href="mailto:hello@scarletthouse.in"
                className="inline-flex items-center gap-3 mt-9 text-[10px] tracking-[0.2em] uppercase text-cream font-sans font-medium border-b border-cream/60 pb-1 hover:gap-5 transition-all"
              >
                Reserve a Table →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Merged footer — brand + contact + copyright */}
      <div className="bg-brand-red-dark">
        <div className="site-container py-10 md:py-12">
          {/* Brand + info grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-12 mb-10">
            <div>
              <div className="font-serif text-[2.5rem] font-light tracking-[0.12em] leading-none text-cream mb-4">
                Scarlett House
              </div>
              <div className="font-serif text-[1.05rem] italic text-cream/70 leading-[1.6]">
                A Home Away From Home.
                <br />
                Bandra &amp; Juhu, Mumbai.
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/50 font-sans font-semibold mb-3">
                  Opening Hours
                </p>
                <p className="font-serif text-[15px] text-cream/75 leading-[1.6]">
                  Juhu: Mon – Sun
                  <br />
                  12:00 PM – 01:30 AM
                  <br />
                  Bandra: Sun Brunch
                  <br />
                  12:00 PM – 04:00 PM
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/50 font-sans font-semibold mb-3">
                  Bandra
                </p>
                <p className="font-serif text-[15px] text-cream/75 leading-[1.6]">
                  Bandra Bungalow
                  <br />
                  Mumbai, India
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/50 font-sans font-semibold mb-3">
                  Juhu
                </p>
                <p className="font-serif text-[15px] text-cream/75 leading-[1.6]">
                  Juhu Glass House
                  <br />
                  Mumbai, India
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/50 font-sans font-semibold mb-3">
                  Contact
                </p>
                <p className="font-serif text-[15px] text-cream/75 leading-[1.6]">
                  +91 99999 99999
                  <br />
                  <Link
                    href="mailto:hello@scarletthouse.in"
                    className="hover:text-white transition-colors"
                  >
                    hello@scarletthouse.in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[12px] tracking-[0.12em] text-cream/50 uppercase font-sans">
              © 2025 Scarlett House — All Rights Reserved
            </div>
            <div className="text-[12px] tracking-[0.12em] text-cream/50 uppercase font-sans">
              Powered by Eigensu
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
