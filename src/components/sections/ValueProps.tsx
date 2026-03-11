"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Zap, PiggyBank, UserCheck } from "lucide-react";

const props = [
  {
    icon: Zap,
    value: 5,
    suffix: "x",
    label: "Plus rapide",
    desc: "On livre en jours, pas en mois. L'IA accélère chaque étape du développement.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: PiggyBank,
    value: 3,
    suffix: "x",
    label: "Moins cher",
    desc: "Automatisation = moins de temps = budget optimisé. Chaque euro investi compte.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: UserCheck,
    value: 100,
    suffix: "%",
    label: "Autonome",
    desc: "Formation incluse. Vous gardez le contrôle total sur votre produit au quotidien.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
];

export function ValueProps() {
  return (
    <section className="py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Pourquoi choisir Prem&apos;IA ?
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            Rapidité, économies et autonomie. Les trois piliers de notre approche.
          </p>
        </SectionReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {props.map((prop) => (
            <StaggerItem key={prop.label}>
              <div className="relative group text-center p-10 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Icon */}
                <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${prop.color} shadow-lg`}>
                  <prop.icon className="h-8 w-8 text-white" />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={prop.value}
                    suffix={prop.suffix}
                    className="text-6xl font-black tracking-tight text-slate-900"
                  />
                </div>
                <div className="text-xl font-bold text-slate-900 mb-4">{prop.label}</div>

                {/* Description */}
                <p className="text-base leading-relaxed text-slate-500">
                  {prop.desc}
                </p>

                {/* Hover gradient line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${prop.color} rounded-full group-hover:w-1/2 transition-all duration-500`} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
