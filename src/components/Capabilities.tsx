import React from 'react';
import { 
  Database, 
  Sparkles, 
  Mail, 
  Users, 
  ArrowUpRight, 
  Workflow,
  Check,
  Shield
} from 'lucide-react';

export const Capabilities: React.FC = () => {
  const briefingImg = '/src/assets/images/workspace_executive_briefing_1792946392787.jpg';

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-400 mb-2">
            <span>Capabilities & System Architecture</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Engineered for Clarity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Everything needed to guide your business, nothing redundant.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Each capability is built around a practical operator workflow: connect sources, detect variances, understand drivers, and align your team.
          </p>
        </div>

        {/* Bento Grid Layout (Dynamic column spans) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Zero-ETL Connectors (col-span-7) */}
          <div className="md:col-span-7 bg-[#0c121e] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-sky-400">01. Ingestion Pipeline</span>
                <Database className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Zero-ETL Source Synchronization
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect your payment processors, billing systems, and user databases without configuring transformation pipelines or staging databases. Pre-mapped schemas normalize currencies, refund states, and subscription tiers automatically.
              </p>

              {/* Supported Adapters list (clean text layout, no pill capsules) */}
              <div className="pt-2">
                <div className="text-xs font-medium text-slate-400 mb-2">Pre-Configured Integration Adapters:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-slate-300">
                  <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Stripe API</span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Shopify</span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Google Sheets</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Sync frequency: Near real-time to hourly</span>
              <span className="text-sky-400 font-medium">99.9% ingestion reliability</span>
            </div>
          </div>

          {/* Bento Card 2: Plain-English Variance Explanations (col-span-5) */}
          <div className="md:col-span-5 bg-[#0c121e] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-teal-400">02. Automated Insight</span>
                <Sparkles className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Plain-English Variance Explainer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When key numbers deviate from standard ranges, MetricFlow correlates related dimensions—such as refund velocity, channel attribution, and cohort drop-off—to produce human-readable diagnostic prose.
              </p>

              {/* Sample Diagnostic Box */}
              <div className="bg-slate-900/90 border border-teal-500/20 rounded-lg p-3.5 space-y-1.5 text-xs">
                <div className="text-teal-400 font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Sample Diagnostic Narrative:</span>
                </div>
                <p className="text-slate-300 italic leading-relaxed">
                  "Trial conversion dropped 1.2% in EU-West due to a 3-day webhook timeout on SEPA checkout flows. US and APAC regions remained nominal."
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Statistical threshold: 5% variance</span>
              <span className="text-teal-400 font-medium">Zero hallucinated metrics</span>
            </div>
          </div>

          {/* Bento Card 3: Executive Briefing Delivery (col-span-5 with authentic photography) */}
          <div className="md:col-span-5 bg-[#0c121e] border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors group">
            {/* Visual Header using generated high-res studio photography with fallback */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={briefingImg}
                alt="Minimalist modern executive workspace with laptop and notebook"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback container in case image is missing
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/40 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-sky-400">03. Briefing Automation</span>
                <Mail className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Scheduled Executive Briefs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Receive high-signal weekly recaps every Monday at 08:00 AM in your team's Slack channel or inbox. Highlighting cash runway, churn warnings, and highest-yield decisions.
              </p>
              <div className="text-xs text-slate-400 pt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Configurable email & webhook delivery cadences</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Cohort Retention & Churn Forecaster (col-span-7) */}
          <div className="md:col-span-7 bg-[#0c121e] border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-indigo-400">04. Retention Modeling</span>
                <Users className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Cohort Retention & Expansion Modeling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Track how subscriber cohorts retain, expand, or churn over 30, 60, and 90-day intervals. Identify which product versions or acquisition campaigns retain the highest customer lifetime value (LTV).
              </p>

              {/* Miniature Cohort Matrix Table Preview (Clean tabular numerals) */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono tabular-nums">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-800">
                      <th className="pb-2 font-medium">Cohort</th>
                      <th className="pb-2 font-medium">Users</th>
                      <th className="pb-2 font-medium">Month 1</th>
                      <th className="pb-2 font-medium">Month 2</th>
                      <th className="pb-2 font-medium">Month 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50 text-slate-300">
                    <tr>
                      <td className="py-1.5 text-white font-sans font-medium">July 2026</td>
                      <td className="py-1.5">420</td>
                      <td className="py-1.5 text-emerald-400">92%</td>
                      <td className="py-1.5 text-emerald-400">86%</td>
                      <td className="py-1.5 text-sky-400">84%</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-white font-sans font-medium">August 2026</td>
                      <td className="py-1.5">580</td>
                      <td className="py-1.5 text-emerald-400">94%</td>
                      <td className="py-1.5 text-emerald-400">89%</td>
                      <td className="py-1.5 text-sky-400">88%</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-white font-sans font-medium">September 2026</td>
                      <td className="py-1.5">710</td>
                      <td className="py-1.5 text-emerald-400">96%</td>
                      <td className="py-1.5 text-emerald-400">91%</td>
                      <td className="py-1.5 text-slate-500">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Automatic cohort segmentation by source</span>
              <span className="text-indigo-400 font-medium">Real-time churn forecasting</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
