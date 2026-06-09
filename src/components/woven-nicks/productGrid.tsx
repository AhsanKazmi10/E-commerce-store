"use client";

// useState hook import ki taake lightbox open/close ho sakay
import React, { useState } from 'react';

// Static Data Array
const PRODUCTS = [
  {
    id: 1,
    title: 'IMPERIAL GEOMETRIC - VARIANT A',
    price: 'Custom Pricing',
    // In paths ko apne actual image paths se replace karein (e.g., /images/neckline.png)
    mainImage: '/cufproduct1.png', 
    finalLookImage: '/cuffinal-suit-a.png',
    components: [
      { name: 'Cuffs', image: '/cufproduct.png' },
      { name: 'Placket', image: '/images/placket.png' },
      { name: 'Daman', image: '/images/daman.png' }
    ]
  },
  {
    id: 2,
    title: 'IMPERIAL GEOMETRIC - VARIANT B',
    price: 'Custom Pricing',
    mainImage: '/cufproduct2.png',
    finalLookImage: '/images/final-suit-b.png',
    components: [
      { name: 'Cuffs', image: '/images/cuffs.png' },
      { name: 'Placket', image: '/images/placket.png' },
      { name: 'Daman', image: '/images/daman.png' }
    ]
  }
];

export default function ProductCatalog() {
  // State: selectedImage null matlab lightbox band hai, string matlab image open hai
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lightbox open karne ka function
  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    // Jab modal open ho toh background scroll band kardein (professional touch)
    document.body.style.overflow = 'hidden';
  };

  // Lightbox close karne ka function
  const closeLightbox = () => {
    setSelectedImage(null);
    // Scroll wapas enable karein
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="bg-white py-16 px-6 font-sans relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Professional Header */}
        <div className="mb-16 border-l-4 border-blue-700 pl-6">
          <h3 className="text-blue-700 font-bold tracking-[0.2em] text-xs uppercase mb-2">Exclusive Collection</h3>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Precision Embroidery Catalog</h1>
        </div>

        {/* Dynamic Product Mapping */}
        <div className="flex flex-col gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
              
              {/* Left Side: Main Product Image - Clickable */}
              <div 
                className="md:w-5/12 bg-gray-50 p-8 flex items-center justify-center border-r border-gray-100 cursor-zoom-in group"
                onClick={() => openLightbox(product.mainImage)} // Click handler add kiya
              >
                <img 
                  src={product.mainImage} 
                  alt={product.title} 
                  className="w-full h-auto max-h-[400px] object-contain mix-blend-multiply drop-shadow-md transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              {/* Right Side: Content Side */}
              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">{product.title}</h2>
                  <div className="text-blue-700 font-bold mb-8 uppercase tracking-[0.15em] text-sm">{product.price}</div>
                  
                  {/* Included Components Section */}
                  <div className="mb-10">
                    <span className="block text-xs text-gray-400 font-bold tracking-widest uppercase mb-4 border-b border-gray-100 pb-2">
                      Included Components (Click to enlarge)
                    </span>
                    
                    <div className="flex flex-wrap gap-6 mt-4">
                      {product.components.map((comp, i) => (
                        <div 
                          key={i} 
                          className="flex flex-col items-center gap-3 group cursor-zoom-in"
                          onClick={() => openLightbox(comp.image)} // Har component par click handler
                        >
                          {/* Image Box */}
                          <div className="w-24 h-32 bg-[#f8fafc] border border-gray-200 rounded p-3 shadow-sm group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300 flex justify-center items-center">
                            <img 
                              src={comp.image} 
                              alt={comp.name} 
                              className="max-w-full max-h-full object-contain mix-blend-multiply" 
                            />
                          </div>
                          {/* Label */}
                          <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest group-hover:text-blue-700 transition-colors">
                            {comp.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-4">
                  <div className="flex items-center gap-4 bg-gray-50 p-2 pr-6 rounded-md border border-gray-100">
                    <div className="w-14 h-14 rounded-md bg-white border border-gray-200 overflow-hidden shadow-sm">
                      <img src={product.finalLookImage} alt="Final Look" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-blue-600 uppercase font-bold tracking-widest mb-1">Preview</span>
                      <span className="text-sm font-bold text-gray-800">Final Ensemble</span>
                    </div>
                  </div>
                  
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md text-sm font-bold tracking-widest transition-all shadow-md flex items-center gap-2">
                    GET A QUOTE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================= */}
      {/* PROFESSIONAL LIGHTBOX MODAL - Sirf tab dikhega jab selectedImage null nahi hoga */}
      {/* ============================================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 md:p-10 transition-opacity duration-300"
          onClick={closeLightbox} // Background click par close
        >
          {/* Close Button (top-right) */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-2"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l18 18"></path></svg>
          </button>

          {/* Modal Container: Animation add ki taake smooth open ho */}
          <div 
            className="relative max-w-7xl max-h-[90vh] bg-white p-2 rounded-lg shadow-2xl animate-zoomIn"
            onClick={(e) => e.stopPropagation()} // Image par click karne se modal band na ho
          >
            <img 
              src={selectedImage} 
              alt="Enlarged embroidery detail" 
              className="max-w-full max-h-[85vh] object-contain rounded" 
            />
          </div>
        </div>
      )}

    </section>
  );
}