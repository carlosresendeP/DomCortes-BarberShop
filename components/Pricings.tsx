"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scissors, Star } from "lucide-react";

// --- Interfaces de Tipagem ---

interface PriceItem {
  name: string;
  description: string;
  price: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

// --- Dados (Baseados no seu PRD) ---

const priceCategories: PriceCategory[] = [
  {
    title: "Cortes & Estilo",
    items: [
      {
        name: "Corte Degradê",
        description: "Técnica de fade com acabamento navalhado.",
        price: "R$ 45,50",
      },
      {
        name: "Corte Social",
        description: "O clássico adaptado ao seu perfil.",
        price: "R$ 40,00",
      },
      {
        name: "Corte na Tesoura",
        description: "Caimento natural e corte artesanal.",
        price: "R$ 50,00",
      },
      {
        name: "Pezinho & Acabamento",
        description: "Alinhamento de contornos e nuca.",
        price: "R$ 15,00",
      },
    ],
  },
  {
    title: "Barba & Cuidados",
    items: [
      {
        name: "Barba Completa",
        description: "Modelagem com toalha quente e balm.",
        price: "R$ 35,00",
      },
      {
        name: "Combo Dom Cortês",
        description: "Corte Degradê + Barba Completa.",
        price: "R$ 75,00",
      },
      {
        name: "Sobrancelha",
        description: "Alinhamento para harmonização facial.",
        price: "R$ 10,00",
      },
      {
        name: "Barboterapia",
        description: "Ritual completo de relaxamento e hidratação.",
        price: "R$ 45,00",
      },
    ],
  },
];

export default function Pricings(): React.JSX.Element {
  const [pricing, setPricing] = useState(priceCategories);

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
      id="precos"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* ─── BACKGROUND COM IMAGEM E GRADIENTE ─── */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1512690199101-83749a745810?q=80&w=2070&auto=format&fit=crop"
          alt="Barber tools background"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header da Seção */}
        <div className="text-center space-y-4 mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-primary/30 text-primary rounded-none uppercase tracking-widest text-xs px-4 py-1"
            >
              Investimento no seu Estilo
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-zinc-100 uppercase italic tracking-tighter"
          >
            TABELA DE <span className="text-zinc-500 font-light">VALORES.</span>
          </motion.h2>
          <Separator className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Grid de Preços */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {priceCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, x: catIdx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <Scissors className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-black uppercase tracking-widest text-zinc-100 italic">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group flex flex-col gap-2">
                    <div className="flex items-end justify-between gap-4">
                      <span className="text-lg font-bold text-zinc-200 uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      {/* Linha pontilhada dinâmica */}
                      <div className="flex-1 border-b border-zinc-800 border-dotted mb-1.5 opacity-30 group-hover:opacity-100 transition-opacity" />
                      <span className="text-lg font-mono font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 font-light leading-none italic group-hover:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da Seção (Selo de Qualidade) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center gap-6 p-8 border border-zinc-900 bg-zinc-900/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-primary">
            <Star className="w-4 h-4 fill-primary" />
            <Star className="w-4 h-4 fill-primary" />
            <Star className="w-4 h-4 fill-primary" />
            <Star className="w-4 h-4 fill-primary" />
            <Star className="w-4 h-4 fill-primary" />
          </div>
          <p className="text-zinc-400 text-center max-w-md text-sm font-light uppercase tracking-widest leading-relaxed">
            Valores base para serviços individuais. Consulte combos exclusivos
            diretamente no balcão.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
