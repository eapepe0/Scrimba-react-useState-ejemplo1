import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  /**
   * count = valor state
   * setCount = funcion callback, manipula el valor
   *
   * Note: si necesitas que el viejo valor de State
   * te ayude a determinar el nuevo valor de State,
   * le deberias pasar una funcion callback a tu
   * State Setter en lugar de usar el State directamente
   * Esta funcion callback recibira el viejo valor como parametro
   * lo que podras utilizar para determinar el nuevo valor de State.
   */
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  function addTen() {
    setCount((prevCount) => prevCount + 10);
  }
  function subtractTen() {
    setCount((prevCount) => prevCount - 10);
  }

  return (
    <div className="counter">
      <button className="counter--minus--ten" onClick={subtractTen}>
        –10
      </button>
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
      <button className="count--plus--ten" onClick={addTen}>
        +10
      </button>
    </div>
  );
}
