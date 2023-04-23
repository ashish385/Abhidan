import axios from 'axios';
import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NgoRegistation = (props) => {
    let accountType = props.accountType;
    

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
      ngo_name: "",
      image: "",
      register_id: "",
      email: "",
      password: "",
      confirm_password:"",
      current_status: "request",
      user_type: "ngo",
      contact: "",
      address: "",
      established_date: "",
      description:"",
      state: "",
    
    });
    
    

  function handleChange(event) {
      console.log(formData);
      setFormData((preData) => ({
        ...preData,
        [event.target.name]: event.target.value,
      }));

      
  }
  // console.log(formData);

    async function handleSubmit(event) {
      event.preventDefault();
      const userData = {
        ...formData,
      };
      const finalData = {
        ...userData,
        accountType,
      };
      console.log(finalData);
      setFormData(finalData);
      

        if (formData.password !== formData.confirm_password) {
            toast.error("Invalid email or Password!");
            return;
      }
      
      axios
        .post("http://localhost:1300/api/register-ngo", finalData)
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            toast.success("Sign Up Successfully!");
            Navigate("/login");
          },1000)
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something Error");
        });


    }

    return (
      <>
        <div className="mb-5 pb-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-2">
            {/* firstName and lastName */}
            <div className="flex flex-col md:flex-row gap-x-4">
              <label htmlFor="ngo_name" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Organization Name:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="ngo_name"
                  id="ngo_name"
                  placeholder="Enter Ngo name"
                  value={formData?.ngo_name}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
              <label htmlFor="register_id" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Register ID:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="register_id"
                  id="register_id"
                  placeholder="Enter register id:"
                  value={formData.register_id}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
            </div>
            <label htmlFor="email" className="w-full">
              <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                Email Address:<sup className="text-pink-200">*</sup>
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Addresss"
                value={formData.email}
                onChange={handleChange}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
            </label>
            {/* Create Password and Confirm Password */}
            <div className="flex flex-col md:flex-row gap-x-4">
              <label htmlFor="password" className="w-full relative">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Create Password:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-[38px] cursor-pointer  "
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <label htmlFor="confirm_password" className="w-full relative">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Confirm Password:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-2 top-[38px] cursor-pointer  "
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>
            {/* contact and adddress */}
            <div className="flex flex-col md:flex-row gap-x-4">
              <label htmlFor="contact" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Ngo Contact:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Ngo contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
              <label htmlFor="address" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Address:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address:"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
            </div>

            {/* image and state */}
            <div className="flex flex-col md:flex-row gap-x-4">
              <label htmlFor="state" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  State:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  value={formData?.state}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
              <div className="flex flex-col gap-y-1 w-full ">
                <label htmlFor="image">
                  <p className="text-[0.875rem] text-[#292929]  leading-[1.375rem]">
                    Upload file:<sup className="text-pink-200">*</sup>
                  </p>
                </label>
                <input
                  required
                  type="file"
                  name="image"
                  id="image"
                  value={formData?.image}
                  onChange={handleChange}
                  className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-1 file:py-1 file:m-2 file:border-none file:rounded-md file:text-richblack-5 file:cursor-pointer file:shadow-md file:shadow-blue-600/50 
                    bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full "
                />
              </div>
            </div>

            {/* Establish date and Desc */}
            <div className="flex flex-col md:flex-row gap-x-4">
              <label htmlFor="established_date" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Established Date:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="established_date"
                  id="established_date"
                  placeholder="Enter established_date"
                  value={formData?.established_date}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
              <label htmlFor="description" className="w-full">
                <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                  Description:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                  value={formData?.description}
                  onChange={handleChange}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
            </div>

            <button
              type="submit"
              className=" bg-yellow-50 hover:bg-yellow-400 rounded-[8px] font-medium text-richblack-900 mt-2 py-3"
            >
              Sign Up
            </button>
          </form>
          <div className="flex w-full items-center mt-4  pl-4 gap-x-2">
            <div className="h-[1px] w-[45%] bg-richblack-700"></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem">
              OR
            </p>
            <div className="h-[1px] w-[45%] bg-richblack-700"></div>
          </div>
          <div className="text-gray-500 mt-1 ml-3 text-center ">
            Already have account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              log in here...
            </Link>
          </div>
        </div>
      </>
    );
};

export default NgoRegistation