import { Routes, Route } from 'react-router-dom';
import { FeaturesProvider } from './context/FeaturesContext';
import { FeatureGuard } from './components/FeatureGuard';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'; // Nueva página para el contenido actual
import AboutPage from './pages/AboutPage'; // Página "Sobre mí"
import ServicesPage from './pages/ServicesPage'; // Página "Servicios"
import ProjectsPage from './pages/ProjectsPage'; // Página "Proyectos"
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage'; // Página "Blog"
import BlogPostPage from './pages/BlogPostPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage'; // Página "Contacto"
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <FeaturesProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="about"
            element={
              <FeatureGuard feature="about">
                <AboutPage />
              </FeatureGuard>
            }
          />
          <Route
            path="services"
            element={
              <FeatureGuard feature="services">
                <ServicesPage />
              </FeatureGuard>
            }
          />
          <Route
            path="projects"
            element={
              <FeatureGuard feature="projects">
                <ProjectsPage />
              </FeatureGuard>
            }
          />
          <Route
            path="projects/:id"
            element={
              <FeatureGuard feature="projects">
                <ProjectDetailPage />
              </FeatureGuard>
            }
          />
          <Route
            path="blog"
            element={
              <FeatureGuard feature="blog">
                <BlogPage />
              </FeatureGuard>
            }
          />
          <Route
            path="blog/:slug"
            element={
              <FeatureGuard feature="blog">
                <BlogPostPage />
              </FeatureGuard>
            }
          />
          <Route
            path="blog/categoria/:category"
            element={
              <FeatureGuard feature="blog">
                <CategoryPage />
              </FeatureGuard>
            }
          />
          <Route
            path="contact"
            element={
              <FeatureGuard feature="contact">
                <ContactPage />
              </FeatureGuard>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </FeaturesProvider>
  );
};

export default App;
