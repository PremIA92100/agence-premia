"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text)]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
