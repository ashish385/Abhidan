import React from "react";
import ReactSlick from "./ReactSlick";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Footer/Footer";
// import About from "../About/About";
import AboutHome from "../About/AboutHome";
import HowitWorks from "../How_it_Works/HowitWorks";
import AboutSlick from "../About/AboutSlick";
import Circle from "./Circle";
const Home = () => {
  return (
    <>
      <ReactSlick />
      <AboutHome />
      <Circle />
      <HowitWorks />
      <AboutSlick />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
