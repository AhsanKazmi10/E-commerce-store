'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Next.js Navigation import ki
import { Great_Vibes, Montserrat } from "next/font/google";

const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });

const ProductCategory = () => {
  return (
    <div className="border-gray-800 min-h-screen w-full overflow-x-hidden" id="products">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center mb-10 lg:mb-16">
          <p className={`${montserrat.className} text-[#2563EB] text-sm lg:text-lg uppercase tracking-[0.1em] font-bold mb-2 lg:mb-4`}>
            Premium Collections
          </p>
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">
            <span className="text-[#2563EB]">CH</span>OOSE PRODUCT CATEGORY
          </h1>
        </div>

        {/* Product Category Grid - Responsive for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-24">
          {[
            { src: '/card-2.png', href: '/woven' },
            { src: '/card-3.png', href: '/Patches' },
            { src: '/card-1.png', href: '/satinLables' },
            { src: '/card-4.png', href: '/Patches' }
          ].map((card, index) => (
            <Link href={card.href} key={index} className="relative group overflow-hidden rounded-sm w-full block">
              <div className="relative w-full aspect-square sm:aspect-[4/5]">
                <Image
                  src={card.src}
                  alt={`Category ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain transform transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image Grid - Manufacturing Focus */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 row-span-2 relative aspect-square lg:h-[450px]">
                <Image
                  src="/About1.png"
                  alt="Muller MBG3 Machine"
                  fill
                  sizes="(max-width: 1024px) 66vw, 33vw"
                  className="rounded-sm object-cover border border-gray-800"
                />
              </div>
              {/* Small Image 1 */}
              <div className="relative aspect-square lg:h-[217px]">
                <Image
                  src="/pack-2.png"
                  alt="Woven Detail"
                  fill
                  sizes="(max-width: 1024px) 33vw, 15vw"
                  className="rounded-sm object-cover border border-gray-800"
                />
              </div>
              {/* Small Image 2 */}
              <div className="relative aspect-square lg:h-[217px]">
                <Image
                  src="/about3.png"
                  alt="Patch Detail"
                  fill
                  sizes="(max-width: 1024px) 33vw, 15vw"
                  className="rounded-sm object-cover border border-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div>
              <p className={`${montserrat.className} text-[#2563EB] text-base lg:text-lg uppercase tracking-[0.1em] font-bold mb-2 lg:mb-4`}>
                Why Choose us
              </p>
              <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-[1000] italic uppercase leading-tight mb-4 lg:mb-6">
                Unmatched Precision <br />& Manufacturing Power
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-medium">
                At H.B Enterprises, we utilize high-speed Müller MBG3 needle looms to ensure 99% accuracy in every thread. Our minimalist branding aesthetics combined with industrial-grade durability make us the preferred partner for global e-commerce brands.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-3 lg:gap-6">
              {[
                { title: "High Speed", desc: "650 RPM" },
                { title: "Global Shipping", desc: "Worldwide" },
                { title: "Custom Design", desc: "Unlimited" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-[#2563EB] rounded-none -skew-x-12 p-3 lg:p-6 mb-3 transform group-hover:bg-white transition-all duration-300">
                    <p className="text-white group-hover:text-[#2563EB] font-black text-[10px] lg:text-xs uppercase tracking-tighter italic">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest leading-none">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience Badge */}
            <div className="bg-[#2563EB] rounded-none -skew-x-12 p-4 lg:p-6 flex items-center justify-center gap-4 lg:gap-8 w-full max-w-md shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] mx-auto lg:mx-0">
              <span className="text-white text-3xl lg:text-5xl font-[1000] italic leading-none">25+</span>
              <div>
                <p className="text-blue-100 uppercase text-[10px] lg:text-xs font-bold tracking-widest">Years of Industrial</p>
                <p className="text-white font-[1000] uppercase text-lg lg:text-xl italic leading-none">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Fully Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 mt-20 lg:mt-32 border-t border-gray-900 pt-12 lg:pt-16">
          {[
            { title: "Expert Technicians", count: "50+" },
            { title: "Monthly Labels", count: "1.2M+" },
            { title: "Global Clients", count: "99+" },
            { title: "Machine Efficiency", count: "98%" }
          ].map((stat, index) => (
            <div key={index} className="text-center group border-none lg:border-r lg:border-gray-900 lg:last:border-none">
              <h3 className="text-gray-500 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] mb-2 lg:mb-4 group-hover:text-[#2563EB] transition-colors">
                {stat.title}
              </h3>
              <p className="text-black text-3xl lg:text-5xl font-[1000] italic tracking-tighter leading-none">
                {stat.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;