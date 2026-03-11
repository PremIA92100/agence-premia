"use client";

import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Sites Web", href: "#services" },
      { label: "Applications", href: "#services" },
      { label: "IA & Automatisation", href: "#services" },
      { label: "Audit Technique", href: "#services" },
      { label: "SEO & Growth", href: "#services" },
    ],
  },
  entreprise: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#" },
      { label: "Réalisations", href: "#temoignages" },
      { label: "Blog", href: "#" },
      { label: "Carrières", href: "#" },
    ],
  },
  ressources: {
    title: "Ressources",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Mentions légales", href: "#" },
      { label: "CGV", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logos/premia-logo-full.png"
                alt="Prem'IA — Agence Digitale IA"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
              Agence digitale spécialisée en IA et automatisation. 
              Nous créons des produits digitaux qui transforment votre business.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Prem&apos;IA. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500">
            Fait avec passion à Paris 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
