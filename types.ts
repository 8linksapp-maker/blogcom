export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export interface SEOMeta {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}