import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definición del tipo de métrica
interface Metric {
  value: number;
  label: string;
  description: string;
  suffix: string;
  color: string;
}

// Métricas actualizadas según el documento de mejora
const metrics: Metric[] = [
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

// Tipo para datos de detalles de métricas
interface MetricDetailData {
  icon: string;
  details: string[];
  fact: string;
}

// Componente para detalles expandidos
const MetricDetail = ({ metric, onClose }: { metric: Metric, onClose: () => void }) => {
  // Datos adicionales para cada métrica
  const detailsData: Record<string, MetricDetailData> = {
    'Proyectos productivos': {
      icon: '💻',
      details: [
        'Desarrollo de APIs REST y GraphQL',
        'Arquitecturas serverless en AWS',
        'Aplicaciones SPA con React y Vue'
      ],
      fact: '3 proyectos ganaron premios de innovación tecnológica'
    },
    'Estudiantes formados': {
      icon: '🎓',
      details: [
        'Cursos presenciales y remotos',
        'Workshops de desarrollo web',
        'Mentorías personalizadas'
      ],
      fact: 'Más de 200 estudiantes consiguieron su primer trabajo en tech'
    },
    'Repos open-source': {
      icon: '🔄',
      details: [
        'Bibliotecas de utilidades',
        'Plantillas de proyectos',
        'Documentación y tutoriales'
      ],
      fact: 'Contribuciones a 25+ proyectos de código abierto'
    },
    'Años de optimización': {
      icon: '⏱️',
      details: [
        'Mejora de rendimiento en aplicaciones',
        'Pipelines de datos para analytics',
        'Automatización de procesos empresariales'
      ],
      fact: 'Reducción promedio del 40% en tiempos de carga'
    }
  };

  const data = detailsData[metric.label] || {
    icon: '🔍',
    details: ['Información detallada no disponible'],
    fact: 'Datos adicionales próximamente'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <motion.div
        className="bg-dark-panel border border-border-gray rounded-xl p-6 md:p-8 max-w-lg w-full z-10"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{data.icon}</span>
            <h3 className="font-gilroy font-bold text-2xl text-white">{metric.label}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-lime-neon"
            aria-label="Cerrar detalles"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <div className="font-gilroy font-bold text-4xl mb-2" style={{ color: metric.color }}>
            {metric.value.toLocaleString()}{metric.suffix}
          </div>
          <p className="text-text-secondary">{metric.description}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-gilroy font-medium text-white">Lo que esto significa:</h4>
          <ul className="space-y-2">
            {data.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-lime-neon">•</span>
                <span className="text-text-secondary">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4">
          <p className="text-sm flex items-center gap-2">
            <span className="text-lime-neon">💡</span>
            <span className="text-text-secondary italic">{data.fact}</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Extender la interfaz Window para incluir nuestra función personalizada
declare global {
  interface Window {
    showNextImpactMetric?: () => void;
  }
}

const ImpactMetrics = () => {
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Función para establecer las referencias a los elementos de métricas
  const setMetricRef = (el: HTMLDivElement | null, index: number) => {
    metricsRefs.current[index] = el;
  };

  // Función para hacer scroll suave a una métrica
  const scrollToMetric = (index: number) => {
    setActiveIndex(index);

    const targetMetric = metricsRefs.current[index];
    if (targetMetric) {
      // Crear un efecto visual antes de hacer scroll
      const pulseEffect = document.createElement('div');
      pulseEffect.className = 'absolute rounded-full bg-lime-neon/30';
      pulseEffect.style.width = '100px';
      pulseEffect.style.height = '100px';
      pulseEffect.style.top = `${targetMetric.offsetTop + targetMetric.offsetHeight/2 - 50}px`;
      pulseEffect.style.left = `${targetMetric.offsetLeft + targetMetric.offsetWidth/2 - 50}px`;
      pulseEffect.style.transform = 'scale(0)';
      pulseEffect.style.opacity = '1';
      pulseEffect.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
      pulseEffect.style.zIndex = '20';

      if (sectionRef.current) {
        sectionRef.current.appendChild(pulseEffect);

        // Animar el pulso
        setTimeout(() => {
          pulseEffect.style.transform = 'scale(3)';
          pulseEffect.style.opacity = '0';
        }, 10);

        // Hacer scroll al inicio de la sección en lugar de a la métrica específica
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Destacar la métrica seleccionada
          targetMetric.classList.add('metric-highlight');
          setTimeout(() => {
            targetMetric.classList.remove('metric-highlight');
          }, 1500);

          // Eliminar el elemento de pulso después de la animación
          setTimeout(() => {
            pulseEffect.remove();
          }, 500);
        }, 300);
      }
    }
  };

  // Función para mostrar la siguiente métrica destacada
  const showNextMetric = () => {
    const nextIndex = (activeIndex + 1) % metrics.length;
    scrollToMetric(nextIndex);
  };

  // Función para abrir modal con detalles de métrica
  const openMetricDetails = (metric: Metric) => {
    setSelectedMetric(metric);
    // Añadir clase para prevenir scroll en el body cuando modal está abierto
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar modal
  const closeMetricDetails = () => {
    setSelectedMetric(null);
    // Restaurar scroll
    document.body.style.overflow = '';
  };

  // Efecto para inicializar CSS para la animación de highlight
  useEffect(() => {
    // Añadir estilos para la animación de highlight
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse-highlight {
        0% { box-shadow: 0 0 0 0 rgba(199, 255, 107, 0.7); }
        70% { box-shadow: 0 0 0 20px rgba(199, 255, 107, 0); }
        100% { box-shadow: 0 0 0 0 rgba(199, 255, 107, 0); }
      }
      .metric-highlight {
        animation: pulse-highlight 1.5s ease-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Exposición de la función para que pueda ser llamada desde otros componentes
  useEffect(() => {
    // Hacer disponible la función para el componente Hero
    window.showNextImpactMetric = showNextMetric;

    return () => {
      window.showNextImpactMetric = undefined;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-metrics"
      className="py-12 md:py-20 bg-background relative"
      aria-label="Impact metrics section"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              ref={el => setMetricRef(el, index)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => openMetricDetails(metric)}
            >
              <div className="cursor-pointer relative group">
                <AnimatedCounter
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                  suffix={metric.suffix}
                  color={metric.color}
                  format={false}
                />
                <div className="absolute inset-0 bg-lime-neon/0 group-hover:bg-lime-neon/5 rounded-lg transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para detalles de métrica */}
      <AnimatePresence>
        {selectedMetric && (
          <MetricDetail
            metric={selectedMetric}
            onClose={closeMetricDetails}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImpactMetrics;