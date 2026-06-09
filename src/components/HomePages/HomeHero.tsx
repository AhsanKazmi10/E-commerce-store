'use client'
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen lg:min-h-[90vh] flex items-center bg-[#05070A] text-white overflow-hidden">
      
      {/* 1. Background Image Layer - Optimized for Mobile */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full brightness-200">
          <Image 
            src="/home.bg.png" 
            alt="Weaving Machinery"
            fill
            priority
            className="object-cover object-center"
            sizes="max-width: 768px) 100vw, (max-width: 1100px) 80vw, 65vw"
          />
          {/* Stronger Gradient for Mobile Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/95 to-[#05070A]/80 lg:via-[#05070A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-[#05070A]/60" />
          {/* Bottom gradient for mobile text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070A] to-transparent lg:hidden" />
        </div>
      </div>

      {/* 2. Vertical Social Sidebar - Desktop Only */}
      <div className="hidden lg:flex flex-col items-center gap-6 absolute left-8 xl:left-12 z-20">
        <div className="w-[1px] h-16 bg-blue-500/40" />
        <div className="flex flex-col gap-5 text-gray-500">
          <Twitter size={18} className="hover:text-blue-400 cursor-pointer transition-all hover:scale-110 duration-300" />
          <Facebook size={18} className="hover:text-blue-600 cursor-pointer transition-all hover:scale-110 duration-300" />
          <Instagram size={18} className="hover:text-pink-500 cursor-pointer transition-all hover:scale-110 duration-300" />
        </div>
        <div className="w-[1px] h-16 bg-blue-500/40" />
      </div>

      {/* 3. Main Content Area - Fully Responsive */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-16 xl:px-28 relative z-10 py-16 md:py-20">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Subheading - Mobile Optimized */}
          <div className="flex items-center gap-3">
            <div className="w-6 sm:w-8 h-[2px] bg-blue-500" />
            <p className="text-blue-500 font-black tracking-[0.25em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] md:text-xs uppercase">
              Global Manufacturing Excellence
            </p>
          </div>
          
          {/* Main Heading - Responsive Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] sm:leading-[1.05] md:leading-[0.9] tracking-tighter uppercase italic">
            The Art of 
            <span className="block sm:inline"> <br className="hidden sm:block" /></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
              Precision
            </span> 
            <span className="block sm:inline"> <br className="hidden sm:block" /></span>
            Weaving
          </h1>
          
          {/* Description - Mobile Friendly */}
          <div className="space-y-3 sm:space-y-4 max-w-md lg:max-w-lg border-l-2 border-blue-500/30 pl-4 sm:pl-6">
            <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium leading-tight">
              Design high-quality patches for your brand, team, or personal style.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              From concept to delivery — engineered with precision for the textile industry.
            </p>
          </div>

          {/* Action Buttons - Touch Friendly for Mobile */}
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
  <button 
    onClick={() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-sm text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest transition-all transform active:scale-95 hover:scale-105 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer border-none outline-none"
  >
    Explore Now
    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
  </button>
</div>

          {/* Trust Badge - Optional eCommerce Element */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
              <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">100+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
              <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">24/7 Support</span>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Mobile Social Icons - Styled Properly */}
      <div className="lg:hidden absolute bottom-6 left-0 right-0 flex justify-center gap-8 z-20">
        <div className="bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full flex gap-6">
          <Twitter size={18} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
          <Facebook size={18} className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
          <Instagram size={18} className="text-gray-400 hover:text-pink-500 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* 5. Scroll Indicator - Professional Touch */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[8px] text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>

    </section>
  );
}