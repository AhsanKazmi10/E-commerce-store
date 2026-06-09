import React from 'react';
import { Globe2, Factory, ShieldCheck, Zap } from 'lucide-react';

const factoryStats = [
  { 
    id: 1, 
    metric: "25M+", 
    title: "Patches Manufactured", 
    desc: "High-density woven & printed units dispatched globally.",
    icon: <Factory size={20} className="text-blue-600" />
  },
  { 
    id: 2, 
    metric: "35+", 
    title: "Global Destinations", 
    desc: "Direct export lines to major apparel hubs and clothing brands.",
    icon: <Globe2 size={20} className="text-blue-600" />
  },
  { 
    id: 3, 
    metric: "100%", 
    title: "Quality Assurance", 
    desc: "Strict thread-count monitoring and industrial wash testing.",
    icon: <ShieldCheck size={20} className="text-blue-600" />
  },
  { 
    id: 4, 
    metric: "5-7 Days", 
    title: "Express Air Dispatch", 
    desc: "Fast-track international delivery via DHL and FedEx networks.",
    icon: <Zap size={20} className="text-blue-600" />
  },
];

export default function PartnersAndClients() {
  return (
    <section className="border-gray-800 text-slate-800 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <p className="text-blue-600 font-black tracking-widest uppercase text-[20px]">
              Industrial Capability
            </p>
          </div>
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">
            Massive Scale <span className="text-blue-600">Production</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium max-w-md mx-auto leading-relaxed">
            Our infrastructure is engineered to deliver high-volume custom patch and label batches with absolute precision.
          </p>
        </div>

        {/* Premium Industrial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {factoryStats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 space-y-4 hover:bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/40 transition-all duration-300 group"
            >
              {/* Icon Holder */}
              <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-50 transition-colors">
                {stat.icon}
              </div>
              
              {/* Big Metric Numbers */}
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {stat.metric}
                </h3>
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">
                  {stat.title}
                </h4>
                <p className="text-slate-400 text-xs font-medium leading-relaxed pt-1">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}