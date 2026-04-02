import { useState, useCallback, useRef } from 'react';
import { useAnalytics } from './useAnalytics';
import type { PlanSlug, ModalSource, ModalStatus } from '../components/checkout/checkout.types';

const API_URL = import.meta.env.VITE_HOTELLY_API_URL || '';
const FEATURE_ENABLED = import.meta.env.VITE_ENABLE_CHECKOUT_MODAL === 'true';

interface CheckoutForm {
  email: string;
  propertyName: string;
}

interface UseCheckoutModalReturn {
  isOpen: boolean;
  isEnabled: boolean;
  plan: PlanSlug;
  source: ModalSource;
  status: ModalStatus;
  errorMessage: string;
  openModal: (plan: PlanSlug, source: ModalSource) => void;
  closeModal: (method: 'escape' | 'backdrop' | 'button') => void;
  submitCheckout: (form: CheckoutForm) => Promise<void>;
}

export function useCheckoutModal(): UseCheckoutModalReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<PlanSlug>('starter');
  const [source, setSource] = useState<ModalSource>('hero');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const openedAt = useRef(0);
  const { trackEvent } = useAnalytics();

  const openModal = useCallback((p: PlanSlug, s: ModalSource) => {
    if (!FEATURE_ENABLED) return;
    setPlan(p);
    setSource(s);
    setStatus('idle');
    setErrorMessage('');
    setIsOpen(true);
    openedAt.current = Date.now();
    trackEvent('checkout_modal_open', { plan: p, source_section: s });
  }, [trackEvent]);

  const closeModal = useCallback((method: 'escape' | 'backdrop' | 'button') => {
    const timeInModal = Date.now() - openedAt.current;
    trackEvent('checkout_modal_close', { plan, method, time_in_modal_ms: timeInModal });
    setIsOpen(false);
    setStatus('idle');
    setErrorMessage('');
  }, [plan, trackEvent]);

  const submitCheckout = useCallback(async (form: CheckoutForm) => {
    setStatus('validating');
    setErrorMessage('');

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }
    if (form.propertyName.trim().length < 2) {
      setStatus('error');
      setErrorMessage('O nome da hospedagem deve ter pelo menos 2 caracteres.');
      return;
    }
    if (form.propertyName.trim().length > 100) {
      setStatus('error');
      setErrorMessage('O nome da hospedagem deve ter no máximo 100 caracteres.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch(`${API_URL}/public/checkout/create-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          email: form.email.trim().toLowerCase(),
          property_name: form.propertyName.trim(),
          utm: {
            source: 'landing_page',
            medium: 'cta',
            content: source,
          },
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || 'Erro ao criar sessão de pagamento.');
      }

      const data = await res.json();
      const timeInModal = Date.now() - openedAt.current;
      trackEvent('checkout_modal_confirm', { plan, time_in_modal_ms: timeInModal });

      // Redirect to Stripe Checkout
      window.location.href = data.checkout_url;
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Erro inesperado. Tente novamente em alguns instantes.');
    }
  }, [plan, source, trackEvent]);

  return {
    isOpen,
    isEnabled: FEATURE_ENABLED,
    plan,
    source,
    status,
    errorMessage,
    openModal,
    closeModal,
    submitCheckout,
  };
}
