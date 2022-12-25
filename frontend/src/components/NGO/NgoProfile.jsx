import React from 'react'
import Slider from 'react-slick';
import ReactSlick from '../Home/ReactSlick';
import Navbar from '../Navbar/Navbar'
// import img1 from "https://kodesolution.com/html/2017/fundpro-html/demo/images/pattern/p26.png";

const NgoProfile = () => {
  return (
    <>
      <Navbar />
      <ReactSlick />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 mb-50"
            style={{
              background: `url('https://kodesolution.com/html/2017/fundpro-html/demo/images/pattern/p26.png ')`,
            }}
          >
            <div className="col-lg-4">
              <img
                src="https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NgoProfile