import Section from './Section';
import Image from 'next/image';

export default function MangoMenu() {
  const menuItems = [
    {
      num: '01',
      name: 'Mango Special French Toast',
      desc: 'Classic brioche soaked in rich custard, pan-fried to golden perfection, topped with fresh alphonso mango slices and vanilla mascarpone cream.',
      price: '₹ 550',
      image: '/IMG_3925.JPEG',
    },
    {
      num: '02',
      name: 'Mango & Basil Burrata',
      desc: 'Creamy burrata cheese served with fresh alphonso mango slices, fresh garden basil, extra virgin olive oil, and aged balsamic glaze.',
      price: '₹ 650',
      image: '/IMG_3926.JPEG',
    },
    {
      num: '03',
      name: 'Mango Mint Cooler',
      desc: 'A refreshing summer drink featuring fresh alphonso mango pulp, fresh mint leaves, lime juice, and soda.',
      price: '₹ 350',
      image: '/IMG_3930.JPEG',
    },
    {
      num: '04',
      name: 'Alphonso Mango Cheesecake',
      desc: 'Smooth, velvety baked cheesecake topped with a glossy alphonso mango gelée and fresh mango cubes.',
      price: '₹ 500',
      image: '/IMG_3927.JPEG',
    },
    {
      num: '05',
      name: 'Mango Glazed Salmon',
      desc: 'Seared salmon fillet with a sweet and spicy alphonso mango glaze, served on a bed of fresh summer greens.',
      price: '₹ 1,350',
      image: '/IMG_3929.JPEG',
    },
  ];

  return (
    <Section id="mango">
      <div className="site-container">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          Summer Specials
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center mb-16">
          <div className="fade-in">
            <div className="font-serif text-[clamp(6rem,12vw,10rem)] font-light leading-none text-cream-darker -tracking-[0.02em] mb-[-2rem]">
              07
            </div>
            <h2 className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] text-ink">
              Mango
              <br />
              Menu
            </h2>
          </div>
          <div className="flex flex-col gap-6 fade-in transition-delay-150">
            <p className="font-serif text-[18px] md:text-[20px] leading-[1.65] font-normal text-ink-muted">
              Celebrate the season with our curated Mango Menu. Fresh Alphonso mangoes, handpicked
              at their peak of ripeness, are featured across a series of signature plates,
              house-infused cocktails, and delicate desserts crafted for the ultimate summer flavor.
            </p>
            <p className="font-serif text-[18px] md:text-[20px] leading-[1.65] font-normal text-ink-muted">
              Naturally sweet, vibrant, and light. We invite you to enjoy these limited-edition
              plates under the cooling shade of our Bandra bungalow or within the sun-drenched Juhu
              Glass House, capturing the very essence of warm Mumbai afternoons.
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="site-container py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-[1px] border-brand-red">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-10 border-brand-red border-b-[1px] md:border-b-0 ${idx !== menuItems.length - 1 && (idx + 1) % 3 !== 0 ? 'md:border-r-[1px]' : ''} ${idx === 3 ? 'md:border-r-[1px]' : ''} fade-in`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="img-frame aspect-[4/3] mb-5 bg-cream-dark relative overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="font-serif text-[clamp(1.2rem,2.5vw,1.8rem)] font-normal leading-[1.15] text-ink mb-3">
                {item.name}
              </div>
              <div className="text-[12px] text-ink-muted leading-[1.65] mb-2">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
