"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "../ui/SectionReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte un projet avec Prem'IA ?",
    answer:
      "Chaque projet est unique. Un site vitrine démarre autour de 2 000€, une application métier entre 5 000€ et 15 000€, et une automatisation IA à partir de 1 500€. On vous fait un devis gratuit et transparent en 48h, sans engagement.",
  },
  {
    question: "En combien de temps mon projet sera livré ?",
    answer:
      "Un site web : 2 à 4 semaines. Une application : 4 à 8 semaines. Une automatisation : 1 à 2 semaines. On va vite parce qu'on utilise les bons outils et qu'on ne perd pas de temps en réunions inutiles.",
  },
  {
    question: "Je n'y connais rien en tech, c'est un problème ?",
    answer:
      "Au contraire, c'est exactement pour ça qu'on existe. On traduit vos besoins business en solutions techniques. Zéro jargon, zéro charabia. Et on vous forme pour que vous soyez autonome.",
  },
  {
    question: "Qu'est-ce qui vous différencie des autres agences ?",
    answer:
      "On ne fait pas juste du dev. On comprend votre business, on intègre l'IA nativement dans chaque projet, et on livre des produits que vous pouvez faire évoluer seul. Pas de dépendance, pas de surprise sur la facture.",
  },
  {
    question: "Est-ce que vous gérez l'hébergement et la maintenance ?",
    answer:
      "Oui. On peut gérer l'hébergement, le monitoring, les mises à jour et le support technique. Vous vous concentrez sur votre business, on s'occupe de la technique.",
  },
  {
    question: "C'est quoi un agent IA concrètement ?",
    answer:
      "C'est un assistant intelligent qui travaille pour vous 24/7. Il peut répondre aux questions de vos clients, qualifier des prospects, gérer des tâches répétitives, envoyer des emails... Tout ce que vous faites manuellement aujourd'hui, un agent IA peut le faire mieux et sans pause.",
  },
  {
    question: "Et si le résultat ne me plaît pas ?",
    answer:
      "On travaille en itérations courtes avec des points réguliers. Vous voyez l'avancement en temps réel et vous validez chaque étape. Le produit final est exactement ce que vous avez demandé, pas une surprise.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`h-5 w-5 transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-slate-400"}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base leading-relaxed text-slate-500 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white relative">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Vos questions,<br /> nos réponses
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="rounded-3xl border border-slate-100 bg-white shadow-sm p-2 sm:p-6">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
