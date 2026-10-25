import React from 'react';
import { ArrowDown, PlayCircle, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenTour: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTour, onScrollToDemo }) => {
  return (
    <section id="overview" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial glow (subtle, 10% budget) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-sky-500/10 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Unboxed editorial kicker with clean typographic separators (Zero-Pill Compliance) */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
            <span>Business Intelligence & Analytics</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Zero SQL Required</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-sky-400">15-Minute Setup</span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
            Turn your data into your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">big decision.</span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            MetricFlow connects your revenue, traffic, and subscriber channels into one lucid dashboard. Understand what moves your business without manual spreadsheet reporting.
          </p>

          {/* Call to Actions (Primary + Secondary) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Explore Live Sandbox</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={onOpenTour}
              className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <PlayCircle className="w-4 h-4 text-sky-400" />
              <span>Take 2-Min Product Tour</span>
            </button>
          </div>

          {/* Honest Concept & Verification Proof Strip */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span>Real-time local reactivity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Client-side sandbox (No trackers)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Fictional portfolio demonstration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
