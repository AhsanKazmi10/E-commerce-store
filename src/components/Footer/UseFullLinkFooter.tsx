import Link from "next/link";

export default function UsefulLinksSection() {
  // H.B Enterprises ke business ke mutabiq links update kiye hain
  const links = [
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Manufacturing Process", href: "/manufacturing" },
    { name: "Our Partners", href: "/partners" },
    { name: "Meet The Team", href: "/team" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <div className="w-full">
      {/* Consistent Blue accent heading */}
      <h3 className="text-xl font-bold mb-4 md:mb-6 text-white border-l-4 border-blue-600 pl-3">
        Useful Links
      </h3>
      
      <ul className="text-sm md:text-base flex flex-col gap-3 md:gap-4">
        {links.map((link) => (
          <li key={link.name} className="group flex items-center">
            {/* Animated Blue indicator */}
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