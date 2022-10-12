import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";

import Spinner from "../../components/Spinner/Spinner";
import NewItemsList from "../NewItemsContainer/NewItemsList";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryColectionsItems = collection(db, "items");
      const queryCollectionFilter = query(
        queryColectionsItems,
        where("price", ">", 50000),
        limit(4),
        orderBy("price", "asc")
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 700);
  }, []);
  return (
    <>
      <h1 className="text-2xl text-start mx-10 mt-10 mb-2 uppercase font-bold tracking-widest underline-offset-8 text-slate-600">
        Últimas novedades
      </h1>
      <hr className="border border-slate-600 mx-10"></hr>

      {loading ? <Spinner /> : <NewItemsList items={items} />}
    </>
  );
};

export default NewItems;
