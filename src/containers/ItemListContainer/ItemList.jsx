import { createContext, memo, useContext, useState } from "react";
import { FilterDropdown } from "../../components/Filter/FilterDropdown";
import { useNavigate } from "react-router";

import Item from "./Item";
import { filterButtons } from "../../components/Filter/FilterButton";
import FilterItem from "../../components/Filter/FilterItem";
import Carousel from "../../components/Carousel/Carousel";
import { useCatItem } from "../../components/Filter/FilterCheckbox";

const images = ["banner5.jpg", "banner6.jpg", "banner7.jpg", "banner8.jpg"];

const FilterContext = createContext([]);
export const useFilterContext = () => useContext(FilterContext);

const ItemList = memo(({ items = [], search }) => {
  const [data, setData] = useState(items);
  const [isFilter, setIsFilter] = useState(data);

  const { nameItem } = useCatItem();

  // console.log(nameItem);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Productos");
    window.location.reload();
  };

  return (
    <FilterContext.Provider value={{ data, setData, isFilter, setIsFilter }}>
      <div className="lg:hidden">
        <FilterDropdown />
      </div>
      {nameItem}
      {search ? (
        <div className="bg-sky-900 max-w-min rounded p-2 mx-auto mt-5">
          <button onClick={handleClick}>
            <p className="text-white">
              {search}
              <span className="text-sky-900 bg-white rounded-full ml-2 px-1">
                X
              </span>
            </p>
          </button>
        </div>
      ) : (
        <></>
      )}

      <div className="flex justify-center sm:mx-10">
        <div className="text-xl text-start hidden lg:block w-96">
          <div className="my-10 bg-white">
            <div className="p-5 shadow-xl">
              <div className="flex justify-center tracking-widest">
                <h1 className="text-2xl font-bold text-slate-800 ml-3 mb-4">
                  Categorias
                </h1>
              </div>
              {filterButtons?.map((item) => (
                <FilterItem item={item} />
              ))}
            </div>
          </div>
          <Carousel images={images} />
        </div>
        <div className="mt-5">
          {data?.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    </FilterContext.Provider>
  );
});

export default ItemList;
