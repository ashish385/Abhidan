import React from "react";
import "../Home/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import map from "../../assets/circleback.png";
import sponimg1 from "../../assets/sponsors2.png"
const Circle = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
      {/* circle code */}
      <div className="circleContainer" style={{ backgroundColor: "#efefef" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 mx-auto">
              <div className="sectionTitle text-center mb-65">
                <span className="sectiontitle">Need your help</span>
                <h2 className="sectionTitle_big">
                  we are always where others <br />
                  needs help
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="circle-1">
                <div className="circle-inner">
                  <div className="circle-wrapper">
                    <div className="circle-content">
                      <h3>
                        {" "}
                        <span className="circle-num">1000,</span>
                        <span
                          className="circle-txt"
                          style={{ color: "#eb9309" }}
                        >
                          KG
                        </span>
                      </h3>
                      <span className="circle-para">
                        {" "}
                        <p>
                          We help local nonprofits access the funding, tools,
                          training.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="circle-2">
                <div className="circle-inner">
                  <div className="circle-wrapper">
                    <div className="circle-content">
                      <h3>
                        {" "}
                        <span className="circle-num">1000,</span>
                        <span
                          className="circle-txt"
                          style={{ color: "#eb9309" }}
                        >
                          KG
                        </span>
                      </h3>
                      <span className="circle-para">
                        {" "}
                        <p>
                          We help local nonprofits access the funding, tools,
                          training.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="circle-3">
                <div className="circle-inner">
                  <div className="circle-wrapper">
                    <div className="circle-content">
                      <h3>
                        {" "}
                        <span className="circle-num">1000,</span>
                        <span
                          className="circle-txt"
                          style={{ color: "#eb9309" }}
                        >
                          KG
                        </span>
                      </h3>
                      <span className="circle-para">
                        {" "}
                        <p>
                          We help local nonprofits access the funding, tools,
                          training.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="circle-4">
                <div className="circle-inner">
                  <div className="circle-wrapper">
                    <div className="circle-content">
                      <h3>
                        {" "}
                        <span className="circle-num">1000,</span>
                        <span
                          className="circle-txt"
                          style={{ color: "#eb9309" }}
                        >
                          KG
                        </span>
                      </h3>
                      <span className="circle-para">
                        {" "}
                        <p>
                          We help local nonprofits access the funding, tools,
                          training.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="circle-5">
                <div className="circle-inner">
                  <div className="circle-wrapper">
                    <div className="circle-content">
                      <h3>
                        {" "}
                        <span className="circle-num">1000,</span>
                        <span
                          className="circle-txt"
                          style={{ color: "#eb9309" }}
                        >
                          KG
                        </span>
                      </h3>
                      <span className="circle-para">
                        {" "}
                        <p>
                          We help local nonprofits access the funding, tools,
                          training.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sponsers code */}
      
      <section className="sponsors" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="spon_title">
                <h2 className="spon_heading text-uppercase">
                  "become support partner"
                </h2>
              </div>
            </div>
          </div>

          
          <div className="spon_slider">
            <div className="spon-track">
              <div className="spon_img">
                <img src={sponimg1} alt="sponImage" />
              </div>
              <div className="spon_img">
                <img src={sponimg1}alt="sponImage" />
              </div>
              <div className="spon_img">
                <img src={sponimg1} alt="sponImage" />
              </div>
              <div className="spon_img">
                <img src={sponimg1} alt="sponImage" />
              </div>
              <div className="spon_img">
                <img src={sponimg1}alt="sponImage" />
              </div>
              <div className="spon_img">
                <img src={sponimg1} alt="sponImage" />
              </div>
              <div className="spon_img">
                <img src={sponimg1}alt="sponImage" />
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Circle;
