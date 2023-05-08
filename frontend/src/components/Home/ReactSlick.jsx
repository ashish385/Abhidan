import React from "react";
import "../Home/Home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from "./images/hslide.jpg"
import pic2 from "./images/hslide2.jpg"
import pic3 from "./images/hslide3.jpg"

const ReactSlick = () => {

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 276,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#F0F8FF]">
        <Slider {...settings} className="bg-[#F0F8FF]">
          <div className="slider-item">
            <img
              src={pic1}
              alt="Image 1"
              style={{ height: "600px", width: "100%" }}
            />
          <div className="sliderContent">
              <h3 className="">Give Them Helping Hand</h3>
              <p>Join your hand with to provide one time delicious meal</p>
              <button className=" mt-2 px-3 py-1 rounded-md border-2 border-yellow-400 text-lg hover:bg-yellow-400">Donate</button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src={pic2}
              alt="Image 2"
              style={{ height: "600px", width: "100%" }}
            />
            <div className="sliderContent">
              <h3>Helping Each Other Can Make Better World</h3>
              <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
              <button className=" mt-2 px-3 py-1 rounded-md border-2 border-yellow-400 text-lg hover:bg-yellow-400">Donate</button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src={pic3}
              alt="Image 3"
              style={{ height: "600px", width: "100%" }}
            />
            <div className="sliderContent">
              <h3>They Are Wait For Your Help</h3>
              <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
              <button className=" mt-2 px-3 py-1 text-lg rounded-md border-2 border-yellow-400   hover:bg-yellow-400">Donate</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ReactSlick;
