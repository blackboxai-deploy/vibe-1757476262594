import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-keto-cream via-white to-keto-cream flex items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-keto-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-keto-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-keto-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforma tu 
                <span className="text-keto-primary block">Vida Keto</span>
                <span className="font-creative text-keto-secondary text-3xl sm:text-4xl lg:text-5xl block -mt-2">
                  con ALMA CREATIVA
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Descubre el poder transformador del estilo de vida cetogénico mientras despiertas tu creatividad interior. 
                Un espacio único donde la nutrición se encuentra con el arte.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-keto-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ebooks Exclusivos</h3>
                  <p className="text-gray-600 text-sm">Guías completas y recursos premium</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-keto-secondary rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tips Diarios</h3>
                  <p className="text-gray-600 text-sm">Contenido fresco sobre salud y creatividad</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-keto-accent rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Comunidad Activa</h3>
                  <p className="text-gray-600 text-sm">Únete a miles de personas transformándose</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enfoque Holístico</h3>
                  <p className="text-gray-600 text-sm">Salud, creatividad e idiomas unidos</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tienda"
                className="bg-keto-primary hover:bg-keto-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Explorar Ebooks
              </Link>
              
              <Link
                href="/blog"
                className="border-2 border-keto-secondary text-keto-secondary hover:bg-keto-secondary hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-center"
              >
                Ver Tips Gratuitos
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Únete a nuestra comunidad en:</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-keto-primary">500+</span>
                  <span className="text-gray-600 text-sm">Seguidores en Instagram</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-keto-secondary">1000+</span>
                  <span className="text-gray-600 text-sm">Miembros en Telegram</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c0f4b1c-a1ce-479c-b137-82f4db6fd743.png"
                alt="Estilo de vida keto saludable y creativo" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-keto-primary">4.9</div>
                <div className="text-xs text-gray-500">Calificación</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-keto-secondary">95%</div>
                <div className="text-xs text-gray-500">Éxito comprobado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}