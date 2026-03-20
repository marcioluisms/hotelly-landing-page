import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Menu, X, Rocket, CalendarCheck, MessageCircle, Bot, DollarSign, BarChart3, Sparkles, Smartphone, Settings, BookOpen, HelpCircle, FileText, Users } from 'lucide-react';
import { getCategories, type DocCategory } from '../../utils/docs';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'primeiros-passos': Rocket,
  'reservas': CalendarCheck,
  'concierge-ia': MessageCircle,
  'copilot': Bot,
  'precificacao': DollarSign,
  'financeiro': BarChart3,
  'governanca': Sparkles,
  'checkin-digital': Smartphone,
  'configuracoes': Settings,
  'glossario': BookOpen,
  'faq': HelpCircle,
  'legal-compliance': FileText,
  'guias-por-perfil': Users,
};

export default function DocsSidebar() {
  const { categoria } = useParams<{ categoria: string }>();
  const categories = getCategories();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-20 left-4 z-40 bg-brand-amber text-brand-navy p-3 rounded-full shadow-lg shadow-brand-amber/20"
        aria-label="Abrir menu de categorias"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 lg:top-32 left-0 z-50 lg:z-0
          h-full lg:h-auto w-72 lg:w-60 xl:w-72
          bg-brand-navy lg:bg-transparent
          border-r border-white/10 lg:border-r-0
          p-6 lg:p-0
          overflow-y-auto lg:overflow-y-visible
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Mobile close */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-white/60 hover:text-white"
          aria-label="Fechar menu"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4 lg:mt-0 mt-8">
          Categorias
        </h3>

        <nav className="space-y-1">
          {categories.map((cat: DocCategory) => {
            const Icon = CATEGORY_ICONS[cat.slug] || HelpCircle;
            const isActive = categoria === cat.slug;

            return (
              <Link
                key={cat.slug}
                to={`/ajuda/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-brand-amber/10 text-brand-amber border border-brand-amber/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="flex-grow">{cat.label}</span>
                <span className={`text-xs ${isActive ? 'text-brand-amber/70' : 'text-white/30'}`}>
                  {cat.count}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
