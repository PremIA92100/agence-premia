"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Rocket, TrendingUp, Zap } from "lucide-react";

const steps = [
  {
    id: "strategie",
    label: "Stratégie",
    icon: Compass,
    color: "from-blue-500 to-cyan-500",
    title: "Identifier la meilleure stratégie technique",
    description:
      "On transforme votre idée en un plan d'action clair. Nous identifions vos priorités, validons vos hypothèses et définissons une roadmap ambitieuse mais réaliste.",
    features: ["Études de faisabilité", "Audit technologique", "Sélection des outils", "Conception & stratégie produit"],
  },
  {
    id: "mvp",
    label: "MVP",
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
    title: "Lancez rapidement un produit qui claque",
    description:
      "Grâce à l'IA et aux outils modernes, nous focalisons notre travail sur la valeur perçue, pour mettre sur le marché un produit vendeur en un temps record.",
    features: ["Livraison ultra rapide", "Itérations rapprochées", "Validation de traction", "Retours utilisateurs"],
  },
  {
    id: "scale",
    label: "Scale",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    title: "Déployez votre produit à grande échelle",
    description:
      "On vous aide à faire évoluer votre produit. Migrer une stack, renforcer la performance ou réduire la dette technique, on vous accompagne à chaque étape.",
    features: ["RGPD", "Self-Hosting", "Sécurité avancée", "Performances inégalées"],
  },
  {
    id: "automatisation",
    label: "Automatisation",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    title: "Automatisez vos processus métiers",
    description:
      "Nous boostons les résultats de vos équipes sans augmenter leur charge de travail. L'IA automatise les tâches répétitives et réduit les erreurs.",
    features: ["Agents IA sur-mesure", "Workflows automatisés", "Serveurs MCP", "Coaching IA"],
  },
];

export function ProcessTabs() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="space-y-12">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              active === i
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            <s.icon className="h-4 w-4" />
            {s.label}
            {active === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-slate-900 -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text content */}
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${step.color} px-4 py-1.5 text-sm font-semibold text-white mb-6`}>
              <step.icon className="h-4 w-4" />
              {step.label}
            </div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-4">
              {step.title}
            </h3>
            <p className="text-lg leading-relaxed text-slate-500 mb-8">
              {step.description}
            </p>
            <ul className="space-y-3">
              {step.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-600">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-sm`}>
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className={`relative rounded-3xl bg-gradient-to-br ${step.color} p-1`}>
            <div className="rounded-[22px] bg-white p-12 flex items-center justify-center min-h-[300px]">
              <step.icon className="h-24 w-24 text-slate-200" strokeWidth={1} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
