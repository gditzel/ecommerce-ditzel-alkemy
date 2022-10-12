import { useState } from "react";

import { useFilterContext } from "../../containers/ItemListContainer/ItemList";

function FilterCheckbox({ name, isChecked }) {
  const [checked, setChecked] = useState(isChecked);
  const { setData, isFilter } = useFilterContext();

  const filterResult = (catItem) => {
    if (checked === true) {
      const result = isFilter.filter((curDate) => {
        return curDate.category === catItem;
      });
      setData(result);
      setChecked(false);
    } else {
      setData(isFilter);
      setChecked(true);
    }
  };

  return (
    <div className="text-sm text-gray-500">
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          onChange={() => filterResult(name)}
          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 mr-5 cursor-pointer"
        />
        {name}
      </label>
    </div>
  );
}

export default FilterCheckbox;
