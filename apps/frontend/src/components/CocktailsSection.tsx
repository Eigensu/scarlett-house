import Section from './Section';
import Image from 'next/image';

const drinks = [
  { name: 'Scarlett Sour', desc: 'Aged rum · passion fruit · lime · house bitters' },
  { name: 'Mango Old Fashioned', desc: 'Bourbon · Alphonso mango shrub · smoked demerara' },
  { name: 'Bandra Negroni', desc: 'Gin · Campari · cardamom vermouth · orange oil' },
  { name: 'The Rooftop', desc: 'Tequila · seasonal fruit · cucumber · chilli salt' },
];

export default function CocktailsSection() {
  return (
    <Section id="cocktails" className="py-8">
      <div className="w-screen relative left-1/2 -translate-x-1/2 fade-in">
        <div className="grid md:grid-cols-2">
          {/* Image — left */}
          <div className="relative min-h-[380px] md:min-h-[620px] overflow-hidden">
            <Image
              src="/IMG_3930.JPEG"
              alt="Behind the Bar"
              fill
              className="object-cover"
            />
          </div>

          {/* Menu panel — right */}
          <div className="bg-ink flex items-center">
            <div className="px-10 py-10 md:px-14 md:py-14 w-full">
              <p className="text-[9px] tracking-[0.3em] uppercase text-cream/40 mb-6 font-sans font-medium">
                Cocktails
              </p>
              <h2 className="font-serif text-[clamp(2.5rem,3.5vw,3.5rem)] font-light text-cream leading-[0.92] mb-3">
                Behind the Bar
              </h2>
              <p className="font-serif text-[1rem] italic text-cream/50 mb-12">
                Tequila &amp; Seasonal Mango Infusions
              </p>

              <div>
                {drinks.map((d, i) => (
                  <div key={i} className="border-t border-cream/10 py-5">
                    <p className="font-serif text-[1.1rem] text-cream font-light">{d.name}</p>
                    <p className="font-sans text-[11px] text-cream/40 mt-1 tracking-[0.04em]">
                      {d.desc}
                    </p>
                  </div>
                ))}
                <div className="border-t border-cream/10" />
              </div>

              <p className="text-[10px] tracking-[0.12em] text-cream/25 font-sans mt-10 uppercase leading-[1.7]">
                Clean, well-balanced creations made for slow, easy sipping during long, unhurried
                afternoons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
