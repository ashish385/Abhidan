import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto my-5 space-y-4">
        <div className="custom-loader"></div>
        <p className="text-black bg-gray-200 px-3 mt-10 py-2 rounded-md text-lg font-semibold">Loading....</p>
      </div>
      {/* <div className="w-[80px] h-[80px] inline-block after:content-none after:block after:w-[64px] after:h-[64px] after:m-[8px] rounded-full border-[6px] border-t-red-400 border-b-red-400 animate-spin ease-linear transition-all duration-[infinite] "></div> */}
    </>
  );
};

export default Spinner;
