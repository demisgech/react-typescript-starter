import { useState } from "react";
import { NavBar } from "../NavBar";
import { Cart } from "../Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleClick = () => {
    setCartItems([]);
    console.log("Clicked");
  };
  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClick} />
    </>
  );
}

export default App;
