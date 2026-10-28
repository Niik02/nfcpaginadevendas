/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { FinalOffer } from './components/FinalOffer';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { CheckoutNoticeModal } from './components/CheckoutNoticeModal';
import { LegalModal, LegalType } from './components/LegalModal';
import { CHECKOUT_URL, isCheckoutConfigured } from './config/checkout';

export default function App() {
  const [showCheckoutNotice, setShowCheckoutNotice] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalType>(null);

  /**
   * Manipulador único e centralizado para todos os botões de checkout da página.
   * Se a URL do checkout estiver configurada, redireciona o usuário para ela.
   * Caso ainda esteja como 'COLE_AQUI_O_LINK_DO_CHECKOUT', abre a modal informativa.
   */
  const handleCheckoutClick = () => {
    if (isCheckoutConfigured(CHECKOUT_URL)) {
      window.location.href = CHECKOUT_URL;
    } else {
      setShowCheckoutNotice(true);
    }
  };

  const handleSimulateRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Cabeçalho Compacto */}
      <Header onCheckoutClick={handleCheckoutClick} />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 2. Primeira Dobra: Oferta Principal */}
        <Hero onCheckoutClick={handleCheckoutClick} />

        {/* 3. Demonstração dos Modelos de Placas NFC */}
        <ProductShowcase />

        {/* 4. Benefícios do Acesso */}
        <Benefits />

        {/* 5. Como Funciona (3 Passos) */}
        <HowItWorks />

        {/* 6. Oferta Final com CTA de Conversão */}
        <FinalOffer onCheckoutClick={handleCheckoutClick} />

        {/* 7. Perguntas Frequentes (Acordeão) */}
        <Faq />
      </main>

      {/* 8. Rodapé Discreto com Links e Avisos */}
      <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Modal Informativa quando o Checkout ainda não foi configurado */}
      <CheckoutNoticeModal
        isOpen={showCheckoutNotice}
        onClose={() => setShowCheckoutNotice(false)}
        onSimulateRedirect={handleSimulateRedirect}
      />

      {/* Modais de Termos de Uso, Política de Privacidade e Contato */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
