import React, { useState } from "react";
import Slider from "react-slick";
import Logo from "../../assets/AboutImages/about_2.png";
import image2 from "../../assets/AboutImages/about.jpg";
import './About.css'
import AboutSlickData from '../../DummyData/aboutDummy.json'
import Footer from "../Footer/Footer";


const images = [Logo, image2, Logo, image2, Logo, image2];


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const AboutSlick = ( ) => {
  
  const settings = {
    className: "center",
    initialSlide: 3,
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // cssEase: "linear",
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="section-2" >
        <div className="headinpPart">
          <h1 className="slideHeading " data-aos="fade-top"
              data-aos-offset="300"
              data-aos-duration="2000">testimonials </h1>
        </div>

        <div className="SlideBackground">
          <Slider {...settings} className="sliderAbout">
            {AboutSlickData.map((data, index) => {
              return (
                <div className="slideSection" key={index}>
                  <div className="card main-card">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img
                          key={index}
                          src={data.img}
                          alt=""
                          className="card-img"
                        />
                      </div>
                    </div>

                    <div className="card-content">
                      <h5 className="name"> {data.name}</h5>
                      <p className="description">{data.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      
    </>
  );
};

export default AboutSlick;
