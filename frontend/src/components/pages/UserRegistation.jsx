import React, { useState } from "react";
import './login.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const UserRegistation = () => {
  let initialValue = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const [formdata, setFormdata] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  console.log(formdata);

  const handleSubmit = () => {
    console.log("hello Vinood");
    window.localStorage.setItem("currentUser", JSON.stringify(formdata));
    window.location.assign("/login");
  };

  return (
    <>
      
      <MDBContainer className="my-2">
        <MDBCard style={{ height: "70" }}>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="signupImage w-100"
                height={"550px"}
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody
                className="d-flex flex-column"
                onSubmit={handleSubmit}
              >
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Abidhan</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign upto your account
                </h5>

                <label className="loginLabel" htmlFor="name">
                  Name:
                </label>
                <MDBInput
                  wrapperClass="mb-3"
                  id="formControlLg"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.name}
                />

                <label htmlFor="email" className="loginLabel">
                  Email:
                </label>
                <MDBInput
                  wrapperClass="mb-3"
                  id="formControlLg"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.email}
                />

                <label htmlFor="phoneNumber" className="loginLabel">
                  Phone Number:
                </label>
                <MDBInput
                  wrapperClass="mb-3"
                  id="formControlLg"
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.phoneNumber}
                />

                <label htmlFor="password" className="loginLabel">
                  Password:
                </label>
                <MDBInput
                  wrapperClass="mb-3"
                  id="formControlLg"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.password}
                />

                <button
                  className="btn btn-dark mb-3 px-5"
                  onClick={handleSubmit}
                >
                  Signup
                </button>

                <p>
                  Alerady have an account?{" "}
                  <Link
                    to={"/login"}
                    style={{ color: "#393f81", textDecoration: "none" }}
                  >
                    Login here ....
                  </Link>
                </p>

                {/* <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div> */}
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default UserRegistation;
