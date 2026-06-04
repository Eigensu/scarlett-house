import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-brand-red-dark py-14 bg-brand-red-dark text-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="font-serif text-[2.5rem] font-light tracking-[0.12em] leading-none text-cream mb-4">
              Scarlett House
            </div>
            <div className="font-serif text-[1.1rem] italic text-cream/75 leading-[1.6]">
              A Home Away From Home.
              <br />
              Bandra & Juhu, Mumbai.
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[13px] tracking-[0.2em] uppercase text-cream/50 mb-5 font-sans font-semibold">
              Contact
            </div>
            <div className="font-serif text-[17px] text-cream/85 leading-[1.9]">
              Bandra Bungalow & Juhu Glass House
              <br />
              Mumbai, India
              <br />
              +91 99999 99999
              <br />
              <Link
                href="mailto:hello@scarletthouse.in"
                className="hover:text-white transition-colors"
              >
                hello@scarletthouse.in
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[12px] tracking-[0.12em] text-cream/55 uppercase font-sans">
            © 2025 Scarlett House — All Rights Reserved
          </div>
          <div className="text-[12px] tracking-[0.12em] text-cream/55 uppercase font-sans">
            Powered by Eigensu
          </div>
        </div>
      </div>
    </footer>
  );
}
