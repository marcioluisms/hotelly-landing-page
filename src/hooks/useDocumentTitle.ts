import { useLayoutEffect } from 'react';

/**
 * Sets document.title via useLayoutEffect (before browser paint).
 *
 * Unlike react-helmet-async's <title> element (which React 19 hoists to
 * <head> as a NEW element, causing a flash), this hook modifies the
 * existing <title> in place — preserving the pre-rendered title until
 * the new value is ready.
 */
export function useDocumentTitle(title: string) {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
}
