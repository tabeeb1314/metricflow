import React from 'react';
import { Layers, Lightbulb, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const problems = [
    {
      index: '01',
      title: 'Scattered Data Silos',
      symptom: 'Payment processors, CRM tools, and web logs live in separate disconnected browser tabs.',
      resolution: 'MetricFlow unifies your disparate channels into a single normalized data stream with pre-configured schemas.',
      metricProof: '15-minute setup vs. 3 weeks of custom pipeline engineering',
      icon: Layers,
    },
    {
      index: '02',
      title: 'Dashboard Analysis Paralysis',
      symptom: 'Complex BI suites present hundreds of customizable dials, leaving teams unsure what truly matters.',
      resolution: 'Opinionated executive intelligence identifies critical variances and surfaces plain-English explanations.',
      metricProof: 'Clear root-cause narrative delivered alongside every 5%+ variance',
      icon: Lightbulb,
    },
    {
      index: '03',
      title: 'Weekend Reporting Fatigue',
      symptom: 'Founders and operators spend hours every Sunday manually copying figures into spreadsheet templates.',
      resolution: 'Automated briefing engine generates concise weekly performance snapshots delivered directly to team channels.',
      metricProof: 'Reclaims 4 to 6 hours of repetitive manual data hygiene every week',
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
            <span>Core Problem & Architecture</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Why Modern Teams Switch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Analytics software should clarify decisions, not generate more homework.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Most BI tools were engineered for full-time data engineering teams. MetricFlow is built from the ground up for operators who simply need to know what worked, what stalled, and what to do next.
          </p>
        </div>

        {/* 3 Pillars Grid with Single Elevation & Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="bg-[#0c121e] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div className="space-y-6">
                  {/* Human Editorial Numbering & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-sky-400">
                      {item.index}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-rose-300/80 leading-relaxed font-normal mb-3">
                      <strong className="text-rose-200">The Problem:</strong> {item.symptom}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      <strong className="text-sky-300">MetricFlow Solution:</strong> {item.resolution}
                    </p>
                  </div>
                </div>

                {/* Adjacency Proof Callout */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item.metricProof}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
