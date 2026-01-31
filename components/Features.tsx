import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Postura Modas</span>
            <h3 className="text-3xl md:text-5xl font-serif font-medium text-white max-w-2xl mx-auto">
                Mais que vestir.<br/>Sentir-se bem.
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-black p-8 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 group rounded-sm"
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 group-hover:text-brand-gold transition-all">
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-white group-hover:text-brand-gold transition-colors" })}
              </div>
              <h4 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;