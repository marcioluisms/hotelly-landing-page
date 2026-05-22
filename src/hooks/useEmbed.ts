import { useMemo } from 'react';

/**
 * Detects ?embed=true in URL. Used to hide chrome (header, footer, sidebar, chat)
 * when the Help Center is loaded inside the dashboard iframe.
 *
 * SSR-safe: returns false during server render (no window). The client will
 * re-evaluate during hydration; if URL has ?embed=true the chrome will hide
 * after first paint (acceptable tradeoff — embed is a non-SEO path).
 */
export function useEmbed(): boolean {
  return useMemo(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('embed') === 'true';
  }, []);
}
