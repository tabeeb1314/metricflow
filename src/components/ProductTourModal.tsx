import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, BarChart3, Database, Mail, ArrowRight } from 'lucide-react';
import { TOUR_STEPS } from '../data/mockData';

interface ProductTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinishTour: () => void;
}

export const ProductTourModal: React.FC<ProductTourModalProps> = ({
  isOpen,
  onClose,
  onFinishTour,
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  // Keyboard navigation: Escape closes, Arrow keys navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setCurrentStepIdx((prev) => (prev < TOUR_STEPS.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setCurrentStepIdx((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentStep = TOUR_STEPS[currentStepIdx];
  const isFirst = currentStepIdx === 0;
  const isLast = currentStepIdx === TOUR_STEPS.length - 1;

  const stepIcons = [Database, BarChart3, Sparkles, Mail];
  const StepIcon = stepIcons[currentStepIdx] || Sparkles;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090d16]/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Modal Dialog Card */}
      <div 
        className="bg-[#0c121e] border border-slate-700/80 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-150"
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
            <span className="font-mono">{currentStep.badgeText}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">{currentStep.category}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Close interactive tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <StepIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 id="tour-modal-title" className="text-xl font-bold text-white tracking-tight">
                {currentStep.title}
              </h3>
              <p className="text-xs text-sky-300 font-medium">
                {currentStep.subtitle}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {currentStep.description}
          </p>

          {/* Key Metric & Insight Simulation Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-2 text-xs">
            <div className="text-slate-400 font-mono flex items-center justify-between">
              <span>Operational Highlight:</span>
              <span className="text-emerald-400 font-semibold">{currentStep.highlightMetric}</span>
            </div>
            <div className="text-slate-300 pt-2 border-t border-slate-800/80 flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span>{currentStep.insightText}</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/40 flex items-center justify-between">
          {/* Direct Step Indicators */}
          <div className="flex items-center gap-1.5" aria-label="Tour step indicator">
            {TOUR_STEPS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentStepIdx(idx)}
                aria-label={`Jump to step ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentStepIdx
                    ? 'w-6 bg-sky-400'
                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Next / Prev Controls */}
          <div className="flex items-center gap-2">
            {!isFirst && (
              <button
                type="button"
                onClick={() => setCurrentStepIdx((prev) => prev - 1)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
            )}

            {isLast ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onFinishTour();
                }}
                className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
              >
                <span>Complete Tour & Test Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentStepIdx((prev) => prev + 1)}
                className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
