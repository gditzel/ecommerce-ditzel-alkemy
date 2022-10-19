import { createContext, memo, useContext, useState } from "react";
import { PanelDropdown } from "../../components/PanelHardware/PanelDropdown";

import ItemBuild from "./ItemBuild";

const FilterContext = createContext([]);
export const useFilterContext = () => useContext(FilterContext);

const ItemBuildList = memo(({ items = [], filter }) => {
  const [data, setData] = useState(items);
  const [isFilter, setIsFilter] = useState(data);

  //   const handleClick = () => {};

  return (
    <FilterContext.Provider value={{ data, setData, isFilter, setIsFilter }}>
      <div className="md:hidden">
        <PanelDropdown />
      </div>
      <div className="mx-auto max-w-md md:max-w-none mt-5 xl:flex">
        {data?.map((item) => (
          <ItemBuild item={item} filter={filter} />
        ))}
      </div>
    </FilterContext.Provider>
  );
});

export default ItemBuildList;
