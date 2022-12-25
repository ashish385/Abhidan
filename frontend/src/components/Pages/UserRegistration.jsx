import React, { useState } from "react";

import {
  MDBBtn,
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
    console.log("hello");
    window.localStorage.setItem("currentUser2", JSON.stringify(formdata));
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
                className="rounded-start w-100" style={{borderRadius:"100px",height:'700px'}}
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

                <label className="label" htmlFor="name">
                  Name:
                </label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.name}
                />

                <label htmlFor="email">Email:</label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.email}
                />

                <label htmlFor="password">Password:</label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.password}
                />
                <label htmlFor="phoneNumber">Phonenumber:</label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="typeNumber"
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter number"
                  size="md"
                  onChange={handleChange}
                  value={formdata?.phoneNumber}
                />

                <button
                  className="btn btn-dark mb-4 px-5"
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
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default UserRegistation;
