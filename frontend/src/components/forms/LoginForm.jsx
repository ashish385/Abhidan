import axios from 'axios';
import React,{useState} from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
// import app_config from '../Config';

const LoginForm = ({ setIsLoggedIn }) => {
  // const url = app_config.api_url;
  const navigate = useNavigate();
  let initialValue = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({...formData, [name]:value});
  }

  async function handlerSubmit(event) {
    event.preventDefault();

   axios
     .post("http://localhost:1300/api/donor-login", formData)
     .then((res) => {
       console.log(res.data);
       localStorage.setItem('token', res.data);
       setIsLoggedIn(true);
       setTimeout(() => {
         
         toast.success("Logged In Successfully!");
         navigate("/")
        
       }, 1000);
     })
     .catch((error) => {
       console.log(error);
       toast.error("Invalid Data!")
     });

    
  }
  return (
    <div>
      <form onSubmit={handlerSubmit} className="flex flex-col gap-y-3 mt-2">
        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
            Email Address:<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={formData?.email}
            onChange={handleChange}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        <label htmlFor="password" className="w-full relative  ">
          <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
            Password:<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password "
            value={formData?.password}
            onChange={handleChange}
            className="bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-[38px] cursor-pointer "
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link>
            <p className=" mt-1 text-blue-100 text-md float-right hover:underline">
              Forgot Password?
            </p>
          </Link>
        </label>
        <button
          onClick={handlerSubmit}
          className=" bg-yellow-50 hover:bg-yellow-500 rounded-[8px] font-medium text-richblack-900 py-3"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="text-gray-500 mt-3">
        New User?{" "}
        <Link
          to="/signup"
          className="text-blue-300 hover:text-blue-400 hover:underline"
        >
          Create Account..
        </Link>
      </div>
    </div>
  );
};

export default LoginForm