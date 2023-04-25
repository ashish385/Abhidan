import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NgoRegistation = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    let accountType = props.accountType;
    

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
      name: "",
      image: "",
      register_id: "",
      email: "",
      password: "",
      confirm_password:"",
      current_status: "ngo",
      user_type: "ngo",
      contact: "",
      address: "",
      
    });
    
    

    function handleChange(event) {
      setFormData((preData) => ({
        ...preData,
        [event.target.name]: event.target.value,
      }));
    }

    async function handleSubmit(event) {
      event.preventDefault();
      

        if (formData.password !== formData.confirm_password) {
            toast.error("Password does not match!");
            return;
        }

        const userData = {
          ...formData,
        };

        const finalData = {
          ...userData,
          accountType,
        };

      console.log(finalData);
        setFormData(finalData);

    }

    return (
      <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-2">
          {/* firstName and lastName */}
          <div className="flex flex-col md:flex-row gap-x-4">
            <label htmlFor="ngo_name" className="w-full">
              <p className="text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]">
                Organization_Name:<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="ngo_name"
                id="ngo_name"
                placeholder="Enter Ngo name"
                value={formData.ngo_name}
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

          <div className="flex flex-col gap-y-2">
            <label
              class=" text-[0.875rem] text-[#292929] mb-1 leading-[1.375rem]"
              for="file_input"
            >
              Upload file<sup className="text-pink-200">*</sup>
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <button
            type="submit"
            className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 mt-2 py-3"
          >
            Sign Up
          </button>
        </form>
      </>
    );
};

export default NgoRegistation