"use client";

import { SectionReveal } from "../ui/SectionReveal";
import { ServiceCard } from "../ui/ServiceCard";
import { Globe, DeviceMobile, Lightning, MagnifyingGlass, PaintBrush, ChartLineUp, Wrench } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const mainServices = [
  {
    title: "Développement de Sites Web",
    description: "Sites performants, SEO-ready, design premium. Du site vitrine à la plateforme complexe, nous donnons vie à votre présence en ligne.",
    icon: <Globe size={28} weight="duotone" className="text-white" />,
    tags: ["Next.js", "Webflow", "WordPress", "SEO"],
  },
  {
    title: "Développement d'Applications",
    description: "Apps métier sur-mesure, dashboards, portails clients. Des solutions robustes qui simplifient votre quotidien.",
    icon: <DeviceMobile size={28} weight="duotone" className="text-white" />,
    tags: ["React", "Supabase", "API", "SaaS"],
  },
  {
    title: "IA & Automatisation",
    description: "Agents IA, workflows automatisés, intégrations sur-mesure. Libérez vos équipes des tâches répétitives.",
    icon: <Lightning size={28} weight="duotone" className="text-white" />,
    tags: ["OpenAI", "n8n", "Make", "Agents IA"],
  },
];

const secondaryServices = [
  { title: "Audit Technique", icon: MagnifyingGlass, desc: "Analyse, recommandations, roadmap" },
  { title: "Webdesign UX/UI", icon: PaintBrush, desc: "Identité visuelle, maquettes, prototypes" },
  { title: "SEO & Growth", icon: ChartLineUp, desc: "Référencement, acquisition, analytics" },
  { title: "Maintenance & Support", icon: Wrench, desc: "Hébergement, monitoring, évolutions" },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50/50 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Toutes les expertises pour<br /> réussir vos projets digitaux
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            Donner vie à vos idées, on en a fait notre métier !
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main service cards - 2/3 width */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mainServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                tags={service.tags}
                index={i}
                large={i === 0}
              />
            ))}
          </div>

          {/* Secondary services sidebar */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1">Nos autres services</h3>
              <p className="text-sm text-slate-400">Un accompagnement complet</p>
            </motion.div>

            {secondaryServices.map((service, i) => (
              <motion.a
                key={service.title}
                href="#"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-600 transition-all duration-300">
                  <service.icon size={20} weight="duotone" className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">{service.desc}</div>
                </div>
                <svg className="ml-auto h-4 w-4 flex-shrink-0 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
