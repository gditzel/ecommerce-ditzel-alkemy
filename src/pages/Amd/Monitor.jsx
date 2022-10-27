import PanelHardware from "../../components/PanelHardware/PanelHardware";
import ItemBuilContainer from "../../containers/ItemBuildContainer/ItemBuildContainer";
import { useNavigate } from "react-router-dom";
import { CartWidget } from "../../components/CartWidget/CartWidget";

const Monitor = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-5 md:flex justify-center">
        <div className="hidden md:block">
          <PanelHardware />
          <div className="flex space-x-5 justify-center mt-5">
            <button
              onClick={() => navigate(-1)}
              className="bg-sky-900 rounded py-2 px-4 text-white"
            >
              Volver atrás
            </button>
            <CartWidget>
              <div className="bg-sky-900 rounded py-2 px-4 text-white">
                Finalizar compra
              </div>
            </CartWidget>
          </div>
        </div>
        <div className="text-center">
          <ItemBuilContainer prop="monitor" filter="Cart"></ItemBuilContainer>
        </div>
      </div>
    </>
  );
};

export default Monitor;
