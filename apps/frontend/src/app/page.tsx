import LandingHero from '@/components/scarlett/LandingHero';
import IntroSection from '@/components/scarlett/IntroSection';
import StorySection from '@/components/scarlett/StorySection';
import SplitMenuSection from '@/components/scarlett/SplitMenuSection';
import ImageCarouselSection from '@/components/scarlett/ImageCarouselSection';

export default function Home() {
  return (
    <main className="w-full bg-[#080F0F] relative z-10">
      <LandingHero />
      <div className="snap-start w-full h-[80svh] md:min-h-[100svh] flex-shrink-0 relative z-10">
        <IntroSection />
      </div>
      <div className="snap-start w-full h-[80svh] md:h-[100svh] flex-shrink-0 relative z-10">
        <StorySection />
      </div>
      <div className="snap-start w-full h-[140svh] md:h-[100svh] flex-shrink-0 relative z-10">
        <SplitMenuSection />
      </div>
      <div className="snap-start w-full h-[80svh] md:h-[100svh] flex-shrink-0 relative z-10">
        <ImageCarouselSection />
      </div>
      {/* Spacer block to reveal the fixed footer underneath */}
    </main>
  );
}
