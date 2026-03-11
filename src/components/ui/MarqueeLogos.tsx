"use client";

const tools = [
  "Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Vercel",
  "n8n", "Make", "Zapier", "OpenAI", "Claude", "Stripe",
  "Notion", "Figma", "Webflow", "WordPress", "Airtable", "Xano",
  "Python", "Node.js", "PostgreSQL", "Docker", "GitHub", "Framer",
];

export function MarqueeLogos() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />

      <div className="flex animate-marquee">
        {[...tools, ...tools].map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex-shrink-0 mx-6 px-6 py-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group cursor-default"
          >
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
              {tool}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeLogosDark() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      <div className="flex animate-marquee">
        {[...tools, ...tools].map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex-shrink-0 mx-6 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-default"
          >
            <span className="text-sm font-semibold text-white/40 group-hover:text-white transition-colors duration-300">
              {tool}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
