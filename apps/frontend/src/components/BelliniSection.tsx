import Section from './Section';
import Image from 'next/image';

export default function BelliniSection() {
  return (
    <Section id="cocktails">
      <div className="site-container">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          Cocktails
        </div>
        <div className="grid grid-cols-2 gap-0 border-[1px] border-brand-red fade-in min-h-[480px]">
          <div className="p-16 border-r-[1px] border-brand-red flex flex-col justify-between">
            <div>
              <div className="font-serif text-[clamp(4rem,8vw,7rem)] font-light leading-none text-cream-darker mb-2">
                04
              </div>
              <div className="inline-block bg-brand-red text-cream text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-sans mb-6">
                Signature Cocktails
              </div>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] text-ink mb-2">
                Behind
                <br />
                the Bar
              </h2>
              <div className="font-serif text-[1rem] text-ink-faint tracking-[0.05em] mb-10">
                Inspiration Cocktail · Tequila & Seasonal Mango Infusions
              </div>
              <p className="text-[14px] leading-[1.8] text-ink-muted font-sans">
                Our bar highlights clean, well-balanced creations like our signature Inspiration
                Cocktail (tequila-based) and seasonal mango specials made for slow, easy sipping
                during long, unhurried afternoons.
              </p>
            </div>
            <div>
              <hr className="w-8 border-none border-t-[1.5px] border-brand-red my-4" />
              <p className="text-[12px] leading-[1.8] text-ink-muted font-sans">
                Come for the drinks. Stay for the vibe. A setting made to ease you into the weekend.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="img-frame h-full min-h-[420px] bg-cream-dark relative overflow-hidden group">
              <Image
                src="/IMG_3930.JPEG"
                alt="Signature Cocktails"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
