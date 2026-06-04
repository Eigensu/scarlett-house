import Section from './Section';
import Image from 'next/image';
import Link from 'next/link';

export default function ChefSection() {
  return (
    <Section className="pb-0">
      <div className="site-container pb-0">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          Founder&apos;s Note
        </div>
      </div>
      <div className="max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
        <div className="grid grid-cols-2 gap-0 items-stretch border-[1px] border-brand-red fade-in">
          <div className="relative">
            <div className="img-frame h-full min-h-[520px] relative group overflow-hidden">
              <Image
                src="/IMG_3928.JPEG"
                alt="Malaika Arora"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="p-16 border-l-[1px] border-brand-red flex flex-col justify-center">
            <div>
              <div className="font-serif text-[clamp(4rem,8vw,7rem)] font-light leading-none text-cream-darker mb-2">
                03
              </div>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] text-ink">
                Note from
                <br />
                the Founder
              </h2>
              <div className="border-l-4 border-brand-red pl-8 my-8">
                <q className="font-serif text-[clamp(1rem,2vw,1.4rem)] italic leading-[1.55] text-ink block">
                  Scarlett House is born out of a desire to create a sanctuary where nostalgia meets
                  modern comfort — a home away from home.
                </q>
                <cite className="block mt-3 text-[10px] tracking-[0.15em] uppercase text-ink-faint not-italic font-sans">
                  — Malaika Arora, Co-Founder
                </cite>
              </div>
              <p className="text-[14px] leading-[1.8] text-ink-muted font-sans">
                When Dhaval, Malaya, Arhaan, and I envisioned Scarlett House, we wanted to build
                more than just a restaurant. We wanted to create spaces that breathe — a leafy glass
                house in Juhu bathed in sunlight, and a cozy 80-year-old bungalow in Bandra filled
                with stories, quiet corners, and soft music.
              </p>
              <p className="text-[14px] leading-[1.8] text-ink-muted mt-6 font-sans">
                Here, the food is simple yet refined, the cocktails are made for slow afternoons,
                and the dining experience brings people closer together. Welcome to our home.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-brand-red font-sans font-medium border-b border-brand-red pb-1 hover:gap-5 transition-all"
              >
                Discover our Spaces →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
