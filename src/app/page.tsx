import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import EbookCard from '@/components/EbookCard';
import BlogCard from '@/components/BlogCard';
import { ebooks, blogPosts } from '@/lib/data';

export default function HomePage() {
  const featuredEbooks = ebooks.filter(ebook => ebook.featured).slice(0, 3);
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Ebooks Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ebooks Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre nuestras guías más populares para transformar tu estilo de vida y despertar tu creatividad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredEbooks.map((ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tienda"
                className="inline-flex items-center bg-keto-primary hover:bg-keto-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Todos los Ebooks
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts Section */}
        <section className="py-20 bg-gradient-to-br from-keto-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tips y Contenido Exclusivo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mantente actualizado con nuestros últimos consejos sobre salud, creatividad, idiomas y bienestar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center border-2 border-keto-secondary text-keto-secondary hover:bg-keto-secondary hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200"
              >
                Leer Más Tips
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter/Community Section */}
        <section className="py-20 bg-gradient-to-br from-keto-primary to-keto-primary/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Recibe contenido exclusivo, tips diarios y sé parte de una comunidad que está transformando su vida
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://t.me/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-6 transition-colors duration-200"
              >
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                <p className="text-sm opacity-90">Tips diarios y contenido exclusivo</p>
              </a>

              <a
                href="https://instagram.com/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-6 transition-colors duration-200"
              >
                <div className="text-2xl mb-2">📸</div>
                <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                <p className="text-sm opacity-90">Inspiración visual y recetas</p>
              </a>
            </div>

            <div className="mt-12">
              <Link
                href="/contacto"
                className="inline-flex items-center bg-white text-keto-primary hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Contacta Conmigo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}