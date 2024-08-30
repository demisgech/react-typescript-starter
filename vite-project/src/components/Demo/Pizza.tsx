import { useState } from "react";

function Pizza() {
  const [pizza, setPrizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPrizza({ ...pizza, toppings: [...pizza.toppings, "Hello"] });
    console.log("Clicked");
  };
  return (
    <>
      <ul>
        New Toppings:{" "}
        {pizza.toppings.map((toppe, index) => (
          <li key={index}>{toppe}</li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={handleClick}>
        {" "}
        New Toppings
      </button>
    </>
  );
}

export default Pizza;
