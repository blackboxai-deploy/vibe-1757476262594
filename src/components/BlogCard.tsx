import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'keto': return 'bg-keto-primary text-white';
      case 'creatividad': return 'bg-keto-secondary text-white';
      case 'idiomas': return 'bg-blue-500 text-white';
      case 'salud': return 'bg-green-500 text-white';
      case 'bienestar': return 'bg-purple-500 text-white';
      case 'recursos': return 'bg-keto-accent text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        <img 
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
            {post.category.toUpperCase()}
          </span>
        </div>
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-keto-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              DESTACADO
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <time dateTime={post.publishDate}>
            {formatDate(post.publishDate)}
          </time>
          <span>{post.readTime} min de lectura</span>
        </div>

        <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-keto-primary transition-colors duration-200">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Link 
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-keto-primary hover:text-keto-secondary font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
        >
          Leer más
          <svg 
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>

        {/* Author */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Por <span className="font-semibold text-gray-700">{post.author}</span>
          </p>
        </div>
      </div>
    </article>
  );
}