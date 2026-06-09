import { Clock, Factory } from 'lucide-react'

export default function AboutUsFooter() {
  return (
    <div className='w-full'>
      {/* Heading with Blue accent */}
      <h3 className="text-xl font-bold mb-4 md:mb-8 text-white border-l-4 border-blue-600 pl-3">
        About Us
      </h3>
      
      {/* Company Description */}
      <p className="mb-6 text-gray-400 text-sm md:text-base leading-relaxed">
        H.B Enterprises is a leading name in high-precision textile branding. 
        Equipped with advanced Müller MBG3 needle looms, we deliver unmatched 
        quality in woven labels, patches, and custom branding solutions for global apparel brands.
      </p>

      {/* Operational Hours Box */}
      <div className="flex items-center space-x-4 group">
        <div className="bg-blue-600 p-2 rounded w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-lg shadow-blue-900/20">
          <Clock className="text-white" size={28} />
        </div>
        <div>
          <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs md:text-sm">
            Production Hours
          </h4>
          <p className="text-gray-400 text-xs md:text-sm font-medium">Mon - Sat (09:00 AM - 06:00 PM)</p>
          <p className="text-blue-500 text-xs md:text-sm font-semibold">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}