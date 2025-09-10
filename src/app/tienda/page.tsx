"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EbookCard from '@/components/EbookCard';
import { ebooks, categories } from '@/lib/data';
import { Category } from '@/types';

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesCategory = selectedCategory === 'all' || ebook.category === selectedCategory;
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-keto-cream via-white to-keto-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tienda de 
              <span className="text-keto-primary"> Ebooks</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestras guías completas para transformar tu estilo de vida keto, 
              despertar tu creatividad y alcanzar el bienestar integral
            </p>
          </div>
        </section>

        {/* Filters Section */}
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
                  placeholder="Buscar ebooks..."
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

        {/* Ebooks Grid */}
        <section className="py-16 bg-gradient-to-br from-white to-keto-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEbooks.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-gray-600">
                    Mostrando {filteredEbooks.length} ebook{filteredEbooks.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'all' && (
                      <span> en la categoría &ldquo;{categories.find(c => c.id === selectedCategory)?.name}&rdquo;</span>
                    )}
                    {searchTerm && (
                      <span> para &ldquo;{searchTerm}&rdquo;</span>
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEbooks.map((ebook) => (
                    <EbookCard key={ebook.id} ebook={ebook} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="mb-4">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron ebooks</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm ? 'Intenta con otros términos de búsqueda' : 'No hay ebooks disponibles en esta categoría'}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="text-keto-primary hover:text-keto-secondary font-medium"
                >
                  Ver todos los ebooks
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-keto-primary to-keto-primary/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contáctame para sugerencias de nuevos ebooks o contenido personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-3 px-6 transition-colors duration-200"
              >
                📱 Escríbeme por Telegram
              </a>
              <a
                href="/contacto"
                className="bg-white text-keto-primary hover:bg-gray-50 rounded-xl py-3 px-6 font-semibold transition-colors duration-200"
              >
                ✉️ Formulario de Contacto
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}