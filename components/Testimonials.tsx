"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- Interfaces de Tipagem ---

interface Review {
  name: string;
  info: string;
  content: string;
  isLocalGuide: boolean;
  time: string;
}

// --- Dados Reais Atualizados ---

const googleReviews: Review[] = [
  {
    name: "Robertt Gabriel",
    info: "2 avaliações",
    content:
      "Lugar bom de se frequentar, espaço bem montado, o dono, Jerry é muito comunicativo, dá atenção para a pessoa e a inclui no assunto.",
    isLocalGuide: false,
    time: "6 meses atrás",
  },
  {
    name: "Noboru Noboru",
    info: "Local Guide • 53 avaliações",
    content:
      "Gosto de ir lá cortar o meu cabelo e bater um bom papo com o Jerry. Conhece muito da cidade, suas características e a culinária.",
    isLocalGuide: true,
    time: "10 meses atrás",
  },
  {
    name: "Sócrates Resende",
    info: "2 avaliações",
    content:
      "Lugar ótimo, atendimento impecável e o Jerry é o um grande profissional, melhor barbeiro de Resende Costa.",
    isLocalGuide: false,
    time: "1 ano atrás",
  },
  {
    name: "Ígor Moreira",
    info: "Local Guide • 33 avaliações",
    content:
      "Show de bola! Uma das melhores opções de corte de cabelo e barba em Resende Costa. Recomendo!",
    isLocalGuide: true,
    time: "6 anos atrás",
  },
  {
    name: "Telemont Resende",
    info: "1 avaliação",
    content:
      "Ambiente muito legal e meu corte ficou o máximo! Sempre vou cortar meu cabelo e fazer a barba no Dom Cortês.",
    isLocalGuide: false,
    time: "8 anos atrás",
  },
];

export default function Testimonials(): React.JSX.Element {
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
      id="depoimentos"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* ─── FUNDO COM GRID TÉCNICO ─── */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ─── HEADER DA SEÇÃO ─── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4 text-center md:text-left"
          >
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary rounded-none uppercase tracking-widest text-xs px-4 py-1"
            >
              Depoimentos
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-100 uppercase italic tracking-tighter leading-none">
              Depoimentos
              <br />
              <span className="text-primary not-italic font-sans"></span>
            </h2>
          </motion.div>

          {/* Placar de Avaliação Google */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center md:items-end gap-3"
          >
            <div className="flex items-center gap-3 bg-zinc-900 p-4 border border-zinc-800">
              <FcGoogle className="w-10 h-10" />
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-zinc-100 font-black text-lg tracking-tighter leading-none mt-1">
                  4.8 / 5.0
                </span>
              </div>
            </div>
            <Button
              className="bg-zinc-100 text-zinc-950 hover:bg-primary hover:text-primary-foreground rounded-none font-black uppercase text-xs tracking-widest px-8 group transition-all"
              asChild
            >
              <a
                href="https://www.google.com/search?sca_esv=2f8518efab07fb93&sxsrf=ANbL-n6gVavFP9Rmd89aVaW_4kejQvEKtA:1776118413461&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSPGjhhdVlVWXmojsNlJw_f1wclHKVrnYZ-8fKCpjOFYSuAKmQ4bEJSpV5Sez_I3hvvV8JaTaiRr9Gjg9WQRl3ClIbfepLkqnDZfjSsRZJ63QL6bnw%3D%3D&q=Barbearia+Dom+Cort%C3%AAs+Coment%C3%A1rios&sa=X&ved=2ahUKEwjb5PPY7OuTAxUluZUCHbEzEAoQ0bkNegQIHxAF&biw=1366&bih=633&dpr=1"
                target="_blank"
              >
                Avaliar no Google{" "}
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* ─── CARROSSEL DE REVIEWS ─── */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {googleReviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-zinc-900/50 border-zinc-800 rounded-none h-full hover:border-primary/40 transition-all group">
                  <CardContent className="p-8 flex flex-col justify-between h-full space-y-8">
                    <div className="space-y-6">
                      <Quote className="w-10 h-10 text-zinc-800 group-hover:text-primary/20 transition-colors" />
                      <p className="text-zinc-300 italic font-serif leading-relaxed text-xl">
                        &quot;{review.content}&quot;
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-zinc-800/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-zinc-100 font-black uppercase text-xs tracking-widest">
                            {review.name}
                          </p>
                          {review.isLocalGuide && (
                            <Badge className="bg-primary/10 text-primary text-[8px] uppercase font-black px-1 rounded-none border-none">
                              Guide
                            </Badge>
                          )}
                        </div>
                        <p className="text-zinc-600 text-[10px] uppercase font-bold">
                          {review.info}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                        <span className="text-zinc-700 text-[9px] font-bold uppercase">
                          {review.time}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navegação */}
          <div className="flex justify-center md:justify-end gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 rounded-none border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-primary hover:text-zinc-950 transition-colors" />
            <CarouselNext className="static translate-y-0 rounded-none border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-primary hover:text-zinc-950 transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
