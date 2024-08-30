import { useState } from "react";
import styles from "./ListGroup.module.css";
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
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? [styles.listItem, styles.active].join(" ")
                : styles.listItem
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
