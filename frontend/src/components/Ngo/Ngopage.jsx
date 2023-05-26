import React, { useEffect, useState } from "react";

import "./Ngopage.css";
import Modal from "../forms/DonateForm";
import Footer from "../Footer/Footer";
import axios from "axios";
import ngo_hero from "./ngo_hero.png";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";

const Ngopage = () => {
  const url = app_config.back_url;
  const navigate = useNavigate();
  // console.log(url);

  const [showModal, setShowModal] = useState(false);
 

  const token = JSON.parse(localStorage.getItem("token"));

  const [getNgoData, setgetNgoData] = useState([]);
  
  const getNgosData = () => {
    axios
      // .get(url + `/all-ngo`)
      .get("http://localhost:1300/api/all-ngo")
      .then((res) => {
        console.log(res);
         setgetNgoData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(getNgoData);
  }
  useEffect(() => {
    getNgosData();
  }, []);

   function getDonateForm(userId) {
     if (token) {
       navigate("/donate-form");
       <Modal userId={userId} />
     } else {
       navigate('/login');
    }
  }

  return (
    <>
      <div className="row bg-white overflow-x-hidden">
        <div className=" col-md-6  mt-2  border-2">
          <div className="ngo_content text-center mt-10 ">
            <h1 className="text-2xl font-bold mb-2">
              Empowering Communities Through <br />
              Ngo Integration On Abhidan
            </h1>
            <p className="text-lg  text-center">
              NGO integration is an essential aspect of social development
              initiatives. It allows for effective utilization of resources,
              enhances transparency and accountability, and promotes better
              coordination. By partnering with NGOs, social development projects
              can achieve a wider reach and create a sustainable impact.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="columns-3xs px-2 mt-2">
            <img
              src={ngo_hero}
              className="w-full  aspect-video object-fill rounded-lg border-solid border-2 h-48 "
              alt="ngo"
            />
            <img
              src={ngo_hero}
              className="w-full object-contain rounded-lg border-solid border-2 aspect-square mt-2"
              alt="ngo"
            />
            <img
              src={ngo_hero}
              className="w-full  object-contain rounded-lg border-solid border-2 aspect-square  "
              alt="ngo"
            />
            <img
              src={ngo_hero}
              className="w-full  aspect-video object-fill rounded-lg border-solid border-2 h-48 mt-2"
              alt="ngo"
            />
          </div>
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
                        {data.ngo_name}
                      </h3>
                      <ul className="ngo-det" style={{ color: "#666666" }}>
                        <li>{data.address}</li>
                        <li>{data.contact}</li>
                      </ul>
                      <p style={ngoP}>{data.description}</p> */}

        <div className=" flex flex-col mx-2 justify-center items-center  ">
          {/* searchbar */}
          <div className="py-3 w-full md:w-1/2 px-2 flex justify-center ">
            <input
              type="search"
              placeholder="type here..."
              className="rounded-2xl  w-full md:w-1/2 h-[3rem] pl-5 border-2 outline-none shadow-lg "
            />
          </div>
          {/* ngos */}
          <div className="flex flex-col py-3 w-full  md:w-1/2  gap-y-3  overflow-x-hidden">
            {getNgoData.map((ngosData, index) => (
              <div
                key={ngosData._id}
                className="flex flex-col py-2 items-center justify-around md:flex-row border-2 rounded-lg   "
              >
                <div className="ngo-image py-2">
                  <img src={ngo_hero} alt="NGO Logo" />
                </div>
                <div className="flex flex-col py-3 px-3 justify-center items-center ">
                  <div>
                    <p>
                      <span className="text-md  font-semibold">NGO Name: </span>
                      <span className="text-lg font-semibold  ">
                        {ngosData.ngo_name}
                      </span>
                    </p>
                    <p>
                      <span className="text-md  font-semibold">
                        Register_Id:{" "}
                      </span>
                      <span className="text-lg font-semibold  ">
                        {ngosData.register_id}
                      </span>
                    </p>
                    <p>
                      <span className="text-md  font-semibold">Contact: </span>
                      <span className="text-lg font-semibold  ">
                        {ngosData.contact}
                      </span>
                    </p>
                    <p>
                      <span className="text-md  font-semibold">Address: </span>
                      <span className="text-md font-semibold  ">
                        {ngosData.address}
                      </span>
                    </p>

                    <button
                      type="submit"
                      className=" px-3 py-1 mt-2 text-lg rounded-md border-2 border-yellow-400   hover:bg-yellow-400 "
                      onClick={() => getDonateForm(ngosData._id)}
                    >
                      {" "}
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ngopage;
