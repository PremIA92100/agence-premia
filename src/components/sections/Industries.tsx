"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { GradientMeshDark } from "../ui/GradientMesh";
import { ForkKnife, ShoppingBag, Heart, Code, Buildings, Megaphone } from "@phosphor-icons/react";

const industries = [
  { name: "Restauration & Food", icon: ForkKnife, color: "from-orange-400 to-red-500" },
  { name: "Retail & E-commerce", icon: ShoppingBag, color: "from-pink-400 to-rose-500" },
  { name: "Santé & Bien-être", icon: Heart, color: "from-emerald-400 to-teal-500" },
  { name: "SaaS & Tech", icon: Code, color: "from-blue-400 to-indigo-500" },
  { name: "Immobilier & BTP", icon: Buildings, color: "from-amber-400 to-orange-500" },
  { name: "Marketing & Com", icon: Megaphone, color: "from-violet-400 to-purple-500" },
];

const stats = [
  { value: 50, suffix: "+", label: "Projets livrés" },
  { value: 8, suffix: "+", label: "Industries" },
  { value: 98, suffix: "%", label: "Satisfaction client" },
];

export function Industries() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      <GradientMeshDark />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Les leaders de leur industrie<br />
            <span className="gradient-text">nous font confiance</span>
          </h2>
        </SectionReveal>

        {/* Industries grid */}
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20" staggerDelay={0.1}>
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default text-center">
                <div className={`mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${industry.color} shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                  <industry.icon size={24} weight="fill" className="text-white" />
                </div>
                <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                  {industry.name}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <SectionReveal key={stat.label} className="text-center">
              <div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-5xl sm:text-6xl font-black text-white"
                  duration={2.5}
                />
              </div>
              <div className="mt-2 text-base font-medium text-white/50">{stat.label}</div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
