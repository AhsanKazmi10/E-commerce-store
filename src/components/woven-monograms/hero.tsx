import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const Hero = ({ title, subtitle, bgImage }: HeroProps) => {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Background Image with Premium Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Accent Line */}
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
        
        {/* Main Heading (Bold & Italic Style) */}
        <h1 className="text-6xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-4 drop-shadow-2xl">
          {title}
        </h1>

        {/* Subtitle with Wide Tracking */}
        <p className="text-blue-400 text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-8">
          {subtitle}
        </p>

        {/* Decorative Badge */}
        <div className="inline-block px-4 py-1 border border-gray-800 rounded-full bg-black/50 backdrop-blur-md">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            Premium Manufacturing • Karachi
          </span>
        </div>
      </div>

      {/* 3. Bottom Fade to Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;