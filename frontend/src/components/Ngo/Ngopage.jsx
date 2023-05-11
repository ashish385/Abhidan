import React,{useEffect, useState} from "react";

import "./Ngopage.css"
import NgoData from "../../DummyData/NGODummyData.json";
import Modal from "../forms/DonateForm";
import Footer from "../Footer/Footer";
import axios from "axios";
import ngo_hero from "./ngo_hero.png"




const Ngopage = () => {
  
  const [showModal, setShowModal] = useState(false);
 

  



 
  const [getNgoData, setGetNgoData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:1300/api/all-ngo`).then((res) => {
      return setShowModal(res.data.data);
    });
  }, []);
  console.log(getNgoData)





  return (
    <>
      


<div className="row bg-white overflow-x-hidden">
  <div className=" col-md-6  mt-2  border-2">
    < div className="ngo_content text-center mt-10 ">
    <h1 className="text-2xl font-bold mb-2">Empowering Communities Through <br/>Ngo Integration On Abhidan</h1>
      <p className="text-lg  text-center">NGO integration is an essential aspect of social development initiatives. It allows for effective utilization of resources, enhances transparency and accountability, and promotes better coordination. By partnering with NGOs, social development projects can achieve a wider reach and create a sustainable impact.</p>
    </div>
   
  </div>
  <div className="col-md-6">
  <div className="columns-3xs px-2 mt-2">
 <img src={ngo_hero}  className="w-full  aspect-video object-fill rounded-lg border-solid border-2 h-48 " alt="ngo"/>
 <img src={ngo_hero} className="w-full object-contain rounded-lg border-solid border-2 aspect-square mt-2" alt="ngo"/>
 <img src={ngo_hero} className="w-full  object-contain rounded-lg border-solid border-2 aspect-square  " alt="ngo"/>
 <img src={ngo_hero} className="w-full  aspect-video object-fill rounded-lg border-solid border-2 h-48 mt-2" alt="ngo"/> 
 </div>
  </div>

  <div className="row-next mt-2">
    <div className="search-box ">
      <input type="search"  placeholder="type here..."className="rounded-full w-[50%]"/>
    </div>
    <div className="ngo-card">
      <div className="ngo-image">
        <img src={ngo_hero} alt="NGO Logo" />
      </div>
      <div className="ngo-details">
        <p>Organization Name:</p>
        <p>Register_Id:</p>
        <p>Contact:</p>
        <p>Address:</p>
        <button type="submit" className=" px-3 py-1 text-lg rounded-md border-2 border-yellow-400   hover:bg-yellow-400 "> Donate</button>
      </div>
    </div>

    </div>
    </div>
    




    </>
  );
};

export default Ngopage;

