import React, { useState } from "react";
import Images from "../../DummyData/GalleryImages.json";
import { AiOutlineClose } from "react-icons/ai";

const Gallery = () => {
  const [imgmodel, setImgmodel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setImgmodel(true);
  };
  return (
    <>
      {/* <div className="container-fluid"></div> */}
      {/* image Model */}
      <div>
        {imgmodel && (
          <>
            <div
              // tabindex="-1"
              className={`${
                imgmodel
                  ? "fixed inset-0 h-full w-full z-10 bg-black opacity-50 cursor-default"
                  : "hidden"
              }`}
            ></div>
            <div className="  z-20 w-full h-full  fixed top-[15%] md:top-16 lg:top-16 object-fit flex justify-center items-center  ">
              <div className="   w-full h-[400px] lg:h-[450px] flex justify-center  px-4    overflow-y-hidden max-w-4xl rounded-lg ">
                <div className="">
                  <img
                    src={tempimgSrc}
                    alt=""
                    className=" mt-0  w-full sm:w-[600px]  md:w-[650px] lg:w-[900px] xl:w-[1200px] h-[280px] md:h-[350px] lg:h-[430px]  rounded-md"
                  />
                </div>
                <AiOutlineClose
                  className="absolute top-1 right-2   md:right-10 text-gray-100 font-bold text-xl md:text-3xl cursor-pointer"
                  onClick={() => setImgmodel(false)}
                />
              </div>
            </div>
          </>
        )}
      </div>
      {/* Images */}
      <div className="px-3 py-1">
        <div className="w-full"></div>
        <div className=" columns-1 md:columns-2 lg:columns-3 m-3 mt-3 ">
          {Images.map((img, index) => (
            <>
              <div
                className="py-2 "
                key={index}
                onClick={() => getImg(img.imgSrc)}
              >
                <img
                  src={img.imgSrc}
                  alt=""
                  className="w-full rounded-md  hover:opacity-90 "
                />
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Gallery;
