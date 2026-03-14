"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "@phosphor-icons/react";

function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number; pulse: number; speed: number }[]>([]);

  const initNodes = useCallback((width: number, height: number) => {
    const count = Math.floor((width * height) / 25000);
    nodesRef.current = Array.from({ length: Math.min(count, 50) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 1,
      pulse: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.008,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initNodes(canvas.offsetWidth, canvas.offsetHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.speed;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const opacity = (1 - dist / 160) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(8, 145, 178, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const pulseRadius = node.radius + Math.sin(node.pulse) * 0.5;
        const pulseOpacity = 0.2 + Math.sin(node.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8, 145, 178, ${pulseOpacity * 0.06})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8, 145, 178, ${pulseOpacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initNodes]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }} />;
}

const clients = [
  { name: "IMH Radio", type: "Outil interne" },
  { name: "Amourette", type: "SEO / GEO" },
  { name: "Cognectik", type: "CRM sur mesure" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-light" />
      <NodeNetwork />

      {/* Subtle radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(8,145,178,0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.04)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Agence Digitale & IA
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] leading-[0.95]"
          >
            <span className="text-slate-900">Nous construisons</span>
            <br />
            <span className="text-gradient-cyan">l&apos;infrastructure</span>
            <br />
            <span className="text-slate-400">qui fait tourner</span>
            <br />
            <span className="text-slate-900">votre business.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl"
          >
            Sites, applications, automatisation, agents IA.
            <br className="hidden sm:block" />
            Livraison rapide. Code propre. Vous restez propri&eacute;taire.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-7 sm:px-8 py-4 text-base font-bold text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:scale-105 active:scale-100 transition-all duration-300"
            >
              Lancer notre projet
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 sm:px-7 py-4 text-base font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              D&eacute;couvrir nos services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Social proof bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 border-t border-slate-100"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">
              Ils nous font confiance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="group text-center cursor-default"
                >
                  <div className="text-sm font-bold text-slate-400 group-hover:text-cyan-600 transition-colors duration-300">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">{client.type}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
