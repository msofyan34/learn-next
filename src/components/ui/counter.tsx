"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex gap-2">
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
