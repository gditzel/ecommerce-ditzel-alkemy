import { TrashIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";

const CartItem = ({ onClick }) => {
  //   const { cartList, cleanCart, totalPrice } = useCartContext();

  //   if (cartList.length === 0) {
  //     return <></>;
  //   }

  return (
    <>
      <div className="flex justify-end m-5">
        <button
          className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
          //   onClick={cleanCart}
        >
          Vaciar carrito
          <TrashIcon className="ml-3 h-6 w-6" />
        </button>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-around text-lg font-medium text-gray-900">
          <p>Precio total </p>
          {/* <p>${totalPrice()}</p> */}
          <p>$5000</p>
        </div>
        <div className="mt-6">
          <Link
            to="/Cart"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            <button onClick={onClick}>Finalizar compra</button>
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            <Link to="/Productos">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={onClick}
              >
                Seguir comprando
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
