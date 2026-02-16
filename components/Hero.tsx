import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Image - Local File */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Homem com estilo casual e óculos na Postura Modas"
          className="w-full h-full object-cover object-top opacity-80"
          onError={(e) => {
            // Fallback if local image is missing
            e.currentTarget.src = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-brand-gold text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 bg-black/40 backdrop-blur-sm inline-block px-4 py-2 rounded-sm border border-brand-gold/30">
            Entre Rios - Bahia
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
            A LOJA QUE<br/>TE VESTE.
          </h1>
          
          <p className="text-gray-200 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-lg text-shadow-sm">
            Postura não é só roupa social. É atitude.<br/>
            Liberte seu estilo com as melhores marcas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Primary Action - WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-brand-gold hover:bg-white text-black px-10 py-5 transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] rounded-sm transform hover:-translate-y-1"
            >
              <MessageCircle size={22} className="stroke-2" />
              <span className="uppercase tracking-[0.2em] text-xs font-bold">Chamar no WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer of Hero */}
      <div className="absolute bottom-8 w-full px-6 flex justify-center items-end text-white/50 text-[10px] uppercase tracking-widest font-medium">
        <p>Dolce & Gabbana • Armani • OGOCHI • John Pool • Aztec</p>
      </div>
    </div>
  );
};

export default Hero;