"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Star, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "Prem'IA a développé notre outil interne de gestion en un temps record. L'équipe est réactive, comprend les enjeux métier et livre du concret.",
    name: "Axel Cohen",
    role: "Directeur",
    company: "IMH Radio Herblay",
    type: "Outil interne de gestion",
  },
  {
    quote: "La refonte SEO/GEO de notre site a complètement changé notre visibilité en ligne. On attire maintenant une clientèle internationale.",
    name: "Paul Poirier",
    role: "Propriétaire",
    company: "Restaurant Amourette",
    type: "Prestation SEO / GEO",
  },
  {
    quote: "On avait besoin d'un hub de prospection centralisé. Prem'IA a compris le besoin en 1 call et livré un outil qu'on utilise tous les jours.",
    name: "Équipe Cognectik",
    role: "Direction",
    company: "Cognectik",
    type: "Hub de prospection / CRM",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projets livrés" },
  { value: 8, suffix: "+", label: "Industries" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export function Clients() {
  return (
    <section id="clients" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">Clients</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Ils ont construit<br />
            <span className="text-slate-400">avec nous.</span>
          </h2>
        </SectionReveal>

        {/* Testimonials */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group relative h-full flex flex-col p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 blur-[60px]" />

                <div className="relative z-10 flex flex-col h-full">
                  <Quotes size={28} weight="fill" className="text-slate-100 mb-6" />

                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} weight="fill" className="text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 mb-8 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mb-5">
                    <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700">
                      {t.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-cyan-700">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role} &middot; {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <SectionReveal key={stat.label} className="text-center py-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter"
                duration={2.5}
              />
              <div className="mt-2 text-sm font-medium text-slate-400">{stat.label}</div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
