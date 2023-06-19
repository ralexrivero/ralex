import { Link } from "react-router-dom";
import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiReact } from '@icons-pack/react-simple-icons';
import Tag from "./search/Tag";
import Level from './Level';

const Courses = () => {
  return (
    <section className="section-courses">
      {/** Frontend101 */}
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
      {/** PostgresSql101 */}
      <article className="course-overview">
        <h2 className="h2-highlight">Introducción a PostgreSQL</h2>
        <p>Aprende los fundamentos de PostgreSQL</p>
        <div className="card-technologies">
          <h2>Tecnologías</h2>
          <ul className="project-links">
            <li className="badge-tech"><SiPostgresql title="PostgreSQL" color="default" /></li>
          </ul>
        </div>
    <div className="course-level">
      <Level level="1" />
    </div>
    <div className="course-description">
      <p>El curso de Introducción a PostgreSQL te ofrece la oportunidad de sumergirte en el fascinante mundo de las bases de datos relacionales. Aprenderás desde los conceptos básicos hasta las técnicas más avanzadas de PostgreSQL, adquiriendo los conocimientos necesarios para administrar y utilizar eficazmente esta poderosa base de datos.</p>
      <p>Explora ejemplos prácticos, laboratorios y material teórico diseñado para guiarte en el proceso de comprensión de PostgreSQL. Con el curso de Introducción a PostgreSQL, estarás preparado para trabajar con bases de datos, escribir consultas avanzadas y desarrollar aplicaciones con esta tecnología líder en la industria.</p>
    </div>
    {/* <Link className="link-btn" to="/courses/intro-postgresql/">Ver más</Link> */}
    <div className="tags">
      <Tag filter="Base de datos" />
      <Tag filter="PostgreSQL" />
      <Tag filter="Curso" />
    </div>
      </article>
      {/** React.js */}
      <article className="course-overview">
  <h2 className="h2-highlight">Introducción a React.js</h2>
  <p>Aprende los fundamentos de React.js</p>
  <div className="card-technologies">
    <h2>Tecnologías</h2>
    <ul className="project-links">
      <li className="badge-tech"><SiReact title="React.js" color="default" /></li>
    </ul>
  </div>
  <div className="course-level">
    <Level level="1" />
  </div>
  <div className="course-description">
    <p>El curso de Introducción a React.js te ofrece una emocionante oportunidad de sumergirte en el apasionante mundo del desarrollo web frontend con React.js. Desde los conceptos básicos hasta las técnicas más avanzadas, adquirirás los conocimientos necesarios para crear aplicaciones web interactivas y dinámicas.</p>
    <p>Sumérgete en una experiencia de aprendizaje enriquecedora a través de proyectos prácticos, desafiantes laboratorios y material teórico cuidadosamente diseñado para guiarte en el proceso de comprensión de React.js. Con el curso de Introducción a React.js, estarás preparado para crear interfaces de usuario modernas y atractivas, gestionar eficientemente el estado de tus aplicaciones y aprovechar al máximo la reutilización de componentes en tus proyectos de desarrollo frontend.</p>
  </div>
  {/* <Link className="link-btn" to="/courses/intro-react/">Ver más</Link> */}
  <div className="tags">
    <Tag filter="Frontend" />
    <Tag filter="React.js" />
    <Tag filter="Curso" />
  </div>
</article>
    </section>
  )
}

export default Courses;
