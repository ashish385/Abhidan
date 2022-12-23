import React from "react";
import sliderImage1 from "../../assets/SliderImages/slider4.jpg";
import TypewriterEffect from "./TypewriterEffect";
import Logo from "../../assets/logo.png";
import app from "../../assets/app.jpg";
// import './home.css'
import Slider from "react-slick";

const ReactSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // cssEase: "linear",
    autoplaySpeed:1000
  };

  return (
    <>
      <Slider {...settings} >
        <div>
          <img className="w-100" height='500vh' src={Logo} />
          <h1 style={{marginTop: "-10rem", color: "white"}}>hello</h1>
        </div>
        <div>
          <img className="w-100" height='500vh' src={app} />
        </div>

        

        <div>
          <img className="w-100" height='500vh' src={sliderImage1} />
        </div>
      </Slider>
     
    </>
  );
};

export default ReactSlick;
