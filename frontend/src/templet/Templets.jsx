import React from "react";
import frameImage from "../assets/AboutImages/about_2.png"
import LoginForm from "../components/forms/LoginForm"
import {FcGoogle} from "react-icons/fc";
import RegSelection from "./RegSelection"
import { Link } from "react-router-dom";




const Templets = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {

  return (
    <>
      <div className="flex flex-col-reverse bg-white mt-3 rounded-lg  h-fit lg:flex-row-reverse w-11/12 max-w-[1160px] gap-y-5 box-border md:justify-between pb-5  mx-auto  md:gap-y-5">
        <div className="w-full max-h-screen md:w-[80%] lg:min-w-[550px] mx-auto md:px-[5rem] px-4 bg-[#fffaf0] rounded-md pt-4 box-border">
          <h1 className="text-[#104e8b] font-semibold text-[1.875rem] leading-[2.375rem]">
            {title}
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] mt-4">
            <span className="text-gray-500">{desc1}</span>
            <br />
            <span className="text-blue-100 ityalic">{desc2}</span>
          </p>
          {formType === "signup" ? (
            // <SignupForm setIsLoggedIn={setIsLoggedIn} />
            <RegSelection />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] w-[40%] bg-richblack-700"></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem">
              OR
            </p>
            <div className="h-[1px] w-[40%] bg-richblack-700"></div>
          </div>

          <button className="flex flex-row w-full gap-x-2 justify-center items-center rounded-[8px] font-medium hover:bg-yellow-500 text-gray-500 hover:text-gray-700 border border-richblack-700 px-[12px] py-[8px] mt-6">
            <FcGoogle />
            <p className="">Signup with Goggle</p>
          </button>
        </div>
        <div className="md:w-[80%] lg:min-w-[550px] mx-auto lg:h-full max-h-screen ">
          <div className=" hidden md:block  md:w-[100%] rounded-md  ">
            <img
              src={frameImage}
              alt="frame"
              loading="lazy"
              className="  w-full md:rounded-tr-[25%] md:rounded-bl-[25%] md:h-[400px] md:w-[100%] lg:h-fit "
            />
            {/* <img
              src={image}
              alt="students"
              loading="lazy"
              className="  md:flex   rounded-md  md:flex-wrap w-full  content-center justify-center rounded-r-md  "
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templets;
