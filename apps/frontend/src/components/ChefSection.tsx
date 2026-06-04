import Section from './Section';

export default function ChefSection() {
  return (
    <Section className="py-0">
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-ink py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <p className="text-[9px] tracking-[0.3em] uppercase text-cream/40 mb-10 font-sans font-medium">
              Founder&apos;s Note
            </p>
            <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] italic text-cream font-light leading-[1.35]">
              &ldquo;Scarlett House is born out of a desire to create a sanctuary where nostalgia
              meets modern comfort — a home away from home.&rdquo;
            </blockquote>
            <cite className="block mt-8 text-[11px] tracking-[0.2em] uppercase text-cream/40 not-italic font-sans">
              — Malaika Arora, Co-Founder
            </cite>
          </div>
        </div>
      </div>
    </Section>
  );
}
