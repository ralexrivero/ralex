import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

// Definición del tipo de datos para un artículo de blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  slug: string;
  featured?: boolean;
}

// Datos de ejemplo para artículos de blog
export const blogPosts: BlogPost[] = [
  {
    id: "modern-web-architecture",
    title: "Arquitectura Web Moderna: Un enfoque para aplicaciones escalables",
    excerpt: "Un análisis de diferentes enfoques arquitectónicos para aplicaciones web modernas, con énfasis en microservicios, serverless y JAMstack.",
    image: "/images/blog/architecture.webp",
    category: "Arquitectura",
    date: "15 junio, 2023",
    readTime: "8 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "arquitectura-web-moderna-enfoque-aplicaciones-escalables",
    featured: true
  },
  {
    id: "typescript-prod",
    title: "TypeScript en producción: Lecciones aprendidas",
    excerpt: "Experiencias y mejores prácticas para implementar TypeScript en proyectos de producción de gran escala. Estrategias de tipado efectivas.",
    image: "/images/blog/typescript.webp",
    category: "Desarrollo",
    date: "3 agosto, 2023",
    readTime: "6 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "typescript-en-produccion-lecciones-aprendidas",
    featured: true
  },
  {
    id: "data-analytics-python",
    title: "Data Analytics con Python: De los datos a las decisiones",
    excerpt: "Exploración de herramientas y bibliotecas en el ecosistema Python para transformar datos en insights accionables para el negocio.",
    image: "/images/blog/data-analytics.webp",
    category: "Data",
    date: "27 septiembre, 2023",
    readTime: "10 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "data-analytics-python-de-datos-a-decisiones",
    featured: true
  },
  {
    id: "containerization",
    title: "Contenerización: Más allá de Docker",
    excerpt: "Un análisis de las alternativas modernas a Docker para contenerización, incluyendo Podman, Lima y herramientas nativas de la nube.",
    image: "/images/blog/containers.webp",
    category: "DevOps",
    date: "12 octubre, 2023",
    readTime: "7 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "contenerizacion-mas-alla-docker",
    featured: false
  },
  {
    id: "headless-cms",
    title: "Sistemas CMS Headless: Libertad para desarrolladores y contenidistas",
    excerpt: "Una comparativa de los principales CMS headless y cómo elegir la mejor opción según los requisitos de tu proyecto.",
    image: "/images/blog/headless-cms.webp",
    category: "Arquitectura",
    date: "5 noviembre, 2023",
    readTime: "9 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "sistemas-cms-headless-libertad-desarrolladores-contenidistas",
    featured: false
  },
  {
    id: "api-design",
    title: "Diseño de APIs: Pensando en los desarrolladores como usuarios",
    excerpt: "Principios y prácticas para diseñar APIs que sean intuitivas, consistentes y fáciles de usar, enfocado en la experiencia del desarrollador.",
    image: "/images/blog/api-design.webp",
    category: "Backend",
    date: "18 diciembre, 2023",
    readTime: "6 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "diseno-apis-pensando-desarrolladores-usuarios",
    featured: false
  },
  {
    id: "tailwind-v4",
    title: "Tailwind CSS v4: Novedades y mejores prácticas",
    excerpt: "Un recorrido por las principales novedades de Tailwind CSS v4 y cómo incorporarlas efectivamente en tus proyectos.",
    image: "/images/blog/tailwind.webp",
    category: "Frontend",
    date: "23 febrero, 2024",
    readTime: "5 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "tailwind-css-v4-novedades-mejores-practicas",
    featured: false
  },
  {
    id: "aws-lambda",
    title: "AWS Lambda: Patrones arquitectónicos para aplicaciones serverless",
    excerpt: "Estrategias de diseño para crear arquitecturas escalables, robustas y económicas utilizando funciones AWS Lambda y servicios complementarios.",
    image: "/images/blog/aws-lambda.webp",
    category: "Cloud",
    date: "10 marzo, 2024",
    readTime: "8 min",
    author: {
      name: "Raúl Rivero",
      avatar: "/images/avatar.webp"
    },
    slug: "aws-lambda-patrones-arquitectonicos-aplicaciones-serverless",
    featured: false
  }
];

// Componente de tarjeta de artículo de blog
const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  return (
    <motion.div
      className="bg-dark-panel border border-border-gray rounded-2xl overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <a
        href={`/blog/${post.slug}`}
        className="block h-full"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.image}
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

          <h2 className="font-gilroy font-medium text-xl md:text-2xl text-text-primary mb-3 hover:text-lime-neon transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-text-secondary mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center mt-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="text-text-secondary text-sm">
              {post.author.name}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

// Componente de artículo destacado
const FeaturedPost: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  return (
    <motion.div
      className="bg-dark-panel border border-border-gray rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative aspect-square md:aspect-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-lime-neon/80 text-background text-sm font-medium px-3 py-1 rounded-md">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col">
          <div className="flex items-center text-sm text-text-secondary mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} de lectura</span>
          </div>

          <h2 className="font-gilroy font-medium text-3xl text-text-primary mb-4">
            {post.title}
          </h2>

          <p className="text-text-secondary mb-6 flex-grow">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <span className="text-text-secondary text-sm">
                  {post.author.name}
                </span>
              </div>

              <span className="inline-flex items-center text-lime-neon hover:underline">
                Leer artículo
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Sección de artículos destacados
const FeaturedPosts: React.FC = () => {
  const featuredPosts = blogPosts.filter(p => p.featured);

  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Artículos destacados
        </motion.h2>

        <div className="space-y-12 mb-12">
          {featuredPosts.map((post, index) => (
            <FeaturedPost
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de categorías de blog
const BlogCategories: React.FC = () => {
  // Obtener categorías únicas
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <section className="py-10 bg-dark-panel border-t border-border-gray">
      <div className="container-main">
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/blog"
            className="px-4 py-2 rounded-full bg-lime-neon text-background font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Todos
          </motion.a>

          {categories.map((category, index) => (
            <motion.a
              key={category}
              href={`/blog/categoria/${category.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-background border border-border-gray text-text-secondary hover:border-lime-neon transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              {category}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de grid de artículos
const BlogGrid: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Todos los artículos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente para la sección de newsletter
const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-dark-panel border-y border-border-gray">
      <div className="container-main">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-4">
              Mantente actualizado
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Suscríbete para recibir artículos semanales sobre desarrollo de software, arquitectura de sistemas y mejores prácticas en tecnología. Sin spam, solo contenido de valor.
            </p>
          </motion.div>

          <motion.form
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-5 py-3 bg-background border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-neon focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="btn-primary py-3 px-6 text-center whitespace-nowrap"
            >
              Suscribirse
            </button>
          </motion.form>

          <motion.p
            className="text-text-secondary text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Te enviaré contenido técnico relevante. Puedes cancelar tu suscripción en cualquier momento.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Componente para la página completa
const BlogPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Reflexiones técnicas, guías prácticas y perspectivas sobre desarrollo de software, arquitectura y tecnologías emergentes"
      />
      <BlogCategories />
      <FeaturedPosts />
      <BlogGrid />
      <NewsletterSection />
      <ContactCTA />
    </>
  );
};

export default BlogPage;