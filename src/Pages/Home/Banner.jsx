import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  ->>>>>>>>> react carusel from react asowem commonents
import baner1 from "../../assets/banner/banner1.png";
import baner2 from "../../assets/banner/banner2.png";
import baner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={baner1} />
        <p className="legend">R MAX 1</p>
      </div>
      <div>
        <img src={baner2} />
        <p className="legend">R MAX 2</p>
      </div>
      <div>
        <img src={baner3} />
        <p className="legend">R MAX 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
