import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const useFirebaseStoreFilter = (idProduct) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const queryProduct = doc(db, "items", idProduct);
        getDoc(queryProduct)
          .then((resp) => setItems({ id: resp.id, ...resp.data() }))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [idProduct]);

    return {loading, items}
}