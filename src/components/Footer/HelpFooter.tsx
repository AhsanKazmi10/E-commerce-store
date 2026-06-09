import Link from "next/link";

export default function HelpSection() {
    const links = [
      { name: 'FAQ', href: '/faq' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support Policy', href: '/support' },
      { name: 'Corporate Profile', href: '/profile' }
    ];

    return (
      <div className="w-full">
        {/* Blue border accent for consistency with About Us section */}
        <h3 className="text-xl font-bold mb-4 md:mb-6 text-white border-l-4 border-blue-600 pl-3">
          Support & Help
        </h3>
        
        <ul className="text-sm md:text-base flex flex-col gap-3 md:gap-4">
          {links.map((link) => (
            <li key={link.name} className="group flex items-center">
              {/* Chota sa blue arrow jo hover pr nazar ayega */}
              <span className="w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-2"></span>
              
              <Link 
                href={link.href} 
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}