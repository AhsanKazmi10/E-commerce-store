'use client'
import React from "react";
import Image from "next/image";

const PatchPricing: React.FC = () => {
  // Data array taake code saaf rahay
  const priceList = [
    {
      title: "Simple Woven Patch",
      desc: "Standard high-definition weaving with clean cut edges. Perfect for basic branding.",
      specs: "100% Polyester Thread",
      price: "3.2"
    },
    {
      title: "Merrowed Edge Patch",
      desc: "Reinforced stitched borders with premium embroidery finish for a 3D effect.",
      specs: "Merrowed Edges",
      price: "4.0"
    },
    {
      title: "Iron Press Patch",
      desc: "Easy-to-apply heat-activated adhesive backing. Durable and long-lasting.",
      specs: "Heat-Seal Backing",
      price: "4.6"
    }
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-20 px-6 lg:px-20 gap-16 border-gray-900">
     
      {/* Pricing Text Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-[1px] w-8 bg-blue-600"></span>
          <p className="text-blue-500 font-bold tracking-widest uppercase text-xs">Pricing Guide</p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-black mb-12">
          QUALITY <span className="text-blue-600">&</span> VALUE
        </h2>

        <ul className="space-y-10">
          {priceList.map((item, index) => (
            <li key={index} className="group flex justify-between items-start border-b border-gray-800/50 pb-6 hover:border-blue-600 transition-colors">
              <div className="max-w-[80%]">
                <h3 className="text-xl md:text-2xl font-bold text-blue-500 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-gray-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-[10px] font-black text-blue-600 uppercase mt-3 tracking-tighter">
                  Specs: {item.specs}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-blue-500">${item.price}</span>
                <p className="text-[10px] text-gray-600 uppercase font-bold">Per Unit</p>
              </div>
            </li>
          ))}
        </ul>
        
        <p className="mt-10 text-xs font-bold text-gray-600 italic">
          * Note: Prices may vary based on quantity and design complexity.
        </p>
      </div>

     {/* Image Section - Showing all 3 varieties */}
<div className="w-full lg:w-1/2 relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-transparent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
  
  {/* FIX: aspect-video hata diya aur background transparent/dark rakh sakte hain */}
  <div className="relative w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/50">
      <Image
        src="/gued1.png"
        alt="H-B Enterprises Patch Varieties"
        width={600}  
        height={300}
        sizes="(max-width: 1024px) 100vw, 50vw"
       
        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
      />
      {/* Overlay label */}
      <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 border border-gray-700 rounded-lg z-10">
          <p className="text-white font-bold text-sm tracking-widest uppercase">Premium Weaving Quality</p>
      </div>
  </div>
</div>

    </section>
  );
};

export default PatchPricing;