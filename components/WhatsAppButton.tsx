import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-8 right-8 z-50 bg-white text-black p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} className="stroke-[1.5]" />
    </motion.a>
  );
};

export default WhatsAppButton;