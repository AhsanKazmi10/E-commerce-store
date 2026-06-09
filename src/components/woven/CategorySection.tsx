"use client";
import { Great_Vibes, Montserrat } from "next/font/google";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Layers, HelpCircle, FileText, Settings, ShieldCheck } from 'lucide-react';
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const labelTypesData = [
  {
    id: "main-label",
    title: "1. Main Branding Labels (Identity)",
    tagline: "The primary anchor of your brand's premium perception.",
    useCase: "Positioned inside the back neck area or waistbands of premium garments like jackets, shirts, and hoodies.",
    guide: "Engineered using high-density 50-denier Damask weave. This allows intricate logo details and sharp fonts to be rendered smoothly without causing any neck irritation or skin scratches.",
    imgSrc: "/clasic1.png",
    imgAlt: "Premium high-density damask woven main label sample",
    badge: "Brand Face",
    features: [
      { icon: Award, label: "High-Density Weave" },
      { icon: ShieldCheck, label: "Skin-Friendly Edges" }
    ]
  },
  {
    id: "size-label",
    title: "2. Size Labels (Navigation)",
    tagline: "Sizing accuracy presented in a compact, sleek format.",
    useCase: "Stitched directly underneath the main label or inserted into the side seam as a loop.",
    guide: "Typically produced in 12mm to 15mm widths using a Loop Fold (Center Fold) style. They display clear alphanumeric sizes (S, M, L, XL) or specific waist/chest measurements with high contrast contrast colors.",
    imgSrc: "/clasic2.png",
    imgAlt: "Woven size label loop fold sample",
    badge: "Navigation",
    features: [
      { icon: Layers, label: "Loop Fold Design" },
      { icon: Settings, label: "Compact Format" }
    ]
  },
  {
    id: "care-label",
    title: "3. Care & Composition Labels (Instruction)",
    tagline: "Legal compliance and wash care guidance that lasts a lifetime.",
    useCase: "Sewn into the lower left inner side seam of the garment to keep it discreet yet fully accessible.",
    guide: "Contains precise material composition percentages (e.g., 100% Organic Cotton) and international washing symbols. Must be woven or printed to survive harsh industrial laundry cycles without fading.",
    imgSrc: "/clasic3.png",
    imgAlt: "Textile care and composition instruction label sample",
    badge: "Compliance",
    features: [
      { icon: FileText, label: "Wash-Resistant" },
      { icon: HelpCircle, label: "International Symbols" }
    ]
  }
];

const WovenTypesCatalog = () => {
  return (
    <section className="border-gray-50 py-24 space-y-32">
      {/* Main Section Header */}
      <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
        <span className={`${montserrat.className} text-sm lg:text-lg font-mono font-bold text-[#2563EB] tracking-[0.25em] uppercase`}>
          Product Classification
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Garment Label Categories & Technical Specifications
        </h2>
        <div className="h-1 w-20 bg-[#2563EB] mx-auto mt-4 rounded-full" />
      </div>

      {/* Alternating Category Sections */}
      <div className="space-y-40">
        {labelTypesData.map((type, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={type.id}
              className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              {/* Image Column - Alternates Left/Right on Desktop */}
              <div className={`w-full lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group"
                >
                  <Image
                    src={type.imgSrc}
                    alt={type.imgAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-w-1024px) 100vw, 45vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
                      {type.badge}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Content Column */}
              <div className={`w-full lg:col-span-7 space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                    {type.title}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg">
                    {type.tagline}
                  </p>
                </div>

                <hr className="border-slate-100" />

                {/* Technical Breakdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                      Primary Use Case
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {type.useCase}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                      Technical Guide
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {type.guide}
                    </p>
                  </div>
                </div>

                {/* Dynamic Feature Badges */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {type.features.map((feat, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-slate-700 text-xs font-medium shadow-sm"
                    >
                      <feat.icon size={16} className="text-blue-500" />
                      <span>{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WovenTypesCatalog;