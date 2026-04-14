"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Calendar, Scissors, ArrowRight } from "lucide-react";

export default function Hero(): React.JSX.Element {
  // Variantes de animação para entrada coordenada
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      {/* ─── BACKGROUND LAYER (IMAGEM + GRID + GRADIENTE) ─── */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 brightness-50">
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
            alt="Interior de luxo da Barbearia Dom Cortês"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Quadriculador (Grid) Técnico */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Gradiente de Profundidade (Radial e Linear) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/50" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]" />
      </div>

      {/* ─── CONTEÚDO PRINCIPAL ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 max-w-5xl mx-auto px-6 text-center space-y-8"
      >
        {/* Localização Badge */}
        <motion.span
          variants={fadeInUp}
          className="inline-block text-primary text-xs font-bold uppercase tracking-widest"
        >
          Resende Costa | MG
        </motion.span>

        {/* Título Brutalista e Editorial */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-7xl font-black text-zinc-100 leading-none tracking-tighter uppercase italic"
        >
          Seu corte com
          <br />
          <span className="text-primary not-italic font-sans relative">
            Estilo
          </span>{" "}
          <span className="text-zinc-500 font-light">& personalidade.</span>
        </motion.h1>

        {/* Descrição com largura controlada */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Mais que um corte, um ritual de cuidado e técnica. Resende Costa,
          oferecemos o ambiente ideal para quem busca excelência e a verdadeira{" "}
          <span className="text-zinc-200 font-medium italic">
            &quot;resenha&quot;
          </span>{" "}
          mineira.
        </motion.p>

        {/* Grupo de Ações (CTAs) */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6"
        >
          <Button
            size="lg"
            className="w-full md:w-auto h-16 px-10 bg-primary text-primary-foreground hover:bg-success transition-all rounded-none font-black uppercase tracking-widest shadow-2xl shadow-primary/20 group"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Agendar Horário
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto h-16 px-10 border-zinc-800 text-zinc-300 hover:bg-success hover:text-background transition-all rounded-none font-bold uppercase tracking-widest"
          >
            <Scissors className="mr-2 w-5 h-5" />
            Ver Serviços
          </Button>
        </motion.div>
      </motion.div>

      {/* Detalhe de Rodapé do Hero (Scroll Indicator) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
