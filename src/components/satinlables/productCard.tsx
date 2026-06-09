"use client";

import { Montserrat } from "next/font/google";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Layers, Anchor, ScanBarcode, Flame, ArrowUpRight } from 'lucide-react';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } 
  }
};

const flexoCatalog = [
  {
    id: "satin-luxury",
    serial: "// STN-PRT",
    material: "SATIN FILAMENT",
    title: "LUSTER CARE TAGS",
    tagline: "Ultra-soft micro-print tags for luxury garment lines.",
    icon: Layers,
    imgSrc: "/sproduct.png",
    specs: { ink: "UV Resin", speed: "150 m/min" },
    finishing: {
      cutting: "Ultrasonic / Cold Cut",
      folding: "Center Fold, End Fold, Mitre"
    }
  },
  {
    id: "canvas-rugged",
    serial: "// CNV-PRT",
    material: "ORGANIC CANVAS",
    title: "PIGMENT BADGES",
    tagline: "Heavy-weave branding blocks built for intense stone-washing.",
    icon: Anchor,
    imgSrc: "/sproduct1.png",
    specs: { ink: "Matte Pigment", speed: "90 m/min" },
    finishing: {
      cutting: "Guillotine / Heavy Slit",
      folding: "Flat Cut, Frayed Border"
    }
  },
  {
    id: "taffeta-industrial",
    serial: "// TFT-PRT",
    material: "COATED NYLON",
    title: "TAFFETA TRACKING",
    tagline: "Paper-crisp polyamide composite optimized for variable data.",
    icon: ScanBarcode,
    imgSrc: "/sproduct2.png",
    specs: { ink: "Fast-Dry Thermal", speed: "200 m/min" },
    finishing: {
      cutting: "Heat Seal / Hot Cut",
      folding: "Continuous Roll, Dispenser Ready"
    }
  },
  {
    id: "damask-ribbon",
    serial: "// DMK-PRT",
    material: "DAMASK BASE",
    title: "OVERPRINT RIBBONS",
    tagline: "Structured matte sheen layers for high-contrast foil stamping.",
    icon: Flame,
    imgSrc: "/sproduct3.png",
    specs: { ink: "Metallic Foil / Screen", speed: "110 m/min" },
    finishing: {
      cutting: "Ultrasonic Slitting",
      folding: "Roll Form Only"
    }
  }
];

const ProfessionalPrintedAssets = () => {
  return (
    <section className="border-t border-black py-24 px-4 md:px-12 bg-white text-left">
      <div className="max-w-[1512px] mx-auto space-y-12">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-black">
          <div className="space-y-2">
            <span className={`${montserrat.className} text-[11px] font-black tracking-[0.4em] text-blue-700 uppercase block`}>
              [ FLEXO PRODUCTION SPECIFICATION ]
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase leading-none">
              PRINTED ASSETS SUITE
            </h2>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {flexoCatalog.map((item) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.id}
                variants={cardFadeUp}
                className="group border-2 border-black bg-white flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(29,78,216,0.2)]"
              >
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden border-b-2 border-black">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 50vw, 25vw"
                  />
                  
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-blue-700 font-mono text-[9px] font-black tracking-widest uppercase">
                      <Icon size={10} strokeWidth={3} />
                      {item.material}
                    </div>
                    <h3 className="text-sm md:text-lg font-black text-black tracking-tight uppercase flex items-center justify-between">
                      {item.title}
                      <ArrowUpRight size={14} className="text-blue-700" />
                    </h3>
                    {/* Tagline yahan add kardi hai wapis */}
                    <p className="text-[11px] text-black/60 font-medium leading-tight">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-black/10">
                    <div className="font-mono text-[10px] space-y-2 bg-neutral-50 p-3 rounded-none border border-black/10">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold text-black/50 uppercase">CUTTING</span>
                        <span className="text-black font-bold tracking-tight">{item.finishing.cutting}</span>
                      </div>
                      <div className="flex flex-col border-t border-black/10 pt-1.5">
                        <span className="text-[8px] font-bold text-black/50 uppercase">FOLDING</span>
                        <span className="text-black font-bold tracking-tight">{item.finishing.folding}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalPrintedAssets;