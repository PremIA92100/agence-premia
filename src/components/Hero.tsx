"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GradientMesh } from "./ui/GradientMesh";
import { MarqueeLogos } from "./ui/MarqueeLogos";
import { ArrowRight } from "lucide-react";

const rotatingWords = ["Sites web", "Applications", "Automatisation", "Agents IA"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <GradientMesh />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm">
              Agence digitale IA n°1 en France
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            Créons ensemble vos{" "}
            <span className="relative inline-block">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="gradient-text"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
              {/* Underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <motion.path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            Nous créons des produits digitaux qui scalent, en un temps record. 
            Avec vos équipes tech ou non tech.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-100 transition-all duration-300"
            >
              Réserver un appel
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#temoignages"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              Voir nos réalisations
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <MarqueeLogos />
      </motion.div>
    </section>
  );
}
