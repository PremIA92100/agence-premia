
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Tarifs", href: "#pricing" },
    { name: "À propos", href: "#about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full border border-transparent",
                    scrolled || isOpen
                        ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-lg shadow-black/5 py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-all transform group-hover:rotate-3">
                                    P
                                </div>
                                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                                    Prem&apos;IA
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 transition-all hover:text-slate-900 hover:bg-slate-100/50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="relative inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-slate-800 shadow-md"
                            >
                                Audit Gratuit
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed top-20 left-4 right-4 z-40 md:hidden rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2 border-t border-slate-100 mt-2">
                                <Link
                                    href="/contact"
                                    className="block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-base font-medium text-white hover:bg-slate-800 shadow-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Démarrer l&apos;audit
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
