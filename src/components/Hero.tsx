import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from 'lucide-react';

interface HeroProps { onOpenTour: () => void; onScrollToDemo: () => void; }

export const Hero: React.FC<HeroProps> = ({ onOpenTour, onScrollToDemo }) => (
  <section id="overview" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-grid-pattern">
    <div aria-hidden="true" className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-sky-500/10 blur-[120px] rounded-full" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-300">
            <Code2 className="w-4 h-4" /><span>FREELANCE WEB DEVELOPMENT</span><span className="text-slate-600">·</span><span>Responsive · Conversion-focused</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            Websites that make your business look <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">ready for its next stage.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            I design and build modern landing pages and interactive web experiences for small businesses, founders, and service providers—clear messaging, polished design, and a straightforward path to contact.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-start gap-3">
            <button onClick={onScrollToDemo} className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-sky-400">
              <span>Explore my featured project</span><ArrowDown className="w-4 h-4" />
            </button>
            <a href="#contact" className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2">
              Discuss your website <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>
          </div>
          <div className="pt-5 border-t border-slate-800/80 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
            <span>✓ Mobile-first layouts</span><span>✓ Clear calls to action</span><span>✓ Honest project scope</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-sky-500/10 blur-2xl rounded-3xl" />
          <div className="relative rounded-2xl border border-slate-700 bg-[#0c121e] shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"/><span className="w-2.5 h-2.5 rounded-full bg-amber-300/80"/><span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"/>
              <span className="ml-3 text-xs text-slate-400 font-mono">metricflow / interactive product concept</span>
            </div>
            <div className="p-5 sm:p-7 space-y-5">
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs text-slate-400">FEATURED CONCEPT</p><h2 className="text-xl sm:text-2xl font-bold mt-1">MetricFlow Analytics</h2><p className="text-sm text-slate-400 mt-2">A SaaS landing page with an interactive analytics dashboard.</p></div><div className="w-10 h-10 shrink-0 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-300"><Sparkles className="w-5 h-5"/></div></div>
              <div className="grid grid-cols-3 gap-3">
                {[['MRR','$48.2k','+12.8%'],['Conversion','6.4%','+1.2%'],['Retention','94.8%','+3.1%']].map(([label,value,change])=><div key={label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3"><p className="text-[10px] sm:text-xs text-slate-400">{label}</p><p className="text-base sm:text-xl font-bold text-white mt-2">{value}</p><p className="text-[10px] text-emerald-300 mt-1">{change}</p></div>)}
              </div>
              <div className="h-28 flex items-end gap-2 px-1">
                {[36,48,41,62,54,70,59,83,68,94,78,100].map((h,i)=><div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-600/50 to-sky-300" style={{height:h+'%'}}/>)}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800 pt-3"><span>Illustrative interface preview</span><span>React · TypeScript · Tailwind</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);