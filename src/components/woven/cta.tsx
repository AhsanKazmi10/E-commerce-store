"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WovenCTA = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Box Container */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-16 shadow-sm text-center space-y-8 max-w-5xl mx-auto">
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Let's Get Started
          </h2>

          {/* Professional Paragraph */}
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Transform any brand into a tangible reality with our custom woven labels and patches, available for all products and sizes with thread-level precision.
          </p>

          {/* Action Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            {/* Primary Button */}
            <button className="w-full sm:w-auto bg-[#336699] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-100">
              Design Your Label Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Outline Button */}
            <button className="w-full sm:w-auto bg-white border border-[#336699] text-[#336699] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 group">
              Request Woven Patches
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Bottom Trust Badges / Checkmarks */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-6 text-slate-900 font-bold text-xs md:text-sm">
            
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-900" />
              <span>Certified Thread Accuracy</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-900" />
              <span>Free & Fast Global Delivery</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-900" />
              <span>100% Quality Satisfaction</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WovenCTA;