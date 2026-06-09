import Hero from '@/components/woven-monograms/hero';
import ProductGrid from '@/components/woven-monograms/productGrid';

export default function PatchesPage() {
  return (
    <main>
      <Hero 
        title="Woven Monograms" 
        subtitle="Industrial Grade Quality" 
        bgImage="/hero/patches-bg.jpg" // Ye image public/hero folder me honi chahiye
      />
      <ProductGrid />
    </main>
  );
}