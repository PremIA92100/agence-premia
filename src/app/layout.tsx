import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prem'IA — Automatisez votre business, libérez votre temps",
  description:
    "Prem'IA aide les PME, restaurants et indépendants à automatiser leurs tâches répétitives grâce à l'IA. Gagnez du temps, réduisez les erreurs, développez votre activité.",
  keywords: [
    "automatisation",
    "IA",
    "PME",
    "productivité",
    "intelligence artificielle",
    "agence",
    "Prem'IA",
  ],
  authors: [{ name: "Prem'IA" }],
  openGraph: {
    title: "Prem'IA — Automatisez votre business, libérez votre temps",
    description:
      "Gagnez 10h par semaine grâce à l'automatisation intelligente. Audit gratuit.",
    url: "https://agence-premia.fr",
    siteName: "Prem'IA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prem'IA — Automatisez votre business",
    description:
      "Gagnez 10h par semaine grâce à l'automatisation intelligente.",
  },
  metadataBase: new URL("https://agence-premia.fr"),
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/10 selection:text-primary">
        <SmoothScroll>
          {/* Global Noise Texture */}
          <div className="noise-bg" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
