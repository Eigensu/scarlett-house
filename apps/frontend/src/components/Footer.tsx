import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-brand-red-dark py-16 bg-brand-red-dark text-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-serif text-[2.8rem] font-light tracking-[0.12em] leading-none text-cream mb-4">
              <br />
              Scarlett House
            </div>
            <div className="font-serif text-[1.1rem] italic text-cream/80 leading-[1.5]">
              A Home Away From Home.
              <br />
              Bandra & Juhu, Mumbai.
            </div>
          </div>
          <div>
            <div className="text-[13px] tracking-[0.2em] uppercase text-cream-darker mb-5 font-sans font-semibold">
              Pages
            </div>
            <ul className="list-none grid grid-cols-2 gap-x-8 gap-y-3">
              <li>
                <Link
                  href="#story"
                  className="text-[18px] text-cream/85 hover:text-white transition-colors font-serif italic"
                >
                  Story
                </Link>
              </li>
              <li>
                <Link
                  href="#spaces"
                  className="text-[18px] text-cream/85 hover:text-white transition-colors font-serif italic"
                >
                  Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="#valentines"
                  className="text-[18px] text-cream/85 hover:text-white transition-colors font-serif italic"
                >
                  Plates
                </Link>
              </li>
              <li>
                <Link
                  href="#journal"
                  className="text-[18px] text-cream/85 hover:text-white transition-colors font-serif italic"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="#cocktails"
                  className="text-[18px] text-cream/85 hover:text-white transition-colors font-serif italic"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="#reserve"
                  className="text-[18px] text-cream/85 hover:text-white transition-colors font-serif italic"
                >
                  Reserve
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[13px] tracking-[0.2em] uppercase text-cream-darker mb-5 font-sans font-semibold">
              Contact
            </div>
            <div className="text-[18px] text-cream/90 leading-[1.8] font-serif">
              Bandra Bungalow & Juhu Glass House
              <br />
              Mumbai, India
              <br />
              <br />
              +91 99999 99999
              <br />
              hello@scarletthouse.in
            </div>
          </div>
        </div>
        <div className="border-t border-cream/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[12px] tracking-[0.12em] text-cream/70 uppercase font-sans">
            © 2025 Scarlett House — All Rights Reserved
          </div>
          <div className="text-[12px] tracking-[0.12em] text-cream/70 uppercase font-sans">
            Powered by Eigensu
          </div>
        </div>
      </div>
    </footer>
  );
}
