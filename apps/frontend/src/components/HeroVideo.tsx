import Image from 'next/image';

export default function HeroVideo() {
  return (
    <section className="relative w-screen h-screen overflow-hidden left-1/2 -translate-x-1/2">
      {/* Static image placeholder — swap the <div> for a <video> element when hero-video.mp4 is added to /public */}
      <Image
        src="/IMG_3929.JPEG"
        alt="Scarlett House"
        fill
        priority
        className="object-cover"
      />

      {/* Bottom-up gradient so title reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/35 to-ink/10 z-10" />

      {/* Top-left: location + est */}
      <div className="absolute top-8 left-[clamp(1.5rem,4vw,3.5rem)] z-20">
        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60 font-sans leading-none">
          Bandra / Juhu — Mumbai
        </p>
        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60 font-sans leading-none mt-2">
          Est. MMXII
        </p>
      </div>

      {/* Top-right: edition */}
      <div className="absolute top-8 right-[clamp(1.5rem,4vw,3.5rem)] z-20 text-right">
        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60 font-sans leading-none">
          Summer Edition 2025
        </p>
      </div>

      {/* Center: main title block */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-[clamp(1.5rem,4vw,3.5rem)]">
        <p className="text-[9px] tracking-[0.35em] uppercase text-cream/55 mb-5 font-sans font-medium">
          A Home Away From Home
        </p>
        <h1 className="font-serif-alt text-[clamp(4.5rem,12vw,10rem)] font-light italic leading-[0.92] text-cream">
          Scarlett
          <br />
          House
        </h1>
        <div className="w-12 border-t-[1.5px] border-brand-red mt-8 mb-7" />
        <p className="font-serif text-[clamp(1rem,1.8vw,1.35rem)] italic text-cream/70 font-light">
          Weekend Brunches are <em>finally here</em>
        </p>
      </div>

    </section>
  );
}
