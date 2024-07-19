import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count++)}>+1</button>
      <button onClick={() => setCount(count--)}>-1</button>
      <button onClick={() => setCount(0)}>0</button>
    </div>
  );
};

export default Counter;
