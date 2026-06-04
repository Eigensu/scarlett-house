import Section from './Section';
import Image from 'next/image';

export default function CooksNoteSection() {
  return (
    <Section id="journal" className="py-8">
      <div className="w-screen relative left-1/2 -translate-x-1/2 fade-in">
        <div className="grid md:grid-cols-[55fr_45fr]">
          {/* Image — left */}
          <div className="relative min-h-[380px] md:min-h-[600px] overflow-hidden">
            <Image
              src="/IMG_3927.JPEG"
              alt="Weekend Journal"
              fill
              className="object-cover"
            />
          </div>

          {/* Text panel — right */}
          <div className="bg-cream flex items-center">
            <div className="px-10 py-10 md:px-14 md:py-14">
              <p className="text-[9px] tracking-[0.25em] uppercase text-brand-red mb-6 font-sans font-medium">
                Stories from the House — Summer 2025
              </p>
              <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] font-light text-ink leading-[0.95] mb-7">
                Weekend Journal
              </h2>
              <p className="font-serif text-[clamp(1rem,1.4vw,1.2rem)] italic text-ink leading-[1.65] font-light">
                Step into the weekend with Scarlett House&apos;s brunch. A refreshing electrolyte
                drink to ease you into the afternoon, a live singer setting the tone with easy
                feel-good music, and live counters — the nacho bar and cheese wheel pasta station —
                made fresh and just the way you like them.
              </p>
              <p className="font-serif text-[1rem] italic text-brand-red mt-7">— The House</p>
              <p className="mt-5 text-[10.5px] italic font-serif text-ink-faint leading-[1.5]">
                <strong className="not-italic font-medium text-ink-muted mr-1">Midday.</strong>
                Courtyard brunch preparations at the Bandra bungalow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
