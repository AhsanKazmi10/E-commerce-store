'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function WovenLabelsHero() {
  return (
    <section className="relative w-full bg-[#050505] overflow-hidden py-20 sm:py-28 md:py-36 lg:py-48 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center">
      
      {/* 🔥 FIXED: Sirf ek backgroundSize use hoga */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/whero-1.png')] bg-center bg-no-repeat bg-scroll lg:bg-fixed"
        style={{ 
          filter: 'grayscale(10%) brightness(300%)',
          backgroundSize: 'cover'  // Sirf yahan ek baar
        }}
      />

      {/* Mobile ke liye CSS fix */}
      <style jsx>{`
        @media (max-width: 768px) {
          div:first-child {
            background-size: contain !important;
          }
        }
      `}</style>

      {/* Black Overlays */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/65 lg:bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 z-10" />

      {/* Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        <div className="flex flex-col items-center text-center w-full">
          
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-6 bg-white/5 backdrop-blur-md px-4 sm:px-5 py-1.5 border border-white/10"
          >
            <Link href="/" className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-gray-300 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-600 text-[9px] sm:text-[10px]">/</span>
            <span className="text-blue-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
              Woven Labels
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic text-white uppercase tracking-tighter leading-none break-words">
              Woven <span className="text-blue-600">Labels</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 sm:mt-8 max-w-xl sm:max-w-2xl text-gray-300 font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.12em] sm:tracking-[0.18em] leading-relaxed px-2"
          >
            Premium weaving solutions for high-end fashion branding. <br className="hidden sm:inline" />
            Crafted with precision, delivered with excellence.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12 sm:mt-16 w-[2px] h-12 sm:h-16 bg-gradient-to-b from-blue-600 to-transparent"
          />

        </div>
      </div>
    </section>
  )
}

export default WovenLabelsHero