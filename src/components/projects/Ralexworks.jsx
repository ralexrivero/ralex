import { Link } from "react-router-dom";
import { SiReact, SiCss3, SiVite, SiJavascript, SiGooglefonts, SiMaterialdesignicons, SiGithubpages, SiUbuntu, SiGnubash, SiDocker, SiNodedotjs, SiNpm, SiGit, SiGithub, SiVisualstudiocode } from "@icons-pack/react-simple-icons";

const Ralexworks = () => {
  return (
    <section className="section-project-detail">
      <h1>Desarrollo de marca personal: <span className="project-name">ralex.works</span></h1>
      <div className="card-technologies">
          <h2>Tecnologias</h2>
          <ul className="tech-list">
            <li className="badge-tech"><SiVite title="Vite" color="default" /></li>
            <li className="badge-tech"><SiReact title="React.js" color="default" /></li>
            <li className="badge-tech"><SiJavascript title="JavaScript Vanilla" color="default" /></li>
            <li className="badge-tech"><SiCss3 title="CSS" color="default" /></li>
            <li className="badge-tech"><SiGooglefonts title="Google Fonts" color="default" /></li>
            <li className="badge-tech"><SiMaterialdesignicons title="Material Design Icons" color="default" /></li>
            <li className="badge-tech"><SiGithubpages title="Github Pages" color="default" size="4.5rem" /></li>
            <li className="badge-tech"><SiUbuntu title="Ubuntu" color="default" /></li>
            <li className="badge-tech"><SiGnubash title="GNU Bash" color="default" /></li>
            <li className="badge-tech"><SiDocker title="Docker" color="default" /></li>
            <li className="badge-tech"><SiNodedotjs title="Node.js" color="default" /></li>
            <li className="badge-tech"><SiNpm title="npm" color="default" /></li>
            <li className="badge-tech"><SiGit title="Git" color="default" /></li>
            <li className="badge-tech"><SiGithub title="Github" color="default" /></li>
            <li className="badge-tech"><SiVisualstudiocode title="Github" color="default" /></li>
          </ul>
        </div>
        <div className="project-description">
          <p>El proyecto se desarrolló utilizando React y Vanilla JavaScript con Vite, sin frameworks adicionales. Se creó un CSS personalizado siguiendo la estrategia mobile-first y aprovechando las ventajas del layout Grid y la distribución Flexbox. Se emplearon iconos de Material Design y fuentes de Google Fonts para enriquecer la experiencia visual. Durante el desarrollo, se utilizó un entorno basado en Ubuntu y Bash, con un contenedor Docker para Node 18 y Vite. La gestión de dependencias se realizó mediante npm, y el control de versiones se llevó a cabo con git y GitHub. La herramienta de edición utilizada fue VS Code.</p>
          <p>La aplicación es una Single Page Application (SPA) con una arquitectura modular basada en componentes. Se implementó un Router para la gestión de contenidos y navegación, y se utilizaron useState y useEffect para gestionar los estados, lo que permitió la alternancia del menú responsivo, la personalización de los temas gráficos y el cambio de idiomas. La internacionalización se realizó a través de i18n para adaptarse a diferentes idiomas y culturas. El diseño de la interfaz se enfocó en un estilo minimalista con alto contraste, y se ofrecen opciones de light mode y dark mode.</p>
          <p>El despliegue se realizó mediante un pipeline automatizado de GitHub Pages, alojado en GitHub, para garantizar una publicación rápida y accesible. Esto proporciona a los visitantes y usuarios una experiencia fluida y conveniente al acceder al proyecto.</p>
        </div>
        <ul className="project-links">
          <li><a className="link-btn" href="https://ralex.works" target="_blank">sitio web</a></li>
          <li><a className="link-btn" href="https://github.com/ralexrivero/ralex" target="_blank">repositorio</a></li>
        </ul>

        <Link className="link-btn" to="/so-you-can-see/">proyectos</Link>
    </section>
  )
}

export default Ralexworks;
