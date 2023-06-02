import React, { useEffect, useState } from "react";

import "./Ngopage.css";
import Modal from "../forms/DonateForm";
import Footer from "../Footer/Footer";
import axios from "axios";
import ngo_hero from "./ngo_hero.png";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../../templet/PageNotFound";
import Spinner from "../../templet/Spinner";

const Ngopage = () => {
  const url = app_config.back_url;
  const navigate = useNavigate();
  console.log(url);

  const [spinner, setSpinner] = useState(true);
  const [pageFound, setPageFound] = useState(false);
 

  const token = JSON.parse(localStorage.getItem("token"));

  const [getNgoData, setgetNgoData] = useState([]);
  
  const getNgosData = () => {
    setSpinner(true);
    console.log("timer start");
    setTimeout(() => {
      console.log("hello timer");
       axios
         .get(url + `/all-ngo`)
         // .get("http://localhost:1300/api/all-ngo")
         .then((res) => {
           console.log(res);
           setgetNgoData(res.data.data);
         })
         .catch((error) => {
           console.error(error);
           setPageFound(true);
         });
     },3000)
    console.log(getNgoData);
    setSpinner(false);
    setPageFound(false);
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
      {pageFound && (
        <>
          <PageNotFound />
        </>
      )}

      {!pageFound && (
        <>
          <div className="w-full  bg-white overflow-x-hidden">
            <div className="row w-full md:flex mx-2   setScrollbar overflow-x-hidden">
              <div className=" col-md-6 flex flex-col items-center rounded-md     mt-2  border-2">
                <div className="ngo_content flex flex-col pt-10  text-center mt-10 ">
                  <h1 className="text-2xl font-bold mb-2">
                    Empowering Communities Through <br />
                    Ngo Integration On Abhidan
                  </h1>
                  <p className="text-lg px-4 pt-2 text-justify">
                    NGO integration is an essential aspect of social development
                    initiatives. It allows for effective utilization of
                    resources, enhances transparency and accountability, and
                    promotes better coordination. By partnering with NGOs,
                    social development projects can achieve a wider reach and
                    create a sustainable impact.
                  </p>
                </div>
                <img src={ngo_hero} alt="" className="hidden w-[780px]:block" />
              </div>
              <div className="col-md-6 hidden md:block">
                <div className="columns-3xs px-2 mt-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-V1sc0keRVXLLjX7jjsbAIHMKcEmEm0OuzA&usqp=CAU"
                    className="w-full  aspect-video object-fit rounded-lg border-solid border-2 h-48 "
                    alt="ngo"
                  />
                  <img
                    src="https://img.freepik.com/free-vector/world-humanitarian-day-concept-illustration_114360-6458.jpg?w=900&t=st=1685087690~exp=1685088290~hmac=eb8c84e0f1c224801e01b246a007c3f10070867bfc99785d3348426f68b7af10"
                    className="w-full object-fit rounded-lg border-solid border-2 aspect-square mt-2"
                    alt="ngo"
                  />
                  <img
                    src="https://img.freepik.com/free-vector/set-people-collect-trash-ecology-nature-protection-volunteering-social-charity-concept-volunteers-characters-clean-up-garbage-put-recycling-bins-sacks-line-art-vector-illustration_107791-10236.jpg?size=626&ext=jpg&ga=GA1.2.638092357.1637509177&semt=sph"
                    className="w-full hidden lg:block  object-fit rounded-lg border-solid border-2 aspect-square  "
                    alt="ngo"
                  />
                  <img
                    src="https://img.freepik.com/free-photo/together-we-can-help-concept_23-2148733264.jpg?size=626&ext=jpg&ga=GA1.2.638092357.1637509177&semt=sph"
                    className="w-full hidden lg:block   aspect-video object-fill rounded-lg border-solid border-2 h-48 mt-2"
                    alt="ngo"
                  />
                </div>
              </div>
            </div>
            <div className=" bg-[#f3f3ef] flex flex-col mx-2 border-2 mt-2 rounded-md justify-center items-center pt-2  overflow-x-hidden  ">
              {/* searchbar */}
              <div className="py-3 w-full  px-2 flex justify-center ">
                <input
                  type="search"
                  placeholder="type here..."
                  className="rounded-2xl  w-full md:w-1/2 h-[3rem] pl-5 pr-3 border-2 outline-none shadow-lg "
                />
              </div>
              {/* ngos */}
              {getNgoData.length === 0 ? (
                <>
                  <div className="  flex justify-center items-center">
                    
                  <Spinner />
                  </div>
                  {/* <div className="w-[80px] h-[80px] inline-block after:content-none after:block after:w-[64px] after:h-[64px] after:m-[8px] rounded-full border-[6px] border-t-red-400 border-b-red-400 animate-spin ease-linear transition-all duration-[infinite] "></div> */}
                </>
              ) : (
                <>
                  <div className="flex flex-col  py-3 w-full  md:w-[80%]  gap-y-3  overflow-x-hidden">
                    {getNgoData.map((ngosData, index) => (
                      <div
                        key={ngosData._id}
                        className="flex flex-col md:flex-row py-2 px-2 items-center bg-white justify-center md:justify-around  border-2 rounded-lg box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;  "
                      >
                        <div className=" w-full md:w-1/2  px-4 py-2 ">
                          <img
                            src={
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3-MIW9oQcWx9Hs8nwN4kReW1ECWHlpHT5BEwvB3P&s"
                            }
                            alt="NGO Logo"
                            className="w-full h-[150px] md:h-[200px] rounded-md "
                          />
                        </div>
                        <div className="flex flex-col justify-center md:justify-normal md:items-stretch items-center  flex-auto w-full md:w-1/2    pl-3 ">
                          <div>
                            <p className="">
                              <span className="text-md md:text-lg  font-semibold">
                                NGO Name:{" "}
                              </span>
                              <span className="text-lg md:text-xl ml-1 font-semibold  ">
                                {ngosData.ngo_name}
                              </span>
                            </p>
                            <p>
                              <span className="text-md md:text-lg font-semibold">
                                Register_Id:{" "}
                              </span>
                              <span className="text-lg md:text-xl ml-1 font-semibold  ">
                                {ngosData.register_id}
                              </span>
                            </p>
                            <p>
                              <span className="text-md md:text-lg font-semibold">
                                Contact:{" "}
                              </span>
                              <span className="text-lg md:text-xl ml-1 font-semibold  ">
                                {ngosData.contact}
                              </span>
                            </p>
                            <p>
                              <span className="text-md md:text-lg  font-semibold">
                                Address:{" "}
                              </span>
                              <span className="text-md md:text-xl ml-1 font-semibold  ">
                                {ngosData.address}
                              </span>
                            </p>
                          </div>

                          <button
                            type="submit"
                            className=" px-3 w-fit py-1 mt-2 text-lg font-semibold rounded-md border-2 border-yellow-400  hover:bg-yellow-400 "
                            onClick={() => getDonateForm(ngosData._id)}
                          >
                            {" "}
                            Donate
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <div className="w-[80px] h-[80px] inline-block after:content-none after:block after:w-[64px] after:h-[64px] after:m-[8px] rounded-full border-[6px] border-t-red-400 border-b-red-400 animate-spin ease-linear transition-all duration-[infinite] "></div> */}

          <Footer />
        </>
      )}
    </>
  );
};

export default Ngopage;
