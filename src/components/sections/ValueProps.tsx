"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Lightning, CurrencyCircleDollar, Rocket } from "@phosphor-icons/react";

const props = [
  {
    icon: Lightning,
    value: 5,
    suffix: "x",
    label: "Plus rapide",
    benefit: "Votre projet live en semaines, pas en mois",
    desc: "Pendant que d'autres en sont encore au cahier des charges, votre produit est déjà entre les mains de vos utilisateurs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CurrencyCircleDollar,
    value: 3,
    suffix: "x",
    label: "Moins cher",
    benefit: "Budget maîtrisé, ROI immédiat",
    desc: "Chaque euro est investi dans ce qui compte. Pas de feature inutile, pas de réunion à rallonge, que du concret.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Rocket,
    value: 100,
    suffix: "%",
    label: "Autonome",
    benefit: "Vous gardez la main, on vous forme",
    desc: "Pas de dépendance. On vous livre un produit que vous pouvez faire évoluer vous-même, avec formation incluse.",
    color: "from-emerald-500 to-teal-500",
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
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon + Counter row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${prop.color} shadow-lg`}>
                      <prop.icon size={24} weight="fill" className="text-white" />
                    </div>
                    <AnimatedCounter
                      value={prop.value}
                      suffix={prop.suffix}
                      className="text-4xl font-black tracking-tight text-slate-900"
                    />
                    <span className="text-lg font-bold text-slate-400">{prop.label}</span>
                  </div>

                  {/* Benefit headline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.benefit}</h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-slate-500">{prop.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${prop.color} group-hover:w-full transition-all duration-700`} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
