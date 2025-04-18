import React from 'react';
import { motion } from 'framer-motion';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "¿Listo para colaborar?",
  subtitle = "Si estás buscando un desarrollador apasionado por construir soluciones técnicamente sólidas que también generen impacto, hablemos.",
  buttonText = "Contactar ahora"
}) => {
  return (
    <section className="py-16 bg-dark-panel">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-text-secondary text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:ralexrivero@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              {buttonText}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;