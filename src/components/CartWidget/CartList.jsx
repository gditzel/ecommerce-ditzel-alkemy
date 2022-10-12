// import { TrashIcon } from "@heroicons/react/outline";
// import { Link } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";

// import icon11 from "../../assets/icons/icon11.png";

const ItemCart = ({ onClick }) => {
  //   const { cartList, deleteItem } = useCartContext();

  //   if (cartList.length === 0) {
  //     return (
  //       <>
  //         <div className="text-center mt-20">
  //           <h1 className="text-xl">Su carrito esta vacio...</h1>
  //           <img src={icon11} alt="carrito vacio" className="h-32 mx-auto" />
  //           <Link to="/Productos">
  //             <button
  //               onClick={onClick}
  //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56 mx-auto mt-5"
  //             >
  //               Comprar ahora
  //             </button>
  //           </Link>
  //         </div>
  //       </>
  //     );
  //   }

  return (
    <>
      <ul className="-my-6 divide-y divide-gray-200">
        {/* {cartList.map((item) => (
          <li key={item.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="ml-3 font-bold">{item.name}</div>
              <p className="ml-3 mt-6 text-gray-500">Qty {item.cantidad}</p>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="ml-4">Precio unitario: ${item.price}</p>
                <p>Subtotal ${item.cantidad * item.price}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex ml-2">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => deleteItem(item.id)}
                  >
                    <TrashIcon className=" text-red-600 ml-3 h-6 w-6" />
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))} */}
      </ul>
    </>
  );
};

export default ItemCart;
