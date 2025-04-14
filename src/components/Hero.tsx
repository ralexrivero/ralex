import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Añadir IntersectionObserver para animaciones basadas en scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Variantes de animación escalonada
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.08,
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] md:min-h-screen bg-background flex items-center py-24 md:py-[96px] overflow-hidden"
      aria-label="Hero section"
    >
      <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <motion.h1
            className="font-gilroy font-bold text-lime-neon text-[clamp(3.5rem,6vw,6rem)] leading-[1.1] mb-6"
            custom={0}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            Código abierto.<br/>Impacto real.
          </motion.h1>

          <motion.p
            className="font-standerd text-text-secondary text-xl md:text-[1.25rem] leading-relaxed mb-8 max-w-2xl"
            custom={1}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            desarrollador full‑stack que convierte retos complejos en software libre, y comparte cada línea de aprendizaje.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="btn-primary"
              custom={2}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerVariants}
              aria-label="Reserva una llamada de 15 minutos"
            >
              Reserva una llamada de 15 min
            </motion.a>

            <motion.a
              href="#projects"
              className="btn-secondary"
              custom={3}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerVariants}
              aria-label="Explora mis proyectos"
            >
              Explora mis proyectos
            </motion.a>
          </div>
        </div>

        <motion.div
          className="col-span-1 lg:col-span-7 lg:col-start-6 flex items-center justify-center relative"
          custom={4}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          {/* Modelo 3D con fallback - aspect-ratio fijo */}
          <div className="w-full aspect-[16/9] relative">
            <img
              src="/images/hero-3d-fallback.png"
              alt="Cabeza wireframe multicolor en 3D representando desarrollo creativo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Aquí iría el componente 3D real cuando esté disponible */}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue animado con posición correcta */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#C7FF6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;