import React,{useEffect, useState} from "react";

import "./Ngopage.css"
import NgoData from "../../DummyData/NGODummyData.json";
import Modal from "../forms/DonateForm";
import Footer from "../Footer/Footer";
import axios from "axios";
import ngo_hero from "./ngo_hero.png"
import { Link } from "react-router-dom";




const Ngopage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ngoData, setNgoData] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));

  const [getNgoData, setgetNgoData] = useState([]);
  useEffect(() => {
    
    axios.get(`http://localhost:1300/api/all-ngo`).then((res) => {
      return setgetNgoData(res.data.data);
    });
  }, []);


 

  



 
 





  return (
    <>
      <div className="flex flex-col md:flex-row bg-white overflow-x-hidden">
        <div className=" basis-1/2  mt-2  border-2">
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
        <div className="basis-1/2">
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
      </div>
      <div className="row-next mt-2">
        <div className="search-box ">
          <input
            type="search"
            placeholder="type here..."
            className="rounded-full w-[50%]"
          />
        </div>

        <div className=" ngo_show mt-2 mb-2 flex flex-col justify-center items-center max-w-md md:max-w-[lg] mx-auto  ">
          {getNgoData.map((data) => {
            return (
              <div className="ngo-card mt-2 " key={data.id}>
                <div className="ngo-image">
                  <img src={ngo_hero} alt="NGO Logo" />
                </div>
                <div className="ngo-details w-96 px-8 ">
                  <p className="text-lg text-black">
                    Organization Name:{data.ngo_name}
                  </p>
                  <p className="text-lg text-black">
                    Register_Id:{data.register_id}
                  </p>
                  <p className="text-lg text-black">Contact:{data.contact}</p>
                  <p className="text-lg text-black">Address: {data.address}</p>
                  <Link
                    to='/donate-form'
                    className=" text-black px-3 py-1 text-lg rounded-md border-2 border-yellow-400   hover:bg-yellow-400 "
                  >
                    <button type="submit"> Donate</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ngopage;
