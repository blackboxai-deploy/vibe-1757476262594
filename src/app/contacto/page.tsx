import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { socialLinks } from '@/lib/data';

export default function ContactoPage() {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'telegram':
        return '📱';
      case 'instagram':
        return '📸';
      case 'facebook':
        return '👥';
      case 'tiktok':
        return '🎵';
      default:
        return '🔗';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-keto-cream via-white to-keto-cream py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conectemos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes preguntas sobre el estilo de vida keto? ¿Quieres colaborar? 
              ¿Necesitas coaching personalizado? Estoy aquí para ayudarte en tu viaje de transformación.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
                  Envíame un Mensaje
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
                    Otras Formas de Contacto
                  </h2>
                  
                  <div className="space-y-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-4 p-4 bg-gray-50 hover:bg-keto-cream/50 rounded-xl transition-colors duration-200 group"
                      >
                        <div className="flex-shrink-0 text-2xl">
                          {getSocialIcon(social.platform)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-keto-primary transition-colors duration-200">
                            {social.label}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {social.platform === 'telegram' && 'Para consultas rápidas y tips diarios'}
                            {social.platform === 'instagram' && 'Inspiración visual y recetas'}
                            {social.platform === 'facebook' && 'Comunidad y discusiones'}
                            {social.platform === 'tiktok' && 'Videos cortos y entretenimiento'}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-keto-primary/10 to-keto-secondary/10 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    ⏰ Tiempo de Respuesta
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Formulario de contacto:</strong> 24-48 horas</p>
                    <p><strong>Telegram:</strong> Algunas horas (consultas rápidas)</p>
                    <p><strong>Instagram DM:</strong> 1-2 días</p>
                    <p><strong>Coaching personalizado:</strong> Agenda una cita previa</p>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    ❓ Preguntas Frecuentes
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">¿Ofreces coaching personalizado?</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Sí, ofrezco sesiones de coaching para transformación keto y desarrollo creativo.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">¿Los ebooks tienen garantía?</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Todos mis ebooks tienen garantía de satisfacción de 30 días.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">¿Aceptas colaboraciones?</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Estoy abierta a colaboraciones que se alineen con mis valores de salud y creatividad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="py-20 bg-gradient-to-br from-keto-secondary to-keto-secondary/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold mb-6">
              Mientras Esperas mi Respuesta...
            </h2>
            <p className="text-lg mb-8 opacity-90">
              ¡Únete a nuestra comunidad activa! Comparto tips diarios, recetas exclusivas 
              y contenido motivacional que te ayudará en tu transformación.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://t.me/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-6 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-lg mb-2">Canal de Telegram</h3>
                <p className="text-sm opacity-90">Tips diarios y respuestas rápidas</p>
              </a>

              <a
                href="https://instagram.com/mividaketoalmacreativa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-6 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">📸</div>
                <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                <p className="text-sm opacity-90">Inspiración visual y recetas</p>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm opacity-75">
                ¡Más de 1,500 personas ya están transformando su vida con nosotros!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}