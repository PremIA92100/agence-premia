"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, RocketLaunch, TrendUp, Lightning } from "@phosphor-icons/react";
import { SectionReveal } from "../ui/SectionReveal";

const steps = [
  {
    id: "strategie",
    number: "01",
    label: "Strat\u00e9gie",
    icon: Compass,
    title: "On cartographie votre terrain",
    description: "On transforme votre id\u00e9e en plan d\u2019action. Priorit\u00e9s, faisabilit\u00e9, roadmap. Pas de bullshit, que du concret.",
    features: ["\u00c9tude de faisabilit\u00e9", "Audit technologique", "S\u00e9lection des outils", "Strat\u00e9gie produit"],
    duration: "1-2 semaines",
  },
  {
    id: "mvp",
    number: "02",
    label: "Build",
    icon: RocketLaunch,
    title: "On construit vite et bien",
    description: "Gr\u00e2ce \u00e0 l\u2019IA et aux outils modernes, on livre un produit qui claque en un temps record. It\u00e9rations rapproch\u00e9es.",
    features: ["Livraison rapide", "It\u00e9rations continues", "Validation de traction", "Retours utilisateurs"],
    duration: "2-6 semaines",
  },
  {
    id: "scale",
    number: "03",
    label: "Scale",
    icon: TrendUp,
    title: "On fait passer \u00e0 l\u2019\u00e9chelle",
    description: "Migration, performance, s\u00e9curit\u00e9. On accompagne la croissance de votre produit sans compromis.",
    features: ["RGPD & conformit\u00e9", "Performances in\u00e9gal\u00e9es", "S\u00e9curit\u00e9 avanc\u00e9e", "Self-Hosting"],
    duration: "Continu",
  },
  {
    id: "automatisation",
    number: "04",
    label: "Automate",
    icon: Lightning,
    title: "On automatise le r\u00e9p\u00e9titif",
    description: "Agents IA, workflows, int\u00e9grations. Vos \u00e9quipes se concentrent sur ce qui compte vraiment.",
    features: ["Agents IA sur-mesure", "Workflows automatis\u00e9s", "Serveurs MCP", "Coaching IA"],
    duration: "1-3 semaines",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-elevated)]" />
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-4">Notre process</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Quatre \u00e9tapes.<br />
            <span className="text-[var(--color-text-dim)]">Z\u00e9ro surprise.</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Step selector */}
          <div className="lg:col-span-4 space-y-2">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 group ${
                  active === i
                    ? "bg-[var(--color-bg-card)] border border-[var(--color-cyan)]/20"
                    : "border border-transparent hover:bg-white/[0.02]"
                }`}
              >
                <span
                  className={`text-xs font-black tracking-wider transition-colors duration-300 ${
                    active === i ? "text-[var(--color-cyan)]" : "text-[var(--color-text-dim)]"
                  }`}
                >
                  {s.number}
                </span>
                <div className="flex-1">
                  <div className={`text-sm font-bold transition-colors duration-300 ${active === i ? "text-white" : "text-[var(--color-text-muted)]"}`}>
                    {s.label}
                  </div>
                </div>
                <s.icon
                  size={18}
                  weight={active === i ? "fill" : "regular"}
                  className={`transition-colors duration-300 ${active === i ? "text-[var(--color-cyan)]" : "text-[var(--color-text-dim)]"}`}
                />
              </button>
            ))}
          </div>

          {/* Right - Step content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:p-12"
              >
                {/* Duration tag */}
                <div className="inline-flex items-center rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/5 px-3 py-1 text-xs font-bold text-[var(--color-cyan)] mb-6">
                  {step.duration}
                </div>

                <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mb-10 max-w-lg">
                  {step.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)]" />
                      <span className="text-sm font-medium text-[var(--color-text)]">{f}</span>
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
