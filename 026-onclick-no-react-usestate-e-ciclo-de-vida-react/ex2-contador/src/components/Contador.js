import React from "react";

export default function Contador() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="calculator">
      <h1>Contador</h1>
      <div className="cell">
        <button className="plus" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <div className="value">{counter}</div>
        <button className="minus" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
