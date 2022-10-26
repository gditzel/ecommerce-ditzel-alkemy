import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/Actions/cartActions";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const Cart = () => {
  const [province, setProvince] = useState([]);
  const [currentProvince, setCurrentProvince] = useState([]);
  const [locality, setLocality] = useState([]);
  const [order, setOrder] = useState("");
  const [generateOrder, setGenerateOrder] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const [button, setButton] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [betweenAddress, setBetweenAddress] = useState("");
  const [height, setHeight] = useState("");

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { cart } = state.shopping;

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    province: "",
    locality: "",
    address: "",
    betweenstreets: "",
    height,
    postalCode: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "La cantidad mínima de caracteres es 4")
      .required(required),
    phone: Yup.number().required(required),
    email: Yup.string().email("Debe ser un email válido").required(required),
    province: Yup.string().required(required),
    locality: Yup.string().required(required),
    address: Yup.string().required(required),
    betweenstreets: Yup.string().required(required),
    height: Yup.string().required(required),
    postalCode: Yup.string().required(required),
  });

  const formik = useFormik({ initialValues, validationSchema });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    formik;

  if (order.length > 0) {
    setTimeout(() => {
      setButton(true);
      navigate("/");
      dispatch(clearCart());
    }, 3000);
  }

  useEffect(() => {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
      .then((json) => setProvince(json.provincias));
  }, []);

  useEffect(() => {
    fetch(
      `https://apis.datos.gob.ar/georef/api/municipios?provincia=${currentProvince}&max=200`
    )
      .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
      .then((json) => setLocality(json.municipios));
  });

  if (cart.length === 0) {
    navigate("/");
  }

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const idOrder = (id) => {
    setOrder(id);
    setGenerateOrder(true);
  };

  const GenerateOrder = async (e) => {
    e.preventDefault();

    const order = {};
    order.comprador = {
      Nombre: name,
      Teléfono: phone,
      Email: email,
      Domicilio: address,
      EntreCalle: betweenAddress,
      Altura: height,
    };

    order.items = cart.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      };
    });

    order.total = totalPrice();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => idOrder(id));

    const queryCollectionStock = collection(db, "items");

    const queryUpdateStock = query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cart.map((prod) => prod.id)
      )
    );
    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cart.find((item) => item.id === res.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));

    batch.commit();
  };

  const handleChanges = (e) => {
    if (e.target.value.length >= 4) {
      setActiveButton(false);
    }
  };

  return (
    <>
      <section className="flex">
        <div className="shadow-md h-2/4 p-4 border-lime-400 border rounded-xl mt-20 bg-white m-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="md:flex space-x-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  id="name"
                  placeholder="John"
                  onBlur={handleBlur}
                  onKeyUp={(e) => setName(e.currentTarget.value)}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                {errors.name && touched.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="152182869"
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jonhdoe@example.com"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>

            <div className="md:flex space-x-2">
              <div>
                <label
                  htmlFor="province"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Provincia
                </label>
                <select
                  id="selectProvinces"
                  onChange={(e) => {
                    setCurrentProvince(e.currentTarget.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="">Seleccionar una provincia</option>
                  {province.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="locality"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Localidad
                </label>
                <select
                  id="selectLocality"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="">Seleccionar una localidad</option>

                  {locality.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:flex space-x-2">
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Domicilio
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Introduzca su domicilio"
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="betweenstreets"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Entre calles
                </label>
                <input
                  type="text"
                  name="betweenstreets"
                  id="betweenstreets"
                  placeholder="Introduzca sus entre calles"
                  onChange={(e) => setBetweenAddress(e.currentTarget.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="height"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Número
                </label>
                <input
                  type="text"
                  name="height"
                  id="height"
                  placeholder="Introduzca la altura"
                  onChange={(e) => setHeight(e.currentTarget.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="postalCode"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Código postal
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                placeholder="Introduzca su código postal"
                onChange={handleChanges}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {!button ? (
              <>
                <div className="text-center">
                  <button
                    onClick={GenerateOrder}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56"
                    disabled={activeButton}
                    style={{ backgroundColor: activeButton ? "red" : "blue" }}
                  >
                    Generar orden
                  </button>
                </div>
                <div className="text-center">
                  {!generateOrder ? "" : `Su orden número de es: ${order}`}
                </div>
              </>
            ) : (
              ""
            )}
          </form>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Cart;
