
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, Zap, Sparkles, MessageSquare, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "@/components/ui/TextReveal";

const FloatingNode = ({
    children,
    delay = 0,
    x,
    y,
}: {
    children: React.ReactNode;
    delay?: number;
    x: number | string;
    y: number | string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ x, y }}
        >
            <motion.div
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: delay,
                }}
                className="flex items-center justify-center w-16 h-16 rounded-2xl border border-white/40 bg-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.15)] backdrop-blur-xl hover:scale-110 hover:shadow-cyan-500/20 transition-all duration-300"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background: Technical Grid */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_100%,transparent_100%)] opacity-80" />

            {/* Background: Massive Animated Blobs */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

            {/* Orbiting Nodes (Larger & More spread out) */}
            <div className="absolute inset-0 max-w-[1400px] mx-auto pointer-events-none hidden lg:block">
                {/* Inner Ring */}
                <FloatingNode x="-300px" y="-120px" delay={0.2}>
                    <Zap className="h-8 w-8 text-amber-500" />
                </FloatingNode>
                <FloatingNode x="320px" y="140px" delay={0.5}>
                    <Database className="h-8 w-8 text-blue-500" />
                </FloatingNode>

                {/* Outer Ring */}
                <FloatingNode x="-450px" y="180px" delay={0.8}>
                    <Bot className="h-8 w-8 text-purple-600" />
                </FloatingNode>
                <FloatingNode x="480px" y="-150px" delay={1.1}>
                    <MessageSquare className="h-8 w-8 text-green-500" />
                </FloatingNode>
                <FloatingNode x="0px" y="-320px" delay={1.4}>
                    <BarChart3 className="h-8 w-8 text-rose-500" />
                </FloatingNode>
                <FloatingNode x="0px" y="320px" delay={1.7}>
                    <Globe className="h-8 w-8 text-cyan-500" />
                </FloatingNode>
            </div>

            <div className="relative z-10 max-w-5xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 backdrop-blur-md shadow-sm">
                        <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">
                            Agence IA Next-Gen
                        </span>
                    </div>

                    <h1 className="mb-8 text-6xl font-black tracking-tight text-slate-900 sm:text-8xl">
                        <TextReveal text="Automatisez." className="block" delay={0.2} />
                        <span className="text-gradient">
                            <TextReveal text="Dominez." delay={0.8} />
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 sm:text-2xl leading-relaxed font-medium">
                        Transformez votre business en machine de guerre.
                        <br />
                        <span className="text-slate-400">0% d&apos;effort humain. 100% de croissance.</span>
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link
                            href="/contact"
                            className="group relative flex h-14 items-center gap-3 rounded-full bg-slate-900 px-10 text-lg font-bold text-white shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-blue-500/40"
                        >
                            <span className="relative z-10">Lancer l&apos;audit (Gratuit)</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100 blur-lg" />
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                        </Link>

                        <Link
                            href="#solutions"
                            className="flex h-14 items-center gap-2 rounded-full px-8 text-lg font-bold text-slate-600 transition-colors hover:text-primary hover:bg-slate-50"
                        >
                            Voir la démo
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
