"use client";

import React from 'react';

export default function FinalResultSection() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="p-10 md:p-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] font-extrabold tracking-[0.24em] text-blue-700 uppercase font-['Cinzel']">
            ◆ Final Ensemble Result
          </span>
          <div className="flex-1 h-[1px] bg-blue-600/30"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Container (Left Side) */}
          <div className="lg:col-span-5 relative w-full rounded-sm overflow-hidden bg-gray-50 border border-gray-200 shadow-sm">
            {/* YAHAN APNI FINAL SUIT KI IMAGE KA PATH DALEIN */}
            <img 
              src="/suit.png" 
              alt="Complete Suit with Neckline, Cuff, and Placket Patterns" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text & Details (Right Side) */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-extrabold tracking-[0.2em] text-blue-700 mb-4 font-['Cinzel']">
              MASTER PATTERN INTEGRATION
            </div>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold font-['Playfair_Display'] text-gray-900 mb-6 leading-tight">
              The Complete Geometric Application
            </h2>
            <p className="text-[1.05rem] leading-8 text-gray-600 mb-10">
              Witness the seamless integration of our master patterns. This final visualization demonstrates how the intricate neckline, precision-crafted placket band, and detailed cuffs come together to create a unified, luxurious garment ready for export.
            </p>

            {/* Pattern Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-extrabold tracking-[0.2em] text-gray-500 font-['Cinzel']">01 / NECKLINE</div>
                <div className="h-[1px] w-8 bg-blue-600 mb-2"></div>
                <p className="text-[0.95rem] leading-6 text-gray-600">
                  Perfectly aligned collar and front neck pattern creating a striking focal point.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-extrabold tracking-[0.2em] text-gray-500 font-['Cinzel']">02 / PLACKET BAND</div>
                <div className="h-[1px] w-8 bg-blue-600 mb-2"></div>
                <p className="text-[0.95rem] leading-6 text-gray-600">
                  Continuous geometric border running seamlessly down the front patti.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-extrabold tracking-[0.2em] text-gray-500 font-['Cinzel']">03 / CUFFS</div>
                <div className="h-[1px] w-8 bg-blue-600 mb-2"></div>
                <p className="text-[0.95rem] leading-6 text-gray-600">
                  Matching geometric borders applied with laser-cut precision on the sleeves.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-extrabold tracking-[0.2em] text-gray-500 font-['Cinzel']">04 / DAMAN</div>
                <div className="h-[1px] w-8 bg-blue-600 mb-2"></div>
                <p className="text-[0.95rem] leading-6 text-gray-600">
                  The grand finishing border at the hem, completing the regal look of the suit.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}