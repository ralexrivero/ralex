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
                  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <a
                      href="https://github.com/ralexrivero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2 px-4 bg-[#24292E] hover:bg-[#2c3135] transition-colors rounded-lg w-fit text-white"
                    >
                      <span className="mr-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </span>
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ronald-rivero/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2 px-4 bg-[#0A66C2] hover:bg-[#004182] transition-colors rounded-lg w-fit text-white"
                    >
                      <span className="mr-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                        </svg>
                      </span>
                      LinkedIn
                    </a>

                    <a
                      href="https://twitter.com/ralex_uy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2 px-4 bg-[#1DA1F2] hover:bg-[#1a94df] transition-colors rounded-lg w-fit text-white"
                    >
                      <span className="mr-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </span>
                      Twitter
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