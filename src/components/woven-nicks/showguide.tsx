"use client";

import React from 'react';

export default function GalleryAndNickSection() {
  // Aapke fonts aur design consistency ke mutabiq images
  const galleryImages = [
    { title: 'Neckline Nick', src: '/nick1.png' },
    { title: 'Cuff Pattern', src: '/cuf1.png' },
    { title: 'Daman Border', src: '/daman1.png' },
    { title: 'Placket Band', src: '/patti1.png' }
  ];

  const items = [
    { num: "01", name: "NECKLINE", title: "The Gala Nick", desc: "A full embroidered neckline panel — the centrepiece of any suit." },
    { num: "02", name: "CUFFS", title: "The Kuf Nick", desc: "Matching sleeve cuff panels — a pair of precisely embroidered bands." },
    { num: "03", name: "PLACKET BAND", title: "The Patti Nick", desc: "A vertical front band running down the garment — structured and bold." },
    { num: "04", name: "HEM BORDER", title: "The Daman Nick", desc: "A wide embroidered border for the hem — maximum impact." }
  ];

  return (
    <section className="bg-gray-50">
      {/* 1. Photo Gallery Section */}
      <div className="p-10 md:p-16 border-b border-gray-200">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[10px] font-extrabold tracking-[0.24em] text-blue-700 uppercase font-['Cinzel']">◆ The Craft in Pictures</span>
          <div className="flex-1 h-[1px] bg-blue-600/30"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((item, i) => (
            <div key={i} className="aspect-[3/4] bg-white border border-gray-200 relative group overflow-hidden cursor-pointer hover:border-blue-600 transition-all">
              {/* Public folder se images load ho rahi hain */}
              <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[10px] font-extrabold tracking-[0.12em] text-gray-900 uppercase bg-white/90 px-2 py-1">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. What is a Nick (1234 Section) */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {items.map((item, index) => (
          <div key={index} className="p-10 border-r border-gray-200 bg-white hover:bg-gray-50 transition-all border-b md:border-b-0">
            <div className="text-5xl font-black text-blue-600/20 mb-6">{item.num}</div>
            <div className="text-[10px] font-extrabold tracking-[0.2em] text-blue-700 mb-3 font-['Cinzel']">{item.name}</div>
            <div className="text-[1.3rem] font-extrabold font-['Playfair_Display'] text-gray-900 mb-4">{item.title}</div>
            <p className="text-[0.95rem] leading-7 text-gray-700 font-medium italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}