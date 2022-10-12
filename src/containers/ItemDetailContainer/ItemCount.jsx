import { useState } from "react";
import { Link } from "react-router-dom";

import { CartWidget } from "../../components/CartWidget/CartWidget";

export function ItemCount({ stock, initial, onAdd }) {
  const [count, updateCount] = useState(initial);
  const [inputType, setInputType] = useState("button");

  const Increase = () => {
    if (stock > count) {
      updateCount(count + 1);
    }
  };

  const Decrease = () => {
    if (initial < count) {
      updateCount(count - 1);
    }
  };

  const ButtonCount = ({ handlerInter }) => {
    return (
      <>
        <div className="flex justify-around items-center mx-auto my-auto h-7 border border-sky-900 text-sky-900 w-36">
          <button onClick={Decrease}>-</button>
          <div>{count}</div>
          <button onClick={Increase}>+</button>
        </div>

        <div onClick={handlerInter}>
          <button
            onClick={() => onAdd(count, updateCount)}
            className="bg-sky-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded w-56 mx-auto"
          >
            Agregar al carrito
          </button>
        </div>
      </>
    );
  };

  const InputCount = () => {
    return (
      <>
        <div className="flex justify-center">
          <Link to="/Productos">
            <button className="bg-sky-700 hover:bg-sky-500 text-white font-bold rounded p-2 mr-5">
              Seguir comprando
            </button>
          </Link>
          <CartWidget>
            <div className="bg-sky-700 hover:bg-sky-500 text-white font-bold rounded p-2 ">
              Detalle de compra
            </div>
          </CartWidget>
        </div>
      </>
    );
  };

  const handlerInter = () => {
    setInputType("input");
  };

  return (
    <>
      {inputType === "button" ? (
        <ButtonCount handlerInter={handlerInter}></ButtonCount>
      ) : (
        <InputCount />
      )}
    </>
  );
}
