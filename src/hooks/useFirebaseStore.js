import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeProducts } from "../store/Actions/cartActions";
import { useDispatch } from "react-redux";

export const useFirebaseStore = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const db = getFirestore();
      const queryColectionsItems = collection(db, "items");
      getDocs(queryColectionsItems)
        .then((resp) =>
          setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 300);
  }, []);

  dispatch(initializeProducts(items));

  return { loading, items }
}