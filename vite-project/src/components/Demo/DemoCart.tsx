import { useState } from "react";
function DemoCart() {
  const [cart, setCart] = useState({
    discount: 0.2,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    // console.log("clicked");
  };
  return (
    <>
      <ul>
        Products:{" "}
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.title} = {item.quantity}
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={handleClick}>
        {" "}
        New Toppings
      </button>
    </>
  );
}

export default DemoCart;
