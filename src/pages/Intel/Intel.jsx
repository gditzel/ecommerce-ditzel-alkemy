import PanelHardware from "../../components/PanelHardware/PanelHardware";
import ItemBuilContainer from "../../containers/ItemBuildContainer/ItemBuildContainer";
import { Link } from "react-router-dom";

const Intel = () => {
  return (
    <>
      <div className="mt-5 md:flex justify-center">
        <div className="hidden md:block static">
          <PanelHardware />
          <div className="flex space-x-5 justify-center mt-5">
            <Link to="/MotherIntel">
              <button className="bg-sky-900 rounded py-2 px-4 text-white">
                Saltear paso
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <ItemBuilContainer
            prop="microintel"
            filter="MotherIntel"
          ></ItemBuilContainer>
        </div>
      </div>
    </>
  );
};

export default Intel;
