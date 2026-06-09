'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

const Aboutus = () => {
  const features = [
    "High-speed production with specialized needle loom machinery",
    "Minimalist and premium corporate branding aesthetics",
    "Customized woven labels, PVC rubber, and leather patches",
    "International quality standards for e-commerce brands"
  ];

  return (
    <section className="border-gray-800 text-black py-16 md:py-24 px-4 md:px-10 border-b border-gray-100 border-gray-800" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ">
        
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div>
              <p className={`${montserrat.className} text-[#003D82] text-sm uppercase tracking-[0.1em] font-bold mb-4`}>
                  About H.B Enterprises
              </p>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-[1000] leading-[0.9] uppercase tracking-tighter italic text-gray-900">
              <span className="text-[#003D82]">Expertly Crafted</span> <br />
              Premium Quality <br />
              Woven Labels & Patches
            </h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed font-medium text-base md:text-lg max-w-xl border-l-4 border-[#2563EB] pl-6">
            We are a leading professional manufacturer specializing in high-end woven labels and custom patches. Utilizing specialized needle loom machinery, we deliver 99% accurate brand identity products.
          </p>

          <ul className="grid grid-cols-1 gap-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-none flex items-center justify-center -skew-x-12 group-hover:bg-[#2563EB] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span className="text-[12px] md:text-[15px] font-extrabold text-gray-800 uppercase tracking-tight italic">
                   {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
  <button 
    onClick={() => {
      // Agar aapne portfolio section ki ID kuch aur rakhi hai (e.g., 'portfolioShowcase'), 
      // toh niche 'patchesShowcase' ki jagah woh ID likh dein.
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="inline-block bg-black text-white px-12 py-4 font-[1000] uppercase text-[10px] tracking-[0.25em] hover:bg-[#2563EB] transition-all -skew-x-12 shadow-2xl active:scale-95 cursor-pointer border-none outline-none"
  >
    Explore Our Products
  </button>
</div>
        </div>

        {/* Right Media Grid - Video Integrated */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          
          {/* Main Video Section */}
          <div className="col-span-12 relative h-[300px] md:h-[420px] overflow-hidden rounded-sm shadow-xl border border-gray-100 bg-black ">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover gtransition-all duration-1000 opacity-80 "
            >
              {/* Apni video file ka path yahan dein (e.g., /factory-video.mp4) */}
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute top-4 right-4 bg-[#ce2523] text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest z-10">
               Live Production
            </div>
            {/* Soft overlay to make it look cinematic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>

          <div className="col-span-6 relative h-[180px] md:h-[240px] overflow-hidden rounded-sm border border-gray-100 shadow-lg">
            <Image src="/homeabout.png" alt="Quality Detail" fill className="object-cover transition-all duration-500" />
          </div>
          <div className="col-span-6 relative h-[180px] md:h-[240px] overflow-hidden rounded-sm border border-gray-100 shadow-lg">
            <Image src="/about2.png" alt="Premium Branding" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutus;