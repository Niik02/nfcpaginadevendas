import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Check } from 'lucide-react';
import { CHECKOUT_URL } from '../config/checkout';

interface FinalOfferProps {
  onCheckoutClick?: () => void;
}

export const FinalOffer: React.FC<FinalOfferProps> = ({ onCheckoutClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/30 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-blue-200/80 shadow-xl shadow-blue-900/5 text-center overflow-hidden">
          
          {/* Subtle decorative accent */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" 
          />

          {/* Section title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto">
            Quer conhecer o fornecedor dessas placas NFC?
          </h2>

          {/* Text */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Dê o primeiro passo para encontrar as placas que podem complementar os serviços do seu negócio.
          </p>

          {/* Price Highlight */}
          <div className="my-8 inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-blue-50/70 border border-blue-100 min-w-[280px]">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
              Valor do Acesso
            </span>
            <div className="mt-1 flex items-baseline gap-1 text-slate-900">
              <span className="text-4xl sm:text-5xl font-black text-blue-900 tracking-tight">
                R$ 9,99
              </span>
            </div>
            <span className="mt-1 text-xs text-slate-500">
              Pagamento único sem mensalidades
            </span>
          </div>

          {/* Summary check items */}
          <div className="max-w-md mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Fornecedor de placas Google e Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Modelos em alta no mercado</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCheckoutClick}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all cursor-pointer text-center"
            >
              <span>QUERO MEU ACESSO POR R$ 9,99</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Microcopy */}
            <p className="text-xs text-slate-500">
              Confira as condições de acesso antes de finalizar a compra.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Ambiente de pagamento seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Transparência nas informações</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
