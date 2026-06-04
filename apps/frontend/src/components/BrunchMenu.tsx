import Section from './Section';
import Image from 'next/image';
import Link from 'next/link';

export default function BrunchMenu() {
  const menuItems = [
    {
      num: '01',
      name: 'Cheese Wheel Pasta',
      desc: 'Freshly tossed fettuccine swirled inside a giant wheel of Grana Padano cheese, served with a touch of truffle oil and fresh cracked pepper.',
      price: '₹ 850',
    },
    {
      num: '02',
      name: 'Live Nacho Station Platter',
      desc: 'House-made crispy tortilla chips loaded with hot cheese sauce, fresh mango salsa, sour cream, guacamole, and jalapeños.',
      price: '₹ 600',
    },
    {
      num: '03',
      name: 'Eggs Benedict with Avocado',
      desc: 'Perfectly poached eggs on toasted English muffins with sliced avocado, smoked salmon, and a rich hollandaise sauce.',
      price: '₹ 700',
    },
    {
      num: '04',
      name: 'Truffle Scrambled Eggs',
      desc: 'Creamy scrambled eggs cooked with fresh cream, shaved black truffle, served on warm sourdough toast.',
      price: '₹ 650',
    },
    {
      num: '05',
      name: 'Live Crepe Station Special',
      desc: 'Sweet crepes made live, filled with fresh seasonal berries, Nutella, whipped cream, or warm caramelized bananas.',
      price: '₹ 500',
    },
  ];

  return (
    <Section id="brunch">
      <div className="site-container pb-0">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          Weekend Ritual
        </div>
      </div>
      <div className="max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch border-[1px] border-brand-red fade-in">
          <div className="relative">
            <div className="img-frame h-full min-h-[500px] md:min-h-[700px] relative group overflow-hidden">
              <Image
                src="/IMG_3928.JPEG"
                alt="Brunch Specials"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="p-12 md:p-16 border-t-[1px] md:border-t-0 md:border-l-[1px] border-brand-red flex flex-col justify-center">
            <div>
              <div className="font-serif text-[clamp(4rem,8vw,7rem)] font-light leading-none text-cream-darker mb-2">
                08
              </div>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] text-ink">
                Brunch
                <br />
                Specials
              </h2>

              <div className="border-l-4 border-brand-red pl-8 my-8">
                <q className="font-serif text-[clamp(1rem,2vw,1.3rem)] italic leading-[1.55] text-ink block">
                  A lively, interactive Sunday afternoon experience filled with good music, shared
                  plates, and a social, unhurried atmosphere.
                </q>
              </div>

              {/* Menu List */}
              <div className="space-y-6 my-10">
                {menuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-brand-red/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-serif text-[1.2rem] font-normal text-ink">{item.name}</h3>
                    </div>
                    <p className="text-[12.5px] leading-[1.65] text-ink-muted font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-brand-red font-sans font-medium border-b border-brand-red pb-1 hover:gap-5 transition-all"
              >
                Book A Sunday Table →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
