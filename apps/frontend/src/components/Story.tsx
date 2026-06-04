import Section from './Section';
import Image from 'next/image';

export default function Story() {
  return (
    <Section id="story" className="py-0">
      <div className="site-container py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div className="fade-in">
            <p className="text-[9px] tracking-[0.3em] uppercase text-brand-red mb-6 font-sans font-medium">
              Scarlett House
            </p>
            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light text-ink leading-[0.92] mb-8">
              Our Story
            </h2>
            <blockquote className="font-serif text-[clamp(1.1rem,1.8vw,1.4rem)] italic text-ink leading-[1.5] font-light">
              &ldquo;Scarlett House is a hospitality concept built around nostalgia, comfort, and
              connection.&rdquo;
            </blockquote>
            <cite className="block mt-5 text-[10px] tracking-[0.2em] uppercase text-ink-faint not-italic font-sans">
              — Malaika, Dhaval, Malaya &amp; Arhaan
            </cite>
            <div className="w-8 border-t border-brand-red/30 my-8" />
            <p className="text-[14px] leading-[1.85] text-ink-muted font-sans max-w-md">
              A restaurant born from a simple conviction: that hospitality — treated with honesty and
              without ceremony — becomes one of the great pleasures of the world.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden fade-in">
            <Image
              src="/IMG_3925.JPEG"
              alt="The Bandra Bungalow"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
