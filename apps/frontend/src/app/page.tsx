import Navbar from '@/components/Navbar';
import Masthead from '@/components/Masthead';
import HeroGrid from '@/components/HeroGrid';
import Ticker from '@/components/Ticker';
import Story from '@/components/Story';
import FullBleed from '@/components/FullBleed';
import ChefSection from '@/components/ChefSection';
import GallerySection from '@/components/GallerySection';
import BelliniSection from '@/components/BelliniSection';
import CooksNoteSection from '@/components/CooksNoteSection';
import ValentinesMenu from '@/components/ValentinesMenu';
import MangoMenu from '@/components/MangoMenu';
import BrunchMenu from '@/components/BrunchMenu';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Masthead />

      <hr className="divider divider-triple mb-0" />

      <HeroGrid />
      <Ticker />

      <Story />
      <GallerySection />
      <ChefSection />
      <BelliniSection />
      <CooksNoteSection />

      <FullBleed />

      <ValentinesMenu />
      <MangoMenu />
      <BrunchMenu />

      <ReservationSection />
      <Footer />
    </main>
  );
}
