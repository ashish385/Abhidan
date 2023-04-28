import React,{useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import data from "../../DummyData/homeSlideData.json"

const AboutSlide = () => {
    let reviews = data;
    const [index, setIndex] = useState(0);
    function leftShiftHandler() {
      if (index - 1 < 0) {
        setIndex(reviews.length - 1);
      } else {
        setIndex(index - 1);
      }
    }

    function rightShiftHandler() {
      if (index + 1 >= reviews.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
  }
  
  // setInterval(rightShiftHandler, 5000);
  
  return (
    <>
      <div className=" w-full h-[350px] md:h-[500px]  relative bg-gray-500 transition-all duration-1000 ease-in hover:shadow-xl rounded-md group">
        {/* <CardSlide review={reviews[index]} /> */}
        <div className=" w-full ">
          <div className="relative ">
            <img
              src={reviews[index].img}
              alt=""
              className="w-full  h-[350px] md:h-[500px]"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-60  "></div>
            <div className="absolute top-4 md:top-0 left-0 right-0 bottom-0 w-full h-[70%]">
              <div className="flex flex-col items-center justify-center h-full space-y-2 md:space-y-3 mx-[2rem] md:mx-[8rem] text-center">
                <h1 className="text-lg md:text-5xl  font-bold text-gray-100  uppercase ">
                  {reviews[index].heading}
                </h1>
                <p className="text-sm md:text-lg text-gray-100  content-center px-[5rem]  text-center">
                  {reviews[index].desc}
                </p>
                <button className="px-3 py-2 mt-4 outline outline-yellow-400 hover:scale-105 rounded-md hover:bg-yellow-400 text-white ">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* buttons  */}
        {/* left button */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={leftShiftHandler} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={rightShiftHandler} size={30} />
        </div>
      </div>
    </>
  );
}

export default AboutSlide