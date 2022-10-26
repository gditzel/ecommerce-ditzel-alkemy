import { useState } from "react";
import Focus from "../../utils/svg/Focus";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = () => {
    if (inputValue) {
      navigate({
        pathname: "/Productos",
        search: `?${createSearchParams({ searchKeyword: inputValue })}`,
      });
      setInputValue("");
    } else {
      navigate({
        search: `?${createSearchParams({ searchKeyword: inputValue })}`,
      });
      setInputValue("");
    }
  };

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      if (inputValue) {
        navigate({
          pathname: "/Productos",
          search: `?${createSearchParams({ searchKeyword: inputValue })}`,
        });
        setInputValue("");
      }
    }
  };

  return (
    <div
      className="flex justify-center pb-5 px-2 md:absolute md:right-56 md:top-0 md:mt-8 lg:right-80"
      onKeyDown={searchEnter}
    >
      <input
        type="search"
        className="form-control md:w-screen max-w-xs flex-auto min-w-0 px-3 py-1.5 border border-solid border-sky-500 rounded-l focus:outline-none shadow-md"
        placeholder="Buscar productos o marcas"
        aria-label="Search"
        aria-describedby="button-addon2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="mr-3 px-6 py-2.5 bg-sky-900 text-white uppercase rounded-r hover:bg-sky-700 active:bg-sky-800 shadow-md"
        type="button"
        id="button-addon2"
        onClick={searchByKeyword}
      >
        <Focus />
      </button>
    </div>
  );
};

export default SearchInput;
