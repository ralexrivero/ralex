"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ContactCTA from "@/components/contact-cta"

// Sample blog posts data
const blogPosts = [
  {
    id: "modern-web-architecture",
    title: "Arquitectura Web Moderna: Un enfoque para aplicaciones escalables",
    excerpt:
      "Un análisis de diferentes enfoques arquitectónicos para aplicaciones web modernas, con énfasis en microservicios, serverless y JAMstack.",
    content: `
      <p>En el mundo actual del desarrollo web, entender cómo estructurar nuestras aplicaciones es tan importante como dominar el lenguaje de programación que utilizamos. Una arquitectura bien diseñada puede significar la diferencia entre una aplicación que escala con facilidad y una que colapsa bajo su propio peso.</p>
      // ... resto del contenido ...
    `,
    image: "/placeholder.svg?height=600&width=800",
    category: "Arquitectura",
    date: "15 junio, 2023",
    readTime: "8 min",
    author: {
      name: "Ronald Rivero",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    slug: "arquitectura-web-moderna-enfoque-aplicaciones-escalables",
    tags: ["Arquitectura", "Microservicios", "Monolito", "Serverless"],
  },
  {
    id: "typescript-prod",
    title: "TypeScript en producción: Lecciones aprendidas",
    excerpt:
      "Experiencias y mejores prácticas para implementar TypeScript en proyectos de producción de gran escala. Estrategias de tipado efectivas.",
    content: `<p>TypeScript se ha convertido en una herramienta esencial para equipos que trabajan en proyectos JavaScript a gran escala. Este artículo comparte lecciones aprendidas al implementarlo en producción.</p>`,
    image: "/placeholder.svg?height=600&width=800",
    category: "Desarrollo",
    date: "3 agosto, 2023",
    readTime: "6 min",
    author: {
      name: "Ronald Rivero",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    slug: "typescript-en-produccion-lecciones-aprendidas",
    tags: ["TypeScript", "JavaScript", "Desarrollo"],
  },
]

export default function BlogPostClient({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // Find the post by slug
      const foundPost = blogPosts.find((post) => post.slug === params.slug)
      setPost(foundPost || null)

      // If we found the post, find related posts by category
      if (foundPost) {
        const related = blogPosts.filter((p) => p.category === foundPost.category && p.id !== foundPost.id).slice(0, 3)
        setRelatedPosts(related)
      }

      setLoading(false)
    }, 500)
  }, [params.slug])

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
          <p className="text-text-secondary">Cargando artículo...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center container-main py-20">
        <h1 className="text-3xl font-space-grotesk font-medium text-text-primary mb-4">Artículo no encontrado</h1>
        <p className="text-text-secondary mb-8">El artículo que buscas no existe o ha sido removido.</p>
        <Link href="/blog" className="btn-primary">
          Volver al blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader title={post.title} subtitle={post.excerpt} />

      <article className="py-12 bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {/* Metadata del artículo */}
              <motion.div
                className="flex flex-wrap items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-lime-neon/80 text-background px-3 py-1 rounded-md text-sm font-medium">
                  {post.category}
                </span>

                <span className="text-text-secondary">{post.date}</span>

                <span className="text-text-secondary">•</span>

                <span className="text-text-secondary">{post.readTime} de lectura</span>
              </motion.div>

              {/* Imagen principal */}
              <motion.div
                className="rounded-xl overflow-hidden mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />
              </motion.div>

              {/* Contenido del artículo */}
              <motion.div
                className="prose prose-lg max-w-none prose-headings:font-space-grotesk prose-headings:font-medium prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-lime-neon prose-a:no-underline hover:prose-a:underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Etiquetas del artículo */}
              <motion.div
                className="mt-12 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-dark-panel border border-border-gray rounded-full text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Compartir artículo */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-text-primary font-space-grotesk font-medium text-lg mb-4">Compartir</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-dark-panel rounded-full text-text-secondary hover:text-lime-neon transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-dark-panel rounded-full text-text-secondary hover:text-lime-neon transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-dark-panel rounded-full text-text-secondary hover:text-lime-neon transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Aside - Información del autor y posts relacionados */}
            <aside className="lg:col-span-4">
              {/* Autor */}
              <motion.div
                className="bg-dark-panel border border-border-gray rounded-xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-space-grotesk font-medium text-text-primary">{post.author.name}</h3>
                    <p className="text-text-secondary text-sm">Desarrollador Full Stack</p>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  Ingeniero de software especializado en arquitecturas cloud y sistemas escalables. Comparte
                  conocimientos y experiencias en desarrollo web moderno.
                </p>

                <Link href="/sobre-mi" className="text-lime-neon hover:underline inline-flex items-center">
                  Más sobre el autor
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
              </motion.div>

              {/* Artículos relacionados */}
              <motion.div
                className="bg-dark-panel border border-border-gray rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-space-grotesk font-medium text-xl text-text-primary mb-4">
                  Artículos relacionados
                </h3>

                <div className="space-y-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-space-grotesk font-medium text-text-primary line-clamp-2 hover:text-lime-neon transition-colors">
                            <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                          </h4>
                          <span className="text-text-secondary text-sm">{relatedPost.date}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-text-secondary">No hay artículos relacionados disponibles.</p>
                  )}
                </div>

                <div className="mt-6 pt-6">
                  <Link href="/blog" className="text-lime-neon hover:underline inline-flex items-center">
                    Ver todos los artículos
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
            </aside>
          </div>
        </div>
      </article>

      <ContactCTA
        title="¿Te interesa colaborar o tienes preguntas?"
        subtitle="Si te gustó este artículo y quieres discutir estos temas en profundidad, no dudes en contactarme."
        buttonText="Enviar mensaje"
      />
    </>
  )
}