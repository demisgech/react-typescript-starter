import { useState } from "react";
import "./ListGroup.css";
const ListGroup = () => {
  let items = [
    "Ethiopia",
    "Kenya",
    "Sudan",
    "Egypt",
    "Djibouti",
    "New York",
    "Tokyo",
    "London",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List Group</h1>
      {/* {items.length === 0 ? <p>No item found.</p> : null} */}
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "list-item active" : "list-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
