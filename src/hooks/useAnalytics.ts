export const useAnalytics = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  };

  const trackConversion = (location: string, planContext?: string) => {
    trackEvent('garantir_atendimento_click', {
      cta_location: location,
      plan_context: planContext,
    });
    
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Atendimento Gratuito',
        content_category: location
      });
    }
  };

  const trackFAQExpand = (question: string) => {
    trackEvent('faq_expand', { question_text: question });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', { section_name: sectionName });
  };

  return { trackEvent, trackConversion, trackFAQExpand, trackSectionView };
};
