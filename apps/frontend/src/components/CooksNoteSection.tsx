import Section from './Section';
import Image from 'next/image';

export default function CooksNoteSection() {
  return (
    <Section id="journal">
      <div className="site-container">
        <div className="grid grid-cols-[1fr_2fr] gap-20 items-start fade-in">
          <div>
            <div className="font-serif text-[clamp(6rem,12vw,10rem)] font-light leading-none text-cream-darker mb-[-2rem]">
              05
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
              Editorial
            </div>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] text-ink">
              Weekend
              <br />
              Journal
            </h2>
            <p className="text-[14px] leading-[1.8] text-ink-muted mt-6 font-sans">
              A weekend message from the house. Slow afternoons, live music, and the shared pleasure
              of a long brunch in Juhu and Bandra.
            </p>
          </div>
          <div>
            <div className="bg-cream-darker border-[1px] border-brand-red p-12 relative before:content-['\201C'] before:font-serif before:text-[8rem] before:text-brand-red before:opacity-15 before:absolute before:-top-6 before:left-6 before:leading-none">
              <div className="text-[9px] tracking-[0.25em] uppercase text-brand-red font-sans font-medium mb-4">
                Stories from the House — Summer 2025
              </div>
              <p className="font-serif text-[clamp(1rem,2vw,1.4rem)] italic font-normal leading-[1.55] text-ink">
                Step into the weekend with Scarlett House&apos;s brunch. As you walk in, you&apos;re
                welcomed with a refreshing electrolyte drink, something light to ease you into the
                afternoon. For the first time, we introduce a live singer, setting the tone with
                easy, feel-good music that flows through the space. Make your way to the live
                counters, where the nacho bar and cheese wheel pasta station are already in motion,
                made fresh and just the way you like them. Good food, good music, and a setting that
                lets you ease into the weekend.
              </p>
              <div className="mt-6 font-serif text-[1.3rem] italic text-brand-red">— The House</div>
            </div>
            <div className="mt-8">
              <div className="img-frame aspect-video bg-cream-dark relative overflow-hidden group">
                <Image
                  src="/IMG_3927.JPEG"
                  alt="Bandra Brunch preparations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-3 text-[10.5px] italic font-serif text-ink-faint leading-[1.5]">
                <strong className="not-italic font-medium text-ink-muted mr-1">Midday.</strong>{' '}
                Courtyard brunch preparations at the Bandra bungalow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
