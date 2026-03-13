"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "../ui/SectionReveal";
import { CheckCircle, ArrowRight, CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Combien co\u00fbte un projet ?",
    answer: "Site vitrine d\u00e8s 2 000\u20ac, application m\u00e9tier entre 5 000\u20ac et 15 000\u20ac, automatisation IA \u00e0 partir de 1 500\u20ac. Devis gratuit et transparent en 48h.",
  },
  {
    question: "En combien de temps ?",
    answer: "Site web : 2 \u00e0 4 semaines. Application : 4 \u00e0 8 semaines. Automatisation : 1 \u00e0 2 semaines. On va vite parce qu\u2019on utilise les bons outils.",
  },
  {
    question: "Je n\u2019y connais rien en tech ?",
    answer: "C\u2019est exactement pour \u00e7a qu\u2019on existe. On traduit vos besoins business en solutions techniques. Z\u00e9ro jargon. Et on vous forme pour que vous soyez autonome.",
  },
  {
    question: "Qu\u2019est-ce qui vous diff\u00e9rencie ?",
    answer: "On comprend votre business, on int\u00e8gre l\u2019IA nativement, et on livre des produits que vous pouvez faire \u00e9voluer seul. Pas de d\u00e9pendance.",
  },
  {
    question: "C\u2019est quoi un agent IA ?",
    answer: "Un assistant intelligent 24/7 qui r\u00e9pond aux clients, qualifie des prospects, g\u00e8re des t\u00e2ches r\u00e9p\u00e9titives. Tout ce que vous faites manuellement, en mieux et sans pause.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[var(--color-border)] last:border-0">
      <button onClick={onClick} className="flex w-full items-center justify-between py-5 text-left group cursor-pointer">
        <span className={`text-sm font-semibold pr-6 transition-colors duration-200 ${isOpen ? "text-[var(--color-cyan)]" : "text-white group-hover:text-[var(--color-text)]"}`}>
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <CaretDown size={16} weight="bold" className={`transition-colors duration-200 ${isOpen ? "text-[var(--color-cyan)]" : "text-[var(--color-text-dim)]"}`} />
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
            <p className="pb-5 text-sm leading-relaxed text-[var(--color-text-muted)] pr-12">
              {answer}
            </p>
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

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-elevated)]" />
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-cyan)]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Un projet&nbsp;?<br />
            <span className="text-gradient-cyan">Parlons-en.</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-md">
            L&apos;audit est gratuit. Le devis aussi. R&eacute;ponse en 24h max, directement par le fondateur.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <SectionReveal direction="left">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 sm:p-10">
              {status === "sent" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle size={28} weight="fill" className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message envoy&eacute;</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">On revient vers vous en moins de 24h.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-2">
                        Pr&eacute;nom & Nom *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-white placeholder-[var(--color-text-dim)] focus:border-[var(--color-cyan)]/50 focus:ring-1 focus:ring-[var(--color-cyan)]/30 outline-none transition-all duration-200"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-2">
                        Soci&eacute;t&eacute;
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-white placeholder-[var(--color-text-dim)] focus:border-[var(--color-cyan)]/50 focus:ring-1 focus:ring-[var(--color-cyan)]/30 outline-none transition-all duration-200"
                        placeholder="Ma Soci\u00e9t\u00e9"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-white placeholder-[var(--color-text-dim)] focus:border-[var(--color-cyan)]/50 focus:ring-1 focus:ring-[var(--color-cyan)]/30 outline-none transition-all duration-200"
                        placeholder="jean@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-2">
                        T&eacute;l&eacute;phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-white placeholder-[var(--color-text-dim)] focus:border-[var(--color-cyan)]/50 focus:ring-1 focus:ring-[var(--color-cyan)]/30 outline-none transition-all duration-200"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-2">
                      Votre projet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-white placeholder-[var(--color-text-dim)] focus:border-[var(--color-cyan)]/50 focus:ring-1 focus:ring-[var(--color-cyan)]/30 outline-none transition-all duration-200 resize-none"
                      placeholder="D\u00e9crivez votre projet, vos objectifs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-cyan)] px-8 py-4 text-sm font-bold text-[var(--color-bg)] shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:shadow-[0_0_40px_rgba(0,212,255,0.35)] hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="h-4 w-4 border-2 border-[var(--color-bg)]/30 border-t-[var(--color-bg)] rounded-full animate-spin" />
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
                    <p className="text-sm text-red-400 text-center">
                      Une erreur est survenue. Essayez directement par email.
                    </p>
                  )}
                </form>
              )}
            </div>
          </SectionReveal>

          {/* Right - FAQ + Trust */}
          <div className="space-y-8">
            <SectionReveal direction="right">
              {/* Trust signals */}
              <div className="space-y-3 mb-10">
                {[
                  "R\u00e9ponse en moins de 24h",
                  "Devis gratuit et sans engagement",
                  "Audit technique offert",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} weight="fill" className="text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="mb-10 pb-8 border-b border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-text-dim)] mb-1 uppercase tracking-wider font-semibold">&Eacute;crivez-nous directement</p>
                <a
                  href="mailto:contact@agence-premia.fr"
                  className="text-base font-bold text-white hover:text-[var(--color-cyan)] transition-colors duration-200"
                >
                  contact@agence-premia.fr
                </a>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-dim)] mb-6">Questions fr&eacute;quentes</h3>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                  {faqs.map((faq, i) => (
                    <FAQItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaq === i}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    />
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
