"use client";

import React from 'react';

export default function StandardsSection() {
  const standards = [
    { title: "MÜLLER PRECISION", desc: "Crafted using industrial-grade needle looms for perfect geometric consistency." },
    { title: "LASER CUT FINISH", desc: "Precision-engineered laser cutting for sharp, clean edges without the need for printing." },
    { title: "GLOBAL EXPORT", desc: "Tailored to meet international textile safety and quality standards." },
    { title: "BESPOKE WEAVE", desc: "Fully customizable pattern logic for unique garment branding." }
  ];

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="p-10 md:p-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] font-extrabold tracking-[0.24em] text-blue-700 uppercase font-['Cinzel']">◆ Technical Standards</span>
          <div className="flex-1 h-[1px] bg-blue-600/30"></div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {standards.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-blue-600/20 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <div className="text-[10px] font-extrabold tracking-[0.2em] text-blue-700 mb-2 font-['Cinzel']">{item.title}</div>
                <div className="text-[1.1rem] font-bold font-['Playfair_Display'] text-gray-900 mb-2">{item.title}</div>
                <p className="text-[0.95rem] leading-7 text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}