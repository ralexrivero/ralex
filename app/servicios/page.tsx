import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Service data
const services = [
  {
    id: "development",
    title: "Desarrollo Full Stack",
    description:
      "Aplicaciones web y móviles con arquitecturas modernas y escalables, enfocadas en rendimiento y experiencia de usuario.",
    longDescription:
      "Desarrollo de aplicaciones web y móviles completas, desde el frontend hasta el backend, utilizando tecnologías modernas y escalables. Me especializo en crear soluciones que no solo funcionan bien, sino que también ofrecen una excelente experiencia de usuario.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20"
          stroke="hsl(var(--lime-neon))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    technologies: ["React / Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL / MongoDB", "Docker", "AWS / GCP"],
  },
  {
    id: "devops",
    title: "Automatización DevOps",
    description:
      "Optimización de flujos de trabajo con CI/CD, infraestructura como código y configuración de pipelines de entrega continua.",
    longDescription:
      "Implementación de prácticas DevOps para optimizar el ciclo de vida del desarrollo de software. Configuración de pipelines de CI/CD, infraestructura como código y automatización de procesos para mejorar la eficiencia y la calidad del software.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="hsl(var(--lime-neon))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    technologies: [
      "GitHub Actions / GitLab CI",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Kubernetes",
      "Docker",
      "Prometheus / Grafana",
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description:
      "Diseño e implementación de pipelines de datos, sistemas ETL y soluciones de analítica para la toma de decisiones basada en datos.",
    longDescription:
      "Creación de soluciones de ingeniería de datos que permiten a las organizaciones aprovechar al máximo sus datos. Diseño e implementación de pipelines de datos, sistemas ETL y soluciones de analítica para facilitar la toma de decisiones basada en datos.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
          stroke="hsl(var(--lime-neon))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    technologies: [
      "Python",
      "Apache Airflow",
      "Apache Spark",
      "SQL / NoSQL",
      "Kafka",
      "Elasticsearch",
      "Tableau / Power BI",
    ],
  },
  {
    id: "training",
    title: "Formación Técnica",
    description:
      "Workshops y mentoría en desarrollo, sistemas y metodologías ágiles, adaptados a equipos técnicos y no técnicos.",
    longDescription:
      "Programas de formación y mentoría personalizados para equipos técnicos y no técnicos. Workshops sobre desarrollo de software, sistemas, metodologías ágiles y mejores prácticas, adaptados a las necesidades específicas de cada organización.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 14L12.7609 14.5094C12.2912 15.1244 11.7088 15.1244 11.2391 14.5094L12 14ZM5.0404 10.7846L4.2795 10.2752L4.2795 10.2752L5.0404 10.7846ZM5 8.8C5 8.24771 5.44772 7.8 6 7.8C6.55228 7.8 7 8.24771 7 8.8H5ZM17 8.8C17 8.24771 17.4477 7.8 18 7.8C18.5523 7.8 19 8.24771 19 8.8H17ZM18.9596 10.7846L19.7205 10.2752L19.7205 10.2752L18.9596 10.7846ZM16.2391 14.5094L16.9999 14L16.2391 14.5094ZM7.7609 14.5094L8.52181 14L7.7609 14.5094ZM2.8 10.8C2.8 9.24771 4.04772 8 5.6 8V10C5.15228 10 4.8 10.3523 4.8 10.8H2.8ZM5.6 8H18.4V10H5.6V8ZM18.4 8C19.9523 8 21.2 9.24771 21.2 10.8H19.2C19.2 10.3523 18.8477 10 18.4 10V8ZM21.2 10.8V15.2H19.2V10.8H21.2ZM21.2 15.2C21.2 16.7523 19.9523 18 18.4 18V16C18.8477 16 19.2 15.6477 19.2 15.2H21.2ZM18.4 18H5.6V16H18.4V18ZM5.6 18C4.04772 18 2.8 16.7523 2.8 15.2H4.8C4.8 15.6477 5.15228 16 5.6 16V18ZM2.8 15.2V10.8H4.8V15.2H2.8ZM5.8013 11.294L11.2391 14.5094L12.7609 13.4906L7.32308 10.2752L5.8013 11.294ZM5.6 8C5.39397 8 5.19344 8.02414 5 8.07033V7.92967C5.19344 7.97586 5.39397 8 5.6 8V8ZM7 8.8V9.8H5V8.8H7ZM4.2795 10.2752C4.48215 10.0999 4.73048 10 5 10V12C4.68976 12 4.4055 11.9001 4.2795 11.7248L4.2795 10.2752ZM19 8.8V9.8H17V8.8H17ZM18.4 8C18.606 8 18.8066 8.02414 19 8.07033V7.92967C18.8066 7.97586 18.606 8 18.4 8V8ZM19.7205 10.2752C19.5179 10.0999 19.2695 10 19 10V12C19.3102 12 19.5945 11.9001 19.7205 11.7248L19.7205 10.2752ZM16.9999 14L11.2391 14.5094L12.7609 13.4906L18.5216 12.9812L16.9999 14ZM7.32308 10.2752C7.59809 10.434 7.59809 10.566 7.32308 10.7248L8.52181 14L8.52181 14L7.32308 10.2752ZM18.5216 12.9812C18.8652 12.7756 18.8652 12.2244 18.5216 12.0188L19.7205 10.2752L19.7205 10.2752L18.5216 12.9812Z"
          fill="hsl(var(--lime-neon))"
        />
      </svg>
    ),
    technologies: [
      "Desarrollo Web",
      "DevOps",
      "Metodologías Ágiles",
      "Arquitectura de Software",
      "Testing",
      "Seguridad",
      "Gestión de Proyectos",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Servicios"
        subtitle="Soluciones de software libre y formación técnica para impulsar tu organización"
      />

      <div className="container-main pb-24">
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 gap-8 md:grid-cols-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:col-span-8">
                <h2 className="font-space-grotesk text-3xl font-bold mb-4 text-text-primary">{service.title}</h2>
                <p className="text-text-secondary text-lg mb-6">{service.longDescription}</p>

                <h3 className="font-space-grotesk text-xl font-semibold mb-3 text-text-primary">Tecnologías</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-dark-panel px-4 py-2 text-sm font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href="/contacto" className="btn-primary inline-flex items-center gap-2 mt-4">
                  Solicitar información
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="md:col-span-4">
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
