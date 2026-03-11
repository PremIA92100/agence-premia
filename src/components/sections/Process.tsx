"use client";

import { SectionReveal } from "../ui/SectionReveal";
import { ProcessTabs } from "../ui/ProcessTabs";

export function Process() {
  return (
    <section id="process" className="py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
            Expertise technique à chaque étape
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Quand faire appel à Prem&apos;IA ?
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            À chaque étape de votre business, ses enjeux techniques
          </p>
        </SectionReveal>

        <ProcessTabs />
      </div>
    </section>
  );
}
