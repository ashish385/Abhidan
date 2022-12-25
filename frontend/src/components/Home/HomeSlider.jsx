import React, { useState } from 'react'
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import img1 from '../../assets/AboutImages/about_2.png'
import img2 from '../../assets/AboutImages/about_2.png'
import img3 from '../../assets/AboutImages/about_2.png'
import img4 from '../../assets/AboutImages/about_2.png'



const images = [img1, img2, img3, img4];


const HomeSlider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const settings = {
      dots: false,
      infinite: true,
      className: "center",
      centerPadding: "60px",
      centerMode: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      // cssEase: "linear",
      autoplaySpeed: 1000,
      beforeChange: (current, next) => setSlideIndex(next),
      currentMode: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

   

  return (
    <>
      <div className="containerslide">
        <h2 className="header">reacr carousel</h2>
        <div className="slider">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
                key={index}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeSlider