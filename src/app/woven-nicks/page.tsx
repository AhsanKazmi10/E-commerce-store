
import Hero from '@/components/woven-nicks/hero';
import TickerSection from '@/components/woven-nicks/Marquee';
import StandardsSection from '@/components/woven-nicks/standard';
import GalleryAndNickSection from '@/components/woven-nicks/showguide';
import OriginStorySection from '@/components/woven-nicks/story';
import WovenNicksPage from '@/components/woven-nicks/productGrid';
import FinalResultSection from '@/components/woven-nicks/Result';
import FinalCTA from '@/components/woven-nicks/FinalCTA';


export default function PatchesPage() {
  return (
    <main>
      <Hero />
      <TickerSection />
     < OriginStorySection/>
     <GalleryAndNickSection/>
     <StandardsSection />
     <FinalResultSection />
      < WovenNicksPage/>
      <FinalCTA />
    </main>
  );
}