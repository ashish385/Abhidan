import React, { useState } from "react";
import './login.css';
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
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  let initialValue = {
    email: "",
    password: "",
  };

  const [formdata, setFormdata] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  console.log(formdata);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("hello vinood");
    window.localStorage.getItem("currentUser", JSON.stringify(formdata));

    window.location.assign("/");
    setLoggedIn(true);
  };

  return (
    <>
      <MDBContainer className="my-2">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login Form"
                className=" w-100 loginLeftImage"
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
                  Sign into your account
                </h5>
                <label htmlFor="name" className="loginLabel">
                  Email:
                </label>
                <MDBInput
                  wrapperClass="mb-4 mt-1"
                  name="email"
                  id="formControlLg"
                  type="email"
                  size="md"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  value={formdata?.email}
                />

                <label htmlFor="name" className="loginLabel">
                  Password:
                </label>
                <MDBInput
                  wrapperClass="mb-4 mt-1"
                  name="password"
                  id="formControlLg"
                  type="password"
                  size="md"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  value={formdata?.password}
                />

                <button
                  className="btn btn-dark mb-4 px-5"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <Link className="small text-muted" to={"#"}>
                  Forgot password?
                </Link>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <Link to={"/signup"} style={{ color: "#393f81" }}>
                    Register here
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

export default Login;
