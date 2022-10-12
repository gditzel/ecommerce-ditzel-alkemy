import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

import { filterButtons } from "../Filter/FilterButton";
import FilterCheckbox from "../Filter/FilterCheckbox";

const FilterItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    const filterId = filterButtons.filter((index) => index.id === index);
    if (filterId) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <button
          id={item.name}
          onClick={() => onClick()}
          className="text-xl text-slate-800"
        >
          {item.name}
        </button>
        <button id={item.name} onClick={() => onClick(item.name)}>
          {isOpen === false ? (
            <ChevronDownIcon className="ml-2 h-8 w-8 inline text-sky-900" />
          ) : (
            <ChevronUpIcon className="ml-2 h-8 w-8 inline text-sky-900" />
          )}
        </button>
      </div>

      {isOpen
        ? item?.items.map((checkbox, index) => (
            <FilterCheckbox
              key={checkbox.name + index}
              name={checkbox.name}
              isChecked={checkbox.isChecked}
            />
          ))
        : null}
    </div>
  );
};

export default FilterItem;
