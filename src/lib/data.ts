import { Ebook, BlogPost, SocialLink, NavItem } from '@/types';

export const navigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Tienda', href: '/tienda' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre Mí', href: '/sobre-mi' },
  { label: 'Contacto', href: '/contacto' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'telegram',
    url: 'https://t.me/mividaketoalmacreativa',
    label: 'Telegram'
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/mividaketoalmacreativa',
    label: 'Instagram'
  },
  {
    platform: 'facebook',
    url: 'https://facebook.com/mividaketoalmacreativa',
    label: 'Facebook'
  },
  {
    platform: 'tiktok',
    url: 'https://tiktok.com/@mividaketoalmacreativa',
    label: 'TikTok'
  },
];

export const ebooks: Ebook[] = [
  {
    id: '1',
    title: 'Guía Completa del Estilo de Vida Keto',
    description: 'Descubre cómo transformar tu salud y energía con el protocolo keto paso a paso. Incluye recetas, planes de comida y tips para mantener la cetosis.',
    price: 29.99,
    category: 'keto',
    coverImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8d14986-cbda-41f9-a660-3ad2447a261c.png',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/guia-keto-completa',
    featured: true,
    tags: ['keto', 'nutrición', 'recetas', 'salud'],
    pages: 120,
    format: 'PDF'
  },
  {
    id: '2',
    title: 'Creatividad Sin Límites: Despertar tu Alma Artística',
    description: 'Un viaje de autodescubrimiento creativo que combina técnicas artísticas con desarrollo personal para liberar tu potencial creativo.',
    price: 24.99,
    category: 'creatividad',
    coverImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/292ed1de-8d85-4f81-b33e-68317467951d.png',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/creatividad-sin-limites',
    featured: true,
    tags: ['creatividad', 'arte', 'desarrollo personal'],
    pages: 95,
    format: 'PDF'
  },
  {
    id: '3',
    title: 'Inglés Keto: Aprende Idiomas con Estilo de Vida Saludable',
    description: 'Método innovador que combina el aprendizaje del inglés con conceptos de nutrición y bienestar para una experiencia educativa integral.',
    price: 34.99,
    category: 'idiomas',
    coverImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3154e54-33b0-4c16-9310-8fa840cc2d4a.png',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/ingles-keto',
    featured: false,
    tags: ['inglés', 'idiomas', 'salud', 'método'],
    pages: 150,
    format: 'PDF'
  },
  {
    id: '4',
    title: 'Bienestar Integral: Mente, Cuerpo y Alma',
    description: 'Enfoque holístico para alcanzar el equilibrio perfecto entre salud física, mental y espiritual con técnicas probadas.',
    price: 27.99,
    category: 'bienestar',
    coverImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4979feaf-595f-4a12-b88b-f2768ab3afa9.png',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/bienestar-integral',
    featured: false,
    tags: ['bienestar', 'meditación', 'salud', 'equilibrio'],
    pages: 88,
    format: 'PDF'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Mitos del Keto que Debes Conocer',
    excerpt: 'Desmitificamos las creencias más comunes sobre el estilo de vida cetogénico y te damos la información real basada en ciencia.',
    content: 'Contenido completo del post...',
    category: 'keto',
    featuredImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c21f5be5-f644-4037-8e45-30b858ad288b.png',
    publishDate: '2024-01-15',
    readTime: 8,
    featured: true,
    tags: ['keto', 'mitos', 'ciencia', 'nutrición'],
    author: 'Mi Vida Keto ALMA CREATIVA'
  },
  {
    id: '2',
    title: 'Despertar la Creatividad: Técnicas Diarias',
    excerpt: 'Rutinas simples y efectivas para mantener tu creatividad activa cada día y desarrollar tu potencial artístico al máximo.',
    content: 'Contenido completo del post...',
    category: 'creatividad',
    featuredImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65655dd0-7160-474d-9003-904209b59e75.png',
    publishDate: '2024-01-12',
    readTime: 6,
    featured: true,
    tags: ['creatividad', 'rutinas', 'arte', 'desarrollo'],
    author: 'Mi Vida Keto ALMA CREATIVA'
  },
  {
    id: '3',
    title: 'Aprender Inglés Mientras Cocinas Keto',
    excerpt: 'Método práctico para combinar el aprendizaje del inglés con la preparación de deliciosas recetas cetogénicas.',
    content: 'Contenido completo del post...',
    category: 'idiomas',
    featuredImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/796f431f-d66d-4a72-8171-1277bec65e67.png',
    publishDate: '2024-01-10',
    readTime: 10,
    featured: false,
    tags: ['inglés', 'keto', 'cocina', 'aprendizaje'],
    author: 'Mi Vida Keto ALMA CREATIVA'
  },
  {
    id: '4',
    title: 'Bienestar Mental en la Era Digital',
    excerpt: 'Estrategias para mantener la salud mental y encontrar equilibrio en un mundo cada vez más conectado digitalmente.',
    content: 'Contenido completo del post...',
    category: 'bienestar',
    featuredImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd164dad-62c4-4bcb-84a6-fb93193ea7d3.png',
    publishDate: '2024-01-08',
    readTime: 7,
    featured: true,
    tags: ['bienestar', 'mental', 'digital', 'equilibrio'],
    author: 'Mi Vida Keto ALMA CREATIVA'
  }
];

export const categories = [
  { id: 'keto', name: 'Vida Keto', emoji: '🥑', color: 'bg-keto-primary' },
  { id: 'salud', name: 'Salud', emoji: '🌱', color: 'bg-green-500' },
  { id: 'creatividad', name: 'Creatividad', emoji: '🎨', color: 'bg-keto-secondary' },
  { id: 'idiomas', name: 'Idiomas', emoji: '🗣️', color: 'bg-blue-500' },
  { id: 'bienestar', name: 'Bienestar', emoji: '✨', color: 'bg-purple-500' },
  { id: 'recursos', name: 'Recursos', emoji: '📚', color: 'bg-keto-accent' },
] as const;