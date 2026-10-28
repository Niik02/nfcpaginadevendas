import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const Faq: React.FC = () => {
  // First item open by default for immediate clarity
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Respostas claras e diretas sobre o que está incluído no seu acesso.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-slate-900 cursor-pointer gap-4"
                >
                  <span className="flex-1">{item.question}</span>
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/70 mt-1">
                    <p className="pt-3">{item.answer}</p>
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
