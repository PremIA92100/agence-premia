import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prem'IA — Agence digitale IA & Automatisation",
  description:
    "Prem'IA crée vos sites web, applications et solutions d'automatisation IA. 5x plus rapide, 3x moins cher. Audit gratuit.",
  keywords: [
    "agence digitale",
    "IA",
    "automatisation",
    "développement web",
    "applications",
    "agents IA",
    "Next.js",
    "agence",
    "Prem'IA",
    "Paris",
  ],
  authors: [{ name: "Prem'IA" }],
  openGraph: {
    title: "Prem'IA — Agence digitale IA & Automatisation",
    description:
      "Sites web, applications, IA & automatisation. 5x plus rapide, 3x moins cher. Audit gratuit.",
    url: "https://agence-premia.fr",
    siteName: "Prem'IA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prem'IA — Agence digitale IA & Automatisation",
    description:
      "Sites web, applications, IA & automatisation. 5x plus rapide, 3x moins cher.",
  },
  metadataBase: new URL("https://agence-premia.fr"),
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-512.png",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
