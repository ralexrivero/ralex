import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

// Definición del tipo de datos para un proyecto
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string; // 'Backend', 'Frontend', 'Data', etc.
  technologies: string[];
  link: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  impact: string;
}

// Datos de ejemplo para proyectos
const projects: Project[] = [
  {
    id: "api-gateway",
    title: "API Gateway & ETL en AWS",
    description: "Optimización de procesos ETL para reducir tiempos de carga y mejorar la confiabilidad de datos críticos para el negocio.",
    image: "/images/projects/api-gateway.webp",
    category: "Backend",
    technologies: ["AWS", "Spark", "Python", "Terraform", "CloudWatch"],
    link: "https://github.com/ralexrivero/aws-etl-pipeline",
    featured: true,
    challenge: "ETL que tardaba 8 horas en completarse con frecuentes fallos nocturnos. Datos críticos que no estaban disponibles para la toma de decisiones al inicio de la jornada laboral.",
    solution: "Implementación de una arquitectura serverless en AWS con Glue, S3 y Lambda. Migración del procesamiento a Apache Spark para paralelizar las transformaciones. Infraestructura como código con Terraform.",
    impact: "Reducción del tiempo de procesamiento en un 80% (de 8 horas a 45 minutos). Confiabilidad mejorada al 99.9% con sistema de reintentos automáticos y notificaciones. Ahorro de costos del 35% respecto a la solución anterior."
  },
  {
    id: "intranet-modular",
    title: "Intranet Modular React",
    description: "Plataforma interna unificada que integra herramientas dispersas para mejorar la productividad y comunicación organizacional.",
    image: "/images/projects/intranet.webp",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Node.js", "Docker", "GraphQL"],
    link: "https://github.com/ralexrivero/modular-intranet",
    featured: true,
    challenge: "Herramientas internas dispersas en múltiples plataformas causaban fricción en la experiencia de usuario y ralentizaban procesos. Información crítica aislada en silos departamentales.",
    solution: "Diseño e implementación de una intranet con arquitectura modular basada en React y GraphQL. Sistema de componentes extensible con Docker Compose para facilitar la adición de nuevas herramientas.",
    impact: "300 usuarios internos activos en el primer mes. Reducción del 40% en tickets de soporte relacionados con herramientas internas. 25% de mejora en tiempo de onboarding de nuevos empleados."
  },
  {
    id: "automatizacion-informes",
    title: "Automatización de Informes",
    description: "Sistema automatizado para la generación, validación y distribución de informes regulatorios para entidades financieras.",
    image: "/images/projects/reports.webp",
    category: "Data",
    technologies: ["Python", "Pandas", "Airflow", "PostgreSQL", "Docker"],
    link: "https://github.com/ralexrivero/automated-reporting",
    featured: true,
    challenge: "120 reportes manuales mensuales que consumían aproximadamente 80 horas-hombre para su elaboración, validación y envío. Alta tasa de errores humanos y retrasos frecuentes.",
    solution: "Implementación de pipeline de datos con Apache Airflow para orquestación, Pandas para procesamiento y validación automatizada con tests. Panel de control para seguimiento de estado de los informes.",
    impact: "Proceso completo reducido a 15 minutos de procesamiento automático. Eliminación de errores humanos en la generación. Liberación de más de 70 horas-hombre mensuales para tareas de mayor valor agregado."
  },
  {
    id: "healthcare-api",
    title: "API para Gestión Hospitalaria",
    description: "Sistema de interoperabilidad para la comunicación entre diferentes sistemas hospitalarios y gestión de expedientes médicos electrónicos.",
    image: "/images/projects/healthcare.webp",
    category: "Backend",
    technologies: ["FastAPI", "Python", "MongoDB", "Redis", "Docker"],
    link: "https://github.com/ralexrivero/healthcare-api",
    challenge: "Silos de información entre diferentes sistemas hospitalarios dificultaban el acceso a historiales médicos completos. Duplicación de estudios y demoras en atención por falta de información.",
    solution: "Diseño e implementación de API RESTful con FastAPI y arquitectura de microservicios. Capa de integración con sistemas legacy. Cache con Redis para optimizar tiempos de respuesta críticos.",
    impact: "Reducción de 15 minutos a 3 segundos en el tiempo de acceso a historiales completos. Disminución de 23% en estudios duplicados. Mejora en experiencia de pacientes con 40% menos tiempo de espera."
  }
];

// Componente de tarjeta de proyecto (vista previa)
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-dark-panel border border-border-gray rounded-2xl overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={`/projects/${project.id}`}
        className="block h-full"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading={index < 2 ? "eager" : "lazy"}
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-lime-neon/80 text-background text-sm font-medium px-3 py-1 rounded-md">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h2 className="font-gilroy font-medium text-2xl text-text-primary mb-3 hover:text-lime-neon transition-colors">
            {project.title}
          </h2>
          <p className="text-text-secondary mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-background border border-border-gray rounded-full text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-3 py-1 bg-background border border-border-gray rounded-full text-text-secondary">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

// Componente de proyecto destacado
const FeaturedProject: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-dark-panel border border-border-gray rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative aspect-square md:aspect-auto overflow-hidden">
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-lime-neon/80 text-background text-sm font-medium px-3 py-1 rounded-md">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col">
          <h2 className="font-gilroy font-medium text-3xl text-text-primary mb-4">
            {project.title}
          </h2>

          <div className="space-y-4 mb-6 flex-grow">
            <div>
              <h3 className="font-gilroy font-medium text-lime-neon mb-2">Desafío</h3>
              <p className="text-text-secondary">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="font-gilroy font-medium text-lime-neon mb-2">Solución</h3>
              <p className="text-text-secondary">
                {project.solution}
              </p>
            </div>

            <div>
              <h3 className="font-gilroy font-medium text-lime-neon mb-2">Impacto</h3>
              <p className="text-text-secondary">
                {project.impact}
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-background border border-border-gray rounded-full text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lime-neon hover:underline"
            >
              Ver código en GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Sección de proyectos destacados
const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyectos destacados
        </motion.h2>

        <div className="space-y-12 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de grid de proyectos
const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-16 bg-dark-panel border-y border-border-gray">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Todos los proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de GitHub stats
const GitHubStats: React.FC = () => {
  const stats = [
    { label: "Contribuciones", value: "4,200+" },
    { label: "Repositorios", value: "150+" },
    { label: "Estrellas", value: "850+" },
    { label: "Seguidores", value: "320+" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-4">
              Contribuciones Open Source
            </h2>
            <p className="text-text-secondary">
              Mi compromiso con el desarrollo de código abierto se refleja en la contribución activa a proyectos que impactan a miles de desarrolladores alrededor del mundo.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-dark-panel border border-border-gray rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <p className="font-gilroy font-bold text-3xl text-lime-neon mb-2">
                  {stat.value}
                </p>
                <p className="text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://github.com/ralexrivero"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Ver perfil en GitHub
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente para la página completa
const ProjectsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Proyectos"
        subtitle="Del concepto a la producción. Soluciones técnicas construidas con enfoque en escalabilidad, rendimiento e impacto tangible"
      />
      <FeaturedProjects />
      <ProjectsGrid />
      <GitHubStats />
      <ContactCTA
        title="¿Tienes un proyecto en mente?"
        subtitle="Conversemos sobre tus ideas y cómo podemos hacerlas realidad con las tecnologías adecuadas."
        buttonText="Contactar para colaboración"
      />
    </>
  );
};

export default ProjectsPage;