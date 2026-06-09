"use client";

import React, { useState } from 'react';
import { Layers, Award, Flame, Box, ArrowRight, Tag, Shield, Ruler } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WovenFullShowcase = () => {
  // Categories List - Patches wali style
  const categories = [
    { id: 'all', name: 'All Labels', icon: <Box size={16} /> },
    { id: 'branding', name: 'Branding Labels', icon: <Layers size={16} /> },
    { id: 'care', name: 'Care Labels', icon: <Shield size={16} /> },
    { id: 'size', name: 'Size Labels', icon: <Ruler size={16} /> },
  ];

  const [activeTab, setActiveTab] = useState('all');

  // Woven Labels Data - Exactly Patches jaisa structure
  const wovenData = [
    // Branding Labels (4 items)
    {
      id: 1,
      title: "High-Density Woven Label",
      category: "branding",
      desc: "Ultra-sharp thread details with durable weave for premium branding.",
      image: "/wproduct1.png",
      spec: "100% Damask Thread"
    },
    {
      id: 2,
      title: "Damasks Weave Label",
      category: "branding",
      desc: "Soft touch with high definition detail for luxury garments.",
      image: "/about2.png",
      spec: "Premium Damask"
    },
    {
      id: 3,
      title: "Brand Label",
      category: "branding",
      desc: "Elegant shimmer finish for high-end fashion branding.",
      image: "/wproduct-2.png",
      spec: "Best Finish"
    },
    {
      id: 4,
      title: "Budget Taffeta Label",
      category: "branding",
      desc: "Durable and cost-effective solution for bulk orders.",
      image: "/wproduct-3.png",
      spec: "Economical Weave"
    },
    // Care Labels (4 items)
    {
      id: 5,
      title: "Wash-Resistant Care Label",
      category: "care",
      desc: "Maintains clarity after 100+ industrial washes.",
      image: "/wproduct-4.png",
      spec: "100 Wash Guarantee"
    },
    {
      id: 6,
      title: "Fabric Composition Label",
      category: "care",
      desc: "Clear breakdown of fabric materials and percentages.",
      image: "/wproduct-5.png",
      spec: "Cotton/Poly Blend"
    },
    {
      id: 7,
      title: "Soft-Inner Label",
      category: "care",
      desc: "Zero skin irritation for maximum wearer comfort.",
      image: "/wproduct-6.png",
      spec: "Center-Fold"
    },
    {
      id: 8,
      title: "International Symbol Label",
      category: "care",
      desc: "Standardized wash, dry, and iron symbols worldwide.",
      image: "/wproduct-7.png",
      spec: "ISO Standard"
    },
    // Size Labels (4 items)
    {
      id: 9,
      title: "Loop Fold Size Label",
      category: "size",
      desc: "Quick identification for consumers with easy folding.",
      image: "/wproduct-8.png",
      spec: "Folded Edge"
    },
    {
      id: 10,
      title: "Alpha Size S/M/L Label",
      category: "size",
      desc: "Clean typography for all standard sizing formats.",
      image: "/wproduct-9.png",
      spec: "Letter Sizing"
    },
    {
      id: 11,
      title: "Numeric Waist Label",
      category: "size",
      desc: "Precise measurements for denim and trousers.",
      image: "/wproduct-10.png",
      spec: "30-40 Inches"
    },
    {
      id: 12,
      title: "Mini Tab Label",
      category: "size",
      desc: "Small format perfect for sleeves, pockets, or side seams.",
      image: "/wproduct-11.png",
      spec: "Mini Format"
    }
  ];

  // Filter Logic - Exactly Patches jaisa
  const filteredWoven = activeTab === 'all' 
    ? wovenData 
    : wovenData.filter(item => item.category === activeTab);

  return (
    <section className="bg-white py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title - Bilkul Patches jaisa */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">
            Our Woven <span className="text-blue-600">Labels</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Premium quality woven labels for high-end fashion branding, care instructions, and size markings.
          </p>
        </div>

        {/* Categories Tabs - Patches style */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar -mx-4 px-4">
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

        {/* Responsive Grid - Mobile par 2 cards, Desktop 4 cards */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredWoven.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-slate-50 rounded-2xl md:rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                {/* Image Section - Patches style */}
                <div className="relative aspect-[4/3] md:aspect-square w-full bg-slate-200 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Spec Badge on Image - Patches style */}
                  <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/95 backdrop-blur-sm text-slate-900 font-bold text-[8px] md:text-[10px] uppercase tracking-wider px-2 py-1 rounded md:rounded-md shadow-sm">
                    {item.spec}
                  </span>
                </div>

                {/* Content Section - Patches style */}
                <div className="p-3 md:p-6 space-y-1.5 md:space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Action Link - Patches style */}
                  <div className="pt-2 flex items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-600 gap-1 group-hover:gap-2 transition-all">
                    <span>View Specs</span>
                    <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results State - Patches style */}
        {filteredWoven.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-sm">No labels found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default WovenFullShowcase;