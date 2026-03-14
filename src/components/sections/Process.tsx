"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, RocketLaunch, TrendUp, Lightning } from "@phosphor-icons/react";
import { SectionReveal } from "../ui/SectionReveal";

const steps = [
  {
    id: "strategie",
    number: "01",
    label: "Stratégie",
    icon: Compass,
    title: "On cartographie votre terrain",
    description: "On transforme votre idée en plan d'action. Priorités, faisabilité, roadmap. Pas de bullshit, que du concret.",
    features: ["Étude de faisabilité", "Audit technologique", "Sélection des outils", "Stratégie produit"],
    duration: "1-2 semaines",
  },
  {
    id: "mvp",
    number: "02",
    label: "Build",
    icon: RocketLaunch,
    title: "On construit vite et bien",
    description: "Grâce à l'IA et aux outils modernes, on livre un produit qui claque en un temps record. Itérations rapprochées.",
    features: ["Livraison rapide", "Itérations continues", "Validation de traction", "Retours utilisateurs"],
    duration: "2-6 semaines",
  },
  {
    id: "scale",
    number: "03",
    label: "Scale",
    icon: TrendUp,
    title: "On fait passer à l'échelle",
    description: "Migration, performance, sécurité. On accompagne la croissance de votre produit sans compromis.",
    features: ["RGPD & conformité", "Performances inégalées", "Sécurité avancée", "Self-Hosting"],
    duration: "Continu",
  },
  {
    id: "automatisation",
    number: "04",
    label: "Automate",
    icon: Lightning,
    title: "On automatise le répétitif",
    description: "Agents IA, workflows, intégrations. Vos équipes se concentrent sur ce qui compte vraiment.",
    features: ["Agents IA sur-mesure", "Workflows automatisés", "Serveurs MCP", "Coaching IA"],
    duration: "1-3 semaines",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">Notre process</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Quatre étapes.<br />
            <span className="text-slate-400">Zéro surprise.</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Step selector */}
          <div className="lg:col-span-4 space-y-2">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                  active === i
                    ? "bg-white border border-cyan-200 shadow-md"
                    : "border border-transparent hover:bg-white/60"
                }`}
              >
                <span className={`text-xs font-black tracking-wider transition-colors duration-300 ${active === i ? "text-cyan-600" : "text-slate-300"}`}>
                  {s.number}
                </span>
                <div className="flex-1">
                  <div className={`text-sm font-bold transition-colors duration-300 ${active === i ? "text-slate-900" : "text-slate-500"}`}>
                    {s.label}
                  </div>
                </div>
                <s.icon size={18} weight={active === i ? "fill" : "regular"} className={`transition-colors duration-300 ${active === i ? "text-cyan-600" : "text-slate-300"}`} />
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm"
              >
                <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700 mb-6">
                  {step.duration}
                </div>

                <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-500 mb-10 max-w-lg">
                  {step.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      <span className="text-sm font-medium text-slate-700">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
