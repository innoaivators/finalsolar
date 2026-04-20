import { Phone, Mail, Facebook, Linkedin, Instagram, Globe } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar-bg fixed top-0 w-full z-[101]">
      <div className="container mx-auto h-9 overflow-hidden relative">
        <div className="flex items-center gap-8 xl:justify-between h-full w-max xl:w-full animate-marquee xl:animate-none px-4">
          <div className="flex items-center gap-6 xl:gap-6 shrink-0 text-[11px] xl:text-xs">
            <span className="text-primary-foreground opacity-90 whitespace-nowrap">Your Trusted 24 Hours Service Provider!</span>
            <div className="flex items-center gap-1.5 text-primary-foreground opacity-80">
              <Mail size={13} />
              <div className="flex items-center gap-1 whitespace-nowrap">
                <a href="mailto:info@metallicakw.com" className="hover:opacity-100 transition-opacity">info@metallicakw.com</a>
                <span className="opacity-50">,</span>
                <a href="mailto:Info@metallicagcc.com" className="hover:opacity-100 transition-opacity">Info@metallicagcc.com</a>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-primary-foreground opacity-80">
              <Globe size={13} />
              <div className="flex items-center gap-1 whitespace-nowrap">
                <a href="https://www.metallicakw.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">www.metallicakw.com</a>
                <span className="opacity-50">,</span>
                <a href="https://www.metallicagcc.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">metallicagcc.com</a>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-primary-foreground opacity-80">
              <Phone size={13} />
              <div className="flex items-center gap-1.5">
                <a href="tel:+96598988281" className="hover:opacity-100 transition-opacity whitespace-nowrap">+965 9898 8281</a>
                <span className="opacity-50">,</span>
                <a href="tel:+96560026630" className="hover:opacity-100 transition-opacity whitespace-nowrap">+965 6002 6630</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://www.instagram.com/metallicakuwait" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full flex items-center justify-center bg-gold text-navy hover:bg-gold-dark transition-colors">
              <Facebook size={13} />
            </a>
            {/* Social Links Updated */}
            <a href="https://www.instagram.com/metallicakuwait" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full flex items-center justify-center bg-gold text-navy hover:bg-gold-dark transition-colors">
              <Instagram size={13} />
            </a>
            <a href="https://www.instagram.com/metallicakuwait" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full flex items-center justify-center bg-gold text-navy hover:bg-gold-dark transition-colors">
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
