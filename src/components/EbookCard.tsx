"use client";

import { Ebook } from '@/types';

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  const handleDirectPurchase = () => {
    // Aquí se implementaría la lógica de compra directa
    alert('Funcionalidad de compra directa - Próximamente disponible');
  };

  const handleHotmartPurchase = () => {
    window.open(ebook.hotmartLink, '_blank', 'noopener,noreferrer');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'keto': return 'bg-keto-primary text-white';
      case 'creatividad': return 'bg-keto-secondary text-white';
      case 'idiomas': return 'bg-blue-500 text-white';
      case 'salud': return 'bg-green-500 text-white';
      case 'bienestar': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <img 
          src={ebook.coverImage}
          alt={ebook.title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(ebook.category)}`}>
            {ebook.category.toUpperCase()}
          </span>
        </div>
        {ebook.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-keto-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              DESTACADO
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2 leading-tight">
          {ebook.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {ebook.description}
        </p>

        {/* Book Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{ebook.pages} páginas</span>
          <span>Formato {ebook.format}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ebook.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-keto-primary">
              ${ebook.price}
            </span>
            <span className="text-xs text-gray-500">USD</span>
          </div>
        </div>

        {/* Purchase Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleDirectPurchase}
            className="w-full bg-keto-primary hover:bg-keto-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Comprar Ahora
          </button>
          
          <button
            onClick={handleHotmartPurchase}
            className="w-full border-2 border-keto-secondary text-keto-secondary hover:bg-keto-secondary hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
          >
            Comprar en Hotmart
          </button>
        </div>
      </div>
    </div>
  );
}