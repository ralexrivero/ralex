import { Link } from "react-router-dom";
import { SiReact, SiCss3 } from '@icons-pack/react-simple-icons';

const SoYouCanSee = () => {
  return (
    <section className="section-soyoucansee">
      <h1>Proyectos</h1>
      <p></p>
      <article className="card-project">
        <h2 className="title-2">ralex.works</h2>
        <h3>Desarrollo de marca personal</h3>
        <ul>
          <li><a href="https://ralex.works" target="_blank">sitio web</a></li>
          <li><a href="https://github.com/ralexrivero/ralex" target="_blank">repositorio</a></li>
        </ul>
        <p>Mi proyecto personal en Ralex.works, donde aplico los principios del Personal Branding, Diseño Gráfico, Desarrollo Web Full Stack y DevOps.</p>

        <div className="card-technologies">
          <h2>Tecnologias</h2>
          <ul>
            <li className="badge-tech"><SiReact color="default" /></li>
            <li className="badge-tech"><SiCss3 color="default" /></li>
          </ul>
        </div>

        <p>"ralex.works" es un proyecto de marca personal que destaca por su enfoque en el Personal Branding, Diseño Gráfico y Desarrollo Web Full Stack. Este sitio web fue creado utilizando React y Vanilla JavaScript con Vite como entorno de desarrollo. Implementa tecnologías como CSS, Google Fonts y Material Design Icons. El proyecto se desarrolla en un entorno Ubuntu con herramientas como Bash, Docker, Node, npm, git y GitHub. Se trata de una aplicación de página única (SPA) con enrutamiento, gestión de estados e internacionalización. Su interfaz minimalista, alta accesibilidad y opciones de cambio de temas gráficos e idiomas lo hacen altamente atractivo. El despliegue se realiza automáticamente en GitHub Pages. </p>

        <Link to="/so-you-can-see/ralex.works"><button>descubre mas</button></Link>

      </article>
    </section>
  )
}

export default SoYouCanSee;
