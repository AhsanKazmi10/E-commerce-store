"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[540px] flex items-end overflow-hidden bg-[#0B1220]">
      {/* Pattern Overlay: Original pattern design with Theme Colors */}
      <div className="absolute inset-0 opacity-[0.09]">
        <svg viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <pattern id="wp" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse">
              <polygon points="45,6 66,33 45,60 24,33" fill="none" stroke="#3D6FCC" strokeWidth="1" />
              <polygon points="45,18 58,33 45,48 32,33" fill="rgba(42,82,152,0.2)" />
              <circle cx="12" cy="12" r="4" fill="rgba(196,150,58,0.3)" />
              <circle cx="78" cy="12" r="4" fill="rgba(196,150,58,0.3)" />
              <circle cx="12" cy="78" r="4" fill="rgba(42,82,152,0.35)" />
              <circle cx="78" cy="78" r="4" fill="rgba(42,82,152,0.35)" />
            </pattern>
          </defs>
          <rect width="900" height="540" fill="url(#wp)" />
        </svg>
      </div>

      {/* Theme Fades: Retaining the original dual-fade effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1220]/20 via-[#1A3A6B]/25 to-[#0B1220]/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1220]/60 to-[#0B1220]" />

      {/* Hero Content: Original Layout */}
      <div className="relative p-6 md:px-10 pb-14 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <div className="font-['Playfair_Display'] text-[15px] tracking-[0.3em] text-blue-500 mb-4 flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#C4963A] opacity-80 "/>ORIGINAL WOVEN CRAFT
          </div>
          
          {/* Headline */}
          <h1 className="font-['Playfair_Display'] text-[clamp(2.6rem,7vw,4.8rem)] font-bold text-white leading-[0.95] mb-5">
            Where Ancient<br />Craft Meets<br />
            <i className="text-blue-500 not-italic">Modern Design.</i>
          </h1>
          
          {/* Paragraph */}
          <p className="text-[1.1rem] leading-[1.75] text-[#F1EFE8]/65 max-w-[500px] mb-8">
            Inspired by the geometric traditions of Sindhi and Balochi embroidery — reimagined into original, high-density waving patterns made entirely by hand, for the world.
          </p>

          {/* Buttons: Gold & Outline Grey (Maintained) */}
          <div className="flex gap-3 flex-wrap">
            <button className="font-['Cinzel'] text-[9.5px] tracking-[0.18em] px-7 py-3.5 bg-blue-500 text-[#0B1220] font-semibold hover:bg-blue-600 transition-all">
              VIEW COLLECTION
            </button>
            <button className="font-['Cinzel'] text-[9.5px] tracking-[0.18em] px-7 py-3 bg-transparent text-[#F1EFE8] border border-[#F1EFE8]/20 hover:border-[#F1EFE8]/50 hover:text-white transition-all" onClick={() => {}}>
              OUR STORY
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}