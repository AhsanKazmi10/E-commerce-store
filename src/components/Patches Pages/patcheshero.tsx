'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Production aur showcase slider images
const sliderImages = [
  "/slider-1.png", // Aapki wide cinematic workshop picture
  "/slider-2.png", 
  "/slider-3.png", 
]

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide logic (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className='w-full relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden flex items-center justify-center bg-slate-950'>
      
      {/* Dynamic Background Slider with Professional Overlay */}
      <div className="absolute inset-0 z-0 brightness-200">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className='absolute inset-0'
            style={{
              backgroundImage: `url(${sliderImages[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
        {/* Cinematic dark overlay covering the image for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />
      </div>

      {/* Content Area */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
        <div className='max-w-4xl mx-auto flex flex-col items-center text-center'>
          
          {/* Breadcrumb Navigation - Dark Blue Theme */}
          <motion.div 
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-900/30 mb-6 text-xs sm:text-sm font-medium tracking-wide'
          >
            <Link href="/" className='text-slate-400 hover:text-blue-400 transition-colors duration-300'>
              Home
            </Link>
            <span className='text-slate-600'>/</span>
            <span className='text-blue-500 font-semibold'>Woven Patches</span>
          </motion.div>

          {/* Premium Headline without adil brothers */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black italic text-white leading-[1.1] tracking-tight uppercase mb-5 opacity-50'
          >
            HIGH-DENSITY <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Premium Patches
            </span>
          </motion.h1>
          
          {/* Sub-headline / Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed mb-8 drop-shadow-md"
          >
            Discover the pinnacle of woven patch artistry. Engineered for ultimate structural detail and heavy-duty durability, tailored perfectly for corporate identity and professional uniforms.
          </motion.p>

          {/* Action Button - Royal Blue Theme */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
          <button 
  onClick={() => {
    const element = document.getElementById('patchesShowcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold uppercase text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-xl shadow-lg shadow-blue-950/50 transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
>
  Explore Collection
</button>
          </motion.div>

        </div>
      </div>

      {/* Slider Dots Indicator - Blue Pill Shape */}
      <div className="absolute bottom-6 flex gap-2.5 z-20">
        {sliderImages.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-500 rounded-full cursor-pointer border-none outline-none ${
              index === currentIndex ? 'w-10 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
    </section>
  )
}

export default Hero