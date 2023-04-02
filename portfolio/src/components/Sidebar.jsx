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
    <aside>
      <div className="container">
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
                Tema 1
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(0) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs">sub tema 1</li>
                <li className="btn fs-xs">sub tema 2</li>
                <li className="btn fs-xs">sub tema 3</li>
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
                Tema 2
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(1) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs">sub tema 4</li>
                <li className="btn fs-xs">sub tema 5</li>
                <li className="btn fs-xs">sub tema 6</li>
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
                Tema 3
              </button>
              <ul
                className={`content-list m-l-md ${
                  expandedIndexes.includes(2) ? "content-list-show" : "hide"
                }`}
              >
                <li className="btn fs-xs">sub tema 7</li>
                <li className="btn fs-xs">sub tema 8</li>
                <li className="btn fs-xs">sub tema 9</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
