import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const useFirebaseStoreFilter = (idProduct) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});

    useEffect(() => {
    window.scrollTo(0, 0);
      setTimeout(() => {
          const db = getFirestore();
          const queryProduct = doc(db, "items", idProduct);
          getDoc(queryProduct)
            .then((resp) => setItems({ id: resp.id, ...resp.data() }))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
      }, 1000);
      }, [idProduct]);

    return {loading, items}
}