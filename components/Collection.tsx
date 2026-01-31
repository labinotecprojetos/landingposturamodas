import React from 'react';
import { WHATSAPP_LINK, GALLERY_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-brand-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Lifestyle & Liberdade</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              O estilo que<br/>te liberta.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Do corte Oversize ao ajuste perfeito da Sarja. Trabalhamos com peças que acompanham seu ritmo, seja no trabalho ou no lazer.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors uppercase text-xs tracking-[0.2em] font-bold">
                Ver Catálogo Atualizado <ArrowUpRight size={16}/>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer"
                >
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">{item.category}</span>
                        <h3 className="text-white font-serif text-xl">{item.name}</h3>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;