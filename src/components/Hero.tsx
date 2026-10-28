import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { PRODUCT_PLATES } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';
import { CHECKOUT_URL } from '../config/checkout';

interface HeroProps {
  onCheckoutClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckoutClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-100">
      {/* Subtle background ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-200/35 to-indigo-200/30 blur-3xl rounded-full" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Offer Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Direct clarification badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100/80 px-3 py-1.5 rounded-md w-fit">
              <Tag className="w-3.5 h-3.5" />
              <span>Acesso às informações do fornecedor</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Tenha acesso ao fornecedor de placas NFC para Google e Instagram
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Descubra onde encontrar placas NFC para facilitar a divulgação do seu negócio e ajudar seus clientes a encontrar seu perfil ou avaliar sua empresa.
            </p>

            {/* Price Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-150 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Condição especial
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">
                    ACESSO POR APENAS R$ 9,99
                  </span>
                </div>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Informações selecionadas</span>
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="space-y-3 pt-1">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCheckoutClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all cursor-pointer text-center"
              >
                <span>QUERO ACESSAR O FORNECEDOR</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Required microcopy */}
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <span>Pagamento único • Acesso conforme as condições informadas na compra</span>
              </p>
            </div>

            {/* Clear transparency notice */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p>
                <strong>Importante:</strong> Você está adquirindo o acesso às informações do fornecedor de placas NFC, e não as placas físicas.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Composition with real NFC Plates */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="p-4 sm:p-5 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Modelos Disponíveis no Fornecedor
                  </span>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    Catálogo de Modelos
                  </span>
                </div>

                {/* 2x2 showcase grid with real images */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {PRODUCT_PLATES.map((plate) => (
                    <div 
                      key={plate.id}
                      className="group relative bg-slate-50 rounded-2xl p-2.5 border border-slate-100 hover:border-blue-300 transition-all hover:shadow-md"
                    >
                      <div className="aspect-square w-full overflow-hidden rounded-xl bg-white flex items-center justify-center p-1.5">
                        <ImageWithFallback
                          src={plate.image}
                          alt={plate.alt}
                          fallbackTitle={plate.name}
                          fallbackCategory={plate.category}
                          fallbackColor={plate.colorName}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-[11px] font-bold text-slate-800 truncate">
                          {plate.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {plate.category} • {plate.colorName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 pt-3 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Google Reviews &amp; Instagram • Tecnologia NFC + QR Code
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
