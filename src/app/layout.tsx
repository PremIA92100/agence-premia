import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
