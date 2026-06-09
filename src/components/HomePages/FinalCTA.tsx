'use client';

import React from 'react';

const FinalCTA: React.FC = () => {
  // WhatsApp link handle karne ke liye function
  const handleWhatsApp = (): void => {
    window.open('https://wa.me/03412076190', '_blank');
  };

  const handleGetQuote = (): void => {
    // Agar aapka koi specific route hai to yahan path dein
    window.location.href = '/contact';
  };

  return (
    <section className="border-gray-800 py-16 md:py-24 relative overflow-hidden border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to elevate your brand with HB Enterprises?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We combine precision weaving (HB 1536 technology) with professional service. 
          Let's discuss your requirements today.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={handleGetQuote} 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Quote
          </button>
          <button 
            onClick={handleWhatsApp} 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;