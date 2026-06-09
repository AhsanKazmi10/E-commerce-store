"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const foldDetails = [
  {
    id: 1,
    title: "Center Fold",
    desc: "TThe label is folded right down the middle, making it the perfect choice for neck labels. This style maximizes space, allowing you to display your logo on the front side and care instructions or sizing on the reverse side.",
    img: "/icons.png"
  },
  {
    id: 2,
    title: "End Fold",
    desc: "The left and right edges are neatly folded inward, creating a clean finish. This label is designed to be sewn completely flat onto garments, making it ideal for shirt hems, pockets, or waistbands.",
    img: "/icons2.png"
  },
  {
    id: 3,
    title: "Mitre Fold",
    desc: "The ends of the label are precisely folded at a 45-degree angle to create a sleek, hanging loop. This premium finish is highly recommended for high-end outerwear, jackets, and garments designed for hanger display.",
    img: "/icons3.png"
  },
  {
    id: 4,
    title: "Manhattan Fold",
    desc: "A premium hybrid that combines the best of the End Fold and Center Fold. It features an extra top-edge fold that completely hides raw edges, ensuring an ultra-clean, snag-free, and high-end stitched appearance.",
    img: "/icons4.png"
  },
  {
    id: 5,
    title: "Book Fold",
    desc: "Folded exactly like a book, this style offers a multi-page layout. It is perfect for brands that want external logo branding on the outside, while keeping detailed product composition or care instructions tucked neatly on the inside.",
    img: "/icons5.png"
  },
  {
    id: 6,
    title: "Die-Cut (No Fold)",
    desc: "This label features no folds and is laser-cut precisely into custom shapes with sealed, fray-resistant edges. It is the ultimate choice for external branding, patches, bags, and footwear.",
    img: "/icons6.png"
  }
];

const LabelFinishing = () => {
  return (
    <section className="bg-slate-50 py-10 px-6 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
           <span className="text-blue-600">The Finis</span>hing Anatomy
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Precision cutting & folding techniques for seamless garment integration.
          </p>
          <div className="w-20 h-1 bg-blue-600 mt-4" />
        </div>

        {/* 3-Column Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {foldDetails.map((fold) => (
            <motion.div 
              key={fold.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex gap-5 items-start group"
            >
              {/* Small Picture Placeholder (64x64 or 80x80) */}
              <div className="relative flex-shrink-0 w-32 h-32 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm group-hover:border-blue-400 transition-colors">
                <Image 
                  src={fold.img} 
                  alt={fold.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Detail */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-6icon00 group-hover:text-blue-600 transition-colors">
                  {fold.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {fold.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabelFinishing;