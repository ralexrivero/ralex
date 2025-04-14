import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// En un proyecto real, estas imágenes serían importadas o cargadas desde un CMS
const logos = [
  { name: 'AFAP', },
  { name: 'Itaú', },
  { name: 'Ceibal', },
  { name: 'Holberton', },
];

// Métricas para los contadores
const metrics = [
  { value: 4000, label: 'estudiantes', suffix: '+' },
  { value: 15, label: 'años optimizando procesos', suffix: '' },
  { value: 30, label: 'proyectos productivos', suffix: '+' },
];

// Componente de contador animado
const Counter = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // En una implementación real, habría una animación de contador aquí
    const counter = counterRef.current;
    if (!counter) return;
  }, []);

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <span className="font-gilroy font-bold text-2xl md:text-3xl text-text-primary">
        {value}{suffix}
      </span>
      <span className="text-text-secondary text-sm mt-1">{label}</span>
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
                <Counter
                  value={metric.value}
                  label={metric.label}
                  suffix={metric.suffix}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;