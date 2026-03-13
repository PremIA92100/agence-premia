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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group hover:opacity-90 transition-opacity duration-200">
              <Logo variant="navbar" />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-text-dim)] hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-cyan)] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + Burger */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 px-5 py-2.5 text-sm font-bold text-[var(--color-cyan)] hover:bg-[var(--color-cyan)]/20 hover:border-[var(--color-cyan)]/50 transition-all duration-300"
              >
                Un projet ?
                <ArrowRight size={12} weight="bold" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-white/5 transition-all duration-200"
              >
                {mobileOpen ? <X size={18} weight="bold" className="text-white" /> : <List size={18} weight="bold" className="text-white" />}
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
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.08 } }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-black text-white hover:text-[var(--color-cyan)] transition-colors tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-cyan)] px-8 py-4 text-lg font-bold text-[var(--color-bg)]"
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
