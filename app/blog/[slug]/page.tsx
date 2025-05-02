import BlogPostClient from './BlogPostClient'

// Sample blog posts data
const blogPosts = [
  {
    id: "modern-web-architecture",
    title: "Arquitectura Web Moderna: Un enfoque para aplicaciones escalables",
    excerpt:
      "Un análisis de diferentes enfoques arquitectónicos para aplicaciones web modernas, con énfasis en microservicios, serverless y JAMstack.",
    content: `
      <p>En el mundo actual del desarrollo web, entender cómo estructurar nuestras aplicaciones es tan importante como dominar el lenguaje de programación que utilizamos. Una arquitectura bien diseñada puede significar la diferencia entre una aplicación que escala con facilidad y una que colapsa bajo su propio peso.</p>

      <p>A lo largo de este artículo, exploraremos distintos patrones arquitectónicos, desde los tradicionales monolitos hasta los modernos enfoques basados en microservicios y arquitecturas sin servidor (serverless). Analizaremos sus ventajas, desventajas y cuándo es más adecuado utilizar cada uno.</p>

      <h2>Entendiendo las necesidades de tu aplicación</h2>
      <p>Antes de elegir un patrón arquitectónico, es fundamental entender las necesidades específicas de tu aplicación. Algunas preguntas clave que debes hacerte son:</p>

      <ul>
        <li>¿Qué volumen de tráfico esperas manejar?</li>
        <li>¿Cuán crítica es la disponibilidad de tu servicio?</li>
        <li>¿Qué requerimientos de seguridad debes cumplir?</li>
        <li>¿Cómo esperas que evolucione tu aplicación en el tiempo?</li>
        <li>¿Qué restricciones de presupuesto o recursos tienes?</li>
      </ul>

      <p>Las respuestas a estas preguntas te guiarán hacia la arquitectura más adecuada para tu caso específico. No existe una solución única que funcione para todos los proyectos.</p>

      <h2>Monolitos: El enfoque tradicional</h2>
      <p>Históricamente, la mayoría de las aplicaciones se construían como monolitos: una única unidad de código que maneja todas las responsabilidades de la aplicación. Este enfoque tiene varias ventajas:</p>

      <ul>
        <li>Desarrollo inicial más rápido y sencillo</li>
        <li>Despliegue simplificado</li>
        <li>Mayor facilidad de prueba como unidad completa</li>
      </ul>

      <p>Sin embargo, a medida que la aplicación crece, los monolitos pueden volverse difíciles de mantener, escalar y evolucionar. El código se vuelve más interdependiente y los cambios en una parte pueden afectar inesperadamente a otras áreas.</p>

      <div class="bg-dark-panel border border-border-gray rounded-xl p-6 my-8">
        <h3 class="text-lime-neon mb-4 mt-0">Caso de estudio: Refactorización de un monolito</h3>
        <p class="m-0">En un proyecto reciente, transformamos un monolito de 5 años en una arquitectura orientada a servicios. El resultado: tiempos de despliegue reducidos de 45 minutos a 3 minutos, y la capacidad de escalar componentes individuales según la carga, lo que redujo los costos de infraestructura en un 40%.</p>
      </div>

      <h2>Microservicios: Divide y vencerás</h2>
      <p>Los microservicios representan el extremo opuesto al monolito: dividir la aplicación en múltiples servicios pequeños e independientes, cada uno con una responsabilidad bien definida. Las ventajas de este enfoque incluyen:</p>

      <ul>
        <li>Escalabilidad individual de cada servicio</li>
        <li>Flexibilidad para usar diferentes tecnologías según las necesidades de cada servicio</li>
        <li>Equipos de desarrollo que pueden trabajar de forma más independiente</li>
        <li>Mayor resiliencia: un fallo en un servicio no necesariamente afecta a los demás</li>
      </ul>

      <p>Sin embargo, los microservicios traen consigo su propia complejidad: necesitan una sólida infraestructura de orquestación, monitoreo, y comunicación entre servicios. Además, las transacciones distribuidas y la consistencia de datos se vuelven desafíos significativos.</p>

      <h2>Conclusión</h2>
      <p>La elección de la arquitectura adecuada es un balance entre complejidad, escalabilidad, y velocidad de desarrollo. En muchos casos, un enfoque híbrido puede ser la mejor opción, comenzando con un monolito bien estructurado y evolucionando hacia microservicios solo en las áreas donde sea necesario.</p>

      <p>Lo más importante es mantener los principios de diseño sólidos: separación de responsabilidades, bajo acoplamiento, alta cohesión, y diseño orientado a dominio. Estos principios te servirán bien, independientemente de la arquitectura específica que elijas.</p>
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

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient params={params} />
}
