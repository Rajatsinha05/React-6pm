import React, { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(10);

  const handleCounter = (opr, value) => {
    if (opr == "+") {
      setCount(count + value);
    } else {
      setCount(count - value);
    }
  };

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => handleCounter("+", 10)}>+</button>
      <button onClick={() => handleCounter("-", 5)}>-</button>
    </div>
  );
};

export default Counter;
