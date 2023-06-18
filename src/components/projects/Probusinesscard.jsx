import { Link } from "react-router-dom";
import { SiReact, SiCss3, SiVite, SiJavascript, SiGooglefonts, SiGithubpages, SiUbuntu, SiGnubash, SiDocker, SiNodedotjs, SiNpm, SiGit, SiGithub, SiVisualstudiocode } from "@icons-pack/react-simple-icons";
import Tag from "../search/Tag";

const Probusinesscard = () => {
  return (
    <section className="section-project-detail">
      <h1>Tarjeta de negocios profesional: <span className="project-name">ProBusinessCard</span></h1>
      <div className="card-technologies">
          <h2>Tecnologías</h2>
          <ul className="tech-list">
            <li className="badge-tech"><SiVite title="Vite" color="default" /></li>
            <li className="badge-tech"><SiReact title="React.js" color="default" /></li>
            <li className="badge-tech"><SiJavascript title="JavaScript Vanilla" color="default" /></li>
            <li className="badge-tech"><SiCss3 title="CSS" color="default" /></li>
            <li className="badge-tech"><SiGooglefonts title="Google Fonts" color="default" /></li>
            <li className="badge-tech"><SiGithubpages title="Github Pages" color="default" size="4.5rem" /></li>
            <li className="badge-tech"><SiUbuntu title="Ubuntu" color="default" /></li>
            <li className="badge-tech"><SiGnubash title="GNU Bash" color="default" /></li>
            <li className="badge-tech"><SiDocker title="Docker" color="default" /></li>
            <li className="badge-tech"><SiNodedotjs title="Node.js" color="default" /></li>
            <li className="badge-tech"><SiNpm title="npm" color="default" /></li>
            <li className="badge-tech"><SiGit title="Git" color="default" /></li>
            <li className="badge-tech"><SiGithub title="Github" color="default" /></li>
            <li className="badge-tech"><SiVisualstudiocode title="VS Code" color="default" /></li>
          </ul>
        </div>
        <div className="project-description">
          <p>El proyecto se desarrolló utilizando React y JavaScript Vanilla sobre una base de Vite. Los estilos se implementaron con CSS sin frameworks. El diseño se construyó sobre componentes y se desplegó en GitHub Pages. Las dependencias se gestionaron mediante npm, y se utilizaron Bootstrap Icons, ghpages, useState y useEffect como hooks, así como Helmet para la gestión de metadatos para redes sociales con OpenGraph.j</p>
          <p>En este proyecto, se destacó el uso de tecnologías modernas como React, JavaScript Vanilla y Vite. El diseño se basó en componentes, lo que permitió una estructura modular y fácilmente escalable. Gracias a la optimización de rendimiento de Vite, la aplicación ofrece una carga rápida y una experiencia de usuario fluida.</p>
          <p>Los estilos personalizados, desarrollados con CSS, brindan una apariencia única y adaptada a las necesidades del proyecto. La implementación de Bootstrap Icons añade una amplia variedad de iconos para mejorar la usabilidad y la estética.</p>
          <p>El despliegue en GitHub Pages proporciona una plataforma confiable y accesible para compartir y mostrar el proyecto al público. Además, la gestión de dependencias con npm garantiza una administración eficiente de los paquetes y una fácil actualización de versiones.</p>
          <p>La aplicación utiliza hooks como useState y useEffect para la gestión de estados y efectos, lo que optimiza la interactividad y la capacidad de respuesta. Por otro lado, Helmet se encarga de la generación de metadatos para las redes sociales, asegurando una presentación atractiva y relevante en las vistas previas de enlaces compartidos en plataformas como Facebook y Twitter.</p>
          <p>En resumen, este proyecto destaca por su implementación en tecnologías de vanguardia y su enfoque en la optimización de rendimiento y la experiencia de usuario. La combinación de React, JavaScript Vanilla y Vite proporciona un entorno de desarrollo eficiente y una interfaz ágil. El uso de CSS personalizado y Bootstrap Icons añade personalidad y funcionalidad atractiva. El despliegue en GitHub Pages y la gestión de dependencias con npm aseguran una experiencia de usuario sólida y un flujo de trabajo simplificado. Además, la incorporación de useState, useEffect y Helmet mejora la interactividad y la visibilidad en las redes sociales</p>
        </div>
        <ul className="project-links">
          <li><a className="link-btn" href="https://ralexrivero.github.io/ProBusinessCard/" target="_blank">sitio web</a></li>
          <li><a className="link-btn" href="https://github.com/ralexrivero/ProBusinessCard" target="_blank">repositorio</a></li>
        </ul>

        <Link className="link-btn" to="/so-you-can-see/">proyectos</Link>

        <div className="tags">
          <Tag filter="Front-end" />
          <Tag filter="React.js" />
          <Tag filter="Web design" />
          <Tag filter="Personal branding" />
        </div>

    </section>
  )
}

export default Probusinesscard;
