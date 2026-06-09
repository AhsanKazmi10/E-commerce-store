'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] });

// Real Textile Satin Specifications
const satinTypes = [
  {
    id: 'double-face',
    name: '01. Double-Face Luxury Satin',
    desc: 'Dono taraf se high-density silky finish aur luster drop texture hota hai. High-end designer garments, couture collections, aur branding ke liye use hota hai jahan label skin ko direct touch karta hai.',
    specs: 'Material: 100% Filament Polyester | Ribbon Structure: Double-Sided Weave'
  },
  {
    id: 'woven-edge',
    name: '02. Woven Edge Selvedge Satin',
    desc: 'Yeh ribbons custom looms par direct fixed width mein bante hain. Inki sides sealed hoti hain (slit nahi hoti), jiski wajah se zero fraying (dhage nikalna) hoti hai aur edges extreme soft hote hain.',
    specs: 'Edge Structure: Woven Selvedge | Premium Grade | Maximum Lifespan'
  },
  {
    id: 'slit-ultrasonic',
    name: '03. Ultrasonic Slit Satin',
    desc: 'Bade satin jumbo rolls ko high-frequency sound waves (Ultrasonic) ke zariye slice kiya jata hai. Slitting ke sath hi corners micro-weld ho jate hain jo cost-effective aur clean standard production deta hai.',
    specs: 'Edge Structure: Sealed Sound-Wave Cut | Commercial Grade Costing'
  }
];

const technicalTimeline = [
  { step: "01", title: "Substrate Tensioning", desc: "Satin rolls ko Flexo machine ke unwind station par load kiya jata hai jahan load-cells automatically ribbon ki tension set karte hain taake printing bleeding ya stretch na ho." },
  { step: "02", title: "Photopolymer Ink Transfer", desc: "Anilox rollers ke zariye specialized wash-proof polyamide inks ko custom rubber-stamp plates par spread karke exact pressure ke sath satin fabric par press kiya jata hai." },
  { step: "03", title: "Thermal Fixation (Oven Curing)", desc: "Printed ribbon lines ko 120°C se 140°C ke industrial heating tunnel se guzara jata hai taake ink pigments satin yarn ke core ke sath chemically bond ho jayein." },
  { step: "04", title: "Automated Loop & Fold", desc: "Continuous roll ko specialized sensory cutting equipment mein feed kiya jata hai jo cutting, centering aur end-folding ek hi micro-second operational cycle mein complete karta hai." }
];

export default function SatinLabelsPage() {
  const [activeType, setActiveType] = useState('double-face');
  const currentType = satinTypes.find(t => t.id === activeType) || satinTypes[0];

  return (
    <main className="border-gray-800 text-black min-h-screen selection:bg-black selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center px-4 md:px-10 py-12 md:py-20 border-b border-gray-200">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className={`${montserrat.className} text-blue-600 text-xs uppercase tracking-[0.3em] font-black block`}>
              Industrial Printing Infrastructure
            </span>
            <h1 className="text-4xl md:text-6xl font-[1000] tracking-tighter uppercase italic leading-none text-black">
              Precision Printed <br />
              <span className="text-blue-600">Satin Ribbons</span> <br />
              & Clothing Labels
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-lg font-medium leading-relaxed">
              Premium grade polyester filament silk substrates printed via high-speed rotary flexographic matrix. Guaranteed wash-resistant, fade-proof ink sublimation with ultra-soft edge seal profiles.
            </p>
            <div className="pt-2">
              <button className="bg-black hover:bg-gray-900 text-white font-black uppercase text-xs tracking-widest py-4 px-8 rounded-none -skew-x-12 transition-all duration-300 shadow-md">
                Request Sample Kit
              </button>
            </div>
          </div>

         {/* Right Product Showcase Box */}
<div className="lg:col-span-6 relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] bg-gray-50 border-2 border-black p-2 shadow-lg">
  
 

  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative overflow-hidden group">
    
    {/* Yahan apni image ka path add karein */}
    <img 
      src="/saitnbox.png" 
      alt="Flexographic Shingai 2+1 machine running white satin roll" 
      className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
    />

  </div>
</div>
        </div>
      </section>

      {/* 2. REAL MANUFACTURING PROCESS TIMELINE */}
      <section className="py-20 px-4 md:px-10 border-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <p className="text-blue-600 text-xs font-black uppercase tracking-widest">Engineering & Production Workflow</p>
            <h2 className="text-3xl md:text-4xl font-[900] uppercase italic tracking-tight text-black mt-1">Flexographic Ribbon Printing Line</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalTimeline.map((item, index) => (
              <div key={index} className="bg-white border border-gray-300 p-6 relative group hover:border-black transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[220px]">
                <div className="text-4xl font-[1000] italic text-gray-200 absolute top-4 right-4 group-hover:text-gray-300 transition-colors">
                  {item.step}
                </div>
                <div className="space-y-2 mt-4 text-left">
                  <h3 className="text-sm font-black uppercase tracking-wide text-black">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}