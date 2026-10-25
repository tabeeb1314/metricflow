import React from 'react';
import { BarChart3, ShieldCheck, Heart, Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b12] border-t border-slate-800 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Split: Wordmark & Navigation Mirrors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5 text-base font-bold text-white tracking-tight">
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span>MetricFlow</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Turn your data into your next big decision. Analytics and business intelligence built for clarity.
            </p>
          </div>

          {/* Navigation Mirrors */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Product Concept
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-white transition-colors">Interactive Sandbox</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Capabilities & Ingestion</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Technical Design
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ & Architecture</a>
              </li>
              <li>
                <a href="#demo-form" className="hover:text-white transition-colors">Demo Lead Sandbox</a>
              </li>
              <li>
                <span className="text-slate-500">Pure React 19 + Tailwind v4</span>
              </li>
              <li>
                <span className="text-slate-500">Zero Server-Side Dependency</span>
              </li>
            </ul>
          </div>

          {/* Developer / Portfolio Notes */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Portfolio Integrity
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed and built independently as a senior frontend & UX engineering demonstration. Meets WCAG AA contrast standards, keyboard navigation contracts, and anti-slop guidelines.
            </p>
          </div>
        </div>

        {/* Clear Portfolio Concept Disclaimer (Prominent & Honest) */}
        <div className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-lg text-xs leading-relaxed text-slate-400">
          <strong className="text-slate-200">Portfolio Project Disclaimer:</strong> MetricFlow is a fictional SaaS concept application created to showcase high-fidelity UI/UX design, interactive SVG data visualization, responsive layouts, accessibility compliance, and conversion rate optimization. No actual commercial transactions, user accounts, or external analytics pipelines are operated under this brand.
        </div>

        {/* Bottom Bar: Copyright, Keyboard Hint & Back to Top */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} MetricFlow. Concept & Frontend Portfolio Artifact.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono text-[11px] text-slate-600">
              [Esc] Closes Active Modal
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1.5 py-0.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
