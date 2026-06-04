import Image from 'next/image';

export default function HeroGrid() {
  return (
    <div className="hero-grid grid grid-cols-1 md:grid-cols-[1fr_2.2fr_1fr] gap-0 max-w-site mx-auto px-[clamp(1.5rem,4vw,3.5rem)]">
      {/* Left Column */}
      <div className="hero-left pr-0 pt-6 pb-6 border-b-[1px] border-r-0 md:pr-8 md:pb-0 md:border-r-[1px] md:border-b-0 border-brand-red fade-in">
        <div className="text-[9px] tracking-[0.2em] uppercase text-brand-red mb-4 font-sans font-medium">
          Featured Experience
        </div>
        <div className="font-serif text-[clamp(1rem,2.2vw,1.5rem)] italic leading-[1.4] text-ink mb-6">
          &ldquo;At Scarlett House, we reimagine dining as an experience that feels warm, familiar,
          and deeply personal.&rdquo;
        </div>
        <hr className="w-8 border-none border-t-[1.5px] border-brand-red my-4" />
        <p className="text-[12px] leading-[1.7] text-ink-muted">
          Step into a space built around the idea of nostalgia, comfort, and connection. Every
          corner of the house has a story to tell, from Juhu to Bandra.
        </p>
        <hr className="w-8 border-none border-t-[1.5px] border-brand-red my-4" />
        <div className="img-frame aspect-[3/4] mt-6 relative group overflow-hidden">
          <Image
            src="/IMG_3925.JPEG"
            alt="Bandra Bungalow Living Room"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <p className="mt-3 text-[10px] tracking-[0.1em] uppercase text-ink-faint font-sans">
          <span className="text-brand-red">Above —</span> The Bandra Bungalow Living Room.
        </p>
      </div>

      {/* Center Column */}
      <div className="hero-center px-0 py-6 md:px-8 md:py-0 border-b-[1px] md:border-b-0 border-brand-red fade-in transition-delay-100">
        <div className="img-frame aspect-[4/5] relative group overflow-hidden">
          <Image
            src="/IMG_3926.JPEG"
            alt="Mango Special French Toast"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <p className="mt-3 text-[10px] tracking-[0.1em] uppercase text-ink-faint font-sans">
          <span className="text-brand-red">Featured —</span> Our Mango Special French Toast.
          Photography by Studio Rosso.
        </p>
      </div>

      {/* Right Column */}
      <div className="hero-right pl-0 pt-6 md:pl-8 md:border-l-[1px] border-brand-red fade-in transition-delay-200">
        <div className="text-[9px] tracking-[0.2em] uppercase text-brand-red mb-4 font-sans font-medium">
          This Week
        </div>
        <h2 className="font-serif text-[clamp(1.2rem,3vw,2.2rem)] font-light leading-[1.15] text-ink mb-4">
          Weekend
          <br />
          Brunches are
          <br />
          <em className="italic">finally here</em>
        </h2>
        <p className="text-[13.5px] leading-[1.75] text-ink-muted font-sans relative before:content-['T'] before:font-serif before:text-[4.5em] before:font-semibold before:leading-[0.7] before:float-left before:mr-[0.1em] before:mt-[0.05em] before:text-brand-red">
          he kind of place that feels effortlessly polished without ever becoming formal, with
          seasonal plates, a lively crowd, and a warm neighborhood energy that keeps the afternoon
          going.
        </p>
        <hr className="w-8 border-none border-t-[1.5px] border-brand-red my-4" />
        <div className="img-frame aspect-[3/4] mt-6 relative group overflow-hidden">
          <Image
            src="/IMG_3927.JPEG"
            alt="Glass House"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <p className="mt-3 text-[10px] tracking-[0.1em] uppercase text-ink-faint font-sans">
          <span className="text-brand-red">This week —</span> Fresh mango preparations in the Glass
          House.
        </p>
      </div>
    </div>
  );
}
