import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// En un proyecto real, estas imágenes serían importadas o cargadas desde un CMS
const logos = [
  { name: 'AFAP', },
  { name: 'Itaú', },
  { name: 'Ceibal', },
  { name: 'Holberton', },
];

// Métricas actualizadas según el documento de mejora
const metrics = [
  {
    value: 30,
    label: 'Proyectos productivos',
    description: 'Backend, frontend y despliegues en AWS',
    suffix: '+',
    color: '#C7FF6B'
  },
  {
    value: 4000,
    label: 'Estudiantes formados',
    description: 'C, Python, IA y Linux',
    suffix: '+',
    color: '#C7FF6B'
  },
  {
    value: 150,
    label: 'Repos open-source',
    description: 'Activos en GitHub · 10 k commits',
    suffix: '+',
    color: '#C7FF6B'
  },
  {
    value: 15,
    label: 'Años de optimización',
    description: 'De retail a fintech & data pipelines',
    suffix: '',
    color: '#C7FF6B'
  },
];

// Componente de contador animado
const AnimatedCounter = ({
  value,
  label,
  description,
  suffix = '',
  color = '#C7FF6B',
  format = false
}: {
  value: number,
  label: string,
  description: string,
  suffix?: string,
  color?: string,
  format?: boolean
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Formatear números grandes con comas o puntos
  const formatNumber = (num: number) => {
    if (format && num >= 1000000) {
      return '1M';
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    // Ajustar la duración a 1 segundo según el documento
    const duration = 1000; // 1 segundo
    const increment = end / (duration / 16); // 60fps aproximadamente

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [inView, value]);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center text-center"
      aria-live="polite" // Añadido para accesibilidad como se especifica en el documento
    >
      <div className="font-gilroy font-bold text-[clamp(2.5rem,5vw,3.5rem)] mb-2" style={{ color }}>
        {formatNumber(count)}{suffix}
      </div>
      <h3 className="font-gilroy font-medium text-lg md:text-xl text-white mb-1">
        {label}
      </h3>
      <p className="text-text-secondary text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

const TrustStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-dark-panel border-y border-border-gray">
      <div className="container-main">
        <motion.div
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="flex items-center justify-center h-20 rounded-xl bg-background/50 border border-border-gray"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* En un proyecto real, aquí iría una imagen de logo */}
                <span className="font-gilroy font-medium text-text-secondary opacity-60">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Separador */}
          <div className="w-full h-px bg-border-gray"></div>

          {/* Métricas/Contadores */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <AnimatedCounter
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                  suffix={metric.suffix}
                  color={metric.color}
                  format={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactMetrics = () => {
  return (
    <section
      className="py-12 md:py-20 bg-background border-t border-border-gray"
      aria-label="Impact metrics section"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="flex justify-center"
            >
              <AnimatedCounter
                value={metric.value}
                label={metric.label}
                description={metric.description}
                suffix={metric.suffix}
                color={metric.color}
                format={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;