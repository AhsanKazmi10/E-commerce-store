"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function OriginStorySection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-gray-50">
      {/* Left Side: Content */}
      <div className="p-10 md:p-16 border-r border-gray-200 flex flex-col justify-center bg-gray-50">
        <div className="text-blue-600 text-[15px] font-bold tracking-[0.26em] mb-6 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-blue-600"></span> THE STORY BEHIND THE NICK
        </div>
        
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-black leading-tight mb-6">
          Not copied.<br />Not replicated.<br />
          <i className="text-blue-600 font-['Playfair_Display'] font-normal italic">Reinvented.</i>
        </h2>
        
        <p className="text-[1rem] leading-9 text-gray-700 mb-4">
          We studied the geometric embroidery traditions of <strong>Sindh and Balochistan</strong> — two of South Asia's richest textile cultures.
        </p>
        <p className="text-[1rem] leading-9 text-gray-700 mb-4">
          Woven Nicks are original designs — built on the principle of <strong>high-density waving</strong>, a technique that creates depth, movement, and richness.
        </p>
        <p className="text-[1rem] leading-9 text-gray-700">
          Every nick is a panel of pure craft — a neckline, cuff, or hem border — designed to transform any garment into something extraordinary.
        </p>
      </div>

      {/* Right Side: Visual/Comparison */}
      <div className="p-10 md:p-16 flex flex-col justify-center gap-6 bg-white">
        <div className="text-black text-[20px] font-['Cinzel'] font-bold tracking-[0.1em] mb-2 ">
          HOW OUR DESI<span className='text-blue-800'>GNS WERE BORN</span>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
            <div className="bg-blue-50 border border-blue-100 p-4">
              <div className="text-[9px] tracking-[0.2em] font-bold text-blue-600 mb-1">TRADITION 01</div>
              <div className="text-[0.95rem] text-black font-bold">Sindhi Geometric Craft</div>
            </div>
            <div className="text-blue-600/30 font-bold px-2">+</div>
            <div className="bg-blue-50 border border-blue-100 p-4">
              <div className="text-[9px] tracking-[0.2em] font-bold text-blue-600 mb-1">TRADITION 02</div>
              <div className="text-[0.95rem] text-black font-bold">Balochi Pattern Logic</div>
            </div>
          </div>
          
          <div className="flex justify-center text-blue-600/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2"/></svg>
          </div>
          
          <div className="bg-blue-50 border border-blue-600 p-8 text-center">
            <div className="text-[10px] tracking-[0.22em] font-bold text-blue-600 mb-2 uppercase">The Woven Nicks Original</div>
            <div className="text-[1.2rem] text-black font-bold font-['Playfair_Display']">High-Density Waving Design</div>
            <div className="text-[0.82rem] text-gray-600 italic mt-2">A new visual language — rooted in tradition, entirely original</div>
          </div>
        </div>
      </div>
    </section>
  );
}