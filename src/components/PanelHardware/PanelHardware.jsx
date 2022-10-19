import cpu from "../../assets/icons/cpu.png";
import mother from "../../assets/icons/mother.png";
import cooler from "../../assets/icons/cooler.png";
import ram from "../../assets/icons/ram.png";
import gpu from "../../assets/icons/gpu.png";
import hdd from "../../assets/icons/hdd.png";
import pc from "../../assets/icons/pc.png";
import display from "../../assets/icons/display.png";

import { Link } from "react-router-dom";

const PanelHardware = () => {
  return (
    <>
      <div className="md:w-80 p-10 rounded-lg shadow-xl bg-white">
        <div>
          <div className="flex justify-around mb-10">
            <Link to="/Amd">
              <div>
                <img src={cpu} alt="cpu" className="h-12" />
                <span></span>
              </div>
            </Link>

            <Link to="/MotherAMD">
              <div>
                <img src={mother} alt="mother" className="h-12" />
                <span></span>
              </div>
            </Link>
          </div>

          <div className="flex justify-around mb-10">
            <Link to="/Cooler">
              <div>
                <img src={cooler} alt="cooler" className="h-12" />
                <span></span>
              </div>
            </Link>

            <Link to="/MemoriaRam">
              <div>
                <img src={ram} alt="ram" className="h-14" />
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex justify-around mb-10">
            <Link to="/PlacaDeVideo">
              <div>
                <img src={gpu} alt="gpu" className="h-12" />
                <span></span>
              </div>
            </Link>

            <Link to="/Almacenamiento">
              <div>
                <img src={hdd} alt="hdd" className="h-12" />
                <span></span>
              </div>
            </Link>
          </div>

          <div className="flex justify-around mb-4">
            <Link to="/Gabinete">
              <div>
                <img src={pc} alt="pc" className="h-12" />
                <span></span>
              </div>
            </Link>

            <Link to="/Monitor">
              <div>
                <img src={display} alt="display" className="h-12" />
                <span></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelHardware;
