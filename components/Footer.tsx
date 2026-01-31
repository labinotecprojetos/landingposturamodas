import React from 'react';
import { Instagram, Facebook, MessageCircle, Apple, Smartphone } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, APP_STORE_LINK, PLAY_STORE_LINK, ADDRESS } from '../constants';

const Footer: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-brand-dark border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="text-white flex flex-col leading-none mb-6">
                <span className="font-serif text-2xl tracking-widest font-bold uppercase">Postura</span>
                <span className="font-sans text-xl text-brand-gold italic font-light self-start">Modas</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A Loja que te veste. Liberdade, estilo e as melhores marcas em Entre Rios.
            </p>
            <div className="flex space-x-4">
              <a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                    <a 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-gray-400 hover:text-brand-gold transition-colors text-sm cursor-pointer"
                    >
                        {link.name}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (No Email) */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-white mb-1">Local:</span>
                Entre Rios - Bahia
              </li>
              <li>
                <span className="block text-white mb-1">WhatsApp:</span>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">(11) 99999-9999</a>
              </li>
              <li>
                <span className="block text-white mb-1">Funcionamento:</span>
                Seg-Sex: 8–12h / 14–18h<br/>
                Sáb: 8–14h
              </li>
            </ul>
          </div>

          {/* App Download (Subtle) */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">App Exclusivo</h4>
            <p className="text-gray-500 text-sm mb-4">
                Acesse o catálogo digital.
            </p>
            <div className="flex flex-col space-y-3">
                <a href={APP_STORE_LINK} onClick={(e) => e.preventDefault()} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Apple size={18} />
                    <span className="text-xs">Baixar na App Store</span>
                </a>
                <a href={PLAY_STORE_LINK} onClick={(e) => e.preventDefault()} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Smartphone size={18} />
                    <span className="text-xs">Baixar na Google Play</span>
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 Postura Modas. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <span>Aceitamos todos os cartões</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;