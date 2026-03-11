"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "../ui/SectionReveal";

const tools = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "CSS" },
  { name: "Supabase", category: "Backend" },
  { name: "Vercel", category: "Deploy" },
  { name: "n8n", category: "Automation" },
  { name: "Make", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "OpenAI", category: "IA" },
  { name: "Claude", category: "IA" },
  { name: "Stripe", category: "Payment" },
  { name: "Notion", category: "Productivity" },
  { name: "Figma", category: "Design" },
  { name: "Webflow", category: "No-code" },
  { name: "WordPress", category: "CMS" },
  { name: "Airtable", category: "Data" },
  { name: "Xano", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub", category: "DevOps" },
  { name: "Framer", category: "Design" },
];

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-600 border-blue-100",
  Language: "bg-violet-50 text-violet-600 border-violet-100",
  CSS: "bg-cyan-50 text-cyan-600 border-cyan-100",
  Backend: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Deploy: "bg-slate-50 text-slate-600 border-slate-200",
  Automation: "bg-amber-50 text-amber-600 border-amber-100",
  IA: "bg-rose-50 text-rose-600 border-rose-100",
  Payment: "bg-indigo-50 text-indigo-600 border-indigo-100",
  Productivity: "bg-orange-50 text-orange-600 border-orange-100",
  Design: "bg-pink-50 text-pink-600 border-pink-100",
  "No-code": "bg-purple-50 text-purple-600 border-purple-100",
  CMS: "bg-teal-50 text-teal-600 border-teal-100",
  Data: "bg-lime-50 text-lime-600 border-lime-100",
  Runtime: "bg-green-50 text-green-600 border-green-100",
  Database: "bg-sky-50 text-sky-600 border-sky-100",
  DevOps: "bg-gray-50 text-gray-600 border-gray-200",
};

export function Tools() {
  return (
    <section id="outils" className="py-32 bg-slate-50/50 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Les meilleurs outils,<br /> à votre service
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            Nous parlons votre langue, utilisons vos outils, et comprenons vos contraintes business.
          </p>
        </SectionReveal>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" staggerDelay={0.03}>
          {tools.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="group relative flex flex-col items-center p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default">
                {/* Tool initial as placeholder for logo */}
                <div className="h-10 w-10 rounded-xl bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-600 flex items-center justify-center mb-3 transition-all duration-300">
                  <span className="text-sm font-black text-slate-400 group-hover:text-white transition-colors duration-300">
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-700 text-center">{tool.name}</span>
                <span className={`mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[tool.category] || "bg-slate-50 text-slate-500 border-slate-200"}`}>
                  {tool.category}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
