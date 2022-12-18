import React from "react";
import ReactSlick from "./ReactSlick";
import Navbar from "../Navbar/Navbar";
import "../Style/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  return (
    <>
      <Navbar />
      <Slider >
        <ReactSlick />
      </Slider>
    </>
  );
};

export default Home;
