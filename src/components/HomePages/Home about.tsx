import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// Modern corporate font use kar rahe hain
const InterFont = Inter({ subsets: ['latin'], weight: ['400', '700'] });

// Categories ko textile manufacturing ke hisab se update kiya
const ProductCategories = ['Satin Labels', 'Woven Labels', 'Woven Patches', 'Leather Patches', 'Custom Tags'];

interface ProductItemProps {
  image: string;
  category: string;
  title: string;
  detail: string;
  href: string; // Naya prop link ke liye
}

const ProductItem: React.FC<ProductItemProps> = ({ image, category, title, detail, href }) => (
  <li className="flex items-center gap-4 p-4 bg-[#0A0F1C] hover:bg-[#162033] rounded-lg transition-all duration-300 border border-gray-800 group cursor-pointer">
    <Link href={href} className="flex items-center gap-4 w-full">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={85}
          height={85}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <p className="text-[#00E5FF] text-[10px] font-bold uppercase tracking-widest mb-1">{category}</p>
        <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-500 text-xs leading-tight">{detail}</p>
      </div>
    </Link>
  </li>
);

const ChooseFromCollection = () => {
  return (
    <section className="border-gray-800 min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-black-900 font-bold tracking-[0.3em] uppercase text-sm mb-3">
            About Our Products
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Categories Navigation */}
        <nav className="mb-16 overflow-x-auto">
          <ul className="flex justify-center min-w-max gap-8 text-gray-600 text-sm font-medium border-b border-gray-500 pb-4">
            {ProductCategories.map((category, index) => (
              <li
                key={category}
                className={`cursor-pointer hover:text-white transition-all relative ${
                  index === 1 ? 'text-blue-500 font-bold after:content-[""] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-0.5 after:bg-blue-500' : ''
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured Large Display (Left) */}
          <div className="lg:w-[40%]">
            <div className="relative h-full min-h-[400px] group overflow-hidden rounded-2xl border border-gray-800">
              <Image
                src="/machine1.jpg" // Aapki main machinery ya woven texture image
                alt="Manufacturing Excellence"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#00E5FF] font-bold text-xs tracking-widest mb-2">FEATURED TECHNOLOGY</p>
                <h4 className="text-white text-2xl font-bold">Müller Needle Looms</h4>
              </div>
            </div>
          </div>

          {/* Product Items List (Right) */}
          <div className="lg:w-[60%] grid md:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              <ProductItem
                image="/stain1.png"
                category="Luxury"
                title="Ultra-Soft Satin Labels"
                detail="High-definition printing with premium edge finish."
                href="/satinLables"
              />
              <ProductItem
                image="/woven1.png"
                category="Standard"
                title="High-Density Woven"
                detail="Durable polyester weave for long-lasting branding."
                href="/woven"
              />
              <ProductItem
                image="/patch1.png"
                category="Branding"
                title="Custom Merrowed Patches"
                detail="Classic overlock borders with vibrant thread detail."
                href="/Patches"
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <ProductItem
                image="/letherp1.png"
                category="Premium"
                title="Embossed Leather Patches"
                detail="Genuine & faux leather with deep heat-press branding."
                href="/Patches"
              />
              <ProductItem
                image="/patch2.png"
                category="Industrial"
                title="Woven Patches"
                detail="Weather-resistant 3D designs for tactical gear."
                href="/Patches"
              />
              <ProductItem
                image="/Tag01.png"
                category="Eco-Friendly"
                title="Organic Cotton Tags"
                detail="Soft natural fibers for sustainable fashion lines."
                href="/satinLables"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseFromCollection;