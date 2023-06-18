import { Link } from "react-router-dom";
import { SiReact, SiCss3 } from '@icons-pack/react-simple-icons';
import Tag from "./search/Tag";

const SoYouCanSee = () => {
  return (
    <section className="section-soyoucansee">
      <h1>Proyectos</h1>
      <p></p>
      <div className="project-grid">
        {/* ralex.works*/}
        <article className="card-project">
          <h2 className="project-title">ralex.works</h2>
          <h3>Desarrollo de marca personal</h3>
          <ul className="project-links">
            <li><a className="link-btn" href="https://ralex.works" target="_blank">sitio web</a></li>
            <li><a className="link-btn" href="https://github.com/ralexrivero/ralex" target="_blank">repositorio</a></li>
          </ul>
          <p>Mi proyecto personal en Ralex.works, donde aplico los principios del Personal Branding, Diseño Gráfico, Desarrollo Web Full Stack y DevOps.</p>

          <div className="card-technologies">
            <h2>Tecnologías</h2>
            <ul className="project-links">
              <li className="badge-tech"><SiReact color="default" /></li>
              <li className="badge-tech"><SiCss3 color="default" /></li>
            </ul>
          </div>
          <div className="project-overview">
            <p>"ralex.works" es un proyecto de marca personal que destaca por su enfoque en el Personal Branding, Diseño Gráfico y Desarrollo Web Full Stack. Este sitio web fue creado utilizando React y Vanilla JavaScript con Vite como entorno de desarrollo. Implementa tecnologías como CSS, Google Fonts y Material Design Icons. El proyecto se desarrolla en un entorno Ubuntu con herramientas como Bash, Docker, Node, npm, git y GitHub. Se trata de una aplicación de página única (SPA) con enrutamiento, gestión de estados e internacionalización. Su interfaz minimalista, alta accesibilidad y opciones de cambio de temas gráficos e idiomas lo hacen altamente atractivo. El despliegue se realiza automáticamente en GitHub Pages. </p>
          </div>

          <Link className="link-btn" to="/so-you-can-see/ralexworks">descubre mas</Link>

          <div className="tags">
            <Tag filter="Front-end" />
            <Tag filter="React.js" />
            <Tag filter="Web design" />
            <Tag filter="Personal branding" />
          </div>

        </article>
        {/* ProBusinessCard*/}
        <article className="card-project">
          <h2 className="project-title">ProBusinessCard</h2>
          <h3>Tarjeta de negocios profesional</h3>
          <ul className="project-links">
            <li><a className="link-btn" href="https://ralexrivero.github.io/ProBusinessCard/" target="_blank">sitio web</a></li>
            <li><a className="link-btn" href="https://github.com/ralexrivero/ProBusinessCard" target="_blank">código</a></li>
          </ul>
          <p>Tarjeta de negocios profesional con opciones de tema oscuro y claro, así como cambio de idioma entre español e inglés. Esta tarjeta de negocios brinda información personal y facilita el contacto con la persona.</p>
          <div className="card-technologies">
            <h2>Tecnologías</h2>
            <ul className="project-links">
              <li className="badge-tech"><SiReact color="default" /></li>
              <li className="badge-tech"><SiCss3 color="default" /></li>
            </ul>
          </div>
          <div className="project-overview">
            <p>ProBusinessCard es la tarjeta de negocios perfecta para establecer contactos y presentarte de manera profesional. Diseñada como una Single Page Application (SPA), esta tarjeta optimizada para dispositivos móviles te ofrece características avanzadas, como la selección entre temas claros y oscuros, así como el cambio de idioma entre español e inglés. Su atractiva interfaz está diseñada para causar una impresión positiva en el mundo empresarial.</p>
            <p>ProBusinessCard es la mejor forma de impulsar los contactos en el mundo profesional</p>
          </div>

          <Link className="link-btn" to="/so-you-can-see/probusinesscard">descubre mas</Link>

          <div className="tags">
            <Tag filter="Front-end" />
            <Tag filter="React.js" />
            <Tag filter="Web design" />
            <Tag filter="Personal branding" />
          </div>

        </article>
      </div>

    </section>
  )
}

export default SoYouCanSee;
