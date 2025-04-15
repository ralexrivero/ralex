import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/blog/categoria/:category" element={<CategoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
