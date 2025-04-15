import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

// Componente de tarjeta de servicio
interface ServiceCardProps {
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, deliverables, technologies, icon, index }) => {
  return (
    <motion.div
      className="bg-dark-panel border border-border-gray rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-background rounded-lg text-lime-neon">
            {icon}
          </div>
          <h2 className="font-gilroy font-medium text-2xl md:text-3xl text-text-primary pt-1">
            {title}
          </h2>
        </div>

        <p className="text-text-secondary mb-6">
          {description}
        </p>

        <div className="mb-6">
          <h3 className="font-gilroy font-medium text-lg text-lime-neon mb-3">
            Entregables
          </h3>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <svg className="w-5 h-5 text-lime-neon flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-gilroy font-medium text-lg text-lime-neon mb-3">
            Tecnologías
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-background text-text-secondary rounded-full text-sm border border-border-gray"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente con los servicios disponibles
const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: "Arquitectura Cloud-Native",
      description: "Diseño e implementación de arquitecturas escalables y resilientes en la nube, con enfoque en infraestructura como código, automatización y optimización de costos.",
      deliverables: [
        "Infraestructura reproducible en minutos",
        "Documentación completa y transferencia de conocimiento",
        "CI/CD para despliegue continuo",
        "Monitoreo y alertas"
      ],
      technologies: ["Docker", "Terraform", "AWS", "Kubernetes", "GitHub Actions"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12.5C5 11.1193 6.11929 10 7.5 10H16.5C17.8807 10 19 11.1193 19 12.5V19.5C19 20.8807 17.8807 22 16.5 22H7.5C6.11929 22 5 20.8807 5 19.5V12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18C12.8284 18 13.5 17.3284 13.5 16.5C13.5 15.6716 12.8284 15 12 15C11.1716 15 10.5 15.6716 10.5 16.5C10.5 17.3284 11.1716 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Data Engineering & ETL",
      description: "Diseño e implementación de soluciones para adquisición, procesamiento y visualización de datos, con foco en automatización, escalabilidad y rendimiento.",
      deliverables: [
        "Pipelines nocturnos 10× más rápidos",
        "Reportes automatizados y visualizaciones",
        "Logs detallados y métricas",
        "Infraestructura resiliente"
      ],
      technologies: ["Airflow", "Spark", "Postgres", "Python", "Pandas"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "MVP Full-Stack",
      description: "Desarrollo ágil de productos mínimos viables, optimizando tiempo y recursos para validar ideas y llegar al mercado rápidamente con calidad profesional.",
      deliverables: [
        "Producto funcional en 12 semanas",
        "Arquitectura escalable para futuro crecimiento",
        "Código limpio y documentado",
        "Despliegue en producción"
      ],
      technologies: ["React", "FastAPI", "Postgres", "TypeScript", "Docker"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Mentorías 1-a-1",
      description: "Sesiones personalizadas de mentoría para desarrolladores y equipos técnicos, enfocadas en resolver problemas concretos y mejorar habilidades específicas.",
      deliverables: [
        "Upskilling de equipos dev & data",
        "Plan personalizado de aprendizaje",
        "Revisiones de código y feedback",
        "Recursos especializados"
      ],
      technologies: ["Pair Programming", "Code Reviews", "Arquitectura de Software", "Buenas Prácticas"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.5C7 4.5 2.5 8 2.5 14.5C2.5 16 2.5 20 4 20C5.5 20 5.5 17 9 17C11 17 12 18 12 18M12 4.5C17 4.5 21.5 8 21.5 14.5C21.5 16 21.5 20 20 20C18.5 20 18.5 17 15 17C13 17 12 18 12 18M12 4.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              deliverables={service.deliverables}
              technologies={service.technologies}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de proceso de trabajo
const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description: "Conversamos sobre tu proyecto, necesidades y objetivos. Definimos alcance, expectativas y posibles soluciones."
    },
    {
      number: "02",
      title: "Propuesta",
      description: "Preparo una propuesta detallada con plan de trabajo, plazos estimados, entregables y presupuesto."
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Implemento la solución con ciclos cortos de feedback para mantener alineación y realizar ajustes tempranos."
    },
    {
      number: "04",
      title: "Entrega y Soporte",
      description: "Despliegue a producción, documentación y capacitación para el uso efectivo de la solución desarrollada."
    }
  ];

  return (
    <section className="py-16 bg-dark-panel border-y border-border-gray">
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-4">
            Proceso de trabajo
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Metodología transparente y colaborativa para asegurar resultados excepcionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-background border border-border-gray rounded-xl p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-gilroy font-bold text-4xl text-lime-neon/20 mb-4">
                {step.number}
              </span>
              <h3 className="font-gilroy font-medium text-xl text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de FAQ
const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Cómo se determina el costo de un proyecto?",
      answer: "El costo se determina según la complejidad, alcance y plazos del proyecto. Tras la etapa de descubrimiento, proporcionaré una propuesta detallada con presupuesto transparente, desglosado por fases y entregables."
    },
    {
      question: "¿Cómo es el proceso de colaboración remota?",
      answer: "Utilizamos herramientas como GitHub, Slack y reuniones virtuales regulares para mantener comunicación fluida. Siguiendo metodologías ágiles, hacemos demos frecuentes para validar avances y obtener feedback temprano."
    },
    {
      question: "¿Ofreces soporte después de la entrega?",
      answer: "Sí, ofrezco 30 días de soporte posentrega para resolver dudas o ajustes menores. También puedo ofrecer planes de mantenimiento mensual para monitoreo, actualizaciones y mejoras continuas."
    },
    {
      question: "¿Trabajas solo o con un equipo?",
      answer: "Para proyectos pequeños y medianos trabajo individualmente. Para proyectos más grandes o con plazos ajustados, colaboro con una red de desarrolladores especializados de confianza, siempre manteniendo la calidad y comunicación centralizada."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-dark-panel border border-border-gray rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="font-gilroy font-medium text-xl text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Página completa
const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Servicios"
        subtitle="Soluciones técnicas a medida para impulsar tu organización con software libre y conocimiento compartido"
      />
      <ServicesGrid />
      <WorkProcess />
      <FAQ />
      <ContactCTA
        title="¿Listo para impulsar tu proyecto?"
        subtitle="Conversemos sobre tus necesidades y cómo puedo ayudarte a alcanzar tus objetivos técnicos y de negocio."
        buttonText="Solicitar consulta gratuita"
      />
    </>
  );
};

export default ServicesPage;