import { memo, useState } from "react";
import { PanelDropdown } from "../../components/PanelHardware/PanelDropdown";

import ItemBuild from "./ItemBuild";

const ItemBuildList = memo(({ items = [], filter }) => {
  const [data] = useState(items);

  return (
    <>
      <div className="md:hidden">
        <PanelDropdown />
      </div>
      <div className="mx-auto max-w-md md:max-w-none mt-5 xl:flex">
        {data?.map((item) => (
          <ItemBuild item={item} filter={filter}></ItemBuild>
        ))}
      </div>
    </>
  );
});

export default ItemBuildList;
