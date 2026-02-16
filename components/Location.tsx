import React from 'react';
import { MapPin, Clock, CreditCard } from 'lucide-react';
import { ADDRESS } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Info */}
            <div className="p-8 md:p-20 flex flex-col justify-center bg-brand-black">
                <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Visite-nos</span>
                <h2 className="text-white font-serif text-4xl mb-12">A Loja que te veste</h2>
                
                <div className="space-y-10">
                    <div className="flex gap-4">
                        <MapPin className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                            <span className="text-white text-sm font-bold uppercase tracking-widest block mb-1">Endereço</span>
                            <p className="text-gray-400 font-light">{ADDRESS.street}</p>
                            <p className="text-gray-400 font-light">{ADDRESS.district}, {ADDRESS.city}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Clock className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                            <span className="text-white text-sm font-bold uppercase tracking-widest block mb-1">Horário de Funcionamento</span>
                            <p className="text-gray-400 font-light">Seg à Sex: 8–12h / 14–18h</p>
                            <p className="text-gray-400 font-light">Sáb: 8–14h</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <CreditCard className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                            <span className="text-white text-sm font-bold uppercase tracking-widest block mb-1">Pagamento</span>
                            <p className="text-gray-400 font-light">Aceitamos todos os cartões</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a 
                            href={ADDRESS.mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-brand-gold/50 text-brand-gold px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-black transition-all font-bold"
                        >
                            Abrir no Mapa
                        </a>
                    </div>
                </div>
            </div>

            {/* Storefront Image */}
            <div className="h-[400px] md:h-auto bg-[#111] relative overflow-hidden">
                 <img 
                    src="/images/store-front.jpg" 
                    alt="Fachada Postura Modas" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop";
                    }}
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>

      </div>
    </section>
  );
};

export default Location;