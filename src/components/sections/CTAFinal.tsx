"use client";

import { motion } from "framer-motion";
import { GradientMeshDark } from "../ui/GradientMesh";
import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] bg-[#0a0a0a] px-8 py-20 sm:p-20 text-center overflow-hidden shadow-2xl"
        >
          <GradientMeshDark />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
            >
              Un projet ?<br />
              <span className="gradient-text">C&apos;est le moment d&apos;en parler.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-white/60 max-w-xl mx-auto"
            >
              L&apos;audit est gratuit. La vision est offerte.<br />
              Vous n&apos;avez rien à perdre, et tout un empire à construire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:contact@agence-premia.fr"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-xl hover:shadow-white/20 hover:scale-105 active:scale-100 transition-all duration-300"
              >
                Réserver mon appel
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="mailto:contact@agence-premia.fr"
                className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
              >
                contact@agence-premia.fr
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
