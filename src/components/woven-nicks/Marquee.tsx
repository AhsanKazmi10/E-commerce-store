"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TickerSection() {
  return (
    <div className="overflow-hidden border-t border-b border-[#C4963A]/15 py-3 bg-[#0B1220] bg-opacity-80">
      <motion.div 
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {/* Repeating content for seamless scroll */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-0 items-center">
            <span className="font-['Cinzel'] text-[8.5px] tracking-[0.22em] text-blue-600 px-8 flex items-center gap-3">
              Original Designs <span className="text-[#C4963A]/25 text-[6px]">◆</span>
            </span>
            <span className="font-['Cinzel'] text-[8.5px] tracking-[0.22em] text-blue-600 px-8 flex items-center gap-3">
              Inspired by Sindhi & Balochi Craft <span className="text-[#C4963A]/25 text-[6px]">◆</span>
            </span>
            <span className="font-['Cinzel'] text-[8.5px] tracking-[0.22em] text-blue-600 px-8 flex items-center gap-3">
              High-Density Waving Patterns <span className="text-[#C4963A]/25 text-[6px]">◆</span>
            </span>
            <span className="font-['Cinzel'] text-[8.5px] tracking-[0.22em] text-blue-600 px-8 flex items-center gap-3">
              100% Handmade <span className="text-[#C4963A]/25 text-[6px]">◆</span>
            </span>
            <span className="font-['Cinzel'] text-[8.5px] tracking-[0.22em] text-blue-600 px-8 flex items-center gap-3">
              Ships Worldwide <span className="text-[#C4963A]/25 text-[6px]">◆</span>
            </span>
            <span className="font-['Cinzel'] text-[8.5px] tracking-[0.22em] text-blue-600 px-8 flex items-center gap-3">
              Black & Ivory Editions <span className="text-[#C4963A]/25 text-[6px]">◆</span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}