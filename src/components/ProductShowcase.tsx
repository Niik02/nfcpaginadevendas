import React, { useState } from 'react';
import { Maximize2, X, Smartphone, Wifi } from 'lucide-react';
import { PRODUCT_PLATES, ProductPlate } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

export const ProductShowcase: React.FC = () => {
  const [selectedPlate, setSelectedPlate] = useState<ProductPlate | null>(null);

  return (
    <section id="modelos" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-md">
            <Wifi className="w-3.5 h-3.5" />
            <span>Modelos em Destaque</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conheça os modelos de placas NFC
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Confira as opções que você encontrará junto ao fornecedor para potencializar as avaliações e redes do seu comércio ou serviço.
          </p>
        </div>

        {/* Responsive Grid: 4 columns on desktop (lg:grid-cols-4), 2 columns on mobile/tablet (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCT_PLATES.map((plate) => (
            <div
              key={plate.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
            >
              {/* Image Frame - preserves original proportions */}
              <div 
                className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-3 sm:p-4 cursor-pointer overflow-hidden"
                onClick={() => setSelectedPlate(plate)}
                title="Clique para ampliar o modelo"
              >
                <ImageWithFallback
                  src={plate.image}
                  alt={plate.alt}
                  fallbackTitle={plate.name}
                  fallbackCategory={plate.category}
                  fallbackColor={plate.colorName}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  type="button"
                  aria-label={`Ampliar imagem de ${plate.name}`}
                  className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-white/90 text-slate-700 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-white"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Text Info */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white border-t border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {plate.category}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {plate.colorName}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {plate.name}
                  </h3>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100/70 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-slate-400" />
                    NFC + QR Code
                  </span>
                  <button
                    onClick={() => setSelectedPlate(plate)}
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small reminder underneath */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            * As imagens acima representam os modelos produzidos pelo fornecedor. O acesso a R$ 9,99 concede o contato e catálogo do fornecedor para você solicitar diretamente com ele.
          </p>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPlate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedPlate(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative bg-white rounded-3xl p-5 max-w-lg w-full shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {selectedPlate.category}
                </span>
                <h3 className="text-base font-bold text-slate-900">{selectedPlate.name}</h3>
              </div>
              <button
                onClick={() => setSelectedPlate(null)}
                aria-label="Fechar"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-square w-full bg-slate-50 rounded-2xl flex items-center justify-center p-4 overflow-hidden">
              <ImageWithFallback
                src={selectedPlate.image}
                alt={selectedPlate.alt}
                fallbackTitle={selectedPlate.name}
                fallbackCategory={selectedPlate.category}
                fallbackColor={selectedPlate.colorName}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedPlate.description}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Tecnologia de aproximação instantânea</span>
              <button
                type="button"
                onClick={() => setSelectedPlate(null)}
                className="px-3.5 py-1.5 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
