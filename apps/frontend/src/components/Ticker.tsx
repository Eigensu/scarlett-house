export default function Ticker() {
  const items = [
    'Bandra & Juhu — Mumbai',
    'Weekend Brunches — SUN 12:00 PM onwards',
    'Mango Special French Toast — Now Serving',
    'A Home Away From Home',
    'Reserve: hello@scarletthouse.in',
  ];

  return (
    <div className="ticker overflow-hidden border-y-[1px] border-brand-red bg-brand-red py-2 whitespace-nowrap mt-12">
      <div className="ticker-inner inline-flex gap-12 animate-ticker">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-12">
            <span className="text-[10px] tracking-[0.2em] uppercase text-cream font-sans">
              {item}
            </span>
            <span className="text-cream/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
