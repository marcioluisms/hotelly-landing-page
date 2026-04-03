import { useEffect, useRef, useCallback } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact';
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export default function TurnstileWidget({ onVerify, onError, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: onVerify,
      'error-callback': onError,
      'expired-callback': onExpire,
      theme: 'dark',
      size: 'normal',
    });
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    // If turnstile is already loaded, render immediately
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Otherwise wait for it to load
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval);
        renderWidget();
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  if (!SITE_KEY) return null;

  return <div ref={containerRef} className="flex justify-center" />;
}
