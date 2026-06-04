import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import Story from '@/components/Story';
import GallerySection from '@/components/GallerySection';
import ChefSection from '@/components/ChefSection';
import CocktailsSection from '@/components/CocktailsSection';
import CooksNoteSection from '@/components/CooksNoteSection';
import ValentinesSection from '@/components/ValentinesSection';
import MangoSection from '@/components/MangoSection';
import MenuCTA from '@/components/MenuCTA';
import ReservationSection from '@/components/ReservationSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <HeroVideo />

      <Story />

      <GallerySection />

      <ChefSection />

      <CocktailsSection />

      <CooksNoteSection />

      <ValentinesSection />

      <MangoSection />

      <MenuCTA
        id="brunch"
        label="Weekend Ritual"
        title="Weekend Brunch"
        sub="Sundays · 12:00 PM onwards · Bandra & Juhu"
        body="A lively, interactive Sunday afternoon experience filled with good music, shared plates, and a warm social atmosphere."
        cta="Reserve a Sunday Table →"
        ctaHref="#reserve"
        image="/IMG_3928.JPEG"
      />

      <ReservationSection />
    </main>
  );
}
