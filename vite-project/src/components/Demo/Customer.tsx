import { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "Demis",
    address: {
      city: "Mehal Meda",
      FIN: 1234,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, city: "Addis Ababa" },
    });
  };
  return (
    <div>
      <h1>Customer</h1>
      <ul className="list-group">
        <li className="list-group-item">{customer.address.city}</li>
        <li className="list-group-item">{customer.address.FIN}</li>
        <li className="list-group-item">{customer.name}</li>
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Customer;
