import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import VisagismoSection from "@/components/sections/VisagismoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TransformationsGallery from "@/components/sections/TransformationsGallery";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import FAQSection from "@/components/sections/FAQSection";
import LocalSEOSection from "@/components/sections/LocalSEOSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemSection />
      <VisagismoSection />
      <ProcessSection />
      <TransformationsGallery />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <DifferentialsSection />
      <FAQSection />
      <LocalSEOSection />
      <CTASection />
      <Footer />
    </>
  );
}
