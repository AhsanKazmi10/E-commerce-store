import Image from "next/image"

export default function ProductionHighlights() {
    type Highlight = {
      title: string
      detail: string
      image: string
    }

    const highlights: Highlight[] = [
      { title: "High-Density Woven Labels", detail: "Precision weaving at 650+ RPM", image: "/highlights/woven.png" },
      { title: "Custom Embossed Patches", detail: "Premium 3D texture finish", image: "/highlights/patch.png" },
      { title: "Müller Loom Technology", detail: "Swiss-grade production quality", image: "/highlights/loom-tech.png" },
    ]
  
    return (
      <div className="w-full">
        {/* Blue border accent to match other sections */}
        <h3 className="text-xl font-bold mb-4 md:mb-8 text-white border-l-4 border-blue-600 pl-3">
          Production Highlights
        </h3>
        
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center mb-4 group cursor-pointer">
            <div className="relative overflow-hidden rounded-md flex-shrink-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={80} 
                height={80} 
                className="w-14 h-14 md:w-16 md:h-16 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="ml-4">
              <h4 className="font-bold text-sm md:text-base text-gray-200 group-hover:text-blue-500 transition-colors leading-tight">
                {item.title}
              </h4>
              <p className="text-[10px] md:text-xs text-blue-500 font-medium uppercase tracking-wider mt-1">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }