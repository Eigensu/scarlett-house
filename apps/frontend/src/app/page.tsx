import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WinePanel from '@/components/WinePanel';
import FeastSection from '@/components/FeastSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-wine">
      <Navbar />
      <HeroSection />
      <WinePanel />
      <FeastSection />
    </main>
  );
}
