'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { User, ChevronDown } from 'lucide-react';

const NAV_DATA = {
  topCards: [
    { name: "H.B Home", short: "Home", path: "/" },
    { name: "H.B PATCHES", short: "PATCHES", path: "/Patches" },
    { name: "H.B Woven Labels", short: "WOVEN LABLES", path: "/woven" },
    { name: "H.B satin Lables", short: "SATIN LABLES", path: "/satinLables" },
  ],
  categories: [
    { name: "Woven Nicks", path: "/woven-nicks" },
    { name: "Woven Monograms", path: "/woven-monograms" },
    { name: "Woven Invention", path: "/woven-invention" },
    { name: "Woven Laises", path: "/woven-laises" },
  ],
  shipping: "Select Patches Ship as Fast as 5 Business Days with H.B Fast!"
};

export default function Navbar() {
  const pathname = usePathname();
  
  // ⏱️ Countdown Timer State 
  const [timeLeft, setTimeLeft] = useState({ hours: 63, minutes: 42, seconds: 11 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        let s = prev.seconds - 1;
        let m = prev.minutes;
        let h = prev.hours;

        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full relative z-50 bg-white border-b border-gray-100">
      
      {/* --- LAYER 1: TOP STRIP (🛠️ FIXED: Full Inline Row Scroll Framework for Mobile & Desktop) --- */}
      <div className="w-full bg-[#1A1A1A] sticky top-0 z-[60] flex flex-col md:flex-row items-stretch md:justify-between relative overflow-hidden">
        
        {/* Animated Background Line Layer */}
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[linear-gradient(90deg,#00FF66,#00E5FF,#00FF66)] bg-[length:200%_auto] animate-[gradientSlide_4s_linear_infinite]" />

        <style jsx global>{`
          @keyframes gradientSlide {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          /* Scroll Hide Matrix */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* Top Left Links Grid */}
        <div className="flex shrink-0 h-[40px] md:h-[55px] z-10 relative">
          {NAV_DATA.topCards.map((card, idx) => {
            const isTopCardActive = pathname === card.path;
            const cardBg = idx % 2 === 0 ? "bg-black" : "bg-[#2D2D2D]";

            return (
              <Link
                key={idx}
                href={card.path}
                className={`flex-1 md:flex-none w-auto md:w-[155px] h-full flex items-center justify-center text-center transition-all ${cardBg} text-white ${
                  isTopCardActive 
                    ? "border-b-[4px] border-[#2563EB] opacity-100" 
                    : "border-r border-white/5 opacity-75 hover:opacity-95"
                }`}
              >
                <span className="inline-block -skew-x-12 text-[8px] md:text-[11px] font-[1000] uppercase italic tracking-tighter leading-none">
                  <span className="md:hidden">{card.short}</span>
                  <span className="hidden md:inline">{card.name}</span>
                </span>
              </Link>
            );
          })}
        </div>
        
        {/* 🛠️ FIXED RIGHT CONTAINER: Pura data ab mobile par bhi ek line me side-scroll hoga */}
        <div className="w-full md:w-auto z-10 relative flex items-center overflow-x-auto no-scrollbar bg-[#1A1A1A] border-t border-white/5 md:border-none py-2 md:py-0">
          <div className="flex items-center gap-6 px-4 md:px-6 min-w-max">
            
            {/* Delivery Text Block */}
            <div className="text-left leading-tight shrink-0">
              <div className="text-[11px] md:text-sm font-black tracking-tight text-white whitespace-nowrap">
                Fastest Delivery <span className="text-[#00FF66]">Tue, May. 19</span> if ordered in:
              </div>
              <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider whitespace-nowrap">
                Free Shipping on Orders $75+
              </div>
            </div>

            {/* Live Clock Element Node */}
            <div className="flex gap-3 text-center shrink-0">
              {[
                { val: timeLeft.hours, label: "Hrs" },
                { val: timeLeft.minutes, label: "Mins" },
                { val: timeLeft.seconds, label: "Secs" }
              ].map((timeUnit, unitIdx) => (
                <div key={unitIdx} className="flex flex-col min-w-[28px] md:min-w-[32px]">
                  <span className="text-base md:text-xl font-black tracking-tighter font-mono text-white leading-none">
                    {String(timeUnit.val).padStart(2, '0')}
                    {unitIdx < 2 && <span className="ml-1 text-slate-600 font-normal inline-block translate-y-[-1px]">:</span>}
                  </span>
                  <span className="text-[7px] md:text-[8px] text-slate-400 font-black uppercase tracking-tight mt-0.5">
                    {timeUnit.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* --- LAYER 2: MAIN NAVBAR (VIP CLEAN - NO HAMBURGER MENU) --- */}
      <div className="w-full flex flex-row items-center justify-between gap-4 py-4 px-4 lg:px-8">
        <Link href="/" className="flex flex-col shrink-0 decoration-transparent">
            <div className="flex items-baseline italic leading-none font-[1000]">
              <span className="text-2xl md:text-4xl text-[#2563EB] tracking-tighter">H.B</span>
              <span className="text-2xl md:text-4xl text-black ml-1.5 uppercase tracking-tighter">Enterprises</span>
            </div>
            <span className="text-[7px] md:text-[10px] uppercase font-bold text-gray-400 tracking-[0.25em] mt-1">Pvt.Ltd</span>
        </Link>

        <div className="flex items-center gap-4">
           <Link 
             href="/signin" 
             className={`flex items-center gap-1.5 group decoration-transparent transition-colors ${
               pathname === '/signin' ? 'text-[#2563EB]' : 'text-black'
             }`}
           >
              <User className={`w-4 h-4 ${pathname === '/signin' ? 'text-[#2563EB]' : 'text-gray-600'}`} />
              <span className="text-[11px] md:text-[13px] font-black uppercase group-hover:text-[#2563EB]">Sign In</span>
           </Link>
        </div>
      </div>

      {/* --- LAYER 3: CATEGORIES (Pure Smooth Horizontal Drag Scroll) --- */}
      <nav className="w-full border-t border-gray-100 bg-white overflow-x-auto no-scrollbar">
        <div className="flex items-center lg:justify-center gap-6 md:gap-12 py-3 px-4 md:px-6 min-w-max mx-auto">
          {NAV_DATA.categories.map((cat) => {
            const isCatActive = pathname === cat.path;

            return (
              <Link 
                key={cat.name} 
                href={cat.path}
                className={`text-[11px] md:text-[12px] font-black uppercase tracking-[0.1em] flex items-center gap-1.5 transition-colors decoration-transparent shrink-0 ${
                  isCatActive ? 'text-[#2563EB]' : 'text-gray-700 hover:text-[#2563EB]'
                }`}
              >
                {cat.name} <ChevronDown size={12} className={isCatActive ? "text-[#2563EB]" : "opacity-30"} />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}