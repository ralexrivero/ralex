import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample blog posts - expanded for blog page
const blogPosts = [
  {
    title: "Cómo construí mi stack de desarrollo perfecto",
    excerpt: "Un recorrido por las herramientas y tecnologías que uso diariamente para ser más productivo.",
    date: "12 Mar 2023",
    category: "Desarrollo",
    slug: "mi-stack-de-desarrollo",
    readTime: "8 min",
  },
  {
    title: "Patrones de diseño en TypeScript que deberías conocer",
    excerpt: "Implementaciones prácticas de los patrones de diseño más útiles en TypeScript.",
    date: "28 Ene 2023",
    category: "TypeScript",
    slug: "patrones-diseno-typescript",
    readTime: "12 min",
  },
  {
    title: "Optimizando el rendimiento de aplicaciones React",
    excerpt: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React.",
    date: "05 Dic 2022",
    category: "React",
    slug: "optimizando-rendimiento-react",
    readTime: "10 min",
  },
  {
    title: "Introducción a la arquitectura de microservicios",
    excerpt: "Una guía práctica para entender y aplicar la arquitectura de microservicios en tus proyectos.",
    date: "18 Nov 2022",
    category: "Arquitectura",
    slug: "introduccion-microservicios",
    readTime: "15 min",
  },
  {
    title: "Automatización de tareas con Python",
    excerpt: "Cómo automatizar tareas repetitivas y ahorrar tiempo utilizando Python.",
    date: "03 Oct 2022",
    category: "Python",
    slug: "automatizacion-python",
    readTime: "7 min",
  },
  {
    title: "Mejores prácticas para APIs RESTful",
    excerpt: "Guía completa de mejores prácticas para diseñar, implementar y documentar APIs RESTful.",
    date: "21 Sep 2022",
    category: "API",
    slug: "mejores-practicas-api-rest",
    readTime: "11 min",
  },
]

export default function BlogPage() {
  return (
    <div className="section-container">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-6 font-space-grotesk text-4xl font-bold md:text-5xl">Blog</h1>
        <p className="text-body-l text-text-secondary">
          Artículos, tutoriales y reflexiones sobre desarrollo de software, tecnologías web y buenas prácticas. Comparto
          lo que aprendo en mi día a día como desarrollador.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <Button variant="outline" className="rounded-full">
          Todos
        </Button>
        <Button variant="ghost" className="rounded-full">
          React
        </Button>
        <Button variant="ghost" className="rounded-full">
          TypeScript
        </Button>
        <Button variant="ghost" className="rounded-full">
          Python
        </Button>
        <Button variant="ghost" className="rounded-full">
          Arquitectura
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index} className="card-hover flex h-full flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-border-gray px-3 py-1 text-xs font-medium text-text-secondary">
                  {post.category}
                </span>
                <span className="text-sm text-text-secondary">{post.readTime}</span>
              </div>
              <CardTitle className="mt-4">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-text-secondary">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="ml-auto">
                <Link href={`/blog/${post.slug}`}>
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
