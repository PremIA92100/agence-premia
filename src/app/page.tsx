"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ValueProps } from "@/components/sections/ValueProps";
import { Services } from "@/components/sections/Services";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Tools } from "@/components/sections/Tools";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900">
      <Navbar />
      <Hero />
      <ValueProps />
      <Services />
      <ProblemSolution />
      <Industries />
      <Process />
      <Tools />
      <Testimonials />
      <CTAFinal />
      <Footer />
    </div>
  );
}
