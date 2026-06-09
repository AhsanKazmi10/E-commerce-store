'use client';

import React, { useState, useEffect } from "react";
import { ShieldCheck, Target, Ruler, DropletOff, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeatherType {
  title: string;
  desc: string;
  specs: string[];
  badge: string;
  image: string;
}

const LEATHER_SLIDES: LeatherType[] = [
  {
    title: "Genuine Cowhide Leather",
    desc: "Thick, rugged, and premium. Engineered for heavy-duty denim jeans waistbands and luxury leather goods. It develops a beautiful vintage patina over long-term commercial usage.",
    specs: ["Thickness: 1.8mm - 2.2mm", "Texture: Natural Grain", "Durability: Extreme"],
    badge: "100% Genuine Leather",
    image: "/leather-1.png"
  },
  {
    title: "Premium Suede Patches",
    desc: "Soft, velvet-like brushed texture. Gives an upscale, modern street-fashion look to winter jackets, custom hoodies, structured bags, and high-end headwear lines.",
    specs: ["Thickness: 1.5mm - 1.8mm", "Texture: Soft Brushed", "Durability: Premium"],
    badge: "Brushed Suede Finish",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80"
  },
  {
    title: "Eco-Friendly PU Leather",
    desc: "Premium synthetic variant that offers highly consistent color matching and crisp laser engraving depths. Ideal for high-volume commercial production runs.",
    specs: ["Thickness: 1.2mm - 1.5mm", "Texture: Uniform Smooth", "Durability: Industrial Standard"],
    badge: "Vegan PU Option",
    image: "leather-2.png"
  }
];

export default function LeatherPatchesDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔄 Automatic Slideshow Mechanism (Changes every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % LEATHER_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = LEATHER_SLIDES[currentIndex];

  return (
    <section className="border-gray-800 text-slate-800 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
       {/* Header Block */}
<div className="text-center max-w-3xl mx-auto space-y-3">
  {/* Icon aur sub-heading wrapper ko responsive alignment de di hai */}
  <div className="flex items-start md:items-center justify-center gap-2">
    <Layers size={16} className="text-blue-600 shrink-0 mt-1 md:mt-0" />
    <p className="text-blue-600 font-black tracking-widest uppercase text-xs md:text-[14px] leading-tight">
      Premium Material Segment
    </p>
  </div>
  <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-tight md:leading-none">
    Leather Patches <span className="text-blue-600">Engineering</span>
  </h2>
  <p className="text-slate-500 text-xs md:text-base max-w-xl mx-auto font-medium leading-relaxed px-2">
    Advanced hot debossing and sharp laser-cutting blueprints tailored for high-end clothing lineups.
  </p>
</div>
        {/* Dynamic Animated Showroom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[420px]">
          
          {/* Left Block: Image Frame */}
          <div className="lg:col-span-5 relative w-full h-full flex flex-col justify-center">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40" />
              
              {/* Dynamic Overlay Label Tag */}
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-4 left-4 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm"
                >
                  {currentSlide.badge}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Block: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-6">
            <div className="min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                    {currentSlide.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                    {currentSlide.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Micro Specs List */}
            <div className="min-h-[32px] pt-4 border-t border-slate-100">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold text-blue-600 uppercase tracking-wide"
                >
                  {currentSlide.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-slate-700">{spec}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Auto Carousel Dash Indicators */}
            <div className="flex items-center gap-2 pt-2">
              {LEATHER_SLIDES.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Lower Grid Block: Production Blueprints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-10 border-t border-slate-100">
          
          {/* Card 1: Dimensions */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 hover:border-blue-100 transition-colors group">
            <div className="w-10 h-10 bg-white text-blue-600 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <Ruler size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight group-hover:text-blue-600 transition-colors">Production Prosizing</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Standard dimension brackets include 50x50mm or 60x40mm cutouts. Fully compatible with unique laser contour matrices.
              </p>
            </div>
          </div>

          {/* Card 2: Colorways */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 hover:border-blue-100 transition-colors group">
            <div className="w-10 h-10 bg-white text-blue-600 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <Target size={18} />
            </div>
            <div className="space-y-2 w-full">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight group-hover:text-blue-600 transition-colors">Base Branding Tones</h4>
              <div className="flex items-center gap-2 pt-0.5">
                <div className="w-4 h-4 rounded-full bg-[#3e2723] border border-black/10 shadow-sm" title="Dark Brown" />
                <div className="w-4 h-4 rounded-full bg-[#8d6e63] border border-black/10 shadow-sm" title="Tan/Camel" />
                <div className="w-4 h-4 rounded-full bg-[#111111] border border-black/10 shadow-sm" title="Charcoal Black" />
                <div className="w-4 h-4 rounded-full bg-[#d7ccc8] border border-black/10 shadow-sm" title="Beige Cream" />
                <span className="text-[9px] text-slate-400 font-bold uppercase pl-1 tracking-wider">Custom Dyed Available</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}