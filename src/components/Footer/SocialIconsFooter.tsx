import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'
import Link from "next/link"

export default function SocialIcons() {
  const icons = [
    { Icon: Facebook, href: 'https://facebook.com' },
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Instagram, href: 'https://instagram.com' },
    { Icon: Youtube, href: 'https://youtube.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' }, // Textile business ke liye LinkedIn zaroori hai
  ]

  return (
    <div className="flex justify-center space-x-3 md:space-x-4">
      {icons.map(({ Icon, href }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#162033] p-2 md:p-2.5 rounded-lg text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-800 hover:border-blue-500 shadow-lg group"
        >
          <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
        </Link>
      ))}
    </div>
  )
}