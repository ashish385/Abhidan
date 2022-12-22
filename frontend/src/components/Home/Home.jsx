import React from "react";
import ReactSlick from "./ReactSlick";
import Navbar from "../Navbar/Navbar";
import "../Style/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
import HowitWorks from "../How_it_works/HowitWorks";



const Home = () => {
  return (
    <>
      <Navbar />
      
      <Slider >
        <ReactSlick />
      </Slider>
      <HowitWorks/>
      <Footer/>
    </>
  );
};

export default Home;
