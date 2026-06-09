'use client';
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] });

const HBSupplyMap = () => {
  const brandStrengths = [
    { title: "Customized Woven Labels", desc: "99% accurate high-density threads" },
    { title: "Merrowed & PVC Patches", desc: "Classic overlock & tactical builds" },
    { title: "Leather-Embossed Patches", desc: "Deep heat-press premium stamping" },
    { title: "Specialized Needle Looms", desc: "International quality standards" }
  ];

  return (
    <section className="bg-gray-800 text-white py-16 md:py-24 px-4 md:px-10 border-t border-gray-900 overflow-hidden relative">
      
      {/* Premium Cyber Grid Background (No Copy Vibes) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* --- 🌟 Brand Header Infrastructure --- */}
        <div className="text-center space-y-4 mb-14 max-w-3xl">
          <p className={`${montserrat.className} text-[#00E5FF] text-xs uppercase tracking-[0.3em] font-black`}>
            H.B Patches Logistics
          </p>
          <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase italic leading-none text-white">
            EXPERT CRAFTED, <br />
            <span className="text-blue-500">FAST DELIVERY FROM BOTH COASTS</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
        </div>

        {/* --- 🗺️ Custom H.B Tech Map Canvas --- */}
        <div className="w-full relative aspect-[21/9] min-h-[320px] md:min-h-[500px] bg-[#020406] rounded-xl border border-gray-800 p-2 overflow-hidden flex items-center justify-center shadow-2xl">
          
          {/* Main Map Background Asset */}
          <Image 
            src="/map.jpg "// Aapka background vector grid map
            alt="H.B Patches Shipping Grid"
            fill
            className="object-cover opacity-[0.65] blue-matrix-filter transform-gpu"
            priority
          />

          {/* Clean Overlay for Premium Dark Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-black/20 pointer-events-none" />

          {/* 📍 Custom Anchor Node 1: Seattle (Woven Icon Spec) */}
          <div className="absolute top-[25%] left-[22%] flex flex-col items-center group">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#00E5FF] bg-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-transform duration-300 group-hover:scale-110">
              <span className="text-[10px] md:text-[11px] font-black text-[#00E5FF]">HB</span>
            </div>
            <span className="text-[10px] font-black tracking-wider uppercase bg-black/80 px-2 py-0.5 mt-2 border border-gray-800 rounded-sm">Seattle</span>
          </div>

          {/* 📍 Custom Anchor Node 2: Los Angeles (Hub Base) */}
          <div className="absolute bottom-[35%] left-[18%] flex flex-col items-center group">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-blue-500 bg-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
              <span className="text-[10px] md:text-[11px] font-black text-blue-400">HB</span>
            </div>
            <span className="text-[10px] font-black tracking-wider uppercase bg-black/80 px-2 py-0.5 mt-2 border border-gray-800 rounded-sm">Los Angeles</span>
          </div>

          {/* 📍 Custom Anchor Node 3: Chicago (Midwest Node) */}
          <div className="absolute top-[38%] left-[52%] flex flex-col items-center group">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-white bg-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-110">
              <span className="text-[10px] md:text-[11px] font-black text-white">HB</span>
            </div>
            <span className="text-[10px] font-black tracking-wider uppercase bg-black/80 px-2 py-0.5 mt-2 border border-gray-800 rounded-sm">Chicago</span>
          </div>

          {/* 📍 Custom Anchor Node 4: New York (East Coast Large Hub) */}
          <div className="absolute top-[30%] right-[22%] flex flex-col items-center group">
            <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#00FF66] bg-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-transform duration-300 group-hover:scale-110">
              <span className="text-[11px] md:text-[12px] font-black text-[#00FF66]">H.B</span>
            </div>
            <span className="text-[10px] font-black tracking-wider uppercase bg-black/80 px-2 py-0.5 mt-2 border border-gray-800 rounded-sm">New York</span>
          </div>

          {/* 📍 Custom Anchor Node 5: Miami (Southeastern Depot) */}
          <div className="absolute bottom-[22%] right-[28%] flex flex-col items-center group">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-yellow-500 bg-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-transform duration-300 group-hover:scale-110">
              <span className="text-[10px] md:text-[11px] font-black text-yellow-500">HB</span>
            </div>
            <span className="text-[10px] font-black tracking-wider uppercase bg-black/80 px-2 py-0.5 mt-2 border border-gray-800 rounded-sm">Miami</span>
          </div>

          {/* 🏆 Bottom Left: H.B Excellence Badge */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-[#0A0F1C]/90 backdrop-blur-md border border-gray-800 p-4 flex items-center gap-3 rounded-none -skew-x-12 shadow-2xl">
            <div className="w-1.5 h-10 bg-blue-600 shrink-0" />
            <div className="text-left leading-none">
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">H.B Quality Award</p>
              <p className="text-[13px] text-white font-[1000] uppercase tracking-tight italic mt-1">
                CRAFTSMANSHIP <span className="text-blue-500">& QUALITY</span>
              </p>
            </div>
          </div>

        </div>

        {/* --- 🛠️ Bottom Clean Grid Matrix Features --- */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {brandStrengths.map((strength, idx) => (
            <div 
              key={idx} 
              className="bg-[#0A0F1C] border border-gray-800 p-5 rounded-none flex items-start gap-4 transition-all duration-300 hover:border-blue-600 group"
            >
              {/* Slanted Steel Checkbox */}
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600/10 text-blue-500 rounded-none flex items-center justify-center -skew-x-12 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>

              <div className="space-y-1 text-left">
                <h4 className="text-sm font-black uppercase tracking-wide text-white italic">
                  {strength.title}
                </h4>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-tight">
                  {strength.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HBSupplyMap;