import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="section-container">
      <div className="mb-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="mb-6 font-space-grotesk text-4xl font-bold md:text-5xl">Sobre mí</h1>
          <div className="space-y-6 text-body-l text-text-secondary">
            <p>
              Hola, soy <span className="font-semibold text-text-primary">Ralex</span>, un desarrollador full-stack
              apasionado por el código abierto y la creación de software que resuelve problemas reales.
            </p>
            <p>
              Mi viaje en el desarrollo comenzó hace más de 8 años, cuando descubrí la programación como una forma de
              dar vida a ideas y soluciones. Desde entonces, he trabajado en diversos proyectos, desde aplicaciones web
              hasta herramientas de línea de comandos y librerías de utilidades.
            </p>
            <p>
              Me especializo en el desarrollo con{" "}
              <span className="font-semibold text-text-primary">JavaScript/TypeScript</span>,{" "}
              <span className="font-semibold text-text-primary">React</span>,{" "}
              <span className="font-semibold text-text-primary">Node.js</span> y{" "}
              <span className="font-semibold text-text-primary">Python</span>. Disfruto construyendo interfaces de
              usuario accesibles, APIs robustas y herramientas que mejoran la productividad de otros desarrolladores.
            </p>
            <p>
              Creo firmemente en el poder del código abierto para democratizar el conocimiento y permitir la
              colaboración global. Por eso, comparto activamente mis proyectos y aprendizajes con la comunidad.
            </p>
          </div>
          <div className="mt-8 flex space-x-4">
            <Button asChild>
              <a href="mailto:ralexrivero@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:col-span-5">
          <div className="relative h-80 w-80 overflow-hidden rounded-xl border-4 border-border-gray">
            <Image src="/placeholder.svg?height=320&width=320" alt="Ralex" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 font-space-grotesk text-3xl font-bold">Experiencia</h2>
        <div className="space-y-8">
          <div className="rounded-xl border border-border-gray p-6">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="font-space-grotesk text-xl font-semibold">Desarrollador Senior</h3>
                <p className="text-text-secondary">Empresa Tecnológica</p>
              </div>
              <p className="rounded-full bg-border-gray px-3 py-1 text-sm text-text-secondary">2020 - Presente</p>
            </div>
            <p className="text-text-secondary">
              Desarrollo de aplicaciones web full-stack utilizando React, Node.js y bases de datos SQL/NoSQL.
              Implementación de CI/CD, optimización de rendimiento y mentorización de desarrolladores junior.
            </p>
          </div>

          <div className="rounded-xl border border-border-gray p-6">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="font-space-grotesk text-xl font-semibold">Desarrollador Full Stack</h3>
                <p className="text-text-secondary">Startup Innovadora</p>
              </div>
              <p className="rounded-full bg-border-gray px-3 py-1 text-sm text-text-secondary">2018 - 2020</p>
            </div>
            <p className="text-text-secondary">
              Desarrollo de una plataforma SaaS desde cero utilizando React, Express y MongoDB. Implementación de
              autenticación, autorización y funcionalidades en tiempo real.
            </p>
          </div>

          <div className="rounded-xl border border-border-gray p-6">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="font-space-grotesk text-xl font-semibold">Desarrollador Frontend</h3>
                <p className="text-text-secondary">Agencia Digital</p>
              </div>
              <p className="rounded-full bg-border-gray px-3 py-1 text-sm text-text-secondary">2016 - 2018</p>
            </div>
            <p className="text-text-secondary">
              Desarrollo de interfaces de usuario para clientes de diversos sectores utilizando HTML, CSS y JavaScript.
              Implementación de diseños responsivos y optimización para dispositivos móviles.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 font-space-grotesk text-3xl font-bold">Educación</h2>
        <div className="space-y-8">
          <div className="rounded-xl border border-border-gray p-6">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="font-space-grotesk text-xl font-semibold">Ingeniería Informática</h3>
                <p className="text-text-secondary">Universidad Tecnológica</p>
              </div>
              <p className="rounded-full bg-border-gray px-3 py-1 text-sm text-text-secondary">2012 - 2016</p>
            </div>
            <p className="text-text-secondary">
              Especialización en desarrollo de software y sistemas distribuidos. Proyecto final: Plataforma de
              colaboración en tiempo real para equipos de desarrollo.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-8 font-space-grotesk text-3xl font-bold">Conéctate</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="lg" asChild className="flex items-center">
            <a href="https://github.com/ralexrivero" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="flex items-center">
            <a href="https://twitter.com/ralex_uy" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="flex items-center">
            <a href="https://www.linkedin.com/in/ronald-rivero/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="flex items-center">
            <a href="mailto:ralexrivero@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
