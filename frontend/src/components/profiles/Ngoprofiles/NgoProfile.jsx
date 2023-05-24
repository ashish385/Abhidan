import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast"
import CountUp from "react-countup";
import {
  BsFillExclamationOctagonFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";
import "./Sidebar/Sidebar.css";
import dp from "../Ngoprofiles/dashboard-profile.png";
const NgoProfile = () => {
  const [ngoData, setNgoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Get the ngotoken from localstorage , store in token variable and get the ngo registerid from token and store in id variable
      const token = JSON.parse(localStorage.getItem("ngo_token"));
      const id = { register_id: token.register_id };

      // Make the API request with the token
      const response = await axios.post(
        "http://localhost:1300/api/ngo-data",
        id
      );
    
      // console.log("data",response.data.data)
      setNgoData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(ngoData);

  if (loading) {
    return <div className="flex justify-center">Loading... </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // create object for showing the no.of request ,approve and deleted donor by ngo and map it .

  const donorData = [
    {
      icon: <BsFillExclamationOctagonFill />,
      name: "Pending Request",
      value: 20,
    },
    {
      icon: <BsFillCheckSquareFill />,
      name: "Approved Request",
      value: 20,
    },
    {
      icon: <BsFillExclamationOctagonFill />,
      name: "Pending Request",
      value: 20,
    },
  ];

  return (
    <>
      <div className="ngoProfile m-5 ">
        <div className="row ">
          {donorData.map((item, index) => (
            <div className="col-md-4 " key={index}>
              <div className="Card bg-white ">
                <div className="count-icon text-4xl text-yellow-400 ">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xl text-black">{item.name}</p>
                  <h2 className="text-xl font-semibold">{item.value}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ngoInfo mt-4 bg-white">
          <h2 className="text-lg font-semibold">
            Account <span className="text-yellow-400">Information</span>
          </h2>

          <hr />
          <div className="row">
            <div className="col-md-4 flex justify-center ">
              {ngoData &&
                ngoData.map((ngo, index) => (
                  <ul className="text-lg mt-2" key={index}>
                    <li>{ngo.ngo_name}</li>
                    <li>{ngo.register_id}</li>
                    <li>{ngo.email}</li>
                    <li>{ngo.contact}</li>
                    <li>{ngo.address}</li>
                  </ul>
                ))}
            </div>
            <div className="col-md-8 flex justify-center">
              <img src={dp} alt="dashboard-img" className="h-60 w-60" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NgoProfile;
