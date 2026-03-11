"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const props = [
  {
    value: 5,
    suffix: "x",
    label: "Plus rapide",
    benefit: "Votre projet live en semaines, pas en mois",
    desc: "Pendant que d'autres en sont encore au cahier des charges, votre produit est déjà entre les mains de vos utilisateurs.",
    accent: "text-blue-600",
    line: "bg-blue-600",
  },
  {
    value: 3,
    suffix: "x",
    label: "Moins cher",
    benefit: "Budget maîtrisé, ROI immédiat",
    desc: "Chaque euro est investi dans ce qui compte. Pas de feature inutile, pas de réunion à rallonge, que du concret.",
    accent: "text-violet-600",
    line: "bg-violet-600",
  },
  {
    value: 100,
    suffix: "%",
    label: "Autonome",
    benefit: "Vous gardez la main, on vous forme",
    desc: "Pas de dépendance. On vous livre un produit que vous pouvez faire évoluer vous-même, avec formation incluse.",
    accent: "text-emerald-600",
    line: "bg-emerald-600",
  },
];

export function ValueProps() {
  return (
    <section className="py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Pourquoi nous</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Ce que ça change <span className="gradient-text">pour vous</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Pas des promesses. Des résultats concrets, mesurables, dès la première semaine.
          </p>
        </SectionReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {props.map((prop) => (
            <StaggerItem key={prop.label}>
              <div className="relative group h-full p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative z-10">
                  {/* Big number + label */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <AnimatedCounter
                        value={prop.value}
                        suffix={prop.suffix}
                        className={`text-5xl sm:text-6xl font-black tracking-tighter ${prop.accent}`}
                      />
                      <span className="text-base font-semibold text-slate-400 uppercase tracking-wide">{prop.label}</span>
                    </div>
                    <div className={`mt-3 h-0.5 w-12 ${prop.line} rounded-full`} />
                  </div>

                  {/* Benefit headline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.benefit}</h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-slate-500">{prop.desc}</p>
                </div>

                {/* Bottom accent line on hover */}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${prop.line} group-hover:w-full transition-all duration-700`} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
