"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Prem'IA a développé notre outil interne de gestion en un temps record. L'équipe est réactive, comprend les enjeux métier et livre du concret. On a enfin un outil qui nous ressemble.",
    name: "Axel Cohen",
    role: "Directeur",
    company: "IMH Radio Herblay",
    type: "Outil interne de gestion",
    rating: 5,
  },
  {
    quote: "La refonte SEO/GEO de notre site a complètement changé notre visibilité en ligne. On attire maintenant une clientèle internationale qu'on ne touchait pas avant. Approche technique et pragmatique.",
    name: "Paul Poirier",
    role: "Propriétaire",
    company: "Restaurant Amourette",
    type: "Prestation SEO / GEO",
    rating: 5,
  },
  {
    quote: "On avait besoin d'un hub de prospection centralisé avec un CRM taillé pour notre process. Prem'IA a compris le besoin en 1 call et livré un outil qu'on utilise tous les jours. Rien de superflu, que de l'utile.",
    name: "Équipe Cognectik",
    role: "Direction",
    company: "Cognectik",
    type: "Hub de prospection / CRM sur mesure",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Témoignages</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Ce qu&apos;ils disent<br />
            <span className="gradient-text">de nous</span>
          </h2>
        </SectionReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group relative h-full flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-blue-100 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base leading-relaxed text-slate-600 mb-8 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Project type tag */}
                  <div className="mb-5">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
                      {t.type}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-slate-50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white font-bold text-sm shadow-md">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
