"use client";

import React from 'react';
import { Shirt, Footprints, Briefcase, Sparkles, Scissors, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const LabelApplications = () => {
  const industries = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Apparel & Garments",
      desc: "Premium main labels, center folds, and size tags for high-end fashion brands, streetwear, and everyday clothing."
    },
    {
    icon: <Shirt className="w-6 h-6" />,
    title: "Denim & Streetwear",
    desc: "High-density woven patches and durable labels designed specifically for jeans, heavy jackets, and urban streetwear."
  },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Bags & Accessories",
      desc: "Heavy-duty exterior tags and branding labels perfect for backpacks, luxury purses, and travel gear."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Home Textiles",
      desc: "Soft-texture satin and damask labels designed specifically for luxury bedding, towels, and home decor items."
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Independent Designers",
      desc: "Low minimum order quantities (MOQs) tailored specifically to support startup streetwear and boutique labels."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Industrial & Uniforms",
      desc: "Fade-resistant, heavy-wash care and content labels built for workwear, school uniforms, and corporate attire."
    }
  ];

  return (
    <section className="border-gray-800 py-20 px-4 md:px-6 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
            Industries We <span className="text-blue-600">Serve</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Our high-precision woven and printed labels are trusted across diverse textile sectors, delivering unmatched durability and premium branding.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LabelApplications;