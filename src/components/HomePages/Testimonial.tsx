'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Raza',
    role: 'CEO, Urban Threads',
    image: '/profile.png',
    quote: 'The high-density woven labels from H.B Enterprises transformed our brand identity. Their Müller loom precision is unmatched in the Karachi market.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Production Manager, Elite Apparel',
    image: '/profile2.png',
    quote: 'Fastest turnaround time for custom patches. We needed 10,000 labels in a week, and they delivered with 99% accuracy. Truly professional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Zeeshan Malik',
    role: 'Founder, ZM Sportswear',
    image: '/profile3.png',
    quote: 'Their leather patches added a premium feel to our denim line. The embossing depth and quality are consistent across every single piece.',
    rating: 4,
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handleTestimonialChange = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="border-gray-800 text-white py-16 md:py-24 relative overflow-hidden border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Client Success
          </p>
          <h2 className={`${inter.className} text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-800`}>
            Trusted by <span className="text-blue-600">Global Brands</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#0A0F1C] border border-blue-900/30 backdrop-blur-sm text-white p-8 md:p-12 rounded-2xl shadow-2xl relative">
          
          {/* Profile Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-20"></div>
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                fill
                className="rounded-full border-4 border-[#0A0F1C] shadow-lg object-cover z-10"
              />
            </div>
          </div>

          {/* Quote Icon */}
          <div className="text-6xl md:text-7xl text-blue-600 opacity-20 absolute top-8 left-8 font-serif">
            &quot;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="pt-8 text-center"
            >
              <p className="text-gray-300 text-lg md:text-xl italic mb-8 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>

              {/* Star Rating (Gold Color) */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`w-5 h-5 mx-1 ${
                      i < testimonials[currentTestimonial].rating
                        ? 'text-[#DAA520]'
                        : 'text-gray-700'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              <div>
                <h4 className="font-bold text-xl md:text-2xl text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-500 text-sm font-medium uppercase tracking-widest">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentTestimonial
                  ? 'w-10 bg-blue-600'
                  : 'w-4 bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Branding Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -ml-64 -mb-64" />
    </section>
  )
}