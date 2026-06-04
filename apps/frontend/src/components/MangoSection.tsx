import Section from './Section';
import Image from 'next/image';

const images = [
  { src: '/IMG_3925.JPEG', alt: 'Mango Plates' },
  { src: '/IMG_3926.JPEG', alt: 'Mango Cocktails' },
  { src: '/IMG_3929.JPEG', alt: 'Mango Desserts' },
  { src: '/IMG_3930.JPEG', alt: 'Mango Season' },
];

export default function MangoSection() {
  return (
    <Section id="mango" className="py-0">
      {/* Header */}
      <div className="site-container pt-10 pb-6 md:pt-14 md:pb-8 fade-in">
        <p className="text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4 font-sans font-medium">
          Summer Specials
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-ink leading-[0.92]">
            Mango Season
          </h2>
          <p className="font-serif text-[1rem] italic text-ink-faint md:pb-1">
            Fresh Alphonso · Handpicked at Peak Ripeness
          </p>
        </div>
      </div>

      {/* 4-image horizontal strip */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 fade-in">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Body text */}
      <div className="site-container pt-5 pb-10 md:pb-14 fade-in">
        <p className="font-sans text-[13px] text-ink-muted leading-[1.8] max-w-lg">
          Mangoes across signature plates, house-infused cocktails, and delicate desserts crafted
          for the ultimate summer flavour.
        </p>
      </div>
    </Section>
  );
}
