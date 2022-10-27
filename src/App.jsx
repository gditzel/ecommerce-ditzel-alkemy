import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Products from "./pages/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import Spinner from "./components/Spinner/Spinner";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Help from "./pages/Help/Help";
import Amd from "./pages/Amd/Amd";
import MotherAMD from "./pages/Amd/MotherAMD";
import Intel from "./pages/Intel/Intel";
import Placa from "./pages/Amd/Placa";
import Cooler from "./pages/Amd/Cooler";
import Memoriaram from "./pages/Amd/Memoriaram";
import Disco from "./pages/Amd/Disco";
import Gabinete from "./pages/Amd/Gabinete";
import Monitor from "./pages/Amd/Monitor";
import Cart from "./pages/Cart/Cart";
import MotherIntel from "./pages/Intel/MotherIntel";

const Error404 = lazy(() => import("./pages/Error404/Error404"));

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Home />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Productos"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Products />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Amd"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Amd />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Intel"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Intel />
              </motion.div>
            }
          ></Route>

          <Route
            path="/MotherAMD"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <MotherAMD />
              </motion.div>
            }
          ></Route>

          <Route
            path="/MotherIntel"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <MotherIntel />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Cooler"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Cooler />
              </motion.div>
            }
          ></Route>

          <Route
            path="/MemoriaRam"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Memoriaram />
              </motion.div>
            }
          ></Route>

          <Route
            path="/PlacaDeVideo"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Placa />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Almacenamiento"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Disco />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Gabinete"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Gabinete />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Monitor"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Monitor />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Ayuda"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Help />
              </motion.div>
            }
          ></Route>

          <Route
            path="/Cart"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Cart />
              </motion.div>
            }
          ></Route>

          <Route
            path="Producto/:idProduct"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Suspense fallback={<Spinner />}>
                  <ItemDetailContainer />
                </Suspense>
              </motion.div>
            }
          ></Route>

          <Route
            path="*"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Suspense fallback={<>...</>}>
                  <Error404 />{" "}
                </Suspense>
              </motion.div>
            }
          ></Route>
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
