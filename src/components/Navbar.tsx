"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Outils", href: "#outils" },
  { label: "Témoignages", href: "#temoignages" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-slate-900 text-white py-2.5 px-4 text-center text-sm font-medium relative z-50">
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-bold text-blue-300 ring-1 ring-blue-500/30">
            NEW
          </span>
          <span className="text-white/80">Développez vos agents IA sur-mesure</span>
          <a href="#contact" className="inline-flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300 transition-colors">
            En savoir plus <ArrowRight size={12} weight="bold" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group hover:opacity-90 transition-opacity duration-200">
              <Logo variant="navbar" />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Burger */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:scale-105 active:scale-100 transition-all duration-200"
              >
                Un projet ?
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
              >
                {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-lg font-bold text-white shadow-xl"
              >
                Un projet ?
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
