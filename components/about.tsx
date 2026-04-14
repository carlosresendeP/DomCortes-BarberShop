"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { Quote, ShieldCheck, Coffee } from "lucide-react";

export default function About(): React.JSX.Element {
  const fadeInUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="sobre"
      className="relative bg-background py-24 lg:py-32 overflow-hidden"
    >
      {/* ─── GRID DE FUNDO COESO ─── */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* ─── COLUNA DA ESQUERDA: IMAGEM NARRATIVA ─── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            {/* Moldura Técnica */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 z-20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 z-20" />

            <div className="relative aspect-[3/4] md:max-w-sm lg:max-w-lg overflow-hidden rounded-none border border-zinc-800">
              <Image
                src="/banner-2.png"
                alt="Jerry, proprietário da Dom Cortês em ação"
                fill
                className="object-cover h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Selo de Tempo */}
            <div className="absolute -bottom-8 -left-4 lg:-left-20 bg-primary p-6 shadow-2xl">
              <p className="text-foreground font-black text-4xl leading-none">
                10
              </p>
              <p className="text-foreground text-[10px] uppercase font-bold tracking-widest mt-1">
                Anos de <br /> Tradição
              </p>
            </div>
          </motion.div>

          {/* ─── COLUNA DA DIREITA: CONTEÚDO EDITORIAL ─── */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                  A Nossa Essência
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-zinc-100 uppercase tracking-tighter leading-none italic">
                UM CORTE, <br />
                <span className="text-zinc-500 font-light">UM ESTILO</span>
              </h2>

              <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  A{" "}
                  <span className="text-zinc-100 font-semibold">
                    Barbearia Dom Cortês
                  </span>{" "}
                  nasceu da visão do Jerry: criar um refúgio onde a técnica
                  impecável se encontra com a hospitalidade mineira.
                </p>
                <p>
                  Aqui, cada cliente é único. Não seguimos apenas tendências;
                  esculpimos visuais que elevam a autoestima e refletem a
                  personalidade de quem senta em nossa cadeira. A famosa{" "}
                  <span className="italic text-zinc-200 underline underline-offset-4 decoration-primary/30">
                    &quot;<strong>resenha</strong>&quot;
                  </span>{" "}
                  é o nosso ingrediente secreto.
                </p>
              </div>
            </motion.div>

            {/* Diferenciais em Grid Slim */}
            {/* <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-900"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-zinc-100 font-bold uppercase text-xs tracking-widest mb-1">
                    Qualidade Dom
                  </h4>
                  <p className="text-zinc-500 text-sm leading-snug">
                    Processos esterilizados e produtos de linha premium.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-zinc-100 font-bold uppercase text-xs tracking-widest mb-1">
                    Hospitalidade
                  </h4>
                  <p className="text-zinc-500 text-sm leading-snug">
                    Café quente ou aquela cerveja gelada na espera.
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* Citação Direta (The Jerry Quote) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-8 bg-zinc-900/50 border-l-4 border-primary italic"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-zinc-800 opacity-50" />
              <p className="text-zinc-300 text-xl font-serif">
                &quot;Gosto de receber cada cliente como um amigo. Conhecer a
                história de cada um é o que faz o corte ser mais que estética, é
                conexão.&quot;
              </p>
              <cite className="block mt-4 text-xs font-black uppercase tracking-widest text-primary not-italic">
                — Jerry, Proprietário
              </cite>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
