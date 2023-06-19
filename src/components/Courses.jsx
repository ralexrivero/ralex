import { Link } from "react-router-dom";
import { SiHtml5, SiCss3, SiJavascript } from '@icons-pack/react-simple-icons';
import Tag from "./search/Tag";
import Level from './Level';

const Courses = () => {
  return (
    <section className="section-courses">
      <article className="course-overview">
        <h2 className="h2-highlight">Frontend 101</h2>
        <p>Fundamentos del desarrollo Web desde cero</p>
        <div className="card-technologies">
            <h2>Tecnologías</h2>
            <ul className="project-links">
              <li className="badge-tech"><SiHtml5 title="HTML" color="default" /></li>
              <li className="badge-tech"><SiCss3 title="CSS" color="default" /></li>
              <li className="badge-tech"><SiJavascript title="JavaScript" color="default" /></li>
            </ul>
          </div>
          <div className="course-level">
            <Level level="1" />

          </div>
        <div className="course-description">
          <p>Frontend 101 es el curso perfecto para adentrarte en el emocionante mundo del desarrollo web frontend. Aprenderás desde los conceptos fundamentales hasta las tecnologías más relevantes, como HTML, CSS y JavaScript, construyendo una base sólida para crear páginas web impactantes.</p>
          <p>Sumérgete en proyectos prácticos, laboratorios y materiales teóricos diseñados para guiarte en el proceso de construcción de páginas web estáticas. Con Frontend 101, te convertirás en un verdadero maestro del frontend y obtendrás los conocimientos necesarios para dar tus primeros pasos en el mundo de la programación y el desarrollo web frontend.</p>
        </div>
        <Link className="link-btn" to="/courses/frontend101/">Ver más</Link>
        <div className="tags">
            <Tag filter="Front-end" />
            <Tag filter="HTML" />
            <Tag filter="CSS" />
            <Tag filter="JavaScript" />
            <Tag filter="Curso" />
          </div>
      </article>
    </section>
  )
}

export default Courses;
