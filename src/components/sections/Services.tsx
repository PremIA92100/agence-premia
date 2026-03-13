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
    accent: "var(--color-cyan)",
  },
  {
    title: "Applications",
    description: "Apps m\u00e9tier sur-mesure, dashboards, portails clients. Solutions robustes qui simplifient.",
    icon: DeviceMobile,
    tags: ["React", "Supabase", "API"],
    accent: "#8B5CF6",
  },
  {
    title: "IA & Automatisation",
    description: "Agents IA, workflows automatis\u00e9s, int\u00e9grations. Lib\u00e9rez vos \u00e9quipes du r\u00e9p\u00e9titif.",
    icon: Lightning,
    tags: ["OpenAI", "n8n", "Agents IA"],
    accent: "var(--color-amber)",
  },
];

const extras = [
  { title: "Audit Technique", icon: MagnifyingGlass, desc: "Analyse & recommandations" },
  { title: "SEO & Growth", icon: ChartLineUp, desc: "R\u00e9f\u00e9rencement & acquisition" },
  { title: "Maintenance", icon: Wrench, desc: "Monitoring & \u00e9volutions" },
];

const metrics = [
  { value: 5, suffix: "x", label: "Plus rapide", color: "var(--color-cyan)" },
  { value: 3, suffix: "x", label: "Moins cher", color: "#8B5CF6" },
  { value: 100, suffix: "%", label: "Autonome", color: "var(--color-amber)" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
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
        className="group relative h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 transition-all duration-300 ease-out hover:border-[var(--color-border-hover)] cursor-pointer overflow-hidden"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Spotlight glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[60px]"
          style={{ background: service.accent }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `color-mix(in srgb, ${service.accent} 15%, transparent)` }}
          >
            <service.icon size={24} weight="duotone" style={{ color: service.accent }} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-6">{service.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold border border-[var(--color-border)] text-[var(--color-text-dim)] group-hover:border-[var(--color-border-hover)] group-hover:text-[var(--color-text-muted)] transition-colors duration-300"
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
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-cyan)]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Metrics bar */}
        <StaggerChildren className="grid grid-cols-3 gap-6 mb-24" staggerDelay={0.1}>
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="text-center p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  className="text-4xl sm:text-5xl font-black tracking-tighter"
                  style={{ color: m.color }}
                />
                <div className="mt-2 text-sm font-semibold text-[var(--color-text-dim)] uppercase tracking-wider">{m.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Section header */}
        <SectionReveal className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-4">Ce qu&apos;on fait</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Trois expertises.<br />
            <span className="text-[var(--color-text-dim)]">Un seul objectif&nbsp;: le v&ocirc;tre.</span>
          </h2>
        </SectionReveal>

        {/* Main services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Secondary services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {extras.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                <item.icon size={18} weight="duotone" className="text-[var(--color-text-muted)] group-hover:text-[var(--color-cyan)] transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <div className="text-xs text-[var(--color-text-dim)]">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
