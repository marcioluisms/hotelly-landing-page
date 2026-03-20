import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  categorySlug?: string;
  categoryLabel?: string;
  articleTitle?: string;
}

export default function DocsBreadcrumb({ categorySlug, categoryLabel, articleTitle }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-8 flex-wrap">
      <Link to="/ajuda" className="hover:text-brand-amber transition-colors">
        Ajuda
      </Link>
      {categorySlug && categoryLabel && (
        <>
          <ChevronRight className="w-3.5 h-3.5" />
          {articleTitle ? (
            <Link to={`/ajuda/${categorySlug}`} className="hover:text-brand-amber transition-colors">
              {categoryLabel}
            </Link>
          ) : (
            <span className="text-white/80">{categoryLabel}</span>
          )}
        </>
      )}
      {articleTitle && (
        <>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/80 line-clamp-1">{articleTitle}</span>
        </>
      )}
    </nav>
  );
}
