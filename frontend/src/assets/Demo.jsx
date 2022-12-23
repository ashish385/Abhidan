import React from 'react'
import Navbar from '../components/Navbar/Navbar'
<<<<<<< HEAD
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
=======
import logo from '../assets/AboutImages/about-us-2.jpg'
import '../components/Style/about.scss'
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906

const Demo = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
=======
      
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
    </>
  );
}

export default Demo