"use client"

import Link from "next/link"
import { ArrowRight, Github, ExternalLink, Star } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import QuoteHighlight from "./components/quote-highlight"
import ServicesSnapshot from "./components/services-snapshot"
import ImpactMetrics from "./components/impact-metrics"
import AboutTeaser from "./components/about-teaser"
import ContactCTA from "./components/contact-cta"
import { useLanguage } from "./context/language-context"
import HeroSection from "./components/hero-section"
import AnimatedTag from "./components/animated-tag"
import SectionDecorator from "./components/section-decorator"
import AnimatedBackground from "./components/animated-background"

// Sample project data
const projects = [
  {
    title: "Proyecto Open Source 1",
    description: "Una librería de componentes UI para React con accesibilidad integrada.",
    tags: ["React", "TypeScript", "Accesibilidad"],
    github: "https://github.com/ralex/proyecto1",
    demo: "https://proyecto1.ralex.dev",
    stars: 124,
  },
  {
    title: "Herramienta CLI",
    description: "CLI para automatizar flujos de trabajo de desarrollo en Python.",
    tags: ["Python", "CLI", "DevOps"],
    github: "https://github.com/ralex/cli-tool",
    stars: 87,
  },
  {
    title: "API REST",
    description: "API REST con autenticación, documentación y tests automatizados.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/ralex/api-rest",
    demo: "https://api.ralex.dev",
    stars: 56,
  },
]

// Sample blog posts
const blogPosts = [
  {
    title: "Cómo construí mi stack de desarrollo perfecto",
    excerpt: "Un recorrido por las herramientas y tecnologías que uso diariamente para ser más productivo.",
    date: "12 Mar 2023",
    slug: "mi-stack-de-desarrollo",
  },
  {
    title: "Patrones de diseño en TypeScript que deberías conocer",
    excerpt: "Implementaciones prácticas de los patrones de diseño más útiles en TypeScript.",
    date: "28 Ene 2023",
    slug: "patrones-diseno-typescript",
  },
  {
    title: "Optimizando el rendimiento de aplicaciones React",
    excerpt: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React.",
    date: "05 Dic 2022",
    slug: "optimizando-rendimiento-react",
  },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Metrics Section */}
      <ImpactMetrics />

      {/* About Teaser Section */}
      <AboutTeaser />

      {/* Services Snapshot Section */}
      <ServicesSnapshot />

      {/* Quote Highlight Section */}
      <QuoteHighlight />

      {/* Featured Projects */}
      <section className="section-container relative">
        <SectionDecorator className="top-20 right-10" type="dots" />

        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="font-space-grotesk text-3xl font-bold md:text-4xl">Proyectos destacados</h2>
          <Button asChild variant="outline" className="group">
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover flex h-full flex-col overflow-hidden group">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <AnimatedTag key={tag} delay={0.1 * tagIndex}>
                      {tag}
                    </AnimatedTag>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-ralex-orange" />
                  <span className="text-sm text-text-secondary">{project.stars}</span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="border-y border-border-gray bg-background/50 py-16 md:py-24 relative">
        <SectionDecorator className="bottom-20 left-10" type="lines" />
        <AnimatedBackground opacity={0.05} density={1} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="font-space-grotesk text-3xl font-bold md:text-4xl">Últimos artículos</h2>
            <Button asChild variant="outline" className="group">
              <Link href="/blog">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover flex h-full flex-col group">
                <CardHeader>
                  <CardTitle className="group-hover:text-lime-neon transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-text-secondary">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="ml-auto group">
                    <Link href={`/blog/${post.slug}`}>
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
