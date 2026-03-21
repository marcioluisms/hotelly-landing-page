import frontMatter from 'front-matter';

export interface DocArticle {
  slug: string;
  titulo: string;
  modulo: string;        // frontmatter field (product module)
  categoria: string;     // folder-based category (used for routing)
  perfil: string[];
  nivel: string;
  tipo: string;          // "como-fazer", "conceito", "troubleshooting", "guia"
  helpArticleId: string;
  descricao: string;
  content: string;
}

export interface DocCategory {
  slug: string;
  label: string;
  count: number;
}

// Map category slugs to human-readable labels
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

// Category display order
const CATEGORY_ORDER = [
  'primeiros-passos',
  'reservas',
  'concierge-ia',
  'copilot',
  'precificacao',
  'financeiro',
  'governanca',
  'checkin-digital',
  'configuracoes',
  'guias-por-perfil',
  'faq',
  'glossario',
  'legal-compliance',
];

// @ts-ignore: Vite specific import.meta.glob
const markdownFiles = import.meta.glob('../content/docs/**/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllDocs(): DocArticle[] {
  const docs: DocArticle[] = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path] as string;

    // Skip files starting with uppercase (TEMPLATE, PEDIDO, etc.)
    const filename = path.split('/').pop() || '';
    if (filename[0] === filename[0].toUpperCase() && filename[0] !== filename[0].toLowerCase()) {
      continue;
    }

    const { attributes, body } = frontMatter<any>(rawContent);

    // Extract category from folder: ../content/docs/reservas/file.md -> "reservas"
    const parts = path.split('/');
    const categoria = parts[parts.length - 2] || '';

    const slug = filename.replace('.md', '');

    docs.push({
      slug,
      titulo: attributes['título'] || attributes.titulo || slug,
      modulo: attributes['módulo'] || attributes.modulo || categoria,
      categoria,
      perfil: attributes.perfil || [],
      nivel: attributes['nível'] || attributes.nivel || 'básico',
      tipo: attributes.tipo || 'conceito',
      helpArticleId: attributes.helpArticleId || '',
      descricao: attributes['descrição'] || attributes.descricao || '',
      content: body.replace(/^#\s+.+\n+/, ''),
    });
  }

  // Sort by titulo alphabetically
  return docs.sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'));
}

export function getDocsByCategory(categoria: string): DocArticle[] {
  return getAllDocs().filter((doc) => doc.categoria === categoria);
}

export function getDocBySlug(categoria: string, slug: string): DocArticle | undefined {
  return getAllDocs().find((doc) => doc.categoria === categoria && doc.slug === slug);
}

export function getCategories(): DocCategory[] {
  const docs = getAllDocs();
  const categoryMap = new Map<string, number>();

  for (const doc of docs) {
    categoryMap.set(doc.categoria, (categoryMap.get(doc.categoria) || 0) + 1);
  }

  const categories: DocCategory[] = [];
  for (const [slug, count] of categoryMap) {
    categories.push({
      slug,
      label: CATEGORY_LABELS[slug] || slug,
      count,
    });
  }

  // Sort by predefined order
  return categories.sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.slug);
    const bi = CATEGORY_ORDER.indexOf(b.slug);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}

export function getRelatedDocs(categoria: string, currentSlug: string, limit = 3): DocArticle[] {
  return getDocsByCategory(categoria)
    .filter((doc) => doc.slug !== currentSlug)
    .slice(0, limit);
}
