import Section from './Section';

export default function ReservationSection() {
  return (
    <Section id="reserve" className="py-12 md:py-16">
      <div className="site-container">
        <div className="text-[9px] tracking-[0.3em] uppercase text-brand-red font-sans font-medium mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-brand-red after:opacity-30">
          Reserve
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch border-[1px] border-brand-red fade-in">
          {/* Info Side */}
          <div className="p-8 md:p-12 border-b-[1px] md:border-b-0 md:border-r-[1px] border-brand-red flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3rem)] font-light leading-[1.1] text-ink mb-8">
                Book Your Table
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-brand-red font-sans font-medium mb-1">
                    Opening Hours
                  </div>
                  <div className="font-serif text-[16px] text-ink-muted leading-[1.45]">
                    Juhu: Mon – Sun 12:00 PM – 01:30 AM
                    <br />
                    Bandra: Sun Brunch 12:00 PM – 04:00 PM
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-brand-red font-sans font-medium mb-1">
                    Address
                  </div>
                  <div className="font-serif text-[16px] text-ink-muted leading-[1.45]">
                    Bandra Bungalow & Juhu Glass House
                    <br />
                    Mumbai, India
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-brand-red font-sans font-medium mb-1">
                    Telephone
                  </div>
                  <div className="font-serif text-[16px] text-ink-muted leading-[1.45]">
                    +91 99999 99999
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-brand-red font-sans font-medium mb-1">
                    Email
                  </div>
                  <div className="font-serif text-[16px] text-ink-muted leading-[1.45]">
                    hello@scarletthouse.in
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-cream-light/30">
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="form-field">
                  <label className="block text-[9px] tracking-[0.25em] uppercase text-ink-faint font-sans mb-1">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-transparent border-none border-b border-ink-faint py-2 font-serif text-[17px] text-ink outline-none focus:border-brand-red transition-colors placeholder:text-ink-faint placeholder:opacity-50"
                    type="text"
                    placeholder="Malaika Arora"
                  />
                </div>
                <div className="form-field">
                  <label className="block text-[9px] tracking-[0.25em] uppercase text-ink-faint font-sans mb-1">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-transparent border-none border-b border-ink-faint py-2 font-serif text-[17px] text-ink outline-none focus:border-brand-red transition-colors placeholder:text-ink-faint placeholder:opacity-50"
                    type="email"
                    placeholder="hello@scarletthouse.in"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="form-field">
                  <label className="block text-[9px] tracking-[0.25em] uppercase text-ink-faint font-sans mb-1">
                    Phone
                  </label>
                  <input
                    className="w-full bg-transparent border-none border-b border-ink-faint py-2 font-serif text-[17px] text-ink outline-none focus:border-brand-red transition-colors placeholder:text-ink-faint placeholder:opacity-50"
                    type="tel"
                    placeholder="+91 99999 99999"
                  />
                </div>
                <div className="form-field">
                  <label className="block text-[9px] tracking-[0.25em] uppercase text-ink-faint font-sans mb-1">
                    Guests
                  </label>
                  <input
                    className="w-full bg-transparent border-none border-b border-ink-faint py-2 font-serif text-[17px] text-ink outline-none focus:border-brand-red transition-colors placeholder:text-ink-faint placeholder:opacity-50"
                    type="number"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="form-field">
                  <label className="block text-[9px] tracking-[0.25em] uppercase text-ink-faint font-sans mb-1">
                    Date
                  </label>
                  <input
                    className="w-full bg-transparent border-none border-b border-ink-faint py-2 font-serif text-[17px] text-ink outline-none focus:border-brand-red transition-colors"
                    type="date"
                  />
                </div>
                <div className="form-field">
                  <label className="block text-[9px] tracking-[0.25em] uppercase text-ink-faint font-sans mb-1">
                    Time
                  </label>
                  <input
                    className="w-full bg-transparent border-none border-b border-ink-faint py-2 font-serif text-[17px] text-ink outline-none focus:border-brand-red transition-colors"
                    type="time"
                  />
                </div>
              </div>

              <button className="inline-flex items-center gap-3 mt-6 bg-brand-red text-cream font-sans text-[10px] tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-brand-red-dark transition-colors">
                Reserve My Table
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
