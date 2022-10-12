import { Component } from "react";
import Slider from "react-slick";

import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";
import icon10 from "../../assets/icons/icon10.png";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            speed: 2000,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="mt-20 overflow-hidden">
        <Slider {...settings}>
          <div>
            <img src={icon1} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon2} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon3} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon4} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon5} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon6} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon7} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon8} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon9} alt="icon" className="h-20" />
          </div>
          <div>
            <img src={icon10} alt="icon" className="h-20" />
          </div>
        </Slider>
      </div>
    );
  }
}
