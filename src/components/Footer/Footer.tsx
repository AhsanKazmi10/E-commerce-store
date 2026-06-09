import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFullLinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#05070A] text-white border-t border-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Border line changed from Orange to Blue accent */}
        <div className="border-t border-blue-600/30 my-4 md:my-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>

      {/* Bottom Bar - Darker and cleaner */}
      <div className="bg-[#0A0F1C] py-6 md:py-8 border-t border-gray-800/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm md:text-base text-gray-500 text-center md:text-left">
            Copyright © 2026 by <span className="text-blue-500 font-semibold">H.B Enterprises</span>. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
