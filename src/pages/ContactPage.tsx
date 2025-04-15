import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

// Componente para formulario de contacto
const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary">
              ¿Hablamos sobre tu proyecto?
            </h2>

            <p className="text-text-secondary">
              Tanto si tienes un proyecto concreto en mente como si solo quieres consultarme algo técnico o discutir posibilidades de colaboración, estaré encantado de charlar contigo. Siéntete libre de completar el formulario o contactarme directamente.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-panel rounded-lg text-lime-neon flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gilroy font-medium text-xl text-text-primary">Email</h3>
                  <a href="mailto:ralexrivero@gmail.com" className="text-lime-neon hover:underline">ralexrivero@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-panel rounded-lg text-lime-neon flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gilroy font-medium text-xl text-text-primary">Video llamada</h3>
                  <p className="text-text-secondary">Agenda una llamada de 30 minutos para discutir tu proyecto.</p>
                  <a href="https://calendly.com/ralexrivero" target="_blank" rel="noopener noreferrer" className="text-lime-neon hover:underline inline-block mt-1">
                    Reservar una fecha
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-panel rounded-lg text-lime-neon flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gilroy font-medium text-xl text-text-primary">Redes sociales</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="https://github.com/ralexrivero" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-lime-neon transition-colors">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/ronaldrivero" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-lime-neon transition-colors">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/ralexrivero" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-lime-neon transition-colors">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-panel border border-border-gray rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-text-primary font-medium">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-neon focus:border-transparent"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-text-primary font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-neon focus:border-transparent"
                  placeholder="tu.email@ejemplo.com"
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="subject" className="block text-text-primary font-medium">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-background border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-neon focus:border-transparent"
                  placeholder="¿De qué se trata?"
                  required
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="block text-text-primary font-medium">Mensaje</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-neon focus:border-transparent resize-none"
                  placeholder="Cuéntame los detalles de tu proyecto..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 px-6 text-center"
              >
                Enviar mensaje
              </button>

              <p className="text-text-secondary text-sm text-center">
                Generalmente respondo dentro de las 24 horas hábiles.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente para mapa de ubicación
const LocationMap: React.FC = () => {
  return (
    <section className="py-16 bg-dark-panel border-t border-border-gray">
      <div className="container-main">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-4">
            Ubicación
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Aunque trabajo principalmente de forma remota, estoy disponible para reuniones presenciales en el área de Montevideo, Uruguay.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl overflow-hidden h-[400px] border border-border-gray"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209703.84072855587!2d-56.3543299459402!3d-34.83381853593409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses-419!2sus!4v1655331518100!5m2!1ses-419!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Montevideo, Uruguay"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

// Página completa
const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="¿Tienes un proyecto en mente o una consulta técnica? Estoy aquí para ayudarte a materializarlo"
      />
      <ContactForm />
      <LocationMap />
      <ContactCTA
        title="Trabajemos juntos"
        subtitle="El primer paso para crear algo increíble es simplemente comenzar una conversación. ¿Qué te gustaría construir?"
        buttonText="Agendar una llamada"
      />
    </>
  );
};

export default ContactPage;