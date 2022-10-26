import { Link } from "react-router-dom";

import { ItemCount } from "./ItemCount";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Logo from "../../assets/imgs/logo.png";

import {
  ShieldCheckIcon,
  TruckIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Actions/cartActions";

const ItemDetail = ({ items, idProduct }) => {
  const { id, name, price, image, desc, imageAlt, stock } = items;
  const initialCount = 1;

  const dispatch = useDispatch();

  const OnAdd = (count, updateCount) => {
    if (stock !== 0) {
      dispatch(addToCart(items, count));
      updateCount(initialCount);
    }
  };

  if (stock === 0) {
    return (
      <>
        <div key={id} className="mx-36 flex gap-5 shadow-xl p-8 bg-white">
          <div className="w-96">
            <img
              src={image}
              alt={imageAlt}
              className="hover:scale-125 transition-all duration-500 cursor-crosshair h-80"
            />
          </div>
          <div className="grid gap-4">
            <div className="text-2xl">{name}</div>
            <div className="text-gray-400 text-xl">{desc}</div>
            <div className="flex justify-center gap-5 text-xl">
              <div>Stock no disponible</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const cuote = (price / 12).toFixed(2);

  const HasStock = () => {
    return <p className="fs-8 fw-light">Stock disponible</p>;
  };

  const NoHasStock = () => {
    return <p className="fs-8 fw-light">Stock no disponible</p>;
  };

  const AvailableStock = () => {
    if (parseInt(stock) !== 0) {
      return <HasStock />;
    }
    return <NoHasStock />;
  };

  return (
    <>
      <div key={id} className="p-4 bg-white md:flex md:justify-center">
        <div>
          <img
            src={image}
            alt={imageAlt}
            className="h-40 mx-auto md:h-96 object-contain"
          />
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-center text-2xl">
            <div>
              {name}
              <Link to="/Productos">
                <button>
                  <ArrowLeftIcon className="h-5 text-sky-900 ml-3" />
                </button>
              </Link>
            </div>
          </div>
          <div className="text-gray-400 text-sm max-w-md mx-auto">{desc}</div>
          <hr className="border-1 border-gray-400 mx-2"></hr>
          <div className="text-slate-800 bg-gray-300 text-sm rounded-full py-2 max-w-max px-5 mx-auto md:flex md:justify-start md:mx-0">
            SKU: {idProduct}
          </div>
          <hr className="border-1 border-gray-500 mx-2"></hr>
          <div className="sm:flex sm:justify-center md:justify-between items-center">
            <div className="md:text-left ml-4">
              <div className="text-3xl text-sky-600">${price}</div>
              <span className="text-sm text-sky-600">Precio especial</span>
            </div>
            <div className="flex items-center justify-center max-w-1 md:justify-start">
              <img src={Logo} alt="Logo" className="h-20" />
              <div className="text-left">
                <p className="text-sm text-gray-500">
                  12 cuotas sin interes de{" "}
                </p>
                <span className="text-lg font-medium text-slate-800">
                  ${cuote}
                </span>{" "}
              </div>
            </div>
          </div>
          <hr className="border-1 border-gray-400 mx-2"></hr>
          <div className="text-left text-sky-600 mx-auto md:mx-0">
            <div className="flex space-x-2">
              <ShieldCheckIcon className="h-6" />
              <p>
                Garantia <span className="text-gray-500">- 12 meses</span>
              </p>
            </div>
            <div className="flex space-x-2 my-2">
              <CheckIcon className="h-6" />
              {<AvailableStock />}
            </div>

            <div className="flex space-x-2">
              <TruckIcon className="h-6" />
              <p>Envíos a todo el país</p>
            </div>
          </div>

          <hr className="border-1 border-gray-400 mx-2"></hr>

          <ItemCount
            stock={stock}
            initial={initialCount}
            onAdd={OnAdd}
          ></ItemCount>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
