import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'; // Nueva página para el contenido actual
import AboutPage from './pages/AboutPage'; // Página "Sobre mí"
import ServicesPage from './pages/ServicesPage'; // Página "Servicios"
import ProjectsPage from './pages/ProjectsPage'; // Página "Proyectos"
import BlogPage from './pages/BlogPage'; // Página "Blog"
import ContactPage from './pages/ContactPage'; // Página "Contacto"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Ruta comodín para 404 si es necesario */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;
