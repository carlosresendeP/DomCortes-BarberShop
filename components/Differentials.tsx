"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { Coffee, Beer, Clock, Award, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// --- Interfaces de Tipagem ---

interface Differential {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
}

// --- Dados dos Diferenciais (Baseados no PRD) ---

const differentials: Differential[] = [
  {
    title: "Hora Marcada",
    description:
      "Respeito total ao seu tempo. Pontualidade britânica para a sua rotina.",
    icon: Clock,
    imageUrl:
      "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Cortesia Premium",
    description:
      "Desfrute de um café artesanal ou uma cerveja gelada durante o seu ritual.",
    icon: Beer,
    imageUrl:
      "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Ambiente Exclusive",
    description:
      "Um refúgio masculino desenhado para a melhor 'resenha' de Resende Costa.",
    icon: Coffee,
    imageUrl:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Técnica de Elite",
    description:
      "Profissionais treinados nas últimas tendências mundiais de visagismo.",
    icon: Award,
    imageUrl:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Differentials(): React.JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="diferenciais"
      className="relative bg-background py-24 lg:py-32 overflow-hidden"
    >
      {/* ─── CAMADA DE FUNDO TÉCNICA ─── */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header da Secção */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary rounded-none uppercase tracking-[0.3em] text-[10px] px-4 py-1"
            >
              The Experience
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-100 uppercase italic tracking-tighter leading-none">
              O NOSSO <br />
              <span className="text-primary not-italic font-sans">
                RITUAL
              </span>{" "}
              <br />
              <span className="text-zinc-500 font-light">DIÁRIO.</span>
            </h2>
          </div>
          <div className="space-y-6 lg:border-l lg:border-zinc-800 lg:pl-12">
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Não entregamos apenas cortes. Proporcionamos um momento de pausa,
              cuidado e networking num ambiente de alta sofisticação.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Café Gourmet", "Wi-Fi High Speed"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Diferenciais */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-[450px] flex flex-col items-start justify-center overflow-hidden border border-zinc-900 bg-zinc-900/40"
            >
              {/* Imagem de Fundo Contextual */}
              <Image
                src={diff.imageUrl}
                alt={diff.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-20"
              />

              {/* Overlay Técnico */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />

              {/* Conteúdo */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col items-start justify-start gap-4">
                <div className="w-12 h-12 bg-background border border-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors duration-500">
                  <diff.icon className="w-5 h-5 text-primary group-hover:text-zinc-950 transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-zinc-100 uppercase tracking-tighter italic">
                  {diff.title}
                </h3>

                <p className="text-zinc-500 text-sm font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {diff.description}
                </p>

                {/* Linha de Progresso Decorativa */}
                <div className="w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
              </div>

              {/* Número de Ordem Sutil */}
              <span className="absolute top-8 right-8 text-4xl font-black text-zinc-800/20 italic group-hover:text-primary/10 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
