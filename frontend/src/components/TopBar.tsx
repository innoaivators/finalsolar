import { Phone, Mail, Facebook, Linkedin, Instagram, Globe } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar-bg hidden lg:block">
      <div className="container mx-auto flex items-center justify-between h-9 text-xs">
        <div className="flex items-center gap-6">
          <span className="text-primary-foreground opacity-90">Your Trusted 24 Hours Service Provider!</span>
          <div className="flex items-center gap-1.5 text-primary-foreground opacity-80">
            <Mail size={13} />
            <div className="flex items-center gap-1">
              <a href="mailto:info@metallicakw.com" className="hover:opacity-100 transition-opacity">info@metallicakw.com</a>
              <span className="opacity-50">,</span>
              <a href="mailto:Info@metallicagcc.com" className="hover:opacity-100 transition-opacity">Info@metallicagcc.com</a>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-primary-foreground opacity-80">
            <Globe size={13} />
            <div className="flex items-center gap-1">
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
        <div className="flex items-center gap-3">
          <a href="#" className="w-7 h-7 rounded-full flex items-center justify-center bg-gold text-navy hover:bg-gold-dark transition-colors">
            <Facebook size={13} />
          </a>
          <a href="#" className="w-7 h-7 rounded-full flex items-center justify-center bg-gold text-navy hover:bg-gold-dark transition-colors">
            <Instagram size={13} />
          </a>
          <a href="#" className="w-7 h-7 rounded-full flex items-center justify-center bg-gold text-navy hover:bg-gold-dark transition-colors">
            <Linkedin size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
