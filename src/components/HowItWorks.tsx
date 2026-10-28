import React from 'react';
import { CreditCard, Inbox, BookOpen } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Inbox className="w-5 h-5 text-blue-600" />;
      case 3:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Passo a Passo
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como funciona
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Três etapas diretas para você obter as informações necessárias.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-start"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold shadow-xs">
                  {item.step}
                </span>
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  {getStepIcon(item.step)}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {index < HOW_IT_WORKS.length - 1 && (
                <div 
                  aria-hidden="true" 
                  className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-bold"
                >
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
