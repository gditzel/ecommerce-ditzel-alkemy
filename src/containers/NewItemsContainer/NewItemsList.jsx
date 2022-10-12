import { memo } from "react";
import { Link } from "react-router-dom";

const NewItemsList = memo(({ items = [] }) => {
  return (
    <>
      <div className="flex justify-center flex-wrap w-full ">
        {items?.map((item) => (
          <div
            key={item.id}
            className="m-5 w-96 shadow-lg rounded-md p-2 md:hover:shadow-2xl md:hover:scale-105 transition-all duration-500 bg-white"
          >
            <Link to={`/Producto/${item.id}`}>
              <button>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-24 mx-auto min-w-max"
                />
                <div>
                  <div className="font-semibold mt-2 text-slate-700">
                    {item.name}
                  </div>
                  <div className="flex justify-evenly my-1">
                    <div className="text-sky-600">${item.price}</div>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
});

export default NewItemsList;
