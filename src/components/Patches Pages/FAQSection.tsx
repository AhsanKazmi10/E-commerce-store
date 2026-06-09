'use client';

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Mail, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the MOQ for custom patches?",
    answer: "Minimum order quantity is 50 pieces per design. Small sample setups can also be discussed."
  },
  {
    question: "How long does production and delivery take?",
    answer: "Production takes 7-10 working days, and worldwide shipping via DHL/FedEx takes 3-5 days."
  },
  {
    question: "Which backing options can I choose?",
    answer: "We offer Iron-on (Heat Seal), traditional Sew-on, Velcro (Hook & Loop), and Premium Leather bases."
  },
  {
    question: "What file formats do you accept for logos?",
    answer: "We accept AI, PDF, EPS, and high-resolution PNG or JPG images for accurate cutting."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-gray-800 py-16 px-4 sm:px-6 border-t border-slate-100">
      {/* Chota aur centered container */}
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Header Block */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5">
            <HelpCircle size={14} className="text-blue-600" />
            <p className="text-blue-600 font-black tracking-widest uppercase text-[20px]">FAQ</p>
          </div>
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">
            Have Any <span className="text-blue-600">Questions?</span>
          </h2>
        </div>

        {/* FAQ List - Single Row & Chota Layout */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-slate-50 border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-blue-200 bg-white shadow-md shadow-blue-50/30' : 'border-slate-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                >
                  <h3 className="text-sm font-bold text-slate-900 pr-4">
                    {item.question}
                  </h3>
                  <span className={`text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={16} />
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 sm:p-5 pt-0 border-t border-slate-100/50">
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact Footer Cards - Compact Style */}
        </div>
    </section>
  );
};

export default FAQSection;