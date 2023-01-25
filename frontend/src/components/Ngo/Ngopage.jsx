import React from "react";
import Footer from "../Footer/Footer";

import ReactSlick from "../Home/ReactSlick";
import NgoData from '../../DummyData/NGODummyData.json'

const Ngopage = () => {
  const ngoback = {
    background: `url('https://kodesolution.com/html/2017/fundpro-html/demo/images/pattern/p26.png')`,
     border: "1px solid black",
    borderRadius: "5px",
     boxShadow: "0 6px 7px rgba(160, 182, 223, 0.778)",
     
     
  };
  const ngoName = {
    fontFamily: "monospace",
    fontSize: "30px",
  };
  const ngoP = {
    fontFamily: "Open sans serif",
    fontSize: "18px",
    color: "#666666",
    margin: "10px 0px",
  };
  const ngoimg = {
    width:"100%",
    borderRadius: "20px 20px",
   boxSizing:"border-box",
   
  };

 
  return (
    <>
     
      <ReactSlick />
      

        {
        NgoData.map((data, index) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="2000"
              key={index}
            >
              <div className="container mt-5" style={ngoback}>
                <div className="row  ">
                  <div className="col-md-4" style={{ marginTop: "15px " }}  >
                    <img
                      src={
                        "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                      }
                      style={ngoimg}
                      
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="ngo-name mt-4" style={ngoName}>
                      {data.NGO}
                    </h3>
                    <ul className="ngo-det" style={{ color: "#666666" }}>
                      <li>{data.location}</li>
                      <li>{data.contact }</li>
                    </ul>
                    <p style={ngoP}>
                      {data.description}
                    </p>
                    <a href="#">
                      <button type="submit" className="btn btn-danger mb-4">
                        Donate
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }  

      {/* <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="3000">
        <div className="container mt-5" style={ngoback}>
          <div className="row ">
            <div className="col-md-4" style={{ marginTop: "15px " }}>
              <img
                src={
                  "https://kodesolution.com/html/2017/fundpro-html/demo/images/gallery/gallery-lg1.jpg"
                }
                style={ngoimg}
              />
            </div>
            <div className="col-md-8">
              <h3 className="ngo-name mt-4" style={ngoName}>
                Ngo Name
              </h3>
              <ul className="ngo-det" style={{ color: "#666666" }}>
                <li>Location</li>
                <li>contact</li>
              </ul>
              <p style={ngoP}>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause. Charitable giving as a religious
                act or duty is referred to as almsgiving or alms. The
                impoverished, particularly those widowed or orphaned,the ailing
                or injured, are generally regarded as the proper recipients of
                charity.
              </p>
              <a href="#">
                <button type="submit" className="btn btn-danger ">
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}


      <Footer />
    </>
  );
};

export default Ngopage;