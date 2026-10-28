import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Copy, ExternalLink, X, Settings2 } from 'lucide-react';
import { CHECKOUT_URL } from '../config/checkout';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSimulateRedirect?: (url: string) => void;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({
  isOpen,
  onClose,
  onSimulateRedirect,
}) => {
  const [testUrl, setTestUrl] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`export const CHECKOUT_URL = "https://seu-link-de-checkout.com";`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl.trim()) return;
    const finalUrl = testUrl.startsWith('http') ? testUrl : `https://${testUrl}`;
    if (onSimulateRedirect) {
      onSimulateRedirect(finalUrl);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-blue-50/50">
          <div className="flex items-center gap-2.5 text-blue-900 font-semibold text-base">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
              <Settings2 className="w-4 h-4" />
            </div>
            <span id="checkout-modal-title">Configuração do Checkout</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-sm text-slate-600">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-amber-950">Link de pagamento pendente</p>
              <p className="text-xs text-amber-800 leading-relaxed">
                Todos os botões da página estão configurados e prontos! Para publicar com sua plataforma de vendas (Kiwify, Hotmart, Mercado Pago, etc.), insira sua URL no arquivo de configuração.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Onde configurar o link:
            </label>
            <div className="p-3 bg-slate-900 rounded-lg text-slate-200 font-mono text-xs flex items-center justify-between overflow-x-auto">
              <span>src/config/checkout.ts</span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-blue-300 rounded cursor-pointer transition-colors"
                title="Copiar snippet"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Valor atual: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-mono font-medium">{CHECKOUT_URL}</code>
            </p>
          </div>

          {/* Test area */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Testar redirecionamento agora:
            </label>
            <form onSubmit={handleTestRedirect} className="flex gap-2">
              <input
                type="text"
                placeholder="Ex: https://pay.minhaloja.com/placas-nfc"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <button
                type="submit"
                disabled={!testUrl.trim()}
                className="px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Abrir</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3.5 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
