import React from 'react'
import './About.css'
import aboutImage1 from "../../assets/AboutImages/about-us.jpg";
import { Link } from "react-router-dom";


const AboutHome = () => {
  return (
    <>
      <div className="  overflow-x-hidden px-3 mb-4 ">
        {/* <Navbar /> */}
        <div className="aboutContainer">
        <section className="w-full">
          <div className="bg-[#f8f9fa] grid grid-cols-1 mt-5 space-y-4 py-3  justify-center md:grid-cols-2 gap-x-4">
            <div className="text-center pt-5 flex flex-col items-center ">
              <h2 className="text-2xl font-semibold font-inter text-black ">
                About us
              </h2>
              
              <div className="w-[100px] h-1 rounded-md bg-yellow-400 mt-1 mb-3 "></div>
              <span>Pleged to support</span> <span></span>
              <p className="w-full  text-xl subpixel-antialiased px-4 py-2 text-start sm:mt-5">
            
                ABHIDAN is providing an interface between the user who is eager
                to donate any stuff like food, book, clothes etc.
             
              </p>
            </div>
            <div>
              <img
                src={aboutImage1}
                alt="about-img"
                className="rounded-lg "
              />
            </div>
          </div>
        </section>
     
        </div>
          </div>
          
    </>
  );
}

export default AboutHome