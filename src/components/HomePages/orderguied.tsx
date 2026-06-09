'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CloudUpload, CheckCircle, Factory, Truck } from 'lucide-react'

const steps = [
  {
    title: "Upload Design",
    desc: "Submit your artwork (PDF/PNG) via our portal or WhatsApp with size specs.",
    icon: <CloudUpload size={32} />,
    step: "01"
  },
  {
    title: "Digital Proofing",
    desc: "We create a digital mock-up for your approval before starting the loom.",
    icon: <CheckCircle size={32} />,
    step: "02"
  },
  {
    title: "Precision Weaving",
    desc: "Your labels are manufactured on high-speed Muller looms with QC checks.",
    icon: <Factory size={32} />,
    step: "03"
  },
  {
    title: "Fast Delivery",
    desc: "Secure packaging and nationwide shipping from our Karachi facility.",
    icon: <Truck size={32} />,
    step: "04"
  }
]

export default function OrderProcess() {
  return (
    <section className="py-24 border-gray-800 border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Title Area */}
        <div className="text-center mb-20">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[15px] mb-4">How we work</p>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-black">
            Seamless <span className="text-blue-600">Ordering</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-[#0A0C10] border border-gray-800 p-10 rounded-[2.5rem] hover:border-blue-600/30 transition-all duration-500"
            >
              {/* Step Number Background */}
              <span className="absolute top-6 right-8 text-6xl font-black italic text-gray-900/50 group-hover:text-blue-600/10 transition-colors">
                {item.step}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-600/5">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black italic uppercase tracking-tight text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative Line on Hover */}
              <div className="mt-8 w-0 group-hover:w-full h-[2px] bg-blue-600 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}