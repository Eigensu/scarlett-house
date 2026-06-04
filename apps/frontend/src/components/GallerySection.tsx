import Section from './Section';
import Image from 'next/image';

export default function GallerySection() {
  return (
    <Section id="spaces" className="pb-0">
      <div className="site-container">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          The Spaces
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center mb-16">
          <div className="fade-in">
            <div className="font-serif text-[clamp(6rem,12vw,10rem)] font-light leading-none text-cream-darker mb-[-2rem]">
              02
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.05] text-ink">
              Explore
              <br />
              Scarlett
              <br />
              <em className="italic">House</em>
            </h2>
          </div>
          <div className="flex flex-col gap-8 fade-in transition-delay-150">
            <div>
              <h3 className="font-serif text-[1.4rem] font-normal text-ink mb-3">
                Scarlett House Bandra
              </h3>
              <p className="font-serif text-[16px] leading-[1.7] font-normal text-ink-muted">
                Housed within a beautifully restored 80-year-old bungalow in Bandra, offering guests
                the feeling of stepping into a home filled with stories and memories. Design
                features like the Attic, the iconic Red Room, and the welcoming downstairs living
                room evoke warmth and familiarity.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[1.4rem] font-normal text-ink mb-3">
                Scarlett House Juhu
              </h3>
              <p className="font-serif text-[16px] leading-[1.7] font-normal text-ink-muted">
                A distinctive Glass House experience, offering a bright and elegant setting
                surrounded by natural light and greenery. Blending contemporary design with the
                signature warmth of the brand to create an environment that feels both sophisticated
                and inviting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] grid-rows-2 gap-[1.5px] fade-in">
          <div className="img-frame row-span-2 min-h-[520px] bg-cream-dark relative">
            <Image
              src="/IMG_3929.JPEG"
              alt="The Space View 1"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="img-frame h-full bg-cream-dark relative">
            <Image
              src="/IMG_3925.JPEG"
              alt="The Space View 2"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="img-frame h-full bg-cream-dark relative">
            <Image
              src="/IMG_3926.JPEG"
              alt="The Space View 3"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="img-frame h-full bg-cream-dark relative">
            <Image
              src="/IMG_3927.JPEG"
              alt="The Space View 4"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="img-frame h-full bg-cream-dark relative">
            <Image
              src="/IMG_3930.JPEG"
              alt="The Space View 5"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
