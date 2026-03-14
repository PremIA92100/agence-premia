"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "../ui/SectionReveal";
import { CheckCircle, ArrowRight, CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Combien coûte un projet ?",
    answer: "Site vitrine dès 2 000€, application métier entre 5 000€ et 15 000€, automatisation IA à partir de 1 500€. Devis gratuit et transparent en 48h.",
  },
  {
    question: "En combien de temps ?",
    answer: "Site web : 2 à 4 semaines. Application : 4 à 8 semaines. Automatisation : 1 à 2 semaines. On va vite parce qu'on utilise les bons outils.",
  },
  {
    question: "Je n'y connais rien en tech ?",
    answer: "C'est exactement pour ça qu'on existe. On traduit vos besoins business en solutions techniques. Zéro jargon. Et on vous forme pour que vous soyez autonome.",
  },
  {
    question: "Qu'est-ce qui vous différencie ?",
    answer: "On comprend votre business, on intègre l'IA nativement, et on livre des produits que vous pouvez faire évoluer seul. Pas de dépendance.",
  },
  {
    question: "C'est quoi un agent IA ?",
    answer: "Un assistant intelligent 24/7 qui répond aux clients, qualifie des prospects, gère des tâches répétitives. Tout ce que vous faites manuellement, en mieux et sans pause.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button onClick={onClick} className="flex w-full items-center justify-between py-5 text-left group cursor-pointer">
        <span className={`text-sm font-semibold pr-6 transition-colors duration-200 ${isOpen ? "text-cyan-700" : "text-slate-900 group-hover:text-slate-700"}`}>
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <CaretDown size={16} weight="bold" className={`transition-colors duration-200 ${isOpen ? "text-cyan-600" : "text-slate-300"}`} />
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
            <p className="pb-5 text-sm leading-relaxed text-slate-500 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 focus:bg-white outline-none transition-all duration-200";

  return (
    <section id="contact" className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Un projet ?<br />
            <span className="text-gradient-cyan">Parlons-en.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-md">
            L&apos;audit est gratuit. Le devis aussi. Réponse en 24h max, directement par le fondateur.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <SectionReveal direction="left">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              {status === "sent" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200">
                    <CheckCircle size={28} weight="fill" className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                  <p className="text-sm text-slate-500">On revient vers vous en moins de 24h.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Prénom & Nom *</label>
                      <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Jean Dupont" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Société</label>
                      <input id="company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder="Ma Société" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email *</label>
                      <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="jean@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Téléphone</label>
                      <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="06 12 34 56 78" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Votre projet *</label>
                    <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Décrivez votre projet, vos objectifs..." />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer mon message
                        <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-500 text-center">Une erreur est survenue. Essayez directement par email.</p>
                  )}
                </form>
              )}
            </div>
          </SectionReveal>

          {/* FAQ + Trust */}
          <div className="space-y-8">
            <SectionReveal direction="right">
              <div className="space-y-3 mb-10">
                {["Réponse en moins de 24h", "Devis gratuit et sans engagement", "Audit technique offert"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} weight="fill" className="text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-10 pb-8 border-b border-slate-200">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Écrivez-nous directement</p>
                <a href="mailto:contact@agence-premia.fr" className="text-base font-bold text-slate-900 hover:text-cyan-700 transition-colors duration-200">
                  contact@agence-premia.fr
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Questions fréquentes</h3>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
