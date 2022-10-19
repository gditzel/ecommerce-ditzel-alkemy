import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  delFromCart,
} from "../store/Actions/cartActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

  return (
    <>
      <div className="text-center">
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article className="flex justify-center">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={() => dispatch(addToCart(product.id))}
            />
          ))}
        </article>
        <h3>Carrito</h3>
        <article>
          <button onClick={() => dispatch(clearCart())}>Limpiar carrito</button>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delOneFromCart={() => dispatch(delFromCart(item.id))}
              delAllFromCart={() => dispatch(delFromCart(item.id, true))}
            />
          ))}
        </article>
      </div>
    </>
  );
};

export default ShoppingCart;
