import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Autoplay from "../../components/Slick/Autoplay";
import { useFirebaseStoreFilter } from "../../hooks/useFirebaseStoreFilter";
import ContentLoader from "../../components/ContentLoader/ContentLoader";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();

  const { loading, items } = useFirebaseStoreFilter(idProduct);

  return (
    <>
      <div className="text-center">
        {loading ? (
          <div className="flex mt-20 justify-center">
            <ContentLoader />
          </div>
        ) : (
          <ItemDetail items={items} idProduct={idProduct} />
        )}
      </div>
      <Autoplay />
    </>
  );
};

export default ItemDetailContainer;
