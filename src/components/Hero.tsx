"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GradientMesh } from "./ui/GradientMesh";
import { MarqueeLogos } from "./ui/MarqueeLogos";
import { ArrowRight, Play } from "lucide-react";

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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm">
                🚀 Agence digitale IA & Automatisation
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
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
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <motion.path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#gradient-hero)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
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
              className="mt-8 text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg"
            >
              Nous créons des produits digitaux qui scalent, en un temps record.
              Sites, apps, automatisation, agents IA.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-100 transition-all duration-300"
              >
                Discuter de mon projet
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#realisations"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-600 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <Play className="h-4 w-4 fill-slate-400" />
                Voir nos réalisations
              </a>
            </motion.div>
          </div>

          {/* Right - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />

            {/* Browser frame */}
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs text-slate-400">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    agence-premia.fr
                  </div>
                </div>
              </div>

              {/* Dashboard mockup content */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white min-h-[320px]">
                {/* Mini dashboard */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Projets livrés", value: "50+", color: "text-blue-600" },
                    { label: "Satisfaction", value: "98%", color: "text-emerald-600" },
                    { label: "Temps moyen", value: "3 sem.", color: "text-violet-600" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white border border-slate-100 p-3 shadow-sm">
                      <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Fake chart bars */}
                <div className="rounded-xl bg-white border border-slate-100 p-4 shadow-sm">
                  <div className="text-xs font-semibold text-slate-700 mb-3">Performance projets</div>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.8 + i * 0.05 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-violet-500 opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social proof bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 border-t border-slate-100 bg-white/60 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Ils nous font déjà confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { name: "IMH Radio", desc: "Outil interne" },
              { name: "Amourette", desc: "SEO / GEO" },
              { name: "FoodTech Paris", desc: "Automatisation" },
              { name: "PropTech Solutions", desc: "Application web" },
            ].map((client) => (
              <div key={client.name} className="group text-center cursor-default">
                <div className="text-sm font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-300 group-hover:text-slate-500 transition-colors duration-300">
                  {client.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Marquee logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <MarqueeLogos />
      </motion.div>
    </section>
  );
}
