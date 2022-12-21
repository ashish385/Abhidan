import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {





  return (
    <>
      <Navbar />
      <MDBContainer className="my-2">
        <MDBCard style={{ height: "70" }}>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
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
                <label htmlFor="name">Email:</label>
                <MDBInput
                  wrapperClass="mb-4"
                  // label="Email address"
                  id="formControlLg"
                  type="email"
                  size="md"
                />

                <label htmlFor="name">password:</label>
                <MDBInput
                  wrapperClass="mb-4"
                  // label="Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                />

                <button className="btn btn-dark mb-4 px-5">Login</button>
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
