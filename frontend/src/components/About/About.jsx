import React from "react";
import aboutImage1 from "../../assets/AboutImages/about-us.jpg";
import { Link } from "react-router-dom";
import AboutSlick from "./AboutSlick";
import "./About.css";
import Footer from "../Footer/Footer";

const About = () => {
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
                <strong>Step Forward Serve Huminity Reach Out & Help</strong>
              </p>
              <p>
                ABHIDAN is providing an interface between the user who is eager
                to donate any stuff like food, book, clothes etc.
              </p>
              <div>
                <ul>
                  <li>Have enough food for life</li>
                  <li>Poor children can return to school.</li>
                  <li>Most homeless shelters or service organization.</li>
                  <li>Support poor people to have better jobs.</li>
                </ul>
              </div>
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

      <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="2000">
        <AboutSlick />
      </div>
    </>
  );
};

export default About;
