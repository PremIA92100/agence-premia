"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Problème", href: "#probleme" },
  { label: "Solution", href: "#solution" },
  { label: "Méthode", href: "#methode" },
  { label: "Résultats", href: "#resultats" },
  { label: "Offres", href: "#offres" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold text-blue">
          Prem&apos;IA
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-dark transition-colors"
          >
            Réserver un appel
          </a>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 pb-4 flex flex-col gap-3"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Réserver un appel
          </a>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-light via-white to-white" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue/10 text-blue px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue rounded-full animate-pulse" />
            Audit gratuit — Places limitées
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Vous travaillez{" "}
            <span className="text-blue">trop</span> pour ce que
            <br className="hidden md:block" /> vous gagnez.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Chaque semaine, vous perdez <strong>10 à 20 heures</strong> sur des
            tâches répétitives. Prem&apos;IA automatise tout ça pour que vous
            puissiez vous concentrer sur ce qui compte vraiment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-dark transition-all hover:shadow-lg hover:shadow-blue/25 text-center"
            >
              Réserver mon audit gratuit →
            </a>
            <a
              href="#solution"
              className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue hover:text-blue transition-all text-center"
            >
              Découvrir comment
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-blue-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {["A", "M", "S", "L"][i - 1]}
                </div>
              ))}
            </div>
            <span>
              Rejoint par <strong className="text-gray-900">+50 entreprises</strong> en
              2024
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Probleme() {
  const problems = [
    {
      icon: "⏰",
      title: "Vous perdez un temps fou",
      desc: "Saisie manuelle, copier-coller entre logiciels, relances oubliées… Vous faites le travail d'une machine.",
    },
    {
      icon: "💸",
      title: "Vous perdez de l'argent",
      desc: "Chaque heure passée sur une tâche répétitive est une heure que vous ne facturez pas. Calculez : 15h × 50€ = 750€/semaine envolés.",
    },
    {
      icon: "😰",
      title: "Vous êtes stressé",
      desc: "Des erreurs humaines, des oublis, des clients insatisfaits… Et ce sentiment permanent de courir après le temps.",
    },
    {
      icon: "📉",
      title: "Vous stagnez",
      desc: "Impossible de scaler quand vous êtes noyé dans l'opérationnel. Vos concurrents, eux, automatisent déjà.",
    },
  ];

  return (
    <section id="probleme" className="py-20 md:py-32 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-semibold text-sm uppercase tracking-wider">
              Le constat
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
              Ce qui vous coûte cher,{" "}
              <span className="text-blue">chaque jour</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Vous n&apos;avez pas un problème de compétence. Vous avez un
              problème de <strong>temps mal utilisé</strong>.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue/30 hover:shadow-lg transition-all duration-300 h-full">
                <span className="text-4xl mb-4 block">{p.icon}</span>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const solutions = [
    {
      icon: "🔄",
      title: "Automatisation des tâches",
      desc: "On identifie tout ce qui vous fait perdre du temps et on le fait tourner en automatique. Factures, relances, plannings, rapports…",
    },
    {
      icon: "🤖",
      title: "Intelligence artificielle sur-mesure",
      desc: "Des assistants IA qui répondent à vos clients, trient vos emails, rédigent vos devis — formés sur VOTRE métier.",
    },
    {
      icon: "📊",
      title: "Tableaux de bord intelligents",
      desc: "Toutes vos données au même endroit. Prenez les bonnes décisions en un coup d'œil, pas en 3 heures d'Excel.",
    },
    {
      icon: "🔍",
      title: "Visibilité en ligne (SEO/GEO)",
      desc: "Soyez trouvé par vos futurs clients sur Google et les IA. On optimise votre présence là où ça compte.",
    },
  ];

  return (
    <section id="solution" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-semibold text-sm uppercase tracking-wider">
              La solution
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
              Imaginez : votre business tourne{" "}
              <span className="text-blue">sans vous</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Pas de jargon. Pas de logiciel compliqué. Juste des résultats
              concrets, mesurables, dès le premier mois.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue hover:shadow-xl transition-all duration-300 h-full">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                  {s.icon}
                </span>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methode() {
  const steps = [
    {
      num: "01",
      title: "Audit gratuit",
      desc: "On analyse votre activité en 30 minutes. On identifie les tâches qui vous font perdre le plus de temps et d'argent.",
      highlight: "Gratuit, sans engagement",
    },
    {
      num: "02",
      title: "Plan d'action sur-mesure",
      desc: "On vous propose un plan clair avec les automatisations prioritaires, le calendrier et le retour sur investissement attendu.",
      highlight: "ROI estimé avant de commencer",
    },
    {
      num: "03",
      title: "Mise en place & résultats",
      desc: "On implémente, on teste, on ajuste. Vous voyez les résultats dès les premières semaines. Et on reste disponible.",
      highlight: "Support inclus 3 mois",
    },
  ];

  return (
    <section id="methode" className="py-20 md:py-32 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-semibold text-sm uppercase tracking-wider">
              Notre méthode
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
              3 étapes pour{" "}
              <span className="text-blue">transformer</span> votre quotidien
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <span className="text-6xl font-black text-blue/10 absolute top-4 right-6">
                  {s.num}
                </span>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="inline-block bg-blue/10 text-blue text-sm font-medium px-3 py-1 rounded-full">
                    {s.highlight}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resultats() {
  const stats = [
    { value: "10h+", label: "gagnées par semaine en moyenne" },
    { value: "3x", label: "plus de leads générés" },
    { value: "98%", label: "de satisfaction client" },
    { value: "-70%", label: "d'erreurs humaines" },
  ];

  const testimonials = [
    {
      quote:
        "En 3 semaines, Prem'IA a automatisé ce qui me prenait 2 heures par jour. Je me demande comment je faisais avant.",
      author: "Marie L.",
      role: "Gérante de restaurant, Lyon",
    },
    {
      quote:
        "Mon cabinet reçoit 3 fois plus de demandes depuis qu'ils ont optimisé ma visibilité. Et tout est traité automatiquement.",
      author: "Dr. Karim B.",
      role: "Dentiste, Boulogne-Billancourt",
    },
    {
      quote:
        "Je pensais que l'IA c'était compliqué et cher. Prem'IA m'a prouvé le contraire. ROI positif dès le premier mois.",
      author: "Sophie T.",
      role: "Artisan fleuriste, Paris",
    },
  ];

  return (
    <section id="resultats" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-semibold text-sm uppercase tracking-wider">
              Résultats prouvés
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
              Des chiffres, pas des{" "}
              <span className="text-blue">promesses</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-gray-bg">
                <div className="text-4xl md:text-5xl font-black text-blue mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-gray-bg rounded-2xl p-8 h-full flex flex-col">
                <div className="text-blue text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 leading-relaxed flex-grow italic">
                  {t.quote}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="font-bold text-sm">{t.author}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offres() {
  const plans = [
    {
      name: "Starter",
      price: "490",
      period: "unique",
      desc: "Pour tester l'automatisation sur une tâche précise",
      features: [
        "1 automatisation clé en main",
        "Audit de 30 min offert",
        "Support email 30 jours",
        "Formation à l'outil",
        "Livraison en 1 semaine",
      ],
      cta: "Commencer",
      featured: false,
    },
    {
      name: "Pro",
      price: "1 490",
      period: "/mois",
      desc: "Pour les entreprises qui veulent scaler sérieusement",
      features: [
        "Automatisations illimitées",
        "Assistant IA personnalisé",
        "Tableau de bord sur-mesure",
        "Support prioritaire",
        "Revue mensuelle des performances",
        "SEO/GEO inclus",
      ],
      cta: "Choisir Pro",
      featured: true,
    },
    {
      name: "Sur-mesure",
      price: "Sur devis",
      period: "",
      desc: "Pour les projets complexes ou les grandes équipes",
      features: [
        "Tout le plan Pro",
        "Développement sur-mesure",
        "Intégrations spécifiques",
        "Account manager dédié",
        "SLA garanti",
        "Formation équipe complète",
      ],
      cta: "Nous contacter",
      featured: false,
    },
  ];

  return (
    <section id="offres" className="py-20 md:py-32 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-semibold text-sm uppercase tracking-wider">
              Nos offres
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
              Un investissement,{" "}
              <span className="text-blue">pas une dépense</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Chaque euro investi vous en rapporte 5. Garanti ou remboursé.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  p.featured
                    ? "bg-blue text-white ring-4 ring-blue/20 scale-[1.02]"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="mb-6">
                  {p.featured && (
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                      ⭐ Le plus populaire
                    </span>
                  )}
                  <h3
                    className={`text-2xl font-bold ${
                      p.featured ? "" : "text-gray-900"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <div className="mt-3">
                    <span className="text-4xl font-black">{p.price}</span>
                    {p.period && (
                      <span
                        className={`text-sm ml-1 ${
                          p.featured ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        €{p.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      p.featured ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {p.desc}
                  </p>
                </div>
                <ul className="space-y-3 flex-grow mb-8">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          p.featured ? "text-white" : "text-blue"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-bold transition-all ${
                    p.featured
                      ? "bg-white text-blue hover:bg-gray-100"
                      : "bg-blue text-white hover:bg-blue-dark"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "C'est quoi exactement l'automatisation ?",
      a: "C'est simple : tout ce que vous faites de répétitif sur un ordinateur, on le fait faire par un système automatique. Envoyer des emails, créer des factures, mettre à jour des fichiers… Vous n'y touchez plus.",
    },
    {
      q: "Est-ce que c'est adapté à mon métier ?",
      a: "Si vous utilisez un ordinateur ou un téléphone dans votre travail, oui. Nous travaillons avec des restaurants, des cabinets médicaux, des artisans, des agences, des e-commerçants…",
    },
    {
      q: "Combien de temps avant de voir des résultats ?",
      a: "Dès la première semaine pour les automatisations simples. Pour les projets plus complexes, comptez 2 à 4 semaines. Mais le ROI est visible dès le premier mois.",
    },
    {
      q: "Est-ce que c'est compliqué à utiliser ?",
      a: "Non. On s'occupe de tout. Vous n'avez rien à installer, rien à coder. On vous forme en 30 minutes et c'est parti.",
    },
    {
      q: "Et si ça ne marche pas ?",
      a: "On offre une garantie satisfaction. Si vous ne voyez pas de résultats concrets dans les 30 premiers jours, on vous rembourse. Zéro risque.",
    },
    {
      q: "Comment se passe l'audit gratuit ?",
      a: "C'est un appel de 30 minutes. On analyse ensemble vos process, on identifie les quick wins et on vous donne un plan d'action. Même si vous ne travaillez pas avec nous, vous repartez avec des idées concrètes.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
              Vos questions, nos{" "}
              <span className="text-blue">réponses</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openIdx === i ? 45 : 0 }}
                    className="text-blue text-2xl flex-shrink-0 font-light"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIdx === i ? "auto" : 0,
                    opacity: openIdx === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-blue text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Prêt à reprendre le contrôle de votre temps ?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Réservez votre audit gratuit de 30 minutes. On analyse votre
            activité, on identifie les opportunités, et vous repartez avec un
            plan d&apos;action concret. <strong className="text-white">Même si vous ne travaillez pas avec nous.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:contact@agence-premia.fr?subject=Demande%20d'audit%20gratuit"
              className="bg-white text-blue px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              Réserver mon audit gratuit →
            </a>
          </div>
          <p className="text-white/60 text-sm">
            📧 contact@agence-premia.fr • Réponse sous 24h
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white text-xl font-extrabold">
              Prem&apos;IA
            </span>
            <p className="text-sm mt-1">
              Automatisation & IA pour les entreprises qui veulent grandir.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="mailto:contact@agence-premia.fr"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <a href="#offres" className="hover:text-white transition-colors">
              Offres
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Prem&apos;IA — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Probleme />
      <Solution />
      <Methode />
      <Resultats />
      <Offres />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}
