"use client";

import { motion } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Globe, DeviceMobile, Lightning, MagnifyingGlass, ChartLineUp, Wrench } from "@phosphor-icons/react";
import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const services = [
  {
    title: "Sites Web",
    description: "Sites performants, SEO-ready, design premium. Du vitrine au e-commerce complexe.",
    icon: Globe,
    tags: ["Next.js", "Webflow", "SEO"],
    accent: "#0891B2",
  },
  {
    title: "Applications",
    description: "Apps métier sur-mesure, dashboards, portails clients. Solutions robustes qui simplifient.",
    icon: DeviceMobile,
    tags: ["React", "Supabase", "API"],
    accent: "#7C3AED",
  },
  {
    title: "IA & Automatisation",
    description: "Agents IA, workflows automatisés, intégrations. Libérez vos équipes du répétitif.",
    icon: Lightning,
    tags: ["OpenAI", "n8n", "Agents IA"],
    accent: "#D97706",
  },
];

const extras = [
  { title: "Audit Technique", icon: MagnifyingGlass, desc: "Analyse & recommandations" },
  { title: "SEO & Growth", icon: ChartLineUp, desc: "Référencement & acquisition" },
  { title: "Maintenance", icon: Wrench, desc: "Monitoring & évolutions" },
];

const metrics = [
  { value: 5, suffix: "x", label: "Plus rapide", color: "#0891B2" },
  { value: 3, suffix: "x", label: "Moins cher", color: "#7C3AED" },
  { value: 100, suffix: "%", label: "Autonome", color: "#D97706" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 ease-out cursor-pointer overflow-hidden"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <div className="relative z-10">
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `color-mix(in srgb, ${service.accent} 10%, white)` }}
          >
            <service.icon size={24} weight="duotone" style={{ color: service.accent }} />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
          <p className="text-sm leading-relaxed text-slate-500 mb-6">{service.description}</p>

          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold border border-slate-200 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-600 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-white">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Metrics */}
        <StaggerChildren className="grid grid-cols-3 gap-6 mb-24" staggerDelay={0.1}>
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="text-center p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  className="text-4xl sm:text-5xl font-black tracking-tighter"
                  style={{ color: m.color }}
                />
                <div className="mt-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">{m.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Header */}
        <SectionReveal className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">Ce qu&apos;on fait</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Trois expertises.<br />
            <span className="text-slate-400">Un seul objectif : le vôtre.</span>
          </h2>
        </SectionReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Extras */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {extras.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <item.icon size={18} weight="duotone" className="text-slate-400 group-hover:text-cyan-600 transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
