import React from 'react';
import { BRANDS_LIST } from '../constants';

const Brands: React.FC = () => {
  return (
    <section id="brands" className="py-12 bg-white text-black border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
         <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Nossas Marcas</span>
      </div>
      
      {/* Marquee effect container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Repeat list twice for seamless loop */}
          {[...BRANDS_LIST, ...BRANDS_LIST, ...BRANDS_LIST].map((brand, index) => (
            <span 
                key={index} 
                className="text-4xl md:text-6xl font-serif font-bold text-gray-300 hover:text-brand-gold transition-colors duration-300 uppercase select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Brands;