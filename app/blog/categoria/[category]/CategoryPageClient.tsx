"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

// Sample blog posts data
interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: {
    name: string
    avatar: string
  }
  slug: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "modern-web-architecture",
    title: "Arquitectura Web Moderna: Un enfoque para aplicaciones escalables",
    excerpt:
      "Un análisis de diferentes enfoques arquitectónicos para aplicaciones web modernas, con énfasis en microservicios, serverless y JAMstack.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Arquitectura",
    date: "15 junio, 2023",
    readTime: "8 min",
    author: {
      name: "Ronald Rivero",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    slug: "arquitectura-web-moderna-enfoque-aplicaciones-escalables",
    featured: true,
  },
  {
    id: "typescript-prod",
    title: "TypeScript en producción: Lecciones aprendidas",
    excerpt:
      "Experiencias y mejores prácticas para implementar TypeScript en proyectos de producción de gran escala. Estrategias de tipado efectivas.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Desarrollo",
    date: "3 agosto, 2023",
    readTime: "6 min",
    author: {
      name: "Ronald Rivero",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    slug: "typescript-en-produccion-lecciones-aprendidas",
    featured: true,
  },
]

export default function CategoryPageClient({ params }: { params: { category: string } }) {
  const [categoryPosts, setCategoryPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // Encontrar la categoría exacta (con la primera letra en mayúscula)
      const foundCategory = Array.from(
        new Set(blogPosts.map(post => post.category))
      ).find(cat => cat.toLowerCase() === params.category)

      setCategoryName(foundCategory || '')

      // Filtrar posts por categoría
      const filteredPosts = blogPosts.filter(
        post => post.category.toLowerCase() === params.category
      )

      setCategoryPosts(filteredPosts)
      setLoading(false)
    }, 500)
  }, [params.category])

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-lime-neon/20 h-16 w-16 flex items-center justify-center mb-4">
            <svg className="animate-spin h-8 w-8 text-lime-neon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="text-text-secondary">Cargando artículos...</p>
        </div>
      </div>
    )
  }

  // Blog card component
  const BlogCard = ({ post, index }: { post: BlogPost, index: number }) => {
    return (
      <motion.div
        className="bg-dark-panel border border-border-gray rounded-2xl overflow-hidden h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="block h-full"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading={index < 2 ? "eager" : "lazy"}
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-lime-neon/80 text-background text-sm font-medium px-3 py-1 rounded-md">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center text-sm text-text-secondary mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} de lectura</span>
            </div>

            <h2 className="font-space-grotesk font-medium text-xl md:text-2xl text-text-primary mb-3 hover:text-lime-neon transition-colors line-clamp-2">
              {post.title}
            </h2>

            <p className="text-text-secondary mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center mt-6">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="text-text-secondary text-sm">
                {post.author.name}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  // Blog categories component
  const BlogCategories = () => {
    // Get unique categories
    const categories = Array.from(new Set(blogPosts.map(post => post.category)))

    return (
      <section className="py-10 bg-dark-panel">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/categoria/${category.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.toLowerCase() === params.category
                    ? 'bg-lime-neon text-background'
                    : 'bg-dark-panel border border-border-gray text-text-secondary hover:bg-lime-neon/10'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      <BlogCategories />
      <div className="container-main py-10">
        {categoryPosts.length === 0 ? (
          <p className="text-center text-text-secondary">No hay artículos en esta categoría.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categoryPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}