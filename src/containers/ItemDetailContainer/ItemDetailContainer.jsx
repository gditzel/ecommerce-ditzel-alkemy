import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Spinner from "../../components/Spinner/Spinner";
import Autoplay from "../../components/Slick/Autoplay";
import { useFirebaseStoreFilter } from "../../hooks/useFirebaseStoreFilter";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();

  const { loading, items } = useFirebaseStoreFilter(idProduct);

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
