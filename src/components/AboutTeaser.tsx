import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-dark-panel"
      aria-label="About teaser section"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Imagen 3D */}
          <motion.div
            className="col-span-1 md:col-span-5 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-border-gray">
              <img
                src="/images/about-3d.png"
                alt="Representación 3D del desarrollador"
                className="w-full h-full object-cover"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="col-span-1 md:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="font-gilroy font-bold text-4xl md:text-5xl mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sobre mí
            </motion.h2>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="font-standerd text-text-secondary text-lg leading-relaxed">
                Soy un desarrollador full‑stack que lleva 15 años optimizando procesos y creando soluciones libres. Mi objetivo es formar a la próxima generación de programadores a través de la transparencia y el conocimiento compartido.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="/about" className="btn-primary inline-flex items-center gap-2">
                Conoce mi historia completa
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;