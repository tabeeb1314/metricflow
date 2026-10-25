import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { ProductTourModal } from './components/ProductTourModal';

export default function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
    <Navbar onOpenTour={() => setIsTourOpen(true)} onSelectDemo={() => scrollToSection('interactive-demo')} />
    <main className="flex-1">
      <Hero onOpenTour={() => setIsTourOpen(true)} onScrollToDemo={() => scrollToSection('work')} />
      <InteractiveDashboard />
      <PortfolioShowcase />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
    <footer className="border-t border-slate-800 bg-[#070b12] py-7"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 justify-between text-xs text-slate-500"><span>© {new Date().getFullYear()} Tabeeb · Freelance web development portfolio</span><span>MetricFlow is a fictional concept project. Demo metrics are illustrative.</span><a className="text-slate-400 hover:text-white" href="https://github.com/tabeeb1314/metricflow" target="_blank" rel="noreferrer">View source on GitHub ↗</a></div></footer>
    <ProductTourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} onFinishTour={() => scrollToSection('interactive-demo')} />
  </div>;
}