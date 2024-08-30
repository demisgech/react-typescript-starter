// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem(item: string): void;
}

const ListGroups = (props: Props) => {
  let { items, heading, onSelectItem } = props;
  let [selectedItem, setSelectedItem] = useState(-1);
  /*   let arr = useState(-1);
  //   arr[0]; // variables
  //   arr[1]; // updator function

  //   let [s,setS] = useState(-1); // Destructuring*/
  /*
    items = [];
    Dynamic rendering
  option 1
    if (items.length === 0)
      return (
        <>
          <h1>List Group</h1>
          <p>No itme found</p>
        </>
      );

  option 2
    const getMessage = () => {
      return items.length === 0 ? <p>No item found</p> : null;
    };
  */

  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroups;
