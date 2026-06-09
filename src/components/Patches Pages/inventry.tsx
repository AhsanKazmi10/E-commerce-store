"use client";

import React, { useState } from 'react';
import { Layers, Award, Flame, Box, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PatchesShowcase = () => {
  // Categories List
  const categories = [
    { id: 'all', name: 'All Patches', icon: <Box size={16} /> },
    { id: 'woven', name: 'Woven Patches', icon: <Layers size={16} /> },
    { id: 'merrow', name: 'Merrowed Edge', icon: <Award size={16} /> },
    { id: 'iron', name: 'Iron Press', icon: <Flame size={16} /> },
    { id: 'leather', name: 'Leather Patches', icon: <Layers size={16} /> },
  ];

  const [activeTab, setActiveTab] = useState('all');

  // Patches Data with your specific categories
  const patchesData = [
    {
      id: 1,
      title: "High-Density Woven Patch",
      category: "woven",
      desc: "Ultra-sharp thread details with standard laser-cut backing.",
      image: "/patch-1.png", // Replace with your asset
      spec: "100% Damask Thread"
    },
    {
      id: 2,
      title: "Classic Merrowed Border",
      category: "merrow",
      desc: "Traditional overlocked stitched border for rugged durability.",
      image: "/patch-2.png", // Replace with your asset
      spec: "Overlocked Merrow Edge"
    },
    {
      id: 3,
      title: "Heat-Seal Iron On Patch",
      category: "iron",
      desc: "Premium adhesive backing that bonds instantly with standard heat press.",
      image: "/patch-3.png", // Replace with your asset
      spec: "Industrial Glue Backing"
    },
    {
      id: 4,
      title: "Embossed Genuine Leather",
      category: "leather",
      desc: "Deep stamped branding on real leather for jeans and luxury bags.",
      image: "/leather-3.png", // Replace with your asset
      spec: "Real & Suede Leather"
    },
    {
      id: 5,
      title: "Tactical Uniform Patch",
      category: "woven",
      desc: "Heavy-duty woven design tailored for corporate and military uniforms.",
      image: "/patch-5.png", // Replace with your asset
      spec: "Fade-Resistant Thread"
    },
    {
      id: 6,
      title: "Vintage Merrowed Badge",
      category: "merrow",
      desc: "Thick, custom-shaped borders perfect for jackets and headwear.",
      image: "/patch-6.png", // Replace with your asset
      spec: "Heavy Cotton Border"
    },
    {
      id: 7,
      title: "Easy-Apply Apparel Patch",
      category: "iron",
      desc: "Quick application for t-shirts and hoodies without stitching.",
      image: "/patch-7.png", // Replace with your asset
      spec: "5-Second Heat Bond"
    },
    {
      id: 8,
      title: "Suede Jeans Patch",
      category: "leather",
      desc: "Soft premium suede texture patch with custom laser-engraved logo.",
      image: "/patch-8.png", // Replace with your asset
      spec: "Laser Engraved Suede"
    }
  ];

  // Filter Logic
  const filteredPatches = activeTab === 'all' 
    ? patchesData 
    : patchesData.filter(patch => patch.category === activeTab);

  return (
    <section className="border-gray-800 py-24 px-4 md:px-6" id="patchesShowcase">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">
            Our Patch <span className="text-blue-600">Collection</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Choose from high-density weaves, stitched borders, easy heat-seal backing, or premium leather.
          </p>
        </div>

        {/* Categories Tabs Filter (Scrollable on Mobile) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar -mx-4 px-4 mask-image">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 border
                ${activeTab === tab.id 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100 scale-105' 
                  : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100 hover:text-slate-900'}
              `}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout (Mobile par strictly 2 cards, PC par 4 cards) */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPatches.map((patch) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={patch.id}
                className="bg-slate-50 rounded-2xl md:rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] md:aspect-square w-full bg-slate-200 overflow-hidden">
                  <img 
                    src={patch.image} 
                    alt={patch.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Small Spec Badge on Image */}
                  <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/95 backdrop-blur-sm text-slate-900 font-bold text-[8px] md:text-[10px] uppercase tracking-wider px-2 py-1 rounded md:rounded-md shadow-sm">
                    {patch.spec}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-3 md:p-6 space-y-1.5 md:space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {patch.title}
                    </h3>
                    <p className="text-[11px] md:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {patch.desc}
                    </p>
                  </div>

                  {/* Clean Action Link */}
                  <button 
  onClick={() => {
    // Jahan aapka drop-down design bana hua hai, uski main tag/div par id="designDropdown" laga dein
    const element = document.getElementById('designDropdown');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="pt-2 flex items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-600 gap-1 group-hover:gap-2 transition-all cursor-pointer border-none bg-transparent outline-none"
>
  <span>Customize Patch</span>
  <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default PatchesShowcase;