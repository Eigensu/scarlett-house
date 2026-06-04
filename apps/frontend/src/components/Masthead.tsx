export default function Masthead() {
  return (
    <div className="masthead pt-10 pb-6 px-[clamp(1.5rem,4vw,3.5rem)] max-w-site mx-auto grid grid-cols-[1fr_auto_1fr] items-end gap-4 font-sans">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-ink-faint leading-none">
          Bandra / Juhu — Mumbai
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-ink-faint leading-none mt-[0.35rem]">
          Est. MMXII
        </div>
      </div>
      <div className="text-center">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red mb-[0.4rem]">
          A Home Away From Home
        </div>
        <h1 className="font-serif text-[clamp(4.5rem,11vw,9.5rem)] font-light tracking-[0.12em] leading-[0.85] uppercase text-ink">
          Scarlett House
        </h1>
      </div>
      <div className="text-right">
        <div className="text-[10px] tracking-[0.18em] uppercase text-ink-faint leading-none">
          Summer Edition 2025
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-ink-faint leading-none mt-[0.35rem]">
          Brunch Series
        </div>
      </div>
    </div>
  );
}
