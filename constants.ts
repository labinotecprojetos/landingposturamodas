import { Zap, Shirt, Users, Globe, MapPin } from 'lucide-react';
import React from 'react';
import { Feature, Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5511999999999"; // Please update with the real number if needed
export const WHATSAPP_MESSAGE = "Olá! Vi o site e gostaria de conhecer as peças da Postura Modas (Armani, OGOCHI, etc).";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const APP_STORE_LINK = "#";
export const PLAY_STORE_LINK = "#";

export const ADDRESS = {
  street: "Avenida Juracy Magalhães",
  district: "Centro",
  city: "Entre Rios - Bahia",
  zip: "48180-000",
  mapsLink: "https://maps.google.com/?q=Avenida+Juracy+Magalhães+Entre+Rios+Bahia"
};

export const BRANDS_LIST = [
  "Dolce & Gabbana",
  "Armani",
  "OGOCHI",
  "John Pool",
  "Aztec",
  "Dri Fit",
  "Oversize",
];

export const NAV_LINKS = [
  { name: 'Conceito', href: '#concept' },
  { name: 'Marcas', href: '#brands' },
  { name: 'Estilo', href: '#gallery' },
  { name: 'Loja Física', href: '#location' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Liberdade & Estilo',
    description: 'A roupa certa liberta. Cortes Oversize e Jogger para quem quer conforto sem perder a imponência.',
    icon: React.createElement(Zap, { className: "w-8 h-8 text-brand-gold" }),
  },
  {
    id: 2,
    title: 'Marcas de Peso',
    description: 'Trabalhamos com gigantes: Dolce & Gabbana, Armani, OGOCHI. Qualidade indiscutível.',
    icon: React.createElement(Shirt, { className: "w-8 h-8 text-brand-gold" }),
  },
  {
    id: 3,
    title: 'A Loja que te veste',
    description: 'Consultoria de estilo real. Não vendemos apenas peças, criamos a sua identidade visual.',
    icon: React.createElement(Users, { className: "w-8 h-8 text-brand-gold" }),
  },
  {
    id: 4,
    title: 'Variedade Premium',
    description: 'Do Dri Fit para o treino ao Sarja para o encontro. Versatilidade para o homem moderno.',
    icon: React.createElement(Globe, { className: "w-8 h-8 text-brand-gold" }),
  },
];

export const GALLERY_ITEMS: Product[] = [
  {
    id: 1,
    name: "Streetwear Luxury",
    price: "",
    category: "Oversize & Atitude",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1974&auto=format&fit=crop", 
  },
  {
    id: 2,
    name: "Casual Premium",
    price: "",
    category: "OGOCHI / Armani",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Urban Performance",
    price: "",
    category: "Dri Fit / Jogger",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1995&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Summer Vibes",
    price: "",
    category: "Sarja & Prints",
    image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Empreendedor",
    text: "Sempre achei que para ter postura precisava usar terno. A Postura Modas me mostrou que um bom Oversize impõe respeito e me dá liberdade.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Matheus Silva",
    role: "Personal Trainer",
    text: "As peças Dri Fit e Jogger são de outro nível. Treino e saio pra rua com o mesmo estilo. A curadoria deles é diferenciada.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "João Pedro",
    role: "Músico",
    text: "Gosto da liberdade que as roupas me dão. OGOCHI e John Pool são minhas preferidas. Atendimento top em Entre Rios.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
  }
];