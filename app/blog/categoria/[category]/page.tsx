import CategoryPageClient from './CategoryPageClient'

// Sample blog posts data
const blogPosts = [
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

export async function generateStaticParams() {
  // Obtener categorías únicas de los posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))

  return categories.map(category => ({
    category
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryPageClient params={params} />
}
