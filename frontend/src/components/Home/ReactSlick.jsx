import React from "react";
import "../Home/Home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from "../../assets/SliderImages/melanie-lim-nD3wunG16Fo-unsplash.jpg"

const ReactSlick = () => {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider-item">
        <img src={pic1} alt="Image 1"  style={{height:"600px",width:"100%"}}/>
        <div className="sliderContent ">
        <h3 >Text 1</h3>
        <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
        <button className="btn btn-success mt-2">Donate</button>
        </div>
      </div>
      <div className="slider-item">
        <img src={pic1} alt="Image 2" style={{height:"600px",width:"100%"}}/>
        <div className="sliderContent">
        <h3>Text 1</h3>
        <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
        <button className="btn btn-success mt-2">Donate</button>
        </div>
      </div>
      <div className="slider-item">
        <img src={pic1} alt="Image 3"style={{height:"600px",width:"100%"}} />
        <div className="sliderContent">
        <h3 >Text 1</h3>
        <p>bsdjkfhs dfheoiwe skchoihfe nvsdho </p>
        <button className="btn btn-success mt-2" >Donate</button>
        </div>
      </div>
    </Slider>
  );
};

export default ReactSlick;
