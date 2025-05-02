"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ContactCTA from "@/components/contact-cta"

// Datos de proyectos (debe ser igual al array en page.tsx)
const projects = [
  {
    id: "api-gateway",
    title: "API Gateway & ETL en AWS",
    description:
      "Optimización de procesos ETL para reducir tiempos de carga y mejorar la confiabilidad de datos críticos para el negocio.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Backend",
    technologies: ["AWS", "Spark", "Python", "Terraform", "CloudWatch"],
    link: "https://github.com/ralexrivero/aws-etl-pipeline",
    featured: true,
    challenge:
      "ETL que tardaba 8 horas en completarse con frecuentes fallos nocturnos. Datos críticos que no estaban disponibles para la toma de decisiones al inicio de la jornada laboral.",
    solution:
      "Implementación de una arquitectura serverless en AWS con Glue, S3 y Lambda. Migración del procesamiento a Apache Spark para paralelizar las transformaciones. Infraestructura como código con Terraform.",
    impact:
      "Reducción del tiempo de procesamiento en un 80% (de 8 horas a 45 minutos). Confiabilidad mejorada al 99.9% con sistema de reintentos automáticos y notificaciones. Ahorro de costos del 35% respecto a la solución anterior.",
  },
  {
    id: "intranet-modular",
    title: "Intranet Modular React",
    description:
      "Plataforma interna unificada que integra herramientas dispersas para mejorar la productividad y comunicación organizacional.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Node.js", "Docker", "GraphQL"],
    link: "https://github.com/ralexrivero/modular-intranet",
    featured: true,
    challenge:
      "Herramientas internas dispersas en múltiples plataformas causaban fricción en la experiencia de usuario y ralentizaban procesos. Información crítica aislada en silos departamentales.",
    solution:
      "Diseño e implementación de una intranet con arquitectura modular basada en React y GraphQL. Sistema de componentes extensible con Docker Compose para facilitar la adición de nuevas herramientas.",
    impact:
      "300 usuarios internos activos en el primer mes. Reducción del 40% en tickets de soporte relacionados con herramientas internas. 25% de mejora en tiempo de onboarding de nuevos empleados.",
  },
]

export default function ProjectDetailClient({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<(typeof projects)[0] | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<typeof projects>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // Buscar el proyecto por id
      const foundProject = projects.find((project) => project.id === params.id)
      setProject(foundProject || null)

      // Si se encuentra, buscar relacionados
      if (foundProject) {
        const related = projects
          .filter((p) => p.category === foundProject.category && p.id !== foundProject.id)
          .slice(0, 2)
        setRelatedProjects(related)
      }
      setLoading(false)
    }, 500)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-lime-neon/20 h-16 w-16 flex items-center justify-center mb-4">
            <svg
              className="animate-spin h-8 w-8 text-lime-neon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <p className="text-text-secondary">Cargando proyecto...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center container-main py-20">
        <h1 className="text-3xl font-space-grotesk font-medium text-text-primary mb-4">Proyecto no encontrado</h1>
        <p className="text-text-secondary mb-8">El proyecto que buscas no existe o ha sido removido.</p>
        <Link href="/proyectos" className="btn-primary">
          Ver todos los proyectos
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader title={project.title} subtitle={project.description} />

      <section className="py-12 bg-background">
        <div className="container-main">
          {/* Imagen principal del proyecto */}
          <motion.div
            className="rounded-xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} - Captura del proyecto`}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {/* Información detallada del proyecto */}
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <h2 className="font-space-grotesk font-medium text-3xl text-text-primary mb-6">Visión general</h2>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <p className="text-text-secondary">
                    Este proyecto demuestra capacidades en arquitectura escalable, optimización de rendimiento y diseño
                    centrado en el usuario, resolviendo problemas reales con soluciones técnicas innovadoras.
                  </p>
                </div>

                <div>
                  <h2 className="font-space-grotesk font-medium text-3xl text-text-primary mb-6">El desafío</h2>
                  <p className="text-text-secondary">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="font-space-grotesk font-medium text-3xl text-text-primary mb-6">La solución</h2>
                  <p className="text-text-secondary">{project.solution}</p>
                </div>

                <div>
                  <h2 className="font-space-grotesk font-medium text-3xl text-text-primary mb-6">
                    Impacto y resultados
                  </h2>
                  <p className="text-text-secondary">{project.impact}</p>
                </div>

                <div>
                  <h2 className="font-space-grotesk font-medium text-3xl text-text-primary mb-6">
                    Tecnologías utilizadas
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="p-4 bg-dark-panel border border-border-gray rounded-xl text-center hover:border-lime-neon transition-colors"
                      >
                        <span className="text-text-secondary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Enlace al código y demo */}
              <motion.div
                className="mt-12 pt-8 flex flex-wrap justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Ver código en GitHub
                </a>

                <Link href="/proyectos" className="btn-secondary inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Volver a proyectos
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              {/* Estadísticas del proyecto */}
              <motion.div
                className="bg-dark-panel border border-border-gray rounded-xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-space-grotesk font-medium text-xl text-text-primary mb-4">Detalles del proyecto</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Categoría:</span>
                    <span className="text-text-primary">{project.category}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-text-secondary">Fecha:</span>
                    <span className="text-text-primary">2023</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-text-secondary">Cliente:</span>
                    <span className="text-text-primary">Confidencial</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-text-secondary">Rol:</span>
                    <span className="text-text-primary">Arquitecto & Desarrollador</span>
                  </div>
                </div>
              </motion.div>

              {/* Proyectos relacionados */}
              {relatedProjects.length > 0 && (
                <motion.div
                  className="bg-dark-panel border border-border-gray rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="font-space-grotesk font-medium text-xl text-text-primary mb-4">
                    Proyectos relacionados
                  </h3>

                  <div className="space-y-6">
                    {relatedProjects.map((relatedProject) => (
                      <div key={relatedProject.id} className="flex gap-4">
                        <img
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-space-grotesk font-medium text-text-primary line-clamp-2 hover:text-lime-neon transition-colors">
                            <Link href={`/proyectos/${relatedProject.id}`}>{relatedProject.title}</Link>
                          </h4>
                          <span className="text-text-secondary text-sm">{relatedProject.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6">
                    <Link href="/proyectos" className="text-lime-neon hover:underline inline-flex items-center">
                      Ver todos los proyectos
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
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="¿Te gustó este proyecto?"
        subtitle="Si tienes un proyecto similar en mente o quieres discutir cómo podría ayudarte con tus desafíos técnicos, contactemos."
        buttonText="Iniciar conversación"
      />
    </>
  )
}