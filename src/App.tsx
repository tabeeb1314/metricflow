import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { ValueProposition } from './components/ValueProposition';
import { Capabilities } from './components/Capabilities';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { Footer } from './components/Footer';
import { ProductTourModal } from './components/ProductTourModal';

export default function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string>('growth');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanForDemo(planId);
    scrollToSection('demo-form');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenTour={() => setIsTourOpen(true)}
        onSelectDemo={() => scrollToSection('interactive-demo')}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTour={() => setIsTourOpen(true)}
          onScrollToDemo={() => scrollToSection('interactive-demo')}
        />

        {/* Product Visualization: Interactive Live Analytics Sandbox */}
        <InteractiveDashboard />

        {/* Value Proposition: Core Problems & MetricFlow Outcomes */}
        <ValueProposition />

        {/* Platform Capabilities: Bento Architecture & Data Models */}
        <Capabilities />

        {/* Operational Workflow: 3 Clear Steps */}
        <HowItWorks />

        {/* Pricing: 3 Tiers with Annual Discount Engine */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* FAQ: Accessible Accordion */}
        <FAQSection />

        {/* Final Conversion: Interactive Intake Demo Form */}
        <LeadCaptureForm initialPlan={selectedPlanForDemo} />
      </main>

      {/* Footer & Legal Disclaimers */}
      <Footer />

      {/* Secondary Interaction: Interactive Product Tour Modal */}
      <ProductTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onFinishTour={() => scrollToSection('interactive-demo')}
      />
    </div>
  );
}
