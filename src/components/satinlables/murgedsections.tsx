'use client';

import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { 
  Truck, ShieldCheck, Palette, Headphones, 
  ChevronDown, ChevronUp, Zap, Settings, CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

const trustBadges = [
  { icon: Truck, title: 'Worldwide Logistics', label: 'Global supply chain' },
  { icon: ShieldCheck, title: 'ISO Compliance', label: 'Certified quality assurance' },
  { icon: Palette, title: 'Precision Weaving', label: 'High-density output' },
  { icon: Headphones, title: 'Technical Support', label: '24/7 engineering aid' },
];

const whyUs = [
  { num: '01', title: 'Industrial Grade Materials', desc: 'Premium satin, taffeta, and reinforced woven composites.' },
  { num: '02', title: 'Precision Branding', desc: 'High-definition digital reproduction for sharp, crisp logos.' },
  { num: '03', title: 'Scalable Production', desc: 'Optimized throughput for enterprise-level inventory needs.' },
  { num: '04', title: 'Rapid Turnaround', desc: 'Expedited manufacturing cycles for market-ready delivery.' },
];

const faqs = [
  { q: 'What is the minimum order quantity?', a: 'Our standard MOQ starts at 100 units, calibrated to your specific substrate and finishing requirements.' },
  { q: 'Do you offer custom logo digitizing?', a: 'Yes, we provide full technical support—from vector file preparation to final weaving proof approval.' },
  { q: 'What is the lead time for production?', a: 'Standard production takes 5–7 business days, with expedited options available for urgent manufacturing.' },
];

export default function ProfessionalStore() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className={`${montserrat.className} bg-white text-neutral-900 selection:bg-blue-600 selection:text-white`}>
      
      {/* 1. TRUST BAR */}
      <section className="py-12 border-b border-neutral-100 bg-neutral-50/50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map((item, i) => (
            <motion.div whileHover={{ y: -5 }} key={i} className="flex flex-col items-center text-center">
              <item.icon className="w-6 h-6 mb-3 text-blue-600" strokeWidth={1.5} />
              <h3 className="font-bold uppercase text-[10px] tracking-widest mb-1">{item.title}</h3>
              <p className="text-neutral-400 text-[9px] uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. WHY US */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Operational Excellence</span>
          <h2 className="text-4xl md:text-5xl font-[900] uppercase tracking-tighter mt-2">Engineered For Quality</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ borderColor: "#2563eb" }}
              className="border border-neutral-200 p-8 group transition-all duration-300"
            >
              <span className="text-neutral-200 font-black text-4xl group-hover:text-blue-600 transition-colors">{item.num}</span>
              <h3 className="font-black uppercase text-sm mt-6 mb-3">{item.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FAQ */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">Technical Specifications</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-neutral-800">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 font-bold uppercase text-[11px] tracking-widest hover:text-blue-400 transition"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-neutral-400 text-xs leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONVERSION GATE (Pre-Footer) */}
      <section className="bg-white pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Visual Process Tracker */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              { icon: Zap, title: "1. Upload Specs", desc: "Share your vector blueprint or design file." },
              { icon: Settings, title: "2. Engineering Review", desc: "Our technicians calibrate weave settings." },
              { icon: CheckCircle2, title: "3. Precision Production", desc: "High-density output, ready for shipping." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h4 className="font-black text-sm uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Heavy CTA Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black text-white p-16 md:p-24 rounded-[2.5rem] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-[900] uppercase tracking-tighter mb-8 leading-[1.1]">
                Ready to <span className="text-blue-500 italic">weave</span> your brand identity?
              </h2>
              <p className="text-neutral-400 text-sm mb-12 font-medium">
                Join leading apparel brands who trust our industrial weaving units for their labels and patches.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Start Prototype
                </button>
                <button className="bg-transparent border border-neutral-700 text-white px-10 py-5 font-black uppercase tracking-widest text-[11px] hover:border-white transition-all duration-300">
                  Talk to Engineering
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER YAHAN SE AAPKA APNA FOOTER SHURU HOGA */}
    </main>
  );
}