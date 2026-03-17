import frontMatter from 'front-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lastUpdated?: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  coverImage: string;
  content: string;
  relatedPosts?: string[];
}

// @ts-ignore: Vite specific import.meta.glob
const markdownFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path] as string;
    const { attributes, body } = frontMatter<any>(rawContent);
    
    // Extract slug from filename if not provided in frontmatter
    const filename = path.split('/').pop()?.replace('.md', '') || '';
    const slug = attributes.slug || filename;

    posts.push({
      ...attributes,
      slug,
      content: body,
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slugs?: string[]): BlogPost[] {
  if (!slugs || slugs.length === 0) return [];
  const posts = getAllPosts();
  return posts.filter(post => slugs.includes(post.slug));
}
