import React from 'react';
import { X, ShieldCheck, FileText, Mail } from 'lucide-react';

export type LegalType = 'privacy' | 'terms' | 'contact' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-blue-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-blue-600" />}
            <span>
              {type === 'privacy' && 'Política de Privacidade'}
              {type === 'terms' && 'Termos de Uso'}
              {type === 'contact' && 'Contato e Suporte'}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'terms' && (
            <>
              <p className="font-semibold text-slate-900">
                1. Objeto do Serviço
              </p>
              <p>
                A PLACAS NFC FÁCIL comercializa exclusivamente o acesso organizado às informações de contato e catálogo de fornecedores de placas NFC (Near Field Communication) para plataformas como Google e Instagram.
              </p>
              <p className="font-semibold text-slate-900">
                2. Natureza da Oferta
              </p>
              <p>
                Ao efetuar o pagamento da taxa única de R$ 9,99, o adquirente adquire o direito de consultar as informações de fornecimento. Este valor não inclui o envio de produtos físicos, placas impressas ou dispositivos eletrônicos.
              </p>
              <p className="font-semibold text-slate-900">
                3. Negociação com Terceiros
              </p>
              <p>
                Qualquer transação, pedido, personalização de arte, frete ou garantia de produtos físicos deverá ser acordada diretamente entre o comprador e o fornecedor consultado.
              </p>
              <p className="font-semibold text-slate-900">
                4. Condições de Acesso
              </p>
              <p>
                As instruções para liberação do acesso são informadas após a aprovação da compra através da plataforma de pagamento utilizada.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p className="font-semibold text-slate-900">
                1. Coleta e Uso de Informações
              </p>
              <p>
                Respeitamos integralmente a sua privacidade. As informações fornecidas durante o processo de aquisição (como nome e e-mail) são processadas de forma segura e estritamente necessárias para a liberação das instruções de acesso.
              </p>
              <p className="font-semibold text-slate-900">
                2. Segurança no Processamento de Pagamento
              </p>
              <p>
                Não armazenamos nem coletamos dados de cartão de crédito ou informações bancárias diretamente nesta página. Todas as transações financeiras são gerenciadas pelo gateway de pagamento seguro configurado.
              </p>
              <p className="font-semibold text-slate-900">
                3. Comunicação
              </p>
              <p>
                Seus dados de contato não serão comercializados para terceiros. Serão utilizados unicamente para validação do pedido e suporte relacionado à sua compra.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p className="font-semibold text-slate-900">
                Central de Atendimento
              </p>
              <p>
                Para dúvidas referentes ao acesso ao fornecedor, suporte ao comprador ou informações gerais sobre o processo de compra, utilize os canais indicados na sua confirmação de pagamento.
              </p>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 space-y-2 text-blue-900">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Canal Oficial</p>
                <p className="text-sm">As instruções de contato detalhadas e o link de suporte são disponibilizados na página de confirmação da compra.</p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3.5 bg-slate-50 border-t border-slate-100 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
