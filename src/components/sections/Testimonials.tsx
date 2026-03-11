"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Prem'IA a transformé notre façon de travailler. En 3 semaines, ils ont automatisé des process qui nous prenaient 20h par semaine. Le ROI est immédiat.",
    name: "Sophie Martin",
    role: "CEO",
    company: "FoodTech Paris",
    rating: 5,
  },
  {
    quote: "Une équipe réactive, pragmatique, qui comprend les enjeux business. Notre application est live en 6 semaines, un record pour notre industrie.",
    name: "Thomas Durand",
    role: "Fondateur",
    company: "PropTech Solutions",
    rating: 5,
  },
  {
    quote: "Les agents IA développés par Prem'IA gèrent maintenant 80% de nos demandes clients. Notre équipe peut enfin se concentrer sur les cas complexes.",
    name: "Marie Chen",
    role: "Directrice Opérations",
    company: "HealthStart",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Notre plus belle fierté,<br />
            <span className="gradient-text">c&apos;est votre réussite !</span>
          </h2>
        </SectionReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group relative h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Quote mark */}
                <div className="text-6xl font-black text-slate-100 leading-none mb-4 select-none">&ldquo;</div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base leading-relaxed text-slate-600 mb-8">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}, {t.company}</div>
                  </div>
                </div>

                {/* Hover gradient border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
