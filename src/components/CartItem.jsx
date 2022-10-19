const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <>
      <div>
        <h4>{name}</h4>
        <h5>
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h5>
        <button onClick={() => delOneFromCart(id)}>Eliminar uno</button>
        <br />
        <button onClick={() => delAllFromCart(id, true)}>Eliminar todos</button>
        <br />
        <br />
      </div>
    </>
  );
};

export default CartItem;
