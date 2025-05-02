"use client"

import Link from "next/link"
import { Github, ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedTag from "@/components/animated-tag"
import AnimatedBackground from "@/components/animated-background"
import SectionDecorator from "@/components/section-decorator"
import { motion } from "framer-motion"

// Sample project data - expanded for projects page
const projects = [
  {
    title: "Proyecto Open Source 1",
    description: "Una librería de componentes UI para React con accesibilidad integrada.",
    longDescription:
      "Esta librería proporciona componentes UI accesibles y personalizables para aplicaciones React. Incluye temas, soporte para modo oscuro y cumple con las pautas WCAG 2.1.",
    tags: ["React", "TypeScript", "Accesibilidad"],
    github: "https://github.com/ralex/proyecto1",
    demo: "https://proyecto1.ralex.dev",
    stars: 124,
  },
  {
    title: "Herramienta CLI",
    description: "CLI para automatizar flujos de trabajo de desarrollo en Python.",
    longDescription:
      "Una herramienta de línea de comandos que automatiza tareas repetitivas en el desarrollo de aplicaciones Python. Incluye generación de código, scaffolding y optimizaciones.",
    tags: ["Python", "CLI", "DevOps"],
    github: "https://github.com/ralex/cli-tool",
    stars: 87,
  },
  {
    title: "API REST",
    description: "API REST con autenticación, documentación y tests automatizados.",
    longDescription:
      "Una API REST completa con autenticación JWT, documentación con Swagger, tests automatizados y despliegue continuo. Incluye ejemplos de uso y casos de prueba.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/ralex/api-rest",
    demo: "https://api.ralex.dev",
    stars: 56,
  },
  {
    title: "Aplicación Web Full-Stack",
    description: "Aplicación web completa con autenticación, dashboard y análisis de datos.",
    longDescription:
      "Una aplicación web full-stack que incluye autenticación de usuarios, dashboard personalizado, análisis de datos en tiempo real y exportación de informes.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/ralex/fullstack-app",
    demo: "https://app.ralex.dev",
    stars: 42,
  },
  {
    title: "Librería de Utilidades",
    description: "Colección de funciones de utilidad para desarrollo JavaScript moderno.",
    longDescription:
      "Una librería de funciones de utilidad para JavaScript moderno, con soporte para TypeScript, zero dependencies y optimizada para tree-shaking.",
    tags: ["JavaScript", "TypeScript", "Utilidades"],
    github: "https://github.com/ralex/js-utils",
    stars: 35,
  },
  {
    title: "Extensión para VS Code",
    description: "Extensión para mejorar la productividad en desarrollo web.",
    longDescription:
      "Una extensión para Visual Studio Code que añade snippets, atajos y herramientas para mejorar la productividad en desarrollo web con React, Vue y Angular.",
    tags: ["TypeScript", "VS Code", "Extensión"],
    github: "https://github.com/ralex/vscode-extension",
    stars: 28,
  },
]

export default function ProjectsPage() {
  return (
    <div className="section-container relative">
      <AnimatedBackground opacity={0.1} />
      <SectionDecorator className="top-20 right-10" type="circles" />
      <SectionDecorator className="bottom-20 left-10" type="dots" />

      <motion.div
        className="mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-6 font-space-grotesk text-4xl font-bold md:text-5xl">Proyectos</h1>
        <p className="text-body-l text-text-secondary">
          Una selección de mis proyectos de código abierto y trabajos personales. Cada proyecto representa un desafío
          único y una oportunidad para aprender y compartir conocimiento.
        </p>
      </motion.div>

      <motion.div
        className="mb-8 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
          Node.js
        </Button>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="card-hover flex h-full flex-col group">
              <CardHeader>
                <CardTitle className="group-hover:text-lime-neon transition-colors">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-text-secondary">{project.longDescription}</p>
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
                    variant="outline"
                    size="sm"
                    asChild
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}
