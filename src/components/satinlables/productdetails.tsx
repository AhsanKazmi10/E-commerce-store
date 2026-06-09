"use client";

import { Montserrat } from "next/font/google";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Target, Anchor, Compass } from 'lucide-react';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

// --- STRICT TYPESAFE FRAMER MOTION VARIANTS ---
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] // Valid numeric array for cubic-bezier
    } 
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const lineExtend: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

const substrateCatalogData = [
  {
    id: "satin-substrate",
    serial: "// STN-01",
    title: "SATIN FILAMENT RIBBON BASE",
    tagline: "Double-sided high-luster silk finish for luxury garment lines.",
    badge: "PREMIUM SOFT SELECTION",
    icon: ShieldCheck,
    layoutStyle: "square", 
    metrics: [
      { spec: "Base Composition", value: "100% Pure Polyester Filament Structure" },
      { spec: "Slitting Widths", value: "15mm, 20mm, 25mm, 35mm, 50mm Industrial Rolls" },
      { spec: "Primary Utility", value: "Luxury Haute Couture, Intimate Apparel, Premium Sleepwear" },
      { spec: "Ink Compatibility", value: "High-Drying UV Flexo Inks & Solid Resin Overlays" }
    ],
    technicalInsight: "Engineered specifically to prevent skin friction on edge cuts. The double-sided premium silk shield allows microscopic font sizes and complex care icons to print clearly without ink bleeding.",
    imgSrc: "/saitnribon.png",
    imgAlt: "Premium silk satin flexo printing ribbon roll"
  },
  {
    id: "canvas-substrate",
    serial: "// CNV-02",
    title: "ORGANIC CANVAS GRID BASE",
    tagline: "Heavy-duty structured cotton substrate built for rugged performance.",
    badge: "STRUCTURAL HIGH-GSM LINE",
    icon: Anchor,
    layoutStyle: "wide",
    metrics: [
      { spec: "Base Composition", value: "Coarse Heavy-Duty Organic Cotton Weave" },
      { spec: "Slitting Widths", value: "30mm, 40mm, 50mm, 75mm, 100mm Custom Cuts" },
      { spec: "Primary Utility", value: "Denim Waistband Badges, Workwear Uniforms, Heavy Utility Gear" },
      { spec: "Ink Compatibility", value: "Low Viscosity Matte Inks & Industrial Pigment Sets" }
    ],
    technicalInsight: "Constructed to survive aggressive industrial enzyme stone-washing cycles. Offers an authentic, raw, and high-textured premium vintage finish suitable for external branding blocks.",
    imgSrc: "/saitnribon1.png",
    imgAlt: "Heavy duty organic canvas substrate sample"
  },
  {
    id: "taffeta-substrate",
    serial: "// TFT-03",
    title: "COATED NYLON TAFFETA LINE",
    tagline: "Crisp polyamide composite optimized for extreme mass production scales.",
    badge: "INDUSTRIAL HIGH-RUN PERFORMANCE",
    icon: Target,
    layoutStyle: "square",
    metrics: [
      { spec: "Base Composition", value: "Shielded Anti-Fray Polyamide Composite" },
      { spec: "Slitting Widths", value: "12mm, 15mm, 20mm, 30mm, 45mm Slit Rails" },
      { spec: "Primary Utility", value: "Mass-Market Size Indicators, Variable Tracking Barcodes" },
      { spec: "Ink Compatibility", value: "Instant-Dry Fast Running Press Formulation Inks" }
    ],
    technicalInsight: "Features a paper-like crisp feel with extreme dimensional stability under heat. The specialized chemical surface forces immediate inline tracking ink drying during ultra high-speed rotary runs.",
    imgSrc: "/saitnribon2.png",
    imgAlt: "Coated nylon taffeta industrial ribbon roll"
  },
  {
    id: "damask-substrate",
    serial: "// DMK-04",
    title: "HIGH-DENSITY DAMASK RIBBON",
    tagline: "Structured woven base layers for elite brand logo overprinting.",
    badge: "COUTURE PRODUCTION STANDARD",
    icon: Compass,
    layoutStyle: "wide",
    metrics: [
      { spec: "Base Composition", value: "Dense Ground Over-Weave Micro-Ribbon" },
      { spec: "Slitting Widths", value: "25mm, 35mm, 50mm, 65mm, 80mm Standard" },
      { spec: "Primary Utility", value: "Bespoke Formal Suit Accents, Outerwear Pocket Flags" },
      { spec: "Ink Compatibility", value: "Metallic Foil Heat Transfer & Multi-Layer Screen Overprints" }
    ],
    technicalInsight: "Combines a dense structural background weave with a subtle luxury matte sheen. Formulated specifically for high-contrast metallic logo stamping without disrupting the underlying thread direction.",
    imgSrc: "/saitnribon3.png",
    imgAlt: "Luxury premium damask overprinting substrate sample"
  }
];

const MaterialSubstrateSuite = () => {
  return (
    <section className="border-gray-800 py-20 px-6 md:px-16 text-left selection:bg-blue-600 selection:text-white">
      <div className="max-w-[1440px] mx-auto space-y-36">
        
        {/* --- INDUSTRIAL ULTRA-BOLD HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b-2 border-black pb-16">
          <div className="lg:col-span-9 space-y-4">
            <span className={`${montserrat.className} text-sm font-extrabold tracking-[0.35em] text-blue-700 uppercase block`}>
              [ MATERIAL SPECIFICATION ENGINE ]
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none">
              FLEXOGRAPHIC SUBSTRATES
            </h2>
          </div>
          
        </div>

        {/* --- ASYMMETRIC DYNAMIC MATERIAL BLOCKS --- */}
        <div className="space-y-44">
          {substrateCatalogData.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={item.id}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
              >
                {/* COLUMN 1: Industrial Blueprint */}
                <div className={`lg:col-span-4 space-y-6 ${isEven ? 'lg:order-1 lg:border-r' : 'lg:order-3 lg:border-l'} border-black lg:px-6`}>
                  <motion.span variants={textFadeUp} className="font-mono text-sm font-black tracking-widest text-blue-700 block">
                    {item.serial}
                  </motion.span>
                  <motion.div variants={textFadeUp} className="inline-block bg-blue-700 text-white text-xs font-black tracking-widest uppercase px-4 py-1.5 font-mono">
                    {item.badge}
                  </motion.div>
                  <motion.div variants={textFadeUp} className="pt-6 space-y-3">
                    <div className="flex items-center gap-2.5 text-black">
                      <IconComponent size={20} className="text-black shrink-0" />
                      <h4 className="font-black text-sm uppercase tracking-wider font-mono">LAB DATA SUMMARY</h4>
                    </div>
                    <p className="text-sm text-black leading-relaxed font-medium">
                      {item.technicalInsight}
                    </p>
                  </motion.div>
                </div>

                {/* COLUMN 2: Raw Asset */}
                <div className={`lg:col-span-3 ${isEven ? 'lg:order-2' : 'lg:order-2'}`}>
                  <motion.div 
                    variants={imageReveal}
                    className={`relative w-full ${item.layoutStyle === 'square' ? 'aspect-square' : 'aspect-[4/5]'} border-2 border-black bg-black overflow-hidden`}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                      sizes="(max-w-1024px) 100vw, 25vw"
                    />
                  </motion.div>
                </div>

                {/* COLUMN 3: Technical Spec Table */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                  <motion.div variants={textFadeUp} className="space-y-2">
                    <h3 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight leading-none">
                      {item.title}
                    </h3>
                    <p className="text-md text-blue-700 font-bold tracking-tight font-sans">
                      {item.tagline}
                    </p>
                  </motion.div>

                  {/* Blueprint Layout Matrix Table */}
                  <div className="relative font-mono text-sm">
                    {/* Upper Line Animate */}
                    <motion.div variants={lineExtend} className="h-[2px] bg-black w-full origin-left" />
                    
                    <div className="divide-y-2 divide-black/10">
                      {item.metrics.map((metric, idx) => (
                        <motion.div 
                          variants={textFadeUp} 
                          key={idx} 
                          className="grid grid-cols-12 py-4 gap-4 items-center group hover:bg-gray-50/50 px-1 transition-colors"
                        >
                          <div className="col-span-4 font-black text-black/40 uppercase tracking-wider text-[11px] leading-tight">
                            {metric.spec}
                          </div>
                          <div className="col-span-8 text-black text-left font-sans font-bold text-sm md:text-base tracking-tight">
                            {metric.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Lower Line Animate */}
                    <motion.div variants={lineExtend} className="h-[2px] bg-black w-full origin-left mt-2" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MaterialSubstrateSuite;