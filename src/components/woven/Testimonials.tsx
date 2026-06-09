"use client";

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LabelTestimonials = () => {
  const reviews = [
    {
      name: "Ahmed Raza",
      role: "Founder, UrbanThread Apparel",
      rating: 5,
      comment: "H-B Enterprises made our main damask labels, and the thread-level precision is unbelievable. Even the smallest text in our logo is crisp and readable. Highly recommended for clothing brands!",
      tag: "Main Woven Labels"
    },
    {
      name: "Kamran Malik",
      role: "Production Manager, Heritage Denim",
      rating: 5,
      comment: "We ordered high-density woven patches for our winter jacket collection. The border stitching (merrow border) was flawless, and the labels are holding up perfectly after multiple heavy industrial washes.",
      tag: "High-Density Patches"
    },
    {
      name: "Zainab Shah",
      role: "Creative Director, ZS Boutiques",
      rating: 5,
      comment: "As a startup, finding a supplier with flexible MOQs and international quality was tough. Their team helped us choose the right soft satin tags for our luxury wear. Excellent communication throughout!",
      tag: "Satin Care Labels"
    }
  ];

  return (
    <section className="border-gray-800 py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-blue-600 font-black text-xs uppercase tracking-[0.25em]">Client Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
            Trusted by <span className="text-blue-600">Brands</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            See how H-B Enterprises helps garment manufacturers and independent labels elevate their branding with premium woven labels.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between relative hover:shadow-xl hover:bg-white hover:border-blue-100 transition-all duration-300 group"
            >
              {/* Quote Icon on Top Right */}
              <Quote className="absolute right-8 top-8 w-8 h-8 text-slate-200/60 group-hover:text-blue-100 transition-colors" />

              <div className="space-y-6">
                {/* Stars / Rating */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Comment */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* User Info / Profile at Bottom */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-base">{review.name}</h4>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
                  </div>
                  <p className="text-slate-400 text-xs font-medium">{review.role}</p>
                </div>

                {/* Product Tag Badge */}
                <span className="bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LabelTestimonials;