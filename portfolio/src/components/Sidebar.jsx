import { useState } from "react";

const Sidebar = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleButtonClick = (index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const getExpandedIndex = () => {
    const expandedIndex = [];
    document.querySelectorAll(".btn-collapse").forEach((button, index) => {
      button.addEventListener("click", () => {
        if (expandedIndex.includes(index)) {
          expandedIndex.splice(expandedIndex.indexOf(index), 1);
        } else {
          expandedIndex.push(index);
        }
        setExpandedIndexes(expandedIndex);
      });
    });
  };

  return (
    <aside>
      <div className="container">
        <h2 className="fs-md p-t-md p-b-md m-b-lg border-bottom">En esta página</h2>
        <nav>
          <ul className="m-l-md list-reset">
            <li>
              <button className="btn btn-collapse m-t-md" onClick={() => handleButtonClick(0)}>Tema 1</button>
              <ul className={`content-list m-l-md ${expandedIndexes.includes(0) ? "" : "hide"}`}>
                <li className="fs-xs">sub tema 1</li>
                <li className="fs-xs">sub tema 2</li>
                <li className="fs-xs">sub tema 3</li>
              </ul>
            </li>
            <li>
              <button className="btn btn-collapse m-t-md" onClick={() => handleButtonClick(1)}>Tema 2</button>
              <ul className={`content-list m-l-md ${expandedIndexes.includes(1) ? "" : "hide"}`}>
                <li className="fs-xs">sub tema 4</li>
                <li className="fs-xs">sub tema 5</li>
                <li className="fs-xs">sub tema 6</li>
              </ul>
            </li>
            <li>
              <button className="btn btn-collapse m-t-md" onClick={() => handleButtonClick(2)}>Tema 3</button>
              <ul className={`content-list m-l-md ${expandedIndexes.includes(2) ? "" : "hide"}`}>
                <li className="fs-xs">sub tema 7</li>
                <li className="fs-xs">sub tema 8</li>
                <li className="fs-xs">sub tema 9</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
