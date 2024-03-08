import React, { useState } from "react";

function CardBody({ count, handleIncrement, handleDecrement }) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter!</div>
        <CardBody
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
    </>
  );
}

export default Counter;
