
"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Coins,
  LineChart,
  MessageSquare,
  Zap,
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-500/30 selection:text-purple-900">
      <Navbar />
      <Hero />

      {/* SECTION: PROBLEME (White + Grid) */}
      <section id="probleme" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 mb-6"
            >
              <Zap className="mr-2 h-4 w-4" />
              Le Constat
            </motion.div>

            <motion.h2 variants={fadeInUp} custom={1} className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Votre temps est précieux. <br />
              <span className="text-rose-600">Ne le gâchez pas.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} custom={2} className="mt-8 text-lg leading-8 text-slate-600">
              Chaque minute passée sur des tâches répétitives est une minute perdue pour votre croissance.
              L&apos;automatisation n&apos;est plus un luxe, c&apos;est une survie.
            </motion.p>
          </motion.div>

          <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  icon: Clock,
                  title: "L'Enfer Administratif",
                  desc: "Saisie manuelle, copier-coller, factures... Vous êtes devenu l'esclave de vos propres processus.",
                  color: "text-rose-500",
                  bg: "bg-rose-50"
                },
                {
                  icon: Coins,
                  title: "Hémorragie Financière",
                  desc: "15h/semaine perdues = 15 000€/an jetés par la fenêtre. Sans compter les opportunités manquées.",
                  color: "text-amber-500",
                  bg: "bg-amber-50"
                },
                {
                  icon: Zap,
                  title: "Burnout Imminent",
                  desc: "Charge mentale, oublis, stress... Votre cerveau n'est pas fait pour gérer des to-do lists infinies.",
                  color: "text-orange-500",
                  bg: "bg-orange-50"
                },
                {
                  icon: LineChart,
                  title: "Plafond de Verre",
                  desc: "Impossible de scaler. Plus vous avez de clients, plus vous avez de problèmes. Vous stagnez.",
                  color: "text-slate-500",
                  bg: "bg-slate-100"
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col group hover:bg-slate-50 p-6 rounded-2xl transition-colors"
                >
                  <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-slate-900">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 pl-16">
                    <p className="flex-auto text-lg">{feature.desc}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SECTION: SOLUTION (Vibrant Gradient + Spotlight) */}
      <section id="solutions" className="py-32 relative overflow-hidden bg-slate-900 text-white">
        {/* Animated Background */}
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 -right-4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-base font-bold uppercase tracking-widest text-blue-400">La Révolution</h2>
            <p className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              L&apos;Intelligence Artificielle <br /> au service de votre liberté
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Automatisation",
                desc: "Workflows invisibles qui gèrent vos tâches pénibles. Zapier, Make, n8n maîtrisés à la perfection.",
                icon: Zap,
              },
              {
                title: "Assistants IA",
                desc: "Des agents GPT-4 qui répondent à vos clients, qualifient vos leads et gèrent votre agenda 24/7.",
                icon: MessageSquare,
              },
              {
                title: "Data Intelligence",
                desc: "Transformez vos données brutes en tableaux de bord clairs. Prenez des décisions basées sur des faits.",
                icon: LineChart,
              },
              {
                title: "Systèmes Scalables",
                desc: "Une infrastructure robuste qui grandit avec vous. Accueillez 10x plus de clients sans recruter.",
                icon: ArrowRight,
              },
            ].map((item) => (
              <Spotlight
                key={item.title}
                className="h-full p-8 border-slate-800 bg-slate-900/50 hover:bg-slate-800/80"
                spotlightColor="rgba(56, 189, 248, 0.3)" // Cyan spotlight
              >
                <div className="flex flex-col h-full relative z-20">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-base leading-relaxed text-slate-300 flex-grow">{item.desc}</p>
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: OFFRES (Clean Glass Cards) */}
      <section id="pricing" className="py-32 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Investissement</h2>
            <p className="mt-6 text-xl text-slate-600">
              Des forfaits simples. Un ROI immédiat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
            {/* Starter */}
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
              <p className="mt-4 flex items-baseline text-slate-900">
                <span className="text-5xl font-black tracking-tight">490€</span>
                <span className="ml-2 text-sm font-semibold text-slate-500">/unique</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-600">Pour tester la puissance de l&apos;IA.</p>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-600">
                {['1 automatisation clé en main', 'Audit de processus (30 min)', 'Support email 30 jours'].map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 block rounded-xl bg-slate-50 px-3 py-3 text-center text-sm font-bold leading-6 text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-100 transition-colors">
                Commencer
              </a>
            </div>

            {/* Pro (Highlighted) */}
            <div className="relative rounded-3xl border-2 border-blue-500 bg-white p-10 shadow-2xl scale-105 z-10 overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                POPULAIRE
              </div>
              {/* Glow effect behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl -z-10" />

              <h3 className="text-xl font-bold text-slate-900">Croissance</h3>
              <p className="mt-4 flex items-baseline text-slate-900">
                <span className="text-5xl font-black tracking-tight">1 490€</span>
                <span className="ml-2 text-sm font-semibold text-slate-500">/mois</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-600">L&apos;externalisation complète.</p>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-600">
                {['Automatisations illimitées', '1 Assistant IA sur-mesure', 'Dashboard de pilotage', 'Support prioritaire'].map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-3 text-center text-sm font-bold leading-6 text-white shadow-lg hover:shadow-blue-500/30 transition-shadow">
                Choisir Pro
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900">Custom</h3>
              <p className="mt-4 flex items-baseline text-slate-900">
                <span className="text-5xl font-black tracking-tight">Devis</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-600">Pour les structures complexes.</p>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-600">
                {['Architecture Système Complète', 'Développement spécifique (Python/JS)', 'Account Manager dédié', 'Formation équipes'].map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 block rounded-xl bg-slate-50 px-3 py-3 text-center text-sm font-bold leading-6 text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-100 transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA FINAL */}
      <section id="contact" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-slate-900 px-6 py-16 sm:p-16 text-center ring-1 ring-white/10 relative overflow-hidden shadow-2xl">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-[64px] opacity-40 animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-overlay filter blur-[64px] opacity-40 animate-blob animation-delay-2000" />

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl relative z-10">
              Prêt à passer au niveau supérieur ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300 relative z-10">
              L&apos;audit est gratuit. La vision est offerte. <br />Vous n&apos;avez rien à perdre, et tout un empire à construire.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 relative z-10">
              <a
                href="mailto:contact@agence-premia.fr"
                className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-slate-900 shadow-lg hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
              >
                Réserver mon appel
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center lg:px-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white text-xs font-bold">P</div>
            <span className="text-sm font-semibold text-slate-900">Prem&apos;IA Agency</span>
          </div>
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Prem&apos;IA. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
