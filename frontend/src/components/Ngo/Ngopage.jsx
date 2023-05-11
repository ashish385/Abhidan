import React, { useEffect, useState } from "react";

import "./Ngopage.css"
import NgoData from "../../DummyData/NGODummyData.json";
import Modal from "../forms/DonateForm";
import Footer from "../Footer/Footer";
import axios from "axios";
import ngo_hero from "./ngo_hero.png"




const Ngopage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ngoData, setNgoData] = useState([]);

  const [getNgoData, setgetNgoData] = useState([]);
  useEffect(() => {
    
    axios.get(`http://localhost:1300/api/all-ngo`).then((res) => {
      return setgetNgoData(res.data.data);
    });
  }, []);
  console.log(getNgoData)



 async function ngoData (){
  axios.get("http://localhost:1300/api/all-ngo")
  console.log(ngoData)
 }
 

  return (
    <>
      


        <div className="flex flex-col relative ">
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
        </div>
      </div>
    </div>

    </div>
    </div>
    




    </>
  );
};

export default Ngopage;
