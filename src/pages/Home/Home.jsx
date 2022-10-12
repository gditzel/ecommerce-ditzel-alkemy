import Carousel from "../../components/Carousel/Carousel";
import AutoPlay from "../../components/Slick/Autoplay";
import NewItems from "../../containers/NewItemsContainer/NewItems";

export function Home() {
  const images = ["banner.jpg", "banner2.jpg", "banner3.jpg"];

  return (
    <>
      <div className="text-center">
        <Carousel images={images} />
        <NewItems />
        <AutoPlay />
      </div>
    </>
  );
}
