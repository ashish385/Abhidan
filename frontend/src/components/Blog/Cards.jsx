import React, { useState } from "react";
import Card from "./Card";
import {AiOutlineClose} from "react-icons/ai"

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  const [fullBlogModel, setFullBlogModel] = useState(false);
  const [blogData, setBlogData] = useState('');

  console.log("printing data", courses);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      console.log(allCourses);
      return allCourses;
    } else {
      return courses[category];
    }
  };

  console.log(fullBlogModel);

  const getfullBlog = (blog) => {
    setFullBlogModel(true);
    console.log(blog);
    setBlogData(blog);
  }
  return (
    <>
      <div className=" flex flex-wrap justify-center bg-white gap-4 mx-auto">
        {getCourses().map((couseData) => {
          return (
            <Card
              key={couseData.id}
              courseData={couseData}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
              setFullBlogModel={setFullBlogModel}
              setBlogData={setBlogData}
            />
          );
        })}
      </div>
      {fullBlogModel && (
        <>
          <div
            className={`${
              fullBlogModel
                ? "fixed inset-0 h-full w-full z-10 bg-black opacity-50 cursor-default"
                : "hidden"
            }`}
          ></div>
          <div className="  z-20 w-full   fixed top-0 bottom-0 left-0 right-0 bg-opacity-25 px-[5rem] flex justify-center items-center  bg-red-950   ">
            <div className=" setScrollbar w-full max-w-3xl overflow-y-auto absolute   bg-white mx-4 md:mx-5 rounded-md flex flex-col justify-center    ">
              <div className="relative px-3 py-1 h-[400px] setScrollbar ">
                <img
                  src={blogData.image.url}
                  alt=""
                  className=" w-full h-[200px] md:h-[250px]   rounded-md"
                />
                <div className="absolute top-0 right-0 px-1 py-1 bg-opacity-50 hover:bg-opacity-75 rounded-full border bg-black">
                  <AiOutlineClose
                    className="  text-gray-100 font-bold text-3xl cursor-pointer"
                    onClick={() => setFullBlogModel(false)}
                  />
                </div>
                <h1 className="text-lg text-black mt-2 px-2 font-semibold">
                  {blogData.title}{" "}
                </h1>
                <p className="text-gray-600 mt-2 px-2">
                  {blogData.description}{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
