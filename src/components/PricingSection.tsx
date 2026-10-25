import React, { useState } from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-400 mb-2">
            <span>Illustrative Tier Architecture</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Transparent Limits</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Predictable plans tailored to your operational scale.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose the tier matching your data velocity. All plans include automated anomaly alerts and core retention dashboards.
          </p>

          {/* Interactive Billing Frequency Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly billing
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-800 transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Toggle between monthly and annual billing"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-sky-400 shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
              <span className={isAnnual ? 'text-white' : 'text-slate-400'}>Annual billing</span>
              <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                Save ~20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const displayPrice = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;
            const billedAnnuallyText = isAnnual && plan.annualMonthlyPrice > 0 
              ? `Billed $${plan.annualMonthlyPrice * 12}/year` 
              : 'Billed monthly';

            return (
              <div
                key={plan.id}
                className={`bg-[#0c121e] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'border-2 border-sky-500 shadow-xl shadow-sky-500/5'
                    : 'border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popularity Marker */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-sky-500 text-slate-950 font-semibold text-xs rounded-full uppercase tracking-wider">
                    Recommended for Growth
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                        ${displayPrice}
                      </span>
                      <span className="text-xs text-slate-400">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 font-mono">
                      {plan.monthlyPrice === 0 ? 'Free proof-of-concept' : billedAnnuallyText}
                    </div>
                  </div>

                  {/* Concrete Limits Box */}
                  <div className="bg-slate-900/80 border border-slate-800/80 rounded-lg p-3 text-xs font-mono space-y-1 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Connectors:</span>
                      <span className="text-white font-medium">{plan.limits.dataSources}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cadence:</span>
                      <span className="text-white font-medium">{plan.limits.refreshRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Team Seats:</span>
                      <span className="text-white font-medium">{plan.limits.teamMembers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">History:</span>
                      <span className="text-white font-medium">{plan.limits.historyDepth}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-semibold text-slate-300">Included capabilities:</div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-8 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      plan.popular
                        ? 'bg-sky-400 text-slate-950 hover:bg-sky-300'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700/80'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Demonstration Pricing Disclaimer */}
        <div className="mt-10 p-4 bg-slate-900/60 border border-slate-800 rounded-lg max-w-2xl mx-auto flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <p>
            <strong>Portfolio Disclosure:</strong> MetricFlow is an illustrative software concept. These tiers and limits demonstrate pricing table layout, annual discount mathematical calculation, and plan selection UX. No actual recurring billing or payments are processed.
          </p>
        </div>

      </div>
    </section>
  );
};
