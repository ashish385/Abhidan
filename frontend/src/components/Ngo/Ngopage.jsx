import React,{useEffect, useState} from "react";


import NgoData from "../../DummyData/NGODummyData.json";
import Modal from "../forms/DonateForm";
import Footer from "../Footer/Footer";
import axios from "axios";





const Ngopage = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [ngoData, setNgoData] = useState([]);

  async function getAllNgoData() {
   axios.get("http://localhost:1300/api/all-ngo")
     .then((res) => {
        setNgoData(res.data.data)
      })
    
  }
  console.log(ngoData);

  useEffect(() => {
    getAllNgoData();
  }, []);



 


  const ngoback = {
    background: `url('https://kodesolution.com/html/2017/fundpro-html/demo/images/pattern/p26.png')`,
    border: "1px solid black",
    borderRadius: "1rem",
    boxShadow: "0 6px 7px rgba(160, 182, 223, 0.778)",
  };
  const ngoBackground = {
    background: "#bbe3f0",
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
    width: "100%",
    borderRadius: "20px 20px",
    boxSizing: "border-box",
  };

  return (
    <>
      <div style={{ backgroundColor: "#F0F8FF" }}>
     <div className="grid grid-cols-2 justify-items-center ">
 <div className="border-solid">s</div>
 <div>jh</div>
     </div>
      


        {/* <div className="flex flex-col relative ">
          {NgoData.map((data) => {
            return (
              <div
                // data-aos="fade-right"
                // data-aos-offset="300"
                // data-aos-duration="2000"
                key={data.id}
              >
                <div className="container mt-5" style={ngoback}>
                  <div className="row  ">
                    <div
                      className="col-md-4"
                      style={{ marginTop: "15px ", marginBottom: "15px" }}
                    >
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
                        <li>{data.contact}</li>
                      </ul>
                      <p style={ngoP}>{data.description}</p>

                      <button
                        type="submit"
                        className="btn btn-danger mb-4"
                        // onClick={btnClick}
                        onClick={() => setShowModal(true)}
                      >
                        Donate
                      </button>

                      {showModal && <Modal setShowModal={setShowModal} />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
      <Footer />

     
    </>
  );
};

export default Ngopage;

