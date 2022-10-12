import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Spinner from "../../components/Spinner/Spinner";
import Autoplay from "../../components/Slick/Autoplay";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "items", idProduct);
    getDoc(queryProduct)
      .then((resp) => setItems({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idProduct]);

  return (
    <>
      <div className="text-center">
        {loading ? (
          <Spinner />
        ) : (
          <ItemDetail items={items} idProduct={idProduct} />
        )}
      </div>
      <Autoplay />
    </>
  );
};

export default ItemDetailContainer;
