"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "../ui/SectionReveal";
import { GradientMeshDark } from "../ui/GradientMesh";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
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
    <section id="contact" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <GradientMeshDark />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <SectionReveal direction="left">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
              Parlons de votre projet
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Un projet ?<br />
              <span className="gradient-text">C&apos;est le moment.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-md">
              L&apos;audit est gratuit, le devis aussi. On vous répond en 24h max.
              Pas de commercial, directement le fondateur.
            </p>

            {/* Trust signals */}
            <div className="mt-10 space-y-4">
              {[
                "Réponse en moins de 24h",
                "Devis gratuit et sans engagement",
                "Audit technique offert",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-base text-white/70">{item}</span>
                </div>
              ))}
            </div>

            {/* Email fallback */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-white/30 mb-2">Ou écrivez-nous directement</p>
              <a
                href="mailto:contact@agence-premia.fr"
                className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-200"
              >
                contact@agence-premia.fr
              </a>
            </div>
          </SectionReveal>

          {/* Right side - Form */}
          <SectionReveal direction="right">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-white/50">On revient vers vous en moins de 24h.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                        Prénom & Nom *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/60 mb-2">
                        Société
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                        placeholder="Ma Société"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                        placeholder="jean@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/60 mb-2">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                      Parlez-nous de votre projet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 resize-none"
                      placeholder="Décrivez votre projet, vos objectifs, votre budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer mon message
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
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
        </div>
      </div>
    </section>
  );
}
