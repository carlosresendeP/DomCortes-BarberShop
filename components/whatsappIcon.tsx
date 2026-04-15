"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoLogoWhatsapp } from "react-icons/io";

/**
 * Chatbot Concierge - Barbearia Dom Cortês
 * Estética: Luxury Minimalism & High Engagement
 */
export default function WhatsAppIcon(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Dados oficiais do PRD
  const phoneNumber = "5532999286816";
  const welcomeMessage = "Olá! Gostaria de agendar um horário na Dom Cortês.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* ─── BOTÃO PRINCIPAL ─── */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group ${isOpen ? "hidden" : "block"}`}
      >
        {/* Efeito de Pulso (Aura) */}
        <div className="absolute inset-0 bg-success/20 rounded-full animate-ping pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-green-600 border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-zinc-950 transition-all duration-500 shadow-2xl group"
        >
          {/* Alternância entre ícones (Opcional, mas elegante) */}
          <IoLogoWhatsapp className="w-8 h-8 transition-transform text-white group-hover:rotate-12" />

          {/* Badge de "Online" */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-950 rounded-full" />
        </a>
      </motion.div>
    </div>
  );
}
