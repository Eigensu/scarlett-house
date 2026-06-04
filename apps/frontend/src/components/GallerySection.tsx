import Section from './Section';
import Image from 'next/image';

const cells = [
  { src: '/IMG_3929.JPEG', alt: 'Bandra Bungalow', label: 'Bandra Bungalow', rowSpan: true },
  { src: '/IMG_3925.JPEG', alt: 'The Attic', label: 'The Attic' },
  { src: '/IMG_3926.JPEG', alt: 'The Red Room', label: 'The Red Room' },
  { src: '/IMG_3927.JPEG', alt: 'Glass House', label: 'Glass House' },
  { src: '/IMG_3930.JPEG', alt: 'Juhu Terrace', label: 'Juhu Terrace' },
];

export default function GallerySection() {
  return (
    <Section id="spaces" className="py-0 pb-0">
      {/* Label */}
      <div className="site-container pt-6 pb-6">
        <p className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium">
          The Spaces
        </p>
      </div>

      {/* Image grid */}
      <div className="max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-2 gap-[2px] fade-in">
          {cells.map((cell) => (
            <div
              key={cell.src}
              className={`relative group overflow-hidden bg-cream-dark ${
                cell.rowSpan
                  ? 'min-h-[300px] md:row-span-2 md:min-h-[540px]'
                  : 'aspect-[4/3] md:aspect-auto'
              }`}
            >
              <Image
                src={cell.src}
                alt={cell.alt}
                fill
                className="object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/20 md:bg-ink/0 md:group-hover:bg-ink/45 transition-colors duration-500 flex items-end p-7 md:p-8">
                <span className="font-serif text-[1.5rem] md:text-[1.6rem] text-cream font-light opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-500">
                  {cell.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
