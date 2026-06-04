import Image from 'next/image';
import Link from 'next/link';
import Section from './Section';

interface MenuCTAProps {
  id: string;
  label: string;
  title: string;
  sub: string;
  body: string;
  cta: string;
  image: string;
  ctaHref?: string;
}

export default function MenuCTA({
  id,
  label,
  title,
  sub,
  body,
  cta,
  image,
  ctaHref,
}: MenuCTAProps) {
  return (
    <Section id={id} className="py-8">
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden fade-in">
        <div className="img-frame aspect-[4/3] md:aspect-[21/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />

          {/* Text overlay — bottom left */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="site-container pb-12 md:pb-20">
              <p className="text-[9px] tracking-[0.3em] uppercase text-cream/55 mb-4 font-sans font-medium">
                {label}
              </p>
              <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light text-cream leading-[0.92]">
                {title}
              </h2>
              <p className="font-serif text-[clamp(0.9rem,1.2vw,1.1rem)] italic text-cream/65 mt-4">
                {sub}
              </p>
              <p className="text-[13px] leading-[1.75] text-cream/60 font-sans mt-5 max-w-lg">
                {body}
              </p>
              {ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-3 mt-8 text-[10px] tracking-[0.2em] uppercase text-cream font-sans font-medium border-b border-cream/60 pb-1 hover:gap-5 transition-all"
                >
                  {cta}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
