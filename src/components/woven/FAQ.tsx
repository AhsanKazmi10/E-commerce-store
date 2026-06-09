"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LabelFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ)?",
      a: "Our standard MOQ for custom woven labels is 500 to 1,000 pieces per design, depending on the thread density and label specifications."
    },
    {
      q: "What is the turnaround time for international orders?",
      a: "Sampling takes 3-5 working days. Once the digital mock-up or physical sample is approved, bulk production takes 7-10 days, plus 4-6 days for global shipping."
    },
    {
      q: "Do you provide physical or digital pre-production samples?",
      a: "Yes! We always provide a high-resolution digital mock-up for free. Physical woven samples can also be shipped before bulk production upon request."
    },
    {
      q: "Which global shipping carriers do you use?",
      a: "We ship worldwide using premium express carriers including DHL, FedEx, and UPS to ensure safe, tracked, and on-time doorstep delivery."
    }
  ];

  return (
    <section className="border-gray-800 py-20 px-4 md:px-6 border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Short Header */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Quick Answers for Global Brands</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors text-sm md:text-base gap-4"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-slate-500 text-sm leading-relaxed pl-13 border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LabelFAQ;