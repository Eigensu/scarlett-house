import Section from './Section';
import Image from 'next/image';

export default function ShopSection() {
  const products = [
    {
      name: 'Scarlett Olive Oil',
      price: 'Extra Vergine di Oliva — Puglia · € 12.00',
      image: '/IMG_3929.JPEG',
    },
    {
      name: 'Tomato Sauce',
      price: 'San Marzano DOP, hand-crushed · € 8.00',
      image: '/IMG_3927.JPEG',
    },
    {
      name: 'Scarlett Olives',
      price: 'Castelvetrano, marinated · € 8.00',
      image: '/IMG_3926.JPEG',
    },
  ];

  return (
    <Section>
      <div className="site-container">
        <div className="grid grid-cols-[1fr_2fr] gap-20 items-end mb-12">
          <div className="fade-in">
            <div className="font-serif text-[clamp(6rem,12vw,10rem)] font-light leading-none text-cream-darker mb-[-2rem]">
              08
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
              Bottega
            </div>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] text-ink">
              Order
              <br />
              <em className="italic">Online</em>
            </h2>
          </div>
          <div className="fade-in transition-delay-150">
            <p className="font-serif text-[16px] leading-[1.7] font-normal text-ink-muted">
              Shop authentic Italian flavors — olive oils, fresh pasta, sauces and more. Handpicked,
              delivered to your door. Taste Italy at home.
            </p>
            <p className="text-[14px] leading-[1.8] text-ink-muted mt-6 font-sans">
              Everything in the shop is produced by the same suppliers who provision our kitchen.
              Nothing is made for the shop; everything is sourced for the restaurant and made
              available because people kept asking.
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
        <div className="grid grid-cols-3 gap-0 border-[1px] border-brand-red fade-in">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`p-8 ${idx !== products.length - 1 ? 'border-r-[1px] border-brand-red' : ''}`}
            >
              <div className="img-frame aspect-[3/4] bg-cream-dark mb-5 relative overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="font-serif text-[1.1rem] font-normal text-ink mb-1">
                {product.name}
              </div>
              <div className="text-[12px] text-ink-faint tracking-[0.05em] font-sans">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
