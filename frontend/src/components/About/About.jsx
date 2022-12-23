import React from "react";
import Navbar from "../Navbar/Navbar";
import aboutImage2 from "../../assets/AboutImages/about_layout-reverse.png";
import aboutImage1 from "../../assets/AboutImages/about-us.jpg";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import AboutSlick from "./AboutSlick";
import Footer from "../Footer/Footer";
// import Swiper from "./SwiperAbout";





const About = () => {



=======
import "../Style/about.scss";
import { Link } from "react-router-dom";
const About = () => {
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
  return (
    <>
      <div className="section">
        {/* <Navbar /> */}
<<<<<<< HEAD
        <div className="aboutContainer">
          <div className="row row1 align-item-center ">
            <div className="col-lg-6 colum1">
              <div className="heading heading-primary">
                <span className="heading__pre-title">|| About us</span>
                <h2 className="heading__title">
                  <span>Pleged to support</span> <span></span>
                </h2>
              </div>
              <p>
                <strong>
                  DONATE to NGO of your wish in signle click!
                </strong>
              </p>
              <p>
               ABHIDAN  is providing an interface between the user who is eager to donate any stuff like food, book, clothes etc.
              </p>
              <Link className="btn btn-info" to={'/'}>More About</Link>
=======
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
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1  colum2">
              <div className="info-box ">
                <div className="image-section  ">
<<<<<<< HEAD
                  <img src={aboutImage1} alt="" />
                  {/* <img src={aboutImage2} /> */}
=======
                  <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    <img src={aboutImage1} alt="" />
                  </div>
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <AboutSlick />

      {/* <Footer /> */}
      



=======
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
    </>
  );
};

export default About;
