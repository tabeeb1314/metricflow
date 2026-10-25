import React from 'react';
import { KeyRound, Cpu, BellRing, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Authorize read-only stream connections',
      description: 'Link your revenue, store, and analytics services using secure, read-only credentials or OAuth tokens in less than 5 minutes. No database migrations or scripts.',
      icon: KeyRound,
      timing: 'Duration: 5 minutes',
    },
    {
      step: '02',
      title: 'Automated schema alignment & anomaly baselining',
      description: 'MetricFlow ingests your historical transactions, normalizes timezones and currencies, and computes your rolling 90-day performance baseline without data engineering.',
      icon: Cpu,
      timing: 'Duration: Instant background processing',
    },
    {
      step: '03',
      title: 'Receive executive briefings and plain-English alerts',
      description: 'Access your high-signal dashboard sandbox or receive automated Monday morning briefings via Slack and email that highlight exact levers to protect margins and accelerate growth.',
      icon: BellRing,
      timing: 'Frequency: Continuous & Weekly digests',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-400 mb-2">
            <span>Operational Workflow</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>From Zero to Clear Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            How MetricFlow works in practice.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            A frictionless three-stage path from fragmented operational numbers to executive certainty.
          </p>
        </div>

        {/* 3 Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#0c121e] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors relative"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-sky-400">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{item.timing}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
