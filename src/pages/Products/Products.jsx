import Banner4 from "../../assets/imgs/banner4.jpg";
import AutoPlay from "../../components/Slick/Autoplay";
import ItemListContainer from "../../containers/ItemListContainer/ItemListContainer";

const Products = () => {
  return (
    <>
      <div className="flex justify-center py-2">
        <img src={Banner4} alt="Banner de productos" />
      </div>
      <ItemListContainer />
      <AutoPlay />
    </>
  );
};

export default Products;
