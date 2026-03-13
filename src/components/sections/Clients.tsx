"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Star, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "Prem'IA a d\u00e9velopp\u00e9 notre outil interne de gestion en un temps record. L'\u00e9quipe est r\u00e9active, comprend les enjeux m\u00e9tier et livre du concret.",
    name: "Axel Cohen",
    role: "Directeur",
    company: "IMH Radio Herblay",
    type: "Outil interne de gestion",
  },
  {
    quote: "La refonte SEO/GEO de notre site a compl\u00e8tement chang\u00e9 notre visibilit\u00e9 en ligne. On attire maintenant une client\u00e8le internationale.",
    name: "Paul Poirier",
    role: "Propri\u00e9taire",
    company: "Restaurant Amourette",
    type: "Prestation SEO / GEO",
  },
  {
    quote: "On avait besoin d'un hub de prospection centralis\u00e9. Prem'IA a compris le besoin en 1 call et livr\u00e9 un outil qu'on utilise tous les jours.",
    name: "\u00c9quipe Cognectik",
    role: "Direction",
    company: "Cognectik",
    type: "Hub de prospection / CRM",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projets livr\u00e9s" },
  { value: 8, suffix: "+", label: "Industries" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export function Clients() {
  return (
    <section id="clients" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(0,212,255,0.04)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-4">Clients</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Ils ont construit<br />
            <span className="text-[var(--color-text-dim)]">avec nous.</span>
          </h2>
        </SectionReveal>

        {/* Testimonials */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group relative h-full flex flex-col p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-all duration-500 overflow-hidden">
                {/* Top glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--color-cyan)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 blur-[60px]" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Quote icon */}
                  <Quotes size={28} weight="fill" className="text-[var(--color-cyan)]/20 mb-6" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} weight="fill" className="text-[var(--color-amber)]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-8 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Project type */}
                  <div className="mb-5">
                    <span className="inline-flex items-center rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/5 px-3 py-1 text-[11px] font-semibold text-[var(--color-cyan)]">
                      {t.type}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-[var(--color-border)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-xs font-bold text-[var(--color-cyan)]">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-[var(--color-text-dim)]">{t.role} &middot; {t.company}</div>
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
            <SectionReveal key={stat.label} className="text-center py-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl sm:text-5xl font-black text-white tracking-tighter"
                duration={2.5}
              />
              <div className="mt-2 text-sm font-medium text-[var(--color-text-dim)]">{stat.label}</div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
