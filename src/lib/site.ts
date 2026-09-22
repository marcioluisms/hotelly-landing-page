/**
 * Constantes da landing page (reforma set/2026).
 * A página não vende: o único CTA é uma conversa no WhatsApp.
 */
export const WHATSAPP_NUMBER = '5524993183300';
export const WHATSAPP_MESSAGE =
  'Olá! Vi a página do Hotelly e quero entender como o modelo de gestão funcionaria na minha hospedagem.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SITE_SAZAO = 'https://sazao.com.br';
export const APP_LOGIN_URL = 'https://adm.hotelly.ia.br';

export const NAV_LINKS = [
  { href: '#o-que-faz', label: 'O que faz' },
  { href: '#como-opera', label: 'Como funciona' },
  { href: '#confianca', label: 'Confiança' },
];
