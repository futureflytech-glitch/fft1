import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DualPathCards from "@/components/sections/DualPathCards";
import StatsBar from "@/components/sections/StatsBar";
import ProgramPillars from "@/components/sections/ProgramPillars";
import WhyUs from "@/components/sections/WhyUs";
import StudentJourney from "@/components/sections/StudentJourney";
import IndustryEcosystem from "@/components/sections/IndustryEcosystem";
import FounderSection from "@/components/sections/FounderSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans dark">
      <Navbar />
      <main>
        <Hero />
        <DualPathCards />
        <StatsBar />
        <ProgramPillars />
        <WhyUs />
        <StudentJourney />
        <IndustryEcosystem />
        <FounderSection />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
