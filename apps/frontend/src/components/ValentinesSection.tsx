import Section from './Section';
import Image from 'next/image';

export default function ValentinesSection() {
  return (
    <Section id="valentines" className="py-0">
      <div className="site-container py-10 md:py-14">
        {/* Header */}
        <div className="mb-8 md:mb-10 fade-in">
          <p className="text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4 font-sans font-medium">
            Valentine&apos;s Day
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-ink leading-[0.92]">
              Valentine&apos;s Menu
            </h2>
            <p className="font-serif text-[1rem] italic text-ink-faint md:pb-1">
              Curated for intimacy and celebration
            </p>
          </div>
        </div>

        {/* 2-image portrait spread */}
        <div className="grid grid-cols-2 gap-[3px] fade-in">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/IMG_3926.JPEG"
              alt="Valentine's Menu"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/IMG_3928.JPEG"
              alt="Valentine's Evening"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Caption */}
        <div className="mt-7 fade-in">
          <p className="font-sans text-[13px] text-ink-muted leading-[1.8] max-w-xl">
            Refined plates designed to be shared under the soft lights of the Bandra bungalow —
            sophisticated flavours, rich textures, comfort on every plate.
          </p>
        </div>
      </div>
    </Section>
  );
}
