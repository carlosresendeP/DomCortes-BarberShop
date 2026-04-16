"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

// --- Interfaces de Tipagem ---

interface Schedule {
  days: string;
  hours: string;
}

// --- Dados de Atendimento ---

const schedule: Schedule[] = [
  { days: "Segunda a Quinta", hours: "09:00 às 19:00" },
  { days: "Sexta-feira", hours: "09:00 às 20:00" },
  { days: "Sábado", hours: "09:00 às 15:00" },
  { days: "Domingo", hours: "Fechado" },
];

export default function Contact(): React.JSX.Element {
  const fadeInUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contato"
      className="relative bg-background py-24 overflow-hidden border-t border-zinc-900"
    >
      {/* Grid de Fundo Sutil */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ─── COLUNA ESQUERDA: INFO & CANAIS ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-12"
          >
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary rounded-none uppercase tracking-widest text-[10px] px-4"
              >
                Onde nos encontrar
              </Badge>
              <h2 className="text-5xl md:text-7xl font-black text-zinc-100 uppercase italic tracking-tighter leading-none">
                VISITE-NOS <br />
              </h2>
            </div>

            {/* Endereço & Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-100">
                    Endereço
                  </span>
                </div>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Bairro - Várzea
                  <br />
                  Av. Antônio da Silva Barbosa, 108
                  <br />
                  Resende Costa, MG — 36340-000
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group"
                >
                  Abrir no GPS
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-100">
                    Contato Direto
                  </span>
                </div>
                <p className="text-zinc-400 font-light leading-relaxed">
                  +55 32 99928-6816
                </p>
                <div>
                  <Button className="bg-transparent">
                    <a href="https://www.instagram.com/dom_cortes/" className="flex items-center justify-start gap-1" target="_blank">
                      <IoLogoInstagram className="w-10 h-10 text-zinc-600 hover:text-primary cursor-pointer transition-colors" />
                      <span className="text-zinc-400 font-light leading-relaxed">
                        @dom_cortes
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Horários de Funcionamento */}
            <div className="p-8 bg-zinc-900/50 border border-zinc-900 space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-100 italic">
                  Horários de Atendimento
                </h4>
              </div>
              <div className="space-y-4">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-zinc-800 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-tight">
                      {item.days}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold ${item.hours === "Fechado" ? "text-zinc-700" : "text-zinc-200"}`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="w-full h-16 bg-primary text-primary-foreground font-black hover:bg-success/80 transition-all duration-300 uppercase tracking-widest rounded-none shadow-xl shadow-primary/10 group"
            >
              <IoLogoWhatsapp className="mr-2 w-10 h-10" />
              Chamar no WhatsApp
            </Button>
          </motion.div>

          {/* ─── COLUNA DIREITA: MAPA COM FILTRO PREMIUM ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[650px] w-full contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700 border border-zinc-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.9582749476353!2d-44.234595600000006!3d-20.9139983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1a571695786f5%3A0x37ae6fd2e3f9bdc5!2sBarbearia%20Dom%20Cort%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1776117664381!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Overlay para facilitar a transição de cor */}
            <div className="absolute inset-0 pointer-events-none border-2 border-zinc-950" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
