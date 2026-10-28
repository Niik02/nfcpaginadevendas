/**
 * Configuração Central do Checkout da PLACAS NFC FÁCIL
 * 
 * Substitua o valor abaixo pela URL real da sua plataforma de pagamento
 * (ex: Kiwify, Hotmart, Eduzz, Mercado Pago, Braip, etc.)
 */
export const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQHC0C";

/**
 * Função utilitária para verificar se o checkout já foi configurado com um link válido.
 */
export function isCheckoutConfigured(url: string = CHECKOUT_URL): boolean {
  if (!url || url.trim() === "" || url === "COLE_AQUI_O_LINK_DO_CHECKOUT") {
    return false;
  }
  return url.startsWith("http://") || url.startsWith("https://");
}
