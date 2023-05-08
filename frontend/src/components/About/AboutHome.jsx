import React from 'react'
import aboutImage1 from './images/aboutHome.jpg'
import { Link } from "react-router-dom";


const AboutHome = () => {
  return (
    <>
      <section className="w-full">
        <div className="bg-[#DDFFBC] grid grid-cols-1 mt-5 space-y-4 py-3  justify-center md:grid-cols-2 gap-x-4">
          <div className="text-center pt-5 flex flex-col items-center ">
            <h2 className="text-2xl font-semibold font-inter text-black ">
              About Us
            </h2>
            <div className="w-[80px] h-1 rounded-md bg-yellow-400 mt-1 mb-3 "></div>
            <h3 className="  self-start ml-5 text-lg font-bold ">
              Pleged to support
            </h3>
            <p className="w-full  text-lg subpixel-antialiased px-4  text-start ">
              We believe that everyone deserves access to basic human needs like
              food, water, shelter, and healthcare. Our purpose is to connect
              generous donors with reputable charities and non-profit
              organizations that are working to make the world a better place.
            </p>
            <Link
              to={"/about"}
              className="self-start ml-5 mt-4 px-3 py-2 rounded-md  border-2 text-black border-yellow-400 hover:bg-yellow-400 "
            >
              <button>Read More</button>
            </Link>
          </div></div>
          <div>
            <img src={aboutImage1} alt="Our Purpose" className="rounded-lg " />
          </div>
        </section>
     
        
    </>
  );
}

export default AboutHome