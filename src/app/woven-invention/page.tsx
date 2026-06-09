import Hero from '@/components/woven-invention/hero';
import ProductGrid from '@/components/woven-invention/productGrid';

export default function PatchesPage() {
  return (
    <main>
      <Hero 
        title="Woven Invention" 
        subtitle="Industrial Grade Quality" 
        bgImage="/hero/patches-bg.jpg" // Ye image public/hero folder me honi chahiye
      />
      <ProductGrid />
    </main>
  );
}