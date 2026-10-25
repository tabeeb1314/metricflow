import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Shield, Sparkles } from 'lucide-react';
import { DemoFormState } from '../types';

interface LeadCaptureFormProps {
  initialPlan?: string;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ initialPlan = 'growth' }) => {
  const [formData, setFormData] = useState<DemoFormState>({
    fullName: '',
    workEmail: '',
    companySize: '1-10',
    selectedPlan: initialPlan,
    primaryGoal: 'automate-reporting',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<DemoFormState | null>(null);

  // Sync external plan changes from pricing section
  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, selectedPlan: initialPlan }));
    }
  }, [initialPlan]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required.';
    } else if (!emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = 'Please provide a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side validation settling delay
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      workEmail: '',
      companySize: '1-10',
      selectedPlan: initialPlan || 'growth',
      primaryGoal: 'automate-reporting',
    });
    setErrors({});
  };

  return (
    <section id="demo-form" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="bg-[#0c121e] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 right-0 w-80 h-80 bg-sky-500/10 blur-[100px] rounded-full" 
          />

          {submittedData ? (
            /* Success State */
            <div className="text-center py-8 sm:py-12 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Sandbox Request Validated!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{submittedData.fullName}</span>. Your demonstration inquiry for the <strong className="text-sky-400 capitalize">{submittedData.selectedPlan}</strong> plan has completed local client validation.
                </p>
              </div>

              {/* Simulation Receipt Details */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Contact:</span>
                  <span className="text-white">{submittedData.workEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Team Size:</span>
                  <span className="text-white">{submittedData.companySize} members</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Tier:</span>
                  <span className="text-sky-400 capitalize">{submittedData.selectedPlan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Privacy Status:</span>
                  <span className="text-teal-400">100% Client-side sandbox</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Demo Test</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form State */
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Frontend Demonstration Sandbox</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [text-wrap:balance]">
                  Ready to test clear analytics for your team?
                </h2>
                <p className="text-sm text-slate-300">
                  Experience MetricFlow's tailored onboarding simulation. Fill in your parameters below to test the client-side intake workflow.
                </p>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-xl mx-auto">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder:text-slate-600 transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-sky-400'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="alex@company.com"
                    aria-invalid={!!errors.workEmail}
                    aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder:text-slate-600 transition-colors ${
                      errors.workEmail ? 'border-rose-500' : 'border-slate-800 focus:border-sky-400'
                    }`}
                  />
                  {errors.workEmail && (
                    <p id="workEmail-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.workEmail}
                    </p>
                  )}
                </div>

                {/* 2-column: Company Size & Desired Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companySize" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:border-sky-400 transition-colors"
                    >
                      <option value="1-10">1 – 10 operators</option>
                      <option value="11-50">11 – 50 operators</option>
                      <option value="51-200">51 – 200 operators</option>
                      <option value="200+">200+ operators</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="selectedPlan" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Target Plan Evaluation
                    </label>
                    <select
                      id="selectedPlan"
                      value={formData.selectedPlan}
                      onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:border-sky-400 transition-colors capitalize"
                    >
                      <option value="starter">Starter ($0 / mo)</option>
                      <option value="growth">Growth ($19 / mo)</option>
                      <option value="scale">Scale ($49 / mo)</option>
                    </select>
                  </div>
                </div>

                {/* Primary Goal */}
                <div>
                  <label htmlFor="primaryGoal" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Primary Analytics Priority
                  </label>
                  <select
                    id="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:border-sky-400 transition-colors"
                  >
                    <option value="automate-reporting">Eliminate weekly manual spreadsheet copying</option>
                    <option value="unify-sources">Harmonize Stripe, Shopify, and PostgreSQL data</option>
                    <option value="churn-warning">Detect cohort retention anomalies before month-end</option>
                    <option value="cac-optimization">Optimize blended acquisition spend across channels</option>
                  </select>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-sky-400 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Validating Simulation...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Run Local Sandbox Onboarding</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Explicit Honest Data Handling Notice */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>
                  Frontend Demonstration Only. No personal information is stored or transmitted to remote servers.
                </span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
