import LandingHero from '@/components/kaprica/LandingHero';
import IntroSection from '@/components/kaprica/IntroSection';
import StorySection from '@/components/kaprica/StorySection';
import LocationsSection from '@/components/kaprica/LocationsSection';
import SplitMenuSection from '@/components/kaprica/SplitMenuSection';
import ImageCarouselSection from '@/components/kaprica/ImageCarouselSection';
import FeatureSections from '@/components/kaprica/FeatureSections';
import SpacesSection from '@/components/kaprica/SpacesSection';

export default function Home() {
  return (
    <main className="w-full bg-[#080F0F] relative z-10">
      <LandingHero />
      <div className="snap-start w-full h-[100svh] flex-shrink-0 relative z-10">
        <IntroSection />
      </div>
      <div className="snap-start w-full h-[100svh] flex-shrink-0 relative z-10">
        <StorySection />
      </div>
      <div className="snap-start w-full h-[100svh] flex-shrink-0 relative z-10">
        <LocationsSection />
      </div>
      <div className="snap-start w-full h-[100svh] flex-shrink-0 relative z-10">
        <ImageCarouselSection />
      </div>
      <div className="snap-start w-full h-[100svh] flex-shrink-0 relative z-10">
        <SplitMenuSection />
      </div>
      <div className="relative z-10 bg-[#080F0F]">
        <FeatureSections />
      </div>
      <div className="snap-start w-full h-[100svh] flex-shrink-0 relative z-10">
        <SpacesSection />
      </div>
      {/* Spacer block to reveal the fixed footer underneath */}
      <div className="snap-end w-full h-[230px] bg-transparent pointer-events-none" />
    </main>
  );
}
