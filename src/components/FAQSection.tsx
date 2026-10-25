import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-400 mb-2">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Clarity & Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Everything you need to know about the platform.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Clear, honest answers regarding data handling, concept architecture, and portfolio intent.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions Accordion">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#0c121e] border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-semibold text-slate-100 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3 text-xs text-slate-500 font-mono">
                      Category: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
