type Props = {
  cartItems: string[];
  onClear(): void;
};
export const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-secondary" type="reset" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
