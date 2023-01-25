import React from "react";

import "./Home.css";
import homeSlide from "../../DummyData/homeSlideData.json";

import Slider from "react-slick";

const ReactSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <Slider {...settings}>
        {homeSlide.map((data, index) => {
          return (
            <div key={index} className="slideImage">
              <img className="w-100" src={data.img} />
              <div className="slideContent">
                <h1>{data.heading} </h1>
                <h2>{data.desc}</h2>
                <button className="btn btn-primary mt-2">Donate</button>
              </div>
            </div>
          );
        })}
        {/* <div>
          <img className="w-100" height="500vh" src={app} />
        </div>

        <div>
          <img className="w-100" height="500vh" src={sliderImage1} />
        </div> */}
      </Slider>
    </>
  );
};

export default ReactSlick;
