import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SobreMiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-keto-cream via-white to-keto-cream py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hola, soy el alma detrás de
              <span className="text-keto-primary block mt-2">Mi Vida Keto</span>
              <span className="font-creative text-keto-secondary text-3xl block -mt-2">ALMA CREATIVA</span>
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49b10957-0adf-4185-9aa0-32cced5f0177.png"
                    alt="Mi Vida Keto ALMA CREATIVA - Sobre mí" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 bg-keto-secondary rounded-full p-4 shadow-lg">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-keto-primary rounded-full p-4 shadow-lg">
                  <span className="text-2xl">🥑</span>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                    Mi Historia de Transformación
                  </h2>
                  
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                      Mi viaje comenzó como el de muchas personas: buscando una forma de vida más saludable, 
                      auténtica y plena. Lo que no sabía era que el estilo de vida keto se convertiría en 
                      mucho más que una forma de alimentarme.
                    </p>
                    
                    <p>
                      A través de mi transformación personal, descubrí que cuando nutrimos nuestro cuerpo 
                      correctamente, también liberamos nuestra creatividad, mejoramos nuestra capacidad de 
                      aprendizaje y encontramos un equilibrio que antes parecía imposible.
                    </p>
                    
                    <p>
                      Así nació <strong className="text-keto-primary">Mi Vida Keto ALMA CREATIVA</strong>: 
                      un espacio donde comparto no solo recetas y tips nutricionales, sino también técnicas 
                      de desarrollo creativo, métodos de aprendizaje de idiomas y estrategias de bienestar 
                      integral.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-keto-cream/50 rounded-xl">
                    <div className="text-2xl mb-2">💪</div>
                    <h3 className="font-semibold text-gray-900">Transformación</h3>
                    <p className="text-sm text-gray-600">Cambio real y duradero</p>
                  </div>
                  <div className="text-center p-4 bg-keto-cream/50 rounded-xl">
                    <div className="text-2xl mb-2">🎯</div>
                    <h3 className="font-semibold text-gray-900">Autenticidad</h3>
                    <p className="text-sm text-gray-600">Contenido genuino y honesto</p>
                  </div>
                  <div className="text-center p-4 bg-keto-cream/50 rounded-xl">
                    <div className="text-2xl mb-2">🌱</div>
                    <h3 className="font-semibold text-gray-900">Crecimiento</h3>
                    <p className="text-sm text-gray-600">Evolución constante</p>
                  </div>
                  <div className="text-center p-4 bg-keto-cream/50 rounded-xl">
                    <div className="text-2xl mb-2">❤️</div>
                    <h3 className="font-semibold text-gray-900">Comunidad</h3>
                    <p className="text-sm text-gray-600">Apoyo mutuo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-keto-cream to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Mi Misión
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Ayudar a personas como tú a descubrir que la transformación integral es posible. 
              Que podemos ser saludables, creativos, prósperos y felices al mismo tiempo. 
              Que no tenemos que elegir entre cuidar nuestro cuerpo o nutrir nuestra alma.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🥑</div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Nutrición Consciente
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enseñar el estilo de vida keto como una herramienta de bienestar integral, 
                  no solo una dieta temporal.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Creatividad Liberada
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Despertar el potencial creativo que todos llevamos dentro y canalizarlo 
                  hacia nuestros sueños y proyectos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Crecimiento Integral
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fomentar el desarrollo personal a través del aprendizaje de idiomas, 
                  habilidades y nuevas perspectivas de vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-16">
              Mi Viaje
            </h2>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-keto-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                    El Despertar Keto (2020)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Decidí cambiar mi alimentación y descubrí el poder transformador del estilo de vida cetogénico. 
                    No solo perdí peso, sino que gané energía, claridad mental y una nueva perspectiva de la salud.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-keto-secondary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                    La Conexión Creativa (2021)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Noté que mi creatividad se había disparado. Comencé a explorar el arte, la escritura y 
                    diferentes formas de expresión. Entendí que la nutrición y la creatividad están profundamente conectadas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-keto-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                    Compartir el Conocimiento (2022-2023)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comencé a documentar mi experiencia y a crear contenido. Me di cuenta de que mi historia 
                    podía inspirar a otros a comenzar su propia transformación.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                    Mi Vida Keto ALMA CREATIVA (2024)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lancé esta plataforma integral donde comparto ebooks, tips y recursos para ayudar a otros 
                    a vivir una vida más saludable, creativa y plena. Este es solo el comienzo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect CTA */}
        <section className="py-20 bg-gradient-to-r from-keto-primary to-keto-primary/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold mb-6">
              ¿Quieres ser parte de esta historia?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tu transformación puede comenzar hoy. Únete a nuestra comunidad y descubre 
              todo lo que puedes lograr cuando nutres tu cuerpo y liberas tu creatividad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tienda"
                className="bg-white text-keto-primary hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explorar Ebooks
              </Link>
              
              <Link
                href="/contacto"
                className="border-2 border-white text-white hover:bg-white hover:text-keto-primary font-semibold py-3 px-8 rounded-xl transition-all duration-200"
              >
                Conectemos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}