import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import Spinner from "../../components/Spinner/Spinner";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryColectionsItems = collection(db, "items");
      getDocs(queryColectionsItems)
        .then((resp) =>
          setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 700);
  }, []);

  return (
    <>
      <div className="text-center">
        {loading ? <Spinner /> : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;
