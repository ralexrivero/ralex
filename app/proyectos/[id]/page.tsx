import ProjectDetailClient from './ProjectDetailClient'

// Sample project data
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

export async function generateStaticParams() {
  return projects.map(project => ({
    id: project.id
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetailClient params={params} />
}
