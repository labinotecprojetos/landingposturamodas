import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo - Minimalist */}
          <div className="flex-shrink-0" onClick={scrollToTop}>
             <div className="text-white flex flex-col leading-none group cursor-pointer">
                <span className="font-serif text-3xl tracking-[0.2em] font-medium uppercase group-hover:text-brand-gold transition-colors duration-500">Postura</span>
            </div>
          </div>

          {/* Desktop Menu - Centered & Clean */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-12">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/70 hover:text-white transition-all duration-300 text-xs font-medium uppercase tracking-[0.2em] cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop - Outline Style */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white px-6 py-2 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500"
            >
              Membro VIP
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Full Screen Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center space-y-8`}>
        {NAV_LINKS.map((link) => (
            <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-2xl font-serif text-white hover:text-brand-gold uppercase tracking-widest cursor-pointer"
            >
            {link.name}
            </a>
        ))}
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold border-b border-brand-gold pb-2 uppercase tracking-widest text-sm mt-8"
        >
            Falar com Concierge
        </a>
      </div>
    </nav>
  );
};

export default Header;