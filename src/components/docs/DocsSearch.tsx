import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Fuse from 'fuse.js';
import { getAllDocs, type DocArticle } from '../../utils/docs';

const CATEGORY_LABELS: Record<string, string> = {
  'primeiros-passos': 'Primeiros Passos',
  'reservas': 'Reservas',
  'concierge-ia': 'Concierge IA',
  'copilot': 'Copilot',
  'precificacao': 'Precificação',
  'financeiro': 'Financeiro',
  'governanca': 'Governança',
  'checkin-digital': 'Check-in Digital',
  'configuracoes': 'Configurações',
  'glossario': 'Glossário',
  'faq': 'FAQ',
  'legal-compliance': 'Legal / Compliance',
  'guias-por-perfil': 'Guias por Perfil',
};

export default function DocsSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const docs = useMemo(() => getAllDocs(), []);

  const fuse = useMemo(
    () =>
      new Fuse(docs, {
        keys: [
          { name: 'titulo', weight: 3 },
          { name: 'descricao', weight: 2 },
          { name: 'content', weight: 1 },
        ],
        threshold: 0.3,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [docs]
  );

  const results = useMemo(() => {
    if (query.length < 2) return [];
    return fuse.search(query, { limit: 10 });
  }, [fuse, query]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(doc: DocArticle) {
    setQuery('');
    setIsOpen(false);
    navigate(`/ajuda/${doc.categoria}/${doc.slug}`);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar na Central de Ajuda..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full bg-brand-slate/50 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-amber/50 focus:ring-1 focus:ring-brand-amber/25 transition-all text-lg"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-brand-slate border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 max-h-[400px] overflow-y-auto">
          {results.map(({ item }) => (
            <button
              key={`${item.categoria}/${item.slug}`}
              onClick={() => handleSelect(item)}
              className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
            >
              <p className="text-white font-medium text-sm line-clamp-1">{item.titulo}</p>
              <p className="text-white/40 text-xs mt-0.5">
                {CATEGORY_LABELS[item.categoria] || item.categoria}
              </p>
              {item.descricao && (
                <p className="text-white/50 text-xs mt-1 line-clamp-1">{item.descricao}</p>
              )}
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-brand-slate border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-4 z-50">
          <p className="text-white/50 text-sm text-center">Nenhum resultado encontrado</p>
        </div>
      )}
    </div>
  );
}
