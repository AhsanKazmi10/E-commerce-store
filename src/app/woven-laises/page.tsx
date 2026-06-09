import Hero from '@/components/woven-laises/hero';
import ProductGrid from '@/components/woven-nicks/productGrid';

export default function PatchesPage() {
  return (
    <main>
      <Hero 
        title="Woven Laises" 
        subtitle="Industrial Grade Quality" 
        bgImage="/hero/patches-bg.jpg" // Ye image public/hero folder me honi chahiye
      />
      <ProductGrid />
    </main>
  );
}