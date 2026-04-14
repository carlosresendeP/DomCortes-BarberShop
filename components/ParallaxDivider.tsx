"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function ParallaxDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // A imagem se move levemente para criar o efeito parallax real
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[20vh] overflow-hidden border-y border-zinc-900">
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[140%] w-full">
        <Image
          src="/background-2.jpeg"
          alt="Barber detail"
          fill
          className="object-cover top-0 h-full w-full brightness-[0.5]"
        />
      </motion.div>
      
      {/* Overlay de Grid para manter a coesão com o resto do site */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-20 flex h-full items-center justify-center">
        <h3 className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-[1em] italic text-center">
          Dom Cortês
        </h3>
      </div>
    </section>
  );
}