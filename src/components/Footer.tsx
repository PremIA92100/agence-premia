"use client";

import { LinkedinLogo, XLogo, InstagramLogo } from "@phosphor-icons/react";
import { Logo } from "./Logo";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Sites Web", href: "#services" },
      { label: "Applications", href: "#services" },
      { label: "IA & Automatisation", href: "#services" },
      { label: "Audit Technique", href: "#services" },
    ],
  },
  entreprise: {
    title: "Entreprise",
    links: [
      { label: "Process", href: "#process" },
      { label: "Clients", href: "#clients" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

const socials = [
  { icon: LinkedinLogo, href: "https://www.linkedin.com/company/premia-agence/", label: "LinkedIn" },
  { icon: XLogo, href: "https://twitter.com", label: "X" },
  { icon: InstagramLogo, href: "https://www.instagram.com/premia.agence/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo variant="footer" />
            </div>
            <p className="text-sm text-[var(--color-text-dim)] leading-relaxed max-w-sm mb-8">
              Agence digitale sp&eacute;cialis&eacute;e en IA et automatisation.
              On construit l&apos;infrastructure qui fait tourner votre business.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-cyan)]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={14} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-dim)]">
            &copy; {new Date().getFullYear()} Prem&apos;IA. Tous droits r&eacute;serv&eacute;s.
          </p>
          <p className="text-xs text-[var(--color-text-dim)]">
            Paris, France
          </p>
        </div>
      </div>
    </footer>
  );
}
