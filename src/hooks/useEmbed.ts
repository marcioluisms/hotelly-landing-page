import { useMemo } from 'react';

/**
 * Detects ?embed=true in URL. Used to hide chrome (header, footer, sidebar, chat)
 * when the Help Center is loaded inside the dashboard iframe.
 */
export function useEmbed(): boolean {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('embed') === 'true';
  }, []);
}
