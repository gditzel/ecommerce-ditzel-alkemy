import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Actions/cartActions";

const ItemBuild = memo(({ item, filter }) => {
  const { name, price, image, imageAlt } = item;

  const dispatch = useDispatch();

  return (
    <>
      <div
        key={item.id}
        className="mb-5 md:m-5 grid shadow-xl hover:shadow-2xl bg-white rounded-md"
      >
        <Link to={`/${filter}`}>
          <button
            className="md:ml-10 my-2 md:flex"
            onClick={() => dispatch(addToCart(item, 1))}
          >
            <div>
              <img
                src={image}
                alt={imageAlt}
                className="h-40 w-40 max-w-sm mx-auto object-contain"
              />
            </div>
            <div className="md:m-5 md:text-left space-y-12">
              <div className="text-xl text-slate-700">{name}</div>
              <div className="flex justify-evenly md:justify-start text-xl my-2">
                <div className="text-sky-600 md:mr-5">${price}</div>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
});

export default ItemBuild;
