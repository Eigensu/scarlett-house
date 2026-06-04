import Section from './Section';
import Image from 'next/image';

export default function ValentinesMenu() {
  const menuItems = [
    {
      num: '01',
      name: 'Beet Carpaccio with Chevre Mousse',
      desc: 'Braised Beets, Toasted Pecan Nut, Creamy Goat Cheese, Fresh Roquee Leaves.',
      price: '₹ 750',
      image: '/IMG_3926.JPEG',
    },
    {
      num: '02',
      name: 'Scarlett Baked Camembert',
      desc: 'Warm Camembert Cheese, Confit Garlic, Granny Smith Salad, Gluten-Free Crackers.',
      price: '₹ 850',
      image: '/IMG_3925.JPEG',
    },
    {
      num: '03',
      name: 'Beetroot Risotto',
      desc: 'Creamy Arborio Rice, Roasted Beet Puree, Chlorophyll Oil, Stracciatella Cheese.',
      price: '₹ 900',
      image: '/IMG_3927.JPEG',
    },
    {
      num: '04',
      name: 'Linguine Meatball',
      desc: 'Linguine Pasta, Tender Chicken Meatballs, Rich Marinara Sauce, Grated Parmesan Cheese.',
      price: '₹ 950',
      image: '/IMG_3928.JPEG',
    },
    {
      num: '05',
      name: 'Pan Seared Salmon',
      desc: "Pan-Seared Salmon Fillet from our Valentine's Special Menu, served with light seasonal greens.",
      price: '₹ 1,450',
      image: '/IMG_3929.JPEG',
    },
  ];

  return (
    <Section id="valentines">
      <div className="site-container">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          Valentine&apos;s Day
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center mb-16">
          <div className="fade-in">
            <div className="font-serif text-[clamp(6rem,12vw,10rem)] font-light leading-none text-cream-darker -tracking-[0.02em] mb-[-2rem]">
              06
            </div>
            <h2 className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] text-ink">
              Valentine&apos;s
              <br />
              Menu
            </h2>
          </div>
          <div className="flex flex-col gap-6 fade-in transition-delay-150">
            <p className="font-serif text-[18px] md:text-[20px] leading-[1.65] font-normal text-ink-muted">
              Curated for intimacy and celebration. A selection of refined plates designed to be
              shared under the soft lights of the Bandra bungalow or within the sun-kissed Juhu
              Glass House, making for a truly memorable evening.
            </p>
            <p className="font-serif text-[18px] md:text-[20px] leading-[1.65] font-normal text-ink-muted">
              Sophisticated flavors, rich textures, and comfort on every plate. Each dish is
              carefully crafted to elevate your dining experience and create lasting moments of
              connection.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-2 gap-[1.5px] border-[1px] border-cream bg-cream fade-in">
          {/* Item 1 - Featured row-span-2 */}
          <div className="relative row-span-2 min-h-[500px] md:min-h-[640px] group overflow-hidden bg-cream-dark">
            <Image
              src={menuItems[0].image}
              alt={menuItems[0].name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent p-12 flex flex-col justify-end text-cream">
              <h3 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-light leading-[1.2] mb-3">
                {menuItems[0].name}
              </h3>
              <p className="text-[13px] text-cream/70 leading-[1.6] mb-4 font-sans max-w-md">
                {menuItems[0].desc}
              </p>
            </div>
          </div>

          {/* Item 2 to 5 */}
          {menuItems.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] md:aspect-auto group overflow-hidden bg-cream-dark"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-8 flex flex-col justify-end text-cream">
                <h3 className="font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] font-normal leading-[1.2] mb-2">
                  {item.name}
                </h3>
                <p className="text-[12px] text-cream/60 leading-[1.5] mb-3 font-sans line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
