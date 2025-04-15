import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts, BlogPost } from './BlogPage';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryPosts, setCategoryPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Simulamos carga de datos
    setLoading(true);

    setTimeout(() => {
      // Encontramos la categoría exacta (con la primera letra en mayúscula)
      const foundCategory = Array.from(
        new Set(blogPosts.map(post => post.category))
      ).find(cat => cat.toLowerCase() === category);

      setCategoryName(foundCategory || '');

      // Filtramos posts por categoría
      const filteredPosts = blogPosts.filter(
        post => post.category.toLowerCase() === category
      );

      setCategoryPosts(filteredPosts);
      setLoading(false);
    }, 500);
  }, [category]);

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
    );
  }

  // Componente de tarjeta de artículo de blog (similar al de BlogPage)
  const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
    return (
      <motion.div
        className="bg-dark-panel border border-border-gray rounded-2xl overflow-hidden h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Link
          to={`/blog/${post.slug}`}
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
        </Link>
      </motion.div>
    );
  };

  // Componente de categorías de blog (similar al de BlogPage)
  const BlogCategories: React.FC = () => {
    // Obtener categorías únicas
    const categories = Array.from(new Set(blogPosts.map(post => post.category)));

    return (
      <section className="py-10 bg-dark-panel border-t border-border-gray">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.Link
              to="/blog"
              className="px-4 py-2 rounded-full bg-background border border-border-gray text-text-secondary hover:border-lime-neon transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Todos
            </motion.Link>

            {categories.map((cat, index) => (
              <motion.Link
                key={cat}
                to={`/blog/categoria/${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full ${
                  cat.toLowerCase() === category
                    ? 'bg-lime-neon text-background font-medium'
                    : 'bg-background border border-border-gray text-text-secondary hover:border-lime-neon'
                } transition-colors`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                {cat}
              </motion.Link>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <PageHeader
        title={categoryName || 'Categoría'}
        subtitle={`Artículos sobre ${categoryName || 'esta categoría'} - Conocimientos y reflexiones técnicas`}
      />

      <BlogCategories />

      <section className="py-16 bg-background">
        <div className="container-main">
          {categoryPosts.length > 0 ? (
            <>
              <motion.h2
                className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Artículos en {categoryName}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="font-gilroy font-medium text-2xl text-text-primary mb-4">
                No se encontraron artículos
              </h2>
              <p className="text-text-secondary mb-8">
                No hay artículos disponibles en esta categoría por el momento.
              </p>
              <Link to="/blog" className="btn-primary">
                Ver todas las categorías
              </Link>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default CategoryPage;