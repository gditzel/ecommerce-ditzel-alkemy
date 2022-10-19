import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

// import { useCartContext } from "../../context/CartContext";

import logo from "../../assets/imgs/logo.png";
import { BtnDropdown } from "../BtnDropdown/BtnDropdown";
import Focus from "../../utils/svg/Focus";
import { CartWidget } from "../CartWidget/CartWidget";
import Login from "../Auth/Login/Login";

const navigation = [
  { name: "Productos", href: "/Productos", current: true },
  { name: <BtnDropdown></BtnDropdown>, current: false },
  { name: "Ayuda", href: "/Ayuda", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  //   const { cartList } = useCartContext();

  //   let totalQty = 0;

  //   cartList.map((prod) => (totalQty = totalQty + prod.cantidad));

  return (
    <Disclosure as="nav" className="z-10 bg-white sticky top-0 left-0 right-0">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center h-24 md:ml-12">
            <Link to="/">
              <img
                className="block h-20 w-auto mr-2"
                src={logo}
                alt="Workflow"
              />
            </Link>
            <div className="md:hidden">
              <Disclosure.Button className="p-2 text-sky-900">
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <div className="flex justify-center pb-5 px-2 md:absolute md:right-56 md:top-0 md:mt-8 lg:right-80">
            <input
              type="search"
              className="form-control md:w-screen max-w-xs flex-auto min-w-0 px-3 py-1.5 border border-solid border-sky-500 rounded-l focus:outline-none shadow-md"
              placeholder="Buscar productos o marcas"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="mr-3 px-6 py-2.5 bg-sky-900 text-white uppercase rounded-r hover:bg-sky-700 active:bg-sky-800 shadow-md"
              type="button"
              id="button-addon2"
            >
              <Focus />
            </button>
          </div>
          <div className="flex justify-center pb-5 md:absolute md:right-0 md:top-0 md:mt-8 lg:right-24">
            <Login />

            <CartWidget>
              <ShoppingCartIcon
                className="h-8 w-8  text-white bg-sky-900 hover:bg-sky-700 active:bg-sky-800 shadow-md rounded-full p-0.5"
                aria-hidden="true"
              />
              {/* {totalQty > 0 && (
                  <h5 className="absolute ml-5 bg-red-600 h-6 w-6 rounded-full flex justify-center text-white">
                    {totalQty}
                  </h5>
                )} */}
            </CartWidget>
          </div>

          <div className="hidden md:block bg-sky-900 p-5">
            <ul className="flex space-x-12 justify-center">
              <li>
                <Link
                  to="/"
                  className="text-white text-2xl font-medium hover:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Productos"
                  className="text-white text-2xl font-medium hover:underline"
                >
                  Productos
                </Link>
              </li>
              <li>
                <span className="text-white text-2xl font-medium hover:underline">
                  <BtnDropdown />
                </span>
              </li>{" "}
              <li>
                <Link
                  to="/Ayuda"
                  className="text-white text-2xl font-medium hover:underline"
                >
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center bg-sky-900 absolute w-screen">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-sky-900 text-white"
                      : "text-sky-200 hover:bg-sky-700 hover:text-white w-52 mx-auto",
                    "block px-3 py-2 rounded-md text-lg font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
