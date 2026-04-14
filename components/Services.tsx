"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { Scissors, Sparkles, Ruler, Zap, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// --- Interfaces de Tipagem ---

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  imageUrl: string;
  size: "large" | "small" | "medium";
  highlight?: string;
}

// --- Dados dos Serviços com Imagens do Unsplash ---

const services: Service[] = [
  {
    id: "01",
    title: "Degradê (Fade)",
    category: "Especialidade da Casa",
    description:
      "A nossa assinatura. Acabamento preciso com transição suave e técnica de ponta.",
    icon: Sparkles,
    imageUrl:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop",
    size: "large",
    highlight: "Mais Procurado",
  },
  {
    id: "02",
    title: "Corte na Tesoura",
    category: "Clássico",
    description:
      "Para quem busca um visual natural e caimento clássico impecável.",
    icon: Scissors,
    imageUrl:
      "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "medium",
  },
  {
    id: "03",
    title: "Barba Completa",
    category: "Ritual",
    description: "Modelagem e cuidado com toalha quente e produtos premium.",
    icon: Ruler,
    imageUrl:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: "04",
    title: "Combo Dom Cortês",
    category: "Experiência",
    description: "O cuidado completo: Corte + Barba com valor exclusivo.",
    icon: Zap,
    imageUrl:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "medium",
  },
  {
    id: "05",
    title: "Sobrancelha & Freestyle",
    category: "Detalhes",
    description:
      "Alinhamento facial e desenhos personalizados para exclusividade.",
    icon: ChevronRight,
    imageUrl:
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "small",
  },
];

export default function Services(): React.JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="servicos"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Camada de Grid de Fundo Sutil */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header da Secção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary rounded-none uppercase tracking-widest text-[10px] px-3"
            >
              Menu de Especialidades
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-100 uppercase tracking-tighter italic leading-none">
              SERVIÇOS <br />
            </h2>
          </div>
          <p className="max-w-xs text-zinc-500 text-sm font-medium leading-relaxed border-l border-primary/30 pl-4">
            Técnicas modernas aliadas à tradição. Escolha o seu ritual de
            transformação.
          </p>
        </div>

        {/* Bento Grid Otimizado com Imagens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`
                group relative p-8 overflow-hidden border  border-zinc-900 bg-card/50
                hover:border-primary/50 transition-all duration-500 flex flex-col justify-between
                ${service.size === "large" ? "md:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[500px]" : ""}
                ${service.size === "medium" ? "md:col-span-2 lg:col-span-3 min-h-[300px]" : ""}
                ${service.size === "small" ? "md:col-span-2 lg:col-span-2 min-h-[300px]" : ""}
              `}
            >
              {/* Imagem de Fundo com Overlay Progressivo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-all duration-700 opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
              </div>

              {/* Conteúdo sobreposto */}
              <div className="space-y-4 relative z-20">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">
                    {service.category}
                  </span>
                  <service.icon className="w-5 h-5 text-zinc-700 group-hover:text-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3
                    className={`font-black uppercase tracking-tighter text-zinc-100 group-hover:text-white transition-colors ${service.size === "large" ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between relative z-20">
                <div className="flex items-center gap-2 group/btn cursor-pointer">
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-primary transition-colors">
                    MOD. {service.id}
                  </span>
                </div>
                {service.highlight && (
                  <span className="text-[9px] font-black uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1">
                    {service.highlight}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
