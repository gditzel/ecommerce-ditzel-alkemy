import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Products from "./pages/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import Spinner from "./components/Spinner/Spinner";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Help from "./pages/Help/Help";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Productos" element={<Products />}></Route>
        <Route path="/Ayuda" element={<Help />}></Route>
        <Route
          path="Producto/:idProduct"
          element={
            <Suspense fallback={<Spinner />}>
              <ItemDetailContainer />
            </Suspense>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
