import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";

import Spinner from "../../components/Spinner/Spinner";
import ItemBuildList from "./ItemBuildList";

const ItemListContainer = ({ prop, filter }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryColectionsItems = collection(db, "items");
      const q = query(queryColectionsItems, where("filter", "==", prop));
      getDocs(q)
        .then((resp) =>
          setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 700);
  });

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ItemBuildList items={items} filter={filter} />
          </>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
