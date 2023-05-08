import React, { useState } from 'react'
import logo from "./Helpus.jpg";
import logotemp from "./help.jpg";
import { FcLike } from "react-icons/fc"
import {BiCommentDetail} from "react-icons/bi"
import { IoMdShareAlt } from "react-icons/io";
import Filter from '../Ngo/Filter';


const Blog = () => {
  const [openPost, setOpenPost] = useState(false);

  return (
    <div className="w-full ">
      <div className="hidden md:flex">
        <img src={logo} alt="" className="w-full  h-[350px] md:h-[500px]" />
      </div>
      <div className="">
        <div className="bg-[#f8f9fa] ">
          <Filter />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-4 gap-x-5">
            {/* col-1 */}
            <div className="border mb-2 rounded-md shadow-xl">
              <img src={logotemp} alt="" className="rounded-md " />

              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold ">Ashish Soni</h1>
                  <div className="flex gap-x-4 text-sm">
                    <p>08:22pm</p>
                    <p>07-05-2023</p>
                  </div>
                </div>
                <p className="mt-2 text-md">
                  Why should boys have all the fun? it's the women who are
                  making india an alcohol-loving country
                </p>
                <button>Read more...</button>
              </div>

              <div className="flex justify-between items-center px-6 py-2 rounded-md border-t-2 mt-1">
                <span className=" ">
                  <FcLike size={32} />
                </span>
                <p>
                  <BiCommentDetail size={32} />
                </p>
                <p>
                  <IoMdShareAlt size={32} />
                </p>
              </div>
            </div>

            {/* col-2 */}
            <div className="border mb-2 rounded-md shadow-xl">
              <img src={logotemp} alt="" className="rounded-md " />

              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold ">Ashish Soni</h1>
                  <div className="flex gap-x-4 text-sm">
                    <p>08:22pm</p>
                    <p>07-05-2023</p>
                  </div>
                </div>
                <p className="mt-2 text-md">
                  Why should boys have all the fun? it's the women who are
                  making india an alcohol-loving country
                </p>
                <button>Read more...</button>
              </div>

              <div className="flex justify-between items-center px-6 py-2 rounded-md border-t-2 mt-1">
                <span className=" ">
                  <FcLike size={32} />
                </span>
                <p>
                  <BiCommentDetail size={32} />
                </p>
                <p>
                  <IoMdShareAlt size={32} />
                </p>
              </div>
            </div>

            {/* col-3 */}
            <div className="border mb-2 rounded-md shadow-xl">
              <img src={logotemp} alt="" className="rounded-md " />

              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold ">Ashish Soni</h1>
                  <div className="flex gap-x-4 text-sm">
                    <p>08:22pm</p>
                    <p>07-05-2023</p>
                  </div>
                </div>
                <p className="mt-2 text-md">
                  Why should boys have all the fun? it's the women who are
                  making india an alcohol-loving country
                </p>
                <button>Read more...</button>
              </div>

              <div className="flex justify-between items-center px-6 py-2 rounded-md border-t-2 mt-1">
                <span className=" ">
                  <FcLike size={32} />
                </span>
                <p>
                  <BiCommentDetail size={32} />
                </p>
                <p>
                  <IoMdShareAlt size={32} />
                </p>
              </div>
            </div>

            {/* col-4 */}
            <div className="border mb-2 rounded-md shadow-xl">
              <img src={logotemp} alt="" className="rounded-md " />

              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold ">Ashish Soni</h1>
                  <div className="flex gap-x-4 text-sm">
                    <p>08:22pm</p>
                    <p>07-05-2023</p>
                  </div>
                </div>
                <p className="mt-2 text-md">
                  Why should boys have all the fun? it's the women who are
                  making india an alcohol-loving country
                </p>
                <button>Read more...</button>
              </div>

              <div className="flex justify-between items-center px-6 py-2 rounded-md border-t-2 mt-1">
                <span className=" ">
                  <FcLike size={32} />
                </span>
                <p>
                  <BiCommentDetail size={32} />
                </p>
                <p>
                  <IoMdShareAlt size={32} />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* create Post */}
        {/* <button className=' fixed  bottom-8 left-[4rem]  z-50  px-3 py-3 bg-blue-100 text-black rounded-full '>
          <MdCreateNewFolder size={35} />
        </button> */}
      </div>
    </div>
  );
}

export default Blog