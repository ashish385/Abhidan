import React from 'react'
import './About.css'
import aboutImage1 from "../../assets/AboutImages/about-us.jpg";
import { Link } from "react-router-dom";


const AboutHome = () => {
  return (
    <>
      <div className="section">
        {/* <Navbar /> */}
        <div className="aboutContainer">
          <div className="row row1 align-item-center ">
            <div
              className="col-lg-6 colum1"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="2000"
            >
              <div className="heading heading-primary">
                <span className="heading__pre-title">|| About us</span>
                <h2 className="heading__title">
                  <span>Pleged to support</span> <span></span>
                </h2>
              </div>
              <p>
                <strong>DONATE to NGO of your wish in signle click!</strong>
              </p>
              <p>
                ABHIDAN is providing an interface between the user who is eager
                to donate any stuff like food, book, clothes etc.
              </p>
              <Link className="btn btn-info" to={"/about"}>
                More About
              </Link>
            </div>

            <div
              className="col-lg-6 col-xl-5 offset-xl-1  colum2"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="2000"
            >
              <div className="info-box ">
                <div className="image-section  ">
                  <img src={aboutImage1} alt="" />
                  {/* <img src={aboutImage2} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          
    </>
  );
}

export default AboutHome