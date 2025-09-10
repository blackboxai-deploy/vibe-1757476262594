export interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'keto' | 'salud' | 'idiomas' | 'creatividad' | 'bienestar';
  coverImage: string;
  hotmartLink: string;
  featured: boolean;
  tags: string[];
  pages: number;
  format: 'PDF' | 'EPUB';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'keto' | 'salud' | 'idiomas' | 'creatividad' | 'bienestar' | 'recursos';
  featuredImage: string;
  publishDate: string;
  readTime: number;
  featured: boolean;
  tags: string[];
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: 'telegram' | 'instagram' | 'facebook' | 'tiktok';
  url: string;
  label: string;
}

export type Category = 'keto' | 'salud' | 'idiomas' | 'creatividad' | 'bienestar' | 'recursos';

export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}