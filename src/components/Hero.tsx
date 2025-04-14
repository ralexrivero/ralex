import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Animación para el grid de fondo
  useEffect(() => {
    // Esto sería para una animación más compleja en un caso real
    const grid = heroRef.current;
    if (!grid) return;

    // Aquí podrías agregar lógica de animación adicional si fuera necesario
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Sección principal"
    >
      {/* Fondo con grid y blob */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20"></div>
          ))}
        </div>
        <div className="absolute right-0 top-1/4 w-2/3 h-2/3 bg-gradient-to-br from-ralex-blue/30 to-lime-neon/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-24 lg:py-[96px]">
        {/* Textos y CTA - ocupan 7 columnas en desktop */}
        <motion.div
          className="col-span-1 lg:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            className="font-gilroy font-bold text-5xl sm:text-6xl lg:text-h1 text-lime-neon leading-tight tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Código abierto.<br />
            Impacto real.
          </motion.h1>

          <motion.p
            className="font-standerd text-xl text-text-secondary max-w-[40ch] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Transformo ideas en software libre robusto y enseño a otros a hacer lo mismo.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Reserva una llamada de 15 min
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a href="#projects" className="btn-secondary">
              Explora mis proyectos
            </a>
          </motion.div>
        </motion.div>

        {/* Visualización 3D - ocupa 6 columnas en desktop */}
        <motion.div
          className="col-span-1 lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Aquí iría la imagen 3D en un caso real */}
            <div className="aspect-[16/9] lg:aspect-auto lg:h-[480px] bg-gradient-to-br from-ralex-blue/20 to-lime-neon/20 rounded-xl border border-border-gray flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="Logo Ralex en 3D"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="w-8 h-8 rounded-full border border-border-gray flex items-center justify-center animate-bounce-slow">
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;