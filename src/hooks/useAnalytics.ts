export const useAnalytics = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  };

  /**
   * Métrica-norte da página: conversas iniciadas no WhatsApp.
   * `location` identifica o bloco de origem (header, hero, contato, footer).
   */
  const trackWhatsAppClick = (location: string) => {
    trackEvent('whatsapp_click', { cta_location: location });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', { section_name: sectionName });
  };

  return { trackEvent, trackWhatsAppClick, trackSectionView };
};
