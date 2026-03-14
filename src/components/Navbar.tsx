"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = !pastHero;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? pastHero
              ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
              : "bg-[var(--color-bg-dark)]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link href="/" className="group hover:opacity-90 transition-opacity duration-200">
              <Logo variant={isDark ? "footer" : "navbar"} />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  isDark
                    ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
                    : "bg-slate-900 text-white shadow-lg hover:shadow-slate-900/20 hover:scale-105"
                }`}
              >
                Un projet ?
                <ArrowRight size={12} weight="bold" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
                  isDark ? "border-white/10 hover:bg-white/5 text-white" : "border-slate-200 hover:bg-slate-50 text-slate-900"
                }`}
              >
                {mobileOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.08 } }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-black text-slate-900 hover:text-cyan-600 transition-colors tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white"
              >
                Lancer mon projet
                <ArrowRight size={18} weight="bold" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
