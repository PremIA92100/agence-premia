"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  tags?: string[];
  index?: number;
  large?: boolean;
}

export function ServiceCard({ title, description, icon, tags = [], index = 0, large = false }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`spotlight-card group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${large ? "min-h-[320px]" : ""}`}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 ${large ? "text-2xl" : "text-xl"}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-300 ${large ? "text-base" : "text-sm"}`}>
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200/60 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:ring-blue-200/60 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center text-sm font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
          En savoir plus
          <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
