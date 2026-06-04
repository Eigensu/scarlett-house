import Section from './Section';
import Image from 'next/image';

export default function Story() {
  return (
    <Section id="story">
      <div className="site-container">
        <div className="grid grid-cols-[1fr_2fr] gap-20 items-start">
          <div className="fade-in">
            <div className="font-serif text-[clamp(6rem,12vw,10rem)] font-light leading-none text-cream-darker -tracking-[0.02em] mb-[-2rem]">
              01
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
              Scarlett House
            </div>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] text-ink -tracking-[0.01em]">
              Our
              <br />
              Story
            </h2>
            <div className="border-l-4 border-brand-red pl-8 my-10">
              <q className="font-serif text-[clamp(1.3rem,3vw,2rem)] italic leading-[1.35] text-ink block">
                Scarlett House is a hospitality concept built around nostalgia, comfort, and
                connection.
              </q>
              <cite className="block mt-3 text-[10px] tracking-[0.15em] uppercase text-ink-faint not-italic font-sans">
                — Malaika, Dhaval, Malaya & Arhaan
              </cite>
            </div>
          </div>
          <div className="fade-in transition-delay-150">
            <div className="img-frame aspect-video mb-6 relative group overflow-hidden bg-cream-dark">
              <Image
                src="/IMG_3930.JPEG"
                alt="Kitchen team at service"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-[10.5px] italic font-serif text-ink-faint leading-[1.5] mb-6">
              <strong className="not-italic font-medium text-ink-muted mr-1">Above.</strong> The
              founding team and the home that inspired the vision.
            </p>
            <p className="text-[14px] leading-[1.8] text-ink-muted mt-6 font-sans">
              Built around the idea of nostalgia, comfort, and connection, Scarlett House reimagines
              dining as an experience that feels warm, familiar, and deeply personal. It is a home
              away from home—where every meal is accompanied by a story, every space sparks a
              memory, and every visit leaves guests wanting to return.
            </p>
            <p className="text-[14px] leading-[1.8] text-ink-muted mt-6 font-sans">
              The restaurant was born from a very simple conviction: that hospitality — when treated
              with honesty and without ceremony — becomes one of the great pleasures of the world.
              That conviction still governs everything we do.
            </p>
            <div className="flex items-center gap-4 my-8 before:content-[''] before:flex-1 before:h-[1px] before:bg-brand-red before:opacity-35 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-35">
              <span className="font-serif text-[1rem] text-brand-red/60 tracking-[0.15em]">✦</span>
            </div>
            <p className="font-serif text-[16px] leading-[1.7] font-normal text-ink-muted">
              What you find on these tables is not performance. It is the accumulation of a thousand
              small decisions — about sourcing, timing, balance — made daily by people who remain,
              after all these years, genuinely interested in feeding you well.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
