import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";

import "./Help.css";

const Help = () => {
  return (
    <>
      <div className="md:mx-10 lg:mx-32 xl:mx-52 mt-20">
        <div className="flex justify-between mb-10 mx-2">
          <h1 className="text-xl md:text-3xl">Preguntas frecuentes</h1>
          <Link to="/">
            <button className="mt-2">
              <ArrowLeftIcon className="h-5 text-sky-900 ml-3" />
            </button>
          </Link>
        </div>
        <div className="bg-white px-5 py-2 rounded-xl shadow-xl">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default Help;
