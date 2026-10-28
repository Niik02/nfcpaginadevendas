import React from 'react';
import { Store, Layers, Coins, Check } from 'lucide-react';
import { BENEFITS } from '../data/content';

export const Benefits: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Store className="w-6 h-6 text-blue-600" />;
      case 1:
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 2:
        return <Coins className="w-6 h-6 text-blue-600" />;
      default:
        return <Check className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Vantagens do Acesso
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Uma oportunidade simples para conhecer esse mercado
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Acesso descomplicado para você descobrir onde encontrar produtos modernos de aproximação digital.
          </p>
        </div>

        {/* 3 Compact Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.number}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getIcon(index)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-blue-600 font-medium">
                Acesso transparente &bull; R$ 9,99
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
