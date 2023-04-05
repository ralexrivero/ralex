import { useState } from "react";

const Sidebar = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const handleButtonActive = (index) => {
    setActiveButtons((prevButtons) =>
      prevButtons.includes(index)
        ? prevButtons.filter((i) => i !== index)
        : [...prevButtons, index]
    );
  };

  return (
    <aside className="">
      <div className="container sticky-top-aside">
        <h2 className="fs-md p-t-md p-b-md m-b-lg border-bottom">En esta página</h2>
        <nav>
          <ul className="m-l-md list-reset">
            <li className="menu-block">
              <button
                className={`btn btn-collapse m-t-md ${
                  activeButtons.includes(0) ? "btn-collapse-active" : ""
                }`}
                onClick={() => {
                  handleButtonClick(0);
                  handleButtonActive(0);
                }}
              >
                Acerca de mí
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(0) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs"><a href="#about-me">Acerca de mí</a></li>
                <li className="btn fs-xs"><a href="#tech-pasion">Mi pasión</a></li>
                <li className="btn fs-xs"><a href="#my-goal">Propósito </a></li>
                <li className="btn fs-xs"><a href="#skills">Experiencia y habilidades</a></li>
              </ul>
            </li>
            <li>
              <button
                className={`btn btn-collapse m-t-md ${
                  activeButtons.includes(1) ? "btn-collapse-active" : ""
                }`}
                onClick={() => {
                  handleButtonClick(1);
                  handleButtonActive(1);
                }}
              >
                Valores
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(1) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs"><a href="#intelectual">Honestidad intelectual</a></li>
                <li className="btn fs-xs"><a href="#integrity">integridad</a></li>
                <li className="btn fs-xs"><a href="#excelence">Excelencia</a></li>
              </ul>
            </li>
            <li>
              <button
                className={`btn btn-collapse m-t-md ${
                  activeButtons.includes(2) ? "btn-collapse-active" : ""
                }`}
                onClick={() => {
                  handleButtonClick(2);
                  handleButtonActive(2);
                }}
              >
                Docencia
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(2) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs"><a href="#teaching">Experiencia docente</a></li>
              </ul>
            </li>
            <li>
              <button
                className={`btn btn-collapse m-t-md ${
                  activeButtons.includes(3) ? "btn-collapse-active" : ""
                }`}
                onClick={() => {
                  handleButtonClick(3);
                  handleButtonActive(3);
                }}
              >
                Servicios
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(3) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs"><a href="#services">Mis servicios</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
