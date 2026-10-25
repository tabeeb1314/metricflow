import React, { useState, useEffect } from 'react';
import { BarChart3, Menu, X, PlayCircle } from 'lucide-react';

interface NavbarProps {
  onOpenTour: () => void;
  onSelectDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTour, onSelectDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-sm'
          : 'bg-transparent border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark (Single text element with integrated vector icon) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 group focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            aria-label="MetricFlow Home"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-colors">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span>MetricFlow</span>
          </a>

          {/* Zone 2: 5 Concise single-line navigation links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
            aria-label="Primary Navigation"
          >
            <a
              href="#overview"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Overview
            </a>
            <a
              href="#interactive-demo"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Live Demo
            </a>
            <a
              href="#capabilities"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Capabilities
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTour}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <PlayCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>Explore Tour</span>
            </button>
            <button
              onClick={onSelectDemo}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Test Sandbox
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c121e]/98 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
            >
              Overview
            </a>
            <a
              href="#interactive-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
            >
              Live Demo
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTour();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <PlayCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>Explore Interactive Tour</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectDemo();
              }}
              className="w-full px-4 py-2.5 text-xs font-semibold text-slate-950 bg-sky-400 rounded-lg hover:bg-sky-300 transition-colors text-center"
            >
              Test Live Sandbox
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
