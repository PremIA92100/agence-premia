"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { Shield, Eye, Link2, BookOpen, Repeat, MessageSquare, Users, Target } from "lucide-react";

const autonomy = [
  { icon: Eye, text: "Éditez facilement via une interface visuelle" },
  { icon: Link2, text: "Interconnexions avec vos outils existants" },
  { icon: BookOpen, text: "Documentation & formation des équipes" },
  { icon: Repeat, text: "Itérations fluides et quotidiennes" },
];

const investment = [
  { icon: MessageSquare, text: "Zéro bullshit, zéro charabia technique" },
  { icon: Users, text: "Équipe pluridisciplinaire, dédiée à votre projet" },
  { icon: Target, text: "Culture pragmatique, orientée résultats" },
];

export function ProblemSolution() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Le monde change,<br /> le développement web aussi !
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            Dépendance technique, délais interminables, tarifs hors de prix... et si tout ça c&apos;était fini ?
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Autonomie */}
          <SectionReveal direction="left" className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6">
                <Shield className="h-4 w-4" />
                Autonomie
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-8">
                Regagnez votre autonomie technique !
              </h3>
              <StaggerChildren className="space-y-5" staggerDelay={0.1}>
                {autonomy.map((item) => (
                  <StaggerItem key={item.text}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-blue-100">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-base font-medium text-slate-700">{item.text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </SectionReveal>

          {/* Investissements */}
          <SectionReveal direction="right" className="relative p-10 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-6">
                <Target className="h-4 w-4" />
                Investissements
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-8">
                Maîtrisez enfin vos investissements tech !
              </h3>
              <StaggerChildren className="space-y-5" staggerDelay={0.1}>
                {investment.map((item) => (
                  <StaggerItem key={item.text}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-emerald-100">
                        <item.icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="text-base font-medium text-slate-700">{item.text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
