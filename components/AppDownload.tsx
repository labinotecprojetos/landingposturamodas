import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { APP_STORE_LINK, PLAY_STORE_LINK } from '../constants';
import { motion } from 'framer-motion';

const AppDownload: React.FC = () => {
  return (
    <section id="app-download" className="py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black/40 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Extensão do Clube</span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium text-black mb-8 leading-none">
                Um plus para<br/>sua jornada.
              </h2>
              <p className="text-gray-600 text-lg mb-12 font-light max-w-md leading-relaxed">
                Nosso atendimento principal acontece via WhatsApp, onde o contato é direto e pessoal. Mas se você deseja uma experiência digital imersiva, nosso aplicativo está disponível como um benefício extra para membros.
              </p>
              
              <div className="flex gap-4">
                <a 
                    href={APP_STORE_LINK} 
                    className="group border border-black px-6 py-3 flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300"
                >
                    <Apple size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">App Store</span>
                </a>
                
                <a 
                    href={PLAY_STORE_LINK} 
                    className="group border border-black px-6 py-3 flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300"
                >
                    <Smartphone size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Play Store</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
             >
                {/* Minimalist Phone Representation */}
                <div className="w-[320px] h-[640px] bg-black rounded-[40px] p-2 shadow-2xl transform rotate-3">
                    <div className="w-full h-full bg-[#1a1a1a] rounded-[36px] overflow-hidden relative">
                         {/* Updated image to a Man */}
                         <img 
                            src="https://images.unsplash.com/photo-1534030347209-7147fd9e7f1a?q=80&w=1000&auto=format&fit=crop" 
                            className="w-full h-full object-cover opacity-80 grayscale"
                            alt="Homem de Terno no App"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                         
                         <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center">
                            <span className="font-serif text-white text-3xl mb-2">Postura</span>
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em]">Catálogo Digital</span>
                         </div>
                    </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;