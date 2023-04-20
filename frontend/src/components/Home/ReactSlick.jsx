import React from "react";
import "../Home/Home.css";


const ReactSlick = () => {

  

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGRvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              alt="s1"
            />
            <div className="carousel-caption  ">
              <h5>Give them a helping hand</h5>
              <p>Join your hands with us to provide one time delicious meal </p>
              <button type="button" class="btn btn-warning mt-3 " >
                Donate
              </button>
            
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="s2"
            />
            <div className="carousel-caption  ">
              <h5>helping each other can make better world </h5>
              <p>
                The Charnyy Global aid network envisions a thriving and
                connected community, one in which all of its members have
                dependable access to resources that enrich and empower lives..
              </p>
              <button type="button" className="btn btn-warning mt-3">
                Donate
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="s3"
            />
            <div className="carousel-caption ">
              <h5>THEY ARE WAIT FOR YOUR HELP</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <button type="button" className="btn btn-warning mt-3">
                Donate
              </button>{}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ReactSlick;
