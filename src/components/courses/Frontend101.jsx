import { Link } from "react-router-dom";
import { SiHtml5, SiCss3, SiJavascript } from '@icons-pack/react-simple-icons';
import Tag from "../search/Tag";
import Level from "../Level";

const Frontend101 = () => {
  return (
    <section className="section-courses">
      <article className="course-detail">
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
          <p>Frontend 101 es un completo curso introductorio al desarrollo web frontend desde cero. En este curso, explorarás los conceptos fundamentales que rigen el mundo de Internet y la web. A lo largo del programa, se abordarán las tecnologías más relevantes utilizadas en el desarrollo web, como HTML, CSS y JavaScript.</p>
          <p>El enfoque de este curso se centra en brindarte una sólida base de conocimientos y habilidades. Aprenderás desde los fundamentos hasta los aspectos más avanzados de cada uno de estos lenguajes de programación. Al dominar estas herramientas esenciales, estarás preparado para crear páginas web de manera efectiva y profesional.</p>
          <p>El curso se estructura de forma práctica y orientada a la experiencia. Podrás participar en emocionantes proyectos, realizar laboratorios interactivos y explorar ejemplos de código prácticos. Además, tendrás acceso a material teórico exhaustivo que te guiará en cada paso del proceso de construcción de páginas web estáticas.</p>
          <p>Frontend 101 es el punto de partida ideal para aquellos que deseen adentrarse en el apasionante mundo de la programación y el desarrollo frontend. No se requiere experiencia previa, ya que el curso está diseñado para llevarte desde cero hasta la capacidad de crear tus propias aplicaciones web.</p>
        </div>
        <div className="course-content">
          <h2>Listado del Curso</h2>
          <h3>Módulo de HTML:</h3>
          <ol>
            <li>Introducción a Internet y la web</li>
            <li>Estructura básica de un documento HTML</li>
            <li>Etiquetas y elementos HTML fundamentales</li>
            <li>Creación de enlaces y navegación entre páginas</li>
            <li>Uso de imágenes y multimedia en HTML</li>
            <li>Tablas y formularios en HTML</li>
            <li>Semántica HTML para mejorar la accesibilidad y SEO</li>
            <li>Práctica y ejemplos de código HTML</li>
          </ol>
          <h3>Módulo de CSS:</h3>
          <ol start="9">
            <li>Introducción a CSS y su importancia en el diseño web</li>
            <li>Selectores y propiedades CSS básicas</li>
            <li>Manipulación de texto y fuentes en CSS</li>
            <li>Diseño de cajas y posicionamiento de elementos con CSS</li>
            <li>Estilización de enlaces y navegación</li>
            <li>Creación de diseños responsivos con CSS media queries</li>
            <li>Animaciones y transformaciones CSS</li>
            <li>Práctica y ejemplos de código CSS</li>
          </ol>
          <h3>Módulo de JavaScript:</h3>
          <ol start="17">
            <li>Introducción a JavaScript y su papel en la interactividad web</li>
            <li>Variables, tipos de datos y operadores en JavaScript</li>
            <li>Control de flujo y estructuras de control en JavaScript</li>
            <li>Funciones y eventos en JavaScript</li>
            <li>Manipulación del DOM con JavaScript</li>
            <li>Trabajo con arrays y objetos en JavaScript</li>
            <li>Introducción a jQuery y su uso en la interacción con el DOM</li>
            <li>Proyecto final: Aplicación web interactiva utilizando HTML, CSS y JavaScript</li>
          </ol>
          <p className="project-resume">Cada módulo del curso se abordará de manera exhaustiva, brindando ejemplos prácticos y actividades para reforzar los conceptos aprendidos. Al finalizar el curso, tendrás los conocimientos necesarios para desarrollar tus propias páginas web con HTML, CSS y JavaScript, así como para crear aplicaciones web interactivas utilizando estas tecnologías.</p>
        </div>
        <Link className="link-btn" to="/courses/">Cursos</Link>
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

export default Frontend101;
