import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Register from "../Register/Register";
import { swal } from "../../../utils/Swal";

const { REACT_APP_API_ENDPOINT } = process.env;

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Debe ser un email válido").required(required),
    password: Yup.string().required(required),
  });

  const onSubmit = () => {
    const { email, password } = values;

    fetch(`${REACT_APP_API_ENDPOINT}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.status_code === 200) {
          localStorage.setItem("token", data?.result?.token);
          localStorage.setItem("email", data?.result?.user.email);
          navigate("/", { replace: true });
        } else {
          swal();
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    formik;

  return (
    <>
      <button
        className="flex p-1 px-3 mr-5 rounded text-white bg-sky-900 hover:bg-sky-700 active:bg-sky-800 shadow-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
        <p className="mt-1 ml-2">Iniciar sesión</p>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 w-72 sm:w-96 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Iniciar sesión</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    className="space-y-6"
                    action="#"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // className={errors.email && touched.email ? "error" : ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // className={errors.password && touched.password ? "error" : ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                      {errors.password && touched.password && (
                        <div>{errors.password}</div>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Recordar
                        </label>
                      </div>
                      <Link
                        to="/Ayuda"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        onClick={() => setShowModal(false)}
                      >
                        ¿Olvidó su contraseña?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Iniciar
                    </button>
                  </form>
                  <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300 mt-6">
                    ¿No está registrado?{" "}
                    <button
                      className="text-blue-700 hover:underline dark:text-blue-500"
                      onClick={() => setShowModal(false)}
                    ></button>
                    <Register />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
