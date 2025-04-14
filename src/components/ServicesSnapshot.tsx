import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Datos de servicios
const services = [
  {
    title: 'Desarrollo Full Stack',
    description: 'Aplicaciones web y móviles con arquitecturas modernas y escalables, enfocadas en rendimiento y experiencia de usuario.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="#C7FF6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: '/services/development'
  },
  {
    title: 'Automatización DevOps',
    description: 'Optimización de flujos de trabajo con CI/CD, infraestructura como código y configuración de pipelines de entrega continua.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#C7FF6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: '/services/devops'
  },
  {
    title: 'Data Engineering',
    description: 'Diseño e implementación de pipelines de datos, sistemas ETL y soluciones de analítica para la toma de decisiones basada en datos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#C7FF6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: '/services/data'
  },
  {
    title: 'Formación Técnica',
    description: 'Workshops y mentoría en desarrollo, sistemas y metodologías ágiles, adaptados a equipos técnicos y no técnicos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14L12.7609 14.5094C12.2912 15.1244 11.7088 15.1244 11.2391 14.5094L12 14ZM5.0404 10.7846L4.2795 10.2752L4.2795 10.2752L5.0404 10.7846ZM5 8.8C5 8.24771 5.44772 7.8 6 7.8C6.55228 7.8 7 8.24771 7 8.8H5ZM17 8.8C17 8.24771 17.4477 7.8 18 7.8C18.5523 7.8 19 8.24771 19 8.8H17ZM18.9596 10.7846L19.7205 10.2752L19.7205 10.2752L18.9596 10.7846ZM16.2391 14.5094L16.9999 14L16.2391 14.5094ZM7.7609 14.5094L8.52181 14L7.7609 14.5094ZM2.8 10.8C2.8 9.24771 4.04772 8 5.6 8V10C5.15228 10 4.8 10.3523 4.8 10.8H2.8ZM5.6 8H18.4V10H5.6V8ZM18.4 8C19.9523 8 21.2 9.24771 21.2 10.8H19.2C19.2 10.3523 18.8477 10 18.4 10V8ZM21.2 10.8V15.2H19.2V10.8H21.2ZM21.2 15.2C21.2 16.7523 19.9523 18 18.4 18V16C18.8477 16 19.2 15.6477 19.2 15.2H21.2ZM18.4 18H5.6V16H18.4V18ZM5.6 18C4.04772 18 2.8 16.7523 2.8 15.2H4.8C4.8 15.6477 5.15228 16 5.6 16V18ZM2.8 15.2V10.8H4.8V15.2H2.8ZM5.8013 11.294L11.2391 14.5094L12.7609 13.4906L7.32308 10.2752L5.8013 11.294ZM5.6 8C5.39397 8 5.19344 8.02414 5 8.07033V7.92967C5.19344 7.97586 5.39397 8 5.6 8V8ZM7 8.8V9.8H5V8.8H7ZM4.2795 10.2752C4.48215 10.0999 4.73048 10 5 10V12C4.68976 12 4.4055 11.9001 4.2795 11.7248L4.2795 10.2752ZM19 8.8V9.8H17V8.8H17ZM18.4 8C18.606 8 18.8066 8.02414 19 8.07033V7.92967C18.8066 7.97586 18.606 8 18.4 8V8ZM19.7205 10.2752C19.5179 10.0999 19.2695 10 19 10V12C19.3102 12 19.5945 11.9001 19.7205 11.7248L19.7205 10.2752ZM16.9999 14L11.2391 14.5094L12.7609 13.4906L18.5216 12.9812L16.9999 14ZM7.32308 10.2752C7.59809 10.434 7.59809 10.566 7.32308 10.7248L8.52181 14L8.52181 14L7.32308 10.2752ZM18.5216 12.9812C18.8652 12.7756 18.8652 12.2244 18.5216 12.0188L19.7205 10.2752L19.7205 10.2752L18.5216 12.9812Z" fill="#C7FF6B"/>
      </svg>
    ),
    link: '/services/training'
  }
];

const ServiceCard = ({
  service,
  index,
  isInView
}: {
  service: typeof services[0],
  index: number,
  isInView: boolean
}) => {
  return (
    <motion.div
      className="bg-dark-panel border border-border-gray rounded-xl p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="font-gilroy font-bold text-xl text-white mb-3">{service.title}</h3>
      <p className="font-standerd text-text-secondary mb-6 flex-grow">{service.description}</p>
      <a
        href={service.link}
        className="inline-flex items-center font-gilroy font-medium text-lime-neon hover:underline mt-auto"
      >
        Saber más
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </motion.div>
  );
};

const ServicesSnapshot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-background"
      aria-label="Services snapshot section"
    >
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-gilroy font-bold text-4xl md:text-5xl mb-4 text-white">Servicios</h2>
          <p className="font-standerd text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Soluciones de software libre y formación técnica para impulsar tu organización
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="/services" className="btn-primary inline-flex items-center gap-2">
            Ver todos los servicios
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;