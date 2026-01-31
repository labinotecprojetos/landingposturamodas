import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-black relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand-gold/50 text-xs font-bold tracking-[0.3em] uppercase mb-12 block">A voz da experiência</span>
        
        <div className="grid grid-cols-1 gap-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="flex flex-col items-center"
            >
              <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-8 opacity-80">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-gold/30"></div>
                <div className="text-center">
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">{testimonial.name}</h4>
                  <p className="text-gray-600 text-[10px] uppercase tracking-wider">{testimonial.role}</p>
                </div>
                <div className="w-12 h-[1px] bg-brand-gold/30"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;