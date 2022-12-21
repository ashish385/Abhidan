import React from "react";
import Slider from "react-slick";
import './about.css'
import Logo from "../../assets/AboutImages/about_2.png";
import image2 from "../../assets/AboutImages/about.jpg";
import Navbar from "../Navbar/Navbar";

const AboutSlick = () => {
  const settings = {
      lazyLoad: true,
      spaceBetween:50,
    initialSlide: 3,
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 1000,
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="section-2">
        <div className="headinpPart">
          <h1 className="slideHeading ">hello dosto</h1>
        </div>
        <Slider {...settings} className="sliderAbout">
          <div className="slideSection">
            <div class="card main-card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src={Logo} alt="" class="card-img" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="slideSection">
            <div className="card main-card">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src={image2} alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">hello vin0od</h2>
                <p className="description">
                  Dekh rhe ho na vinood The lorem text the section that contains
                  header with having open functionality. Lorem dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="slideSection">
            <div class="card main-card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src={Logo} alt="" class="card-img" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="slideSection">
            <div className="card main-card">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src={image2} alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">hello vin0od</h2>
                <p className="description">
                  Dekh rhe ho na vinood The lorem text the section that contains
                  header with having open functionality. Lorem dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutSlick;
