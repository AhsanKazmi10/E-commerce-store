'use client';

import { useState } from 'react'
import Link from "next/link"
import { Menu, X, Search, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Services", href: "/services", active: false },
    { name: "About", href: "/about", active: false },
    { name: "Shop", href: "/shop", active: false },
    { name: "Contact", href: "/contact", active: false },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="z-50 w-full fixed top-0 px-4 py-4 md:px-10 lg:px-16">
      <nav className="flex items-center justify-between relative max-w-[1920px] mx-auto">
        
        {/* LOGO SECTION */}
        <Link href="/" className="z-50 group">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-baseline italic">
              <span className="text-2xl md:text-4xl font-[900] text-[#2563EB] tracking-tighter">H.B</span>
              <span className="text-2xl md:text-4xl font-bold text-white ml-1.5">Enterprises</span>
            </div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold text-[#2563EB] ml-1.5 mt-[-4px]">
              Pvt. Ltd
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-4">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`
                px-8 py-3 -skew-x-12 transition-all duration-300 relative group
                ${item.active 
                  ? "bg-[#2563EB] text-white shadow-[-8px_8px_0px_rgba(30,64,175,1)]" 
                  : "bg-white/5 text-white/80 border-l-4 border-blue-600 backdrop-blur-md hover:bg-white/10"
                }
              `}
            >
              <span className="skew-x-12 block font-black uppercase tracking-tighter text-[15px]">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* RIGHT ICONS & MOBILE BUTTON */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:flex items-center gap-4 text-white/70">
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-500" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-500" />
          </div>

          {/* Hamburger Button (Only Visible on Mobile/Tablet) */}
          <button 
            className="lg:hidden p-2 bg-white/5 rounded-lg border border-white/10 text-white z-[60]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div className={`
          fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center gap-6 transition-all duration-500 lg:hidden
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}>
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-black uppercase tracking-widest transition-colors
                ${item.active ? 'text-[#2563EB]' : 'text-white hover:text-blue-400'}
              `}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex gap-8 mt-10 text-white/50">
            <Search size={30} />
            <ShoppingCart size={30} />
          </div>
        </div>

      </nav>
    </header>
  )
}