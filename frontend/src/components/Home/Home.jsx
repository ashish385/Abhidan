import React from "react";
import ReactSlick from "./ReactSlick";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
// import About from "../About/About";
import AboutHome from "../About/AboutHome";

const Home = () => {
  return (
    <>
      

      <Slider>
        <ReactSlick />
      </Slider> 
       <AboutHome />

      <Footer />
    </>
  );
};

export default Home;
