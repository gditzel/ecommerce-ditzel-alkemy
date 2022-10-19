import { memo } from "react";
import { Link } from "react-router-dom";

const ItemBuild = memo(({ item, filter }) => {
  return (
    <div
      key={item.id}
      className="mb-5 md:m-5 grid shadow-xl hover:shadow-2xl bg-white rounded-md"
    >
      <Link to={`/${filter}`}>
        <button className="md:ml-10 my-2 md:flex">
          <div>
            <img
              src={item.image}
              alt={item.imageAlt}
              className="h-40 w-40 max-w-sm mx-auto object-contain"
            />
          </div>
          <div className="md:m-5 md:text-left space-y-12">
            <div className="text-xl text-slate-700">{item.name}</div>
            <div className="flex justify-evenly md:justify-start text-xl my-2">
              <div className="text-sky-600 md:mr-5">${item.price}</div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
});

export default ItemBuild;
