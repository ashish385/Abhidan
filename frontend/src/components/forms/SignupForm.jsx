import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignupForm = () => {
  

  const navigate = useNavigate();
  let initialValue = {
    username: "",
    email: "",
    password: "",
    salt_password:"",
    phoneNumber: "",
    user_type:2,
  };
  const [formData, setFormData] = useState({initialValue});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 

  function handleChange(e) {
    console.log(formData);
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
  }
  console.log(formData);

  async function handleSubmit() {

     axios
       .post("http://localhost:1300/api/register-user", formData)
       .then((res) => {
         console.log(res.data);
         window.localStorage.setItem("newData",res.data);
           
           setTimeout(() => {
             toast.success("Sign Up successfully");
             navigate("/login");
           }, 1000);
         
         
       })
       .catch((error) => {
         console.log(error);
       });
   };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-2">
        {/* firstName and lastName */}
        <div className="flex flex-col space-y-3 md:flex-row gap-x-4">
          <label htmlFor="username" className="w-full">
            <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
              User Name:<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Enter First name"
              value={formData?.username}
              onChange={handleChange}
              className="bg-richblack-800 rounded-[0.5rem] flex shrink text-richblack-5 w-full p-[12px]"
            />
          </label>
          <label htmlFor="phonenumber" className="w-full">
            <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
              Phone Number:<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter Last name"
              value={formData?.phonenumber}
              onChange={handleChange}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        {/* email */}
        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-[#292929]  leading-[1.375rem]">
            Email Address:<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Addresss"
            value={formData?.email}
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
              value={formData?.password}
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
          <label htmlFor="salt_password" className="w-full relative">
            <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
              Confirm Password:<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="salt_password"
              id="salt_password"
              placeholder="Confirm Password"
              value={formData?.salt_password}
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
        <button
          type="submit"
          className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 mt-2 py-3"
        >
          Sign Up
        </button>
      </form>
      <div className="text-gray-500 mt-3">
        Already have account?{" "}
        <Link
          to="/login"
          className="text-blue-300 hover:text-blue-400 hover:underline"
        >
          log in
        </Link>
      </div>
    </div>
  );
};

export default SignupForm