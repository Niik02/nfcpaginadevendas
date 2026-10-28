import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeaderProps {
  onCheckoutClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCheckoutClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 shrink-0"
          aria-label="Placas NFC Fácil — Início"
        >
          <img
            src={BRAND_INFO.logoUrl}
            alt="Logo Placas NFC Fácil"
            className="h-9 sm:h-10 w-auto object-contain"
            loading="eager"
          />
        </a>

        {/* Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCheckoutClick}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>QUERO ACESSAR O FORNECEDOR</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
