import React from "react";
import ReactSlick from "./ReactSlick";
import Navbar from "../Navbar/Navbar";
<<<<<<< HEAD
import "./Home.css"
=======
import "../Style/Home.css";
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
<<<<<<< HEAD
import About from "../About/About";
import HomeSlider from "./HomeSlider";
=======
import HowitWorks from "../How_it_works/HowitWorks";

>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906


const Home = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      {/* <HomeSlider /> */}
      <Slider>
        <ReactSlick />
      </Slider>
      <About />
      <Footer />
=======
      
      <Slider >
        <ReactSlick />
      </Slider>
      <HowitWorks/>
      <Footer/>
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
    </>
  );
};

export default Home;
