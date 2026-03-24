import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

export default function LazySection({ 
  children, 
  minHeight = '50vh', 
  rootMargin = '300px',
  fallback = <div className="bg-brand-navy" style={{ minHeight }} />
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Falha gracefully em navegadores antigos (se aplicável), carregando imediatamente
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : fallback}
    </div>
  );
}
