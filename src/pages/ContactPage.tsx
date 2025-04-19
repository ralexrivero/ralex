import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

// Componente decorativo de blob
const Blob: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute opacity-20 blur-3xl pointer-events-none ${className}`}>
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(300,300)">
        <path d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173,148.1,184C105.8,195,52.9,171.8,-5.4,178.5C-63.8,185.2,-127.5,221.7,-168.3,210.8C-209.1,199.9,-227,141.5,-240.9,84.3C-254.8,27.1,-264.8,-29,-247.2,-72.9C-229.6,-116.8,-184.3,-148.6,-138.7,-163.5C-93.2,-178.4,-47.4,-176.4,-3.2,-171.8C40.9,-167.2,81.8,-160,120,-157.6Z"
          fill="#81B622"/>
      </g>
    </svg>
  </div>
);

// Componente para formulario de contacto
const ContactForm: React.FC = () => {
  const inputClasses = "w-full px-5 py-4 bg-background/20 border border-[#333] rounded-md focus:outline-none focus:ring-1 focus:ring-lime-neon/50 focus:border-[#444] transition-all duration-300 backdrop-blur-sm";

  return (
    <section className="py-12 md:py-20 bg-transparent">
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-5 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-gilroy font-medium text-4xl md:text-5xl text-text-primary leading-tight">
                ¿Hablamos sobre <span className="text-lime-neon">tu proyecto</span>?
              </h2>

              <p className="text-text-secondary text-lg">
                Tanto si tienes un proyecto concreto en mente como si solo quieres consultarme algo técnico o discutir posibilidades de colaboración, estaré encantado de charlar contigo.
              </p>
            </motion.div>

            <div className="space-y-4 lg:space-y-6 pt-2 lg:pt-4">
              <motion.div
                className="flex items-start gap-4 lg:gap-5 p-4 lg:p-5 rounded-xl hover:bg-dark-panel/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-3 lg:p-4 bg-dark-panel rounded-xl text-lime-neon flex-shrink-0 shadow-lg shadow-lime-neon/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gilroy font-medium text-lg lg:text-xl text-text-primary mb-1">Email</h3>
                  <a
                    href="mailto:ralexrivero@gmail.com"
                    className="text-lime-neon hover:underline relative inline-block group text-sm lg:text-base"
                  >
                    ralexrivero@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-neon group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 lg:gap-5 p-4 lg:p-5 rounded-xl hover:bg-dark-panel/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-3 lg:p-4 bg-dark-panel rounded-xl text-lime-neon flex-shrink-0 shadow-lg shadow-lime-neon/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gilroy font-medium text-lg lg:text-xl text-text-primary mb-1">Video llamada</h3>
                  <p className="text-text-secondary text-sm lg:text-base">Agenda una llamada de 30 minutos para discutir tu proyecto.</p>
                  <a
                    href="https://calendly.com/ralexrivero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-neon hover:underline inline-block mt-1 lg:mt-2 group relative text-sm lg:text-base"
                  >
                    Reservar una fecha
                    <span className="ml-1 lg:ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-neon group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 lg:gap-5 p-4 lg:p-5 rounded-xl hover:bg-dark-panel/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="p-4 bg-dark-panel rounded-xl text-lime-neon flex-shrink-0 shadow-lg shadow-lime-neon/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gilroy font-medium text-xl text-text-primary mb-1">Redes sociales</h3>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <a
                      href="https://github.com/ralexrivero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2 px-4 bg-dark-panel hover:bg-[#2c3135] dark:hover:bg-[#2c3135] hover:bg-opacity-80 transition-all duration-300 rounded-xl text-text-primary shadow-lg shadow-black/20 hover:scale-105"
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
                      className="flex items-center py-2 px-4 bg-dark-panel hover:bg-[#0077B5]/20 dark:hover:bg-[#004182] hover:text-[#0077B5] dark:hover:text-white transition-all duration-300 rounded-xl text-text-primary shadow-lg shadow-black/20 hover:scale-105"
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
                      className="flex items-center py-2 px-4 bg-dark-panel hover:bg-[#1DA1F2]/20 dark:hover:bg-[#1a94df] hover:text-[#1DA1F2] dark:hover:text-white transition-all duration-300 rounded-xl text-text-primary shadow-lg shadow-black/20 hover:scale-105"
                    >
                      <span className="mr-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </span>
                      Twitter
                    </a>

                    <a
                      href="https://orcid.org/0009-0000-6824-5934"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2 px-4 bg-dark-panel hover:bg-[#A6CE39]/20 dark:hover:bg-[#A6CE39] hover:text-[#A6CE39] dark:hover:text-white transition-all duration-300 rounded-xl text-text-primary shadow-lg shadow-black/20 hover:scale-105"
                    >
                      <span className="mr-2">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.038 0 4.963 1.719 4.963 5.044 0 3.306-1.925 5.109-4.972 5.109h-3.891V7.416zm1.444 1.303v7.547h2.297c2.319 0 3.694-1.303 3.694-3.787 0-2.456-1.375-3.76-3.76-3.76h-2.307z"/>
                        </svg>
                      </span>
                      ORCID
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="bg-dark-panel/60 backdrop-blur-md border border-[#333] rounded-2xl p-4 md:p-8 shadow-2xl shadow-black/10 relative group"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(129, 182, 34, 0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-neon/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="hidden md:block text-text-primary font-medium text-lg">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      className={inputClasses}
                      placeholder="Nombre"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="hidden md:block text-text-primary font-medium text-lg">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={inputClasses}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="hidden md:block text-text-primary font-medium text-lg">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    className={inputClasses}
                    placeholder="Asunto"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="hidden md:block text-text-primary font-medium text-lg">Mensaje</label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`${inputClasses} resize-none rounded-lg`}
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 bg-white text-black font-normal text-[16px] rounded-full border border-[#333]/10 transition-all duration-300 relative overflow-hidden shadow-sm flex items-center justify-between cursor-pointer group"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Enviar mensaje</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59z"/>
                  </svg>
                </motion.button>

                <p className="text-text-secondary text-sm text-center pt-2">
                  Generalmente respondo dentro de las 24 horas hábiles.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente para mapa de ubicación
const LocationMap: React.FC = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container-main relative z-10">
        <motion.div
          className="text-center mb-12"
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
          className="rounded-2xl overflow-hidden h-[450px] border border-border-gray shadow-2xl shadow-black/20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-lime-neon/10 to-transparent opacity-50 z-10 pointer-events-none"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209703.84072855587!2d-56.3543299459402!3d-34.83381853593409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses-419!2sus!4v1655331518100!5m2!1ses-419!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Montevideo, Uruguay"
            className="relative z-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

// Página completa
const ContactPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Blob className="lg:top-1/2 lg:right-[-30%] lg:-translate-y-1/2 lg:scale-[1.8] lg:opacity-15 top-[85%] right-[-40%] -translate-y-1/2 scale-[1.5] opacity-10" />
        <Blob className="top-[-10%] left-[-20%] scale-125 opacity-10" />
      </div>

      <div className="relative z-10">
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
      </div>
    </div>
  );
};

export default ContactPage;