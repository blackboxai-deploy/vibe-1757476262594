"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts, categories } from '@/lib/data';
import { Category } from '@/types';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-keto-cream via-white to-keto-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog &
              <span className="text-keto-secondary font-creative"> Tips</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre consejos únicos sobre estilo de vida keto, creatividad, idiomas y bienestar. 
              Contenido fresco para transformar tu vida cada día.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Buscar posts..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-keto-primary focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-keto-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as Category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-keto-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.emoji} {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
                ✨ Posts Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 bg-gradient-to-br from-white to-keto-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {regularPosts.length > 0 ? (
              <>
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                    {featuredPosts.length > 0 ? 'Más Posts' : 'Todos los Posts'}
                  </h2>
                  <p className="text-gray-600">
                    Mostrando {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'all' && (
                      <span> en la categoría &ldquo;{categories.find(c => c.id === selectedCategory)?.name}&rdquo;</span>
                    )}
                    {searchTerm && (
                      <span> para &ldquo;{searchTerm}&rdquo;</span>
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            ) : (
              !featuredPosts.length && (
                <div className="text-center py-20">
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3v9m0-9h6m-6 0a2 2 0 00-2 2v9a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2h-6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron posts</h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm ? 'Intenta con otros términos de búsqueda' : 'No hay posts disponibles en esta categoría'}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                    }}
                    className="text-keto-primary hover:text-keto-secondary font-medium"
                  >
                    Ver todos los posts
                  </button>
                </div>
              )
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-keto-secondary to-keto-secondary/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              ¿Te gusta nuestro contenido?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Únete a nuestra comunidad y recibe tips exclusivos directamente en tu dispositivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-3 px-6 transition-colors duration-200"
              >
                📱 Síguenos en Telegram
              </a>
              <a
                href="https://instagram.com/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-keto-secondary hover:bg-gray-50 rounded-xl py-3 px-6 font-semibold transition-colors duration-200"
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}