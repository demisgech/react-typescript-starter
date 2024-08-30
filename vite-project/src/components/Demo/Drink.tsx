import { useState } from "react";

function Drink() {
  const [drink, setDrink] = useState({
    title: "Juice",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 6,
    // };
    // setDrink(newDrink);
    setDrink({ ...drink, price: 7 });
  };
  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Show {drink.price}
        </button>
      </div>
    </>
  );
}

export default Drink;
