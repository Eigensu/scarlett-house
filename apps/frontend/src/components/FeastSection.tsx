import Image from 'next/image';

export default function FeastSection() {
  return (
    <section
      className="relative min-h-svh grid place-items-center overflow-hidden"
      id="book"
      style={{ padding: 'clamp(80px,14vh,160px) clamp(20px,5vw,64px)' }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0" style={{ zIndex: -2 }}>
        <Image
          src="/IMG_3928.JPEG"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(15,8,6,.55), rgba(15,8,6,.8))',
          }}
        />
      </div>

      {/* Chromatic ghost wordmark */}
      <h2
        className="absolute font-fraunces text-[clamp(54px,11vw,150px)] tracking-[-0.02em] pointer-events-none select-none"
        aria-hidden="true"
        style={{
          zIndex: -1,
          left: '50%',
          top: '6%',
          transform: 'translateX(-50%)',
          color: 'rgba(243,236,218,.16)',
          textShadow:
            '-0.05em 0 rgba(180,40,40,.5), 0.05em 0 rgba(40,110,170,.5)',
          whiteSpace: 'nowrap',
        }}
      >
        Scarlett House
      </h2>

      {/* Narrative copy */}
      <div className="relative max-w-[720px] text-center text-cream">
        <p
          className="font-sans text-[clamp(15px,1.65vw,21px)] leading-[1.6] mb-[22px] fade-in"
          style={{ textShadow: '0 1px 18px rgba(0,0,0,.6)' }}
        >
          Scarlett House is a nod to the small family kitchens that line the
          back roads — where the menu is short, the welcome is long, and nobody
          is in a hurry. Good food, better company, and a quiet faith that only
          the right things are worth fussing over.
        </p>
        <p
          className="font-sans text-[clamp(15px,1.65vw,21px)] leading-[1.6] mb-[22px] fade-in"
          style={{ textShadow: '0 1px 18px rgba(0,0,0,.6)' }}
        >
          Pull up a chair. Begin with &ldquo;ciao&rdquo; and end with
          &ldquo;saluti.&rdquo; Every plate arrives to the hum of a slow sauce,
          a busy pass, and glasses raised a little too often. Some things,
          happily, never change. Your seat is waiting &mdash; we&rsquo;ll see
          you soon.
        </p>
        <p className="font-fraunces italic text-2xl opacity-90 fade-in">
          &mdash;&nbsp;The Scarlett House family
        </p>
      </div>
    </section>
  );
}
