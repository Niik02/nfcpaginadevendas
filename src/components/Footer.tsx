import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { LegalType } from './LegalModal';
import { AlertCircle } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800 items-start">
          
          {/* Brand & Notice */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={BRAND_INFO.logoUrl}
                alt="Logo Placas NFC Fácil"
                className="h-8 sm:h-9 w-auto brightness-0 invert object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-white font-bold text-base tracking-tight">
                PLACAS NFC FÁCIL
              </span>
            </div>

            {/* Crucial transparent notice */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2.5 max-w-xl">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Aviso Legal Importante:</strong> O produto comercializado nesta página refere-se exclusivamente ao acesso às informações de fornecedores de placas NFC. As placas físicas, chips, personalização ou frete não estão incluídos no valor de R$ 9,99 e são negociados diretamente com os respectivos fornecedores.
              </p>
            </div>
          </div>

          {/* Quick Legal & Contact Links */}
          <div className="md:col-span-5 flex flex-col md:items-end space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Links Institucionais
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end text-xs text-slate-400">
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Termos de Uso
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('contact')}
                className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Contato
              </button>
            </div>
            <p className="text-[11px] text-slate-500 max-w-xs md:text-right">
              Todos os direitos reservados.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} PLACAS NFC FÁCIL. Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            Página de vendas focada em conversão e clareza de oferta.
          </p>
        </div>

      </div>
    </footer>
  );
};
