import React from "react";
import aboutImage2 from "../../assets/AboutImages/about_layout-reverse.png";
import aboutImage1 from "../../assets/AboutImages/about-us.jpg";
import "../About/about.scss";
import HowitWorks from "../HowitWorks/HowitWork"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="section">
        {/* <Navbar /> */}
        <div className="container">
          <div className="row row1 align-item-center ">
            <div className="col-lg-6 colum1">
              <div className="heading heading-primary">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="3000"
                >
                  <h2 className="heading__pre-title">About us</h2>

                  <h3 className="heading__title">
                    <span>Pleged to support</span> <span></span>
                  </h3>

                  <p>
                    <strong>DONATE to NGO of your wish in signle click!</strong>
                  </p>
                  <p>
                    ABHIDAN is web-based application for managing the execces of
                    food in resturant,hotel,hostal and wedding. It is
                    intermediate between two peoples and provide fast and secure
                    service. It's build on MREN technology, which more affecting
                    the fast rendering and working. It is not stop at food but
                    its work on extra donation services .
                  </p>
                </div>
                <div
                  data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <Link to="/">
                    {" "}
                    <button type="submit" className="btn btn-danger">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1  colum2">
              <div className="info-box ">
                <div className="image-section  ">
                  <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    <img src={aboutImage1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HowitWorks/> */}
    </>
  );
};

export default About;
