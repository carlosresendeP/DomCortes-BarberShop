"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors, Calendar } from "lucide-react";
import Image from "next/image";

// --- Interfaces de Tipagem ---

interface NavLink {
  label: string;
  href: string;
}

// --- Configuração dos Links ---

const navLinks: NavLink[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#contato" },
];

export default function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Efeito para detectar scroll e mudar o background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variantes de animação
  const menuVariants: Variants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-zinc-800/50 py-4 shadow-lg shadow-primary/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* ─── LOGO ─── */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/10 rounded-none border border-primary/20 group-hover:bg-primary transition-colors">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-15 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase tracking-tighter text-zinc-100 leading-none">
              Dom Cortês
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
              Barbearia
            </span>

            {/*linha-bar*/}
            <div className="flex mt-2">
              <div className="w-full h-px bg-white" />
              <div className="w-full h-px bg-blue-500" />
              <div className="w-full h-px bg-red-500" />
            </div>
          </div>
        </Link>

        {/* ─── NAVEGAÇÃO DESKTOP ─── */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ─── CTA & MOBILE TOGGLE ─── */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-success rounded-none font-bold uppercase text-xs tracking-widest h-11 px-6 shadow-lg shadow-primary/10">
            <Calendar className="mr-2 w-4 h-4" />
            Agendar
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ─── MENU MOBILE ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full bg-background border-b border-zinc-800 px-6 py-10 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-zinc-100 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary text-primary-foreground w-full h-14 rounded-none font-black uppercase tracking-widest mt-4">
              Agendar Agora
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
