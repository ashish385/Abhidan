import React, { useState } from "react";
// import "../Style/userRegister.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

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
  // console.log(formdata);

  const handleSubmit = () => {
    console.log("hello Vinood");
    window.localStorage.setItem("currentUser2", JSON.stringify(formdata));
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <label>Name</label>
            <MDBInput
              wrapperClass="mb-4"
              label=""
              size="md"
              id="form1"
              type="text"
              placeholder="Enter Name"
            />
            <label>Name</label>
            <MDBInput
              wrapperClass="mb-4"
              label=""
              size="md"
              id="form1"
              type="text"
              placeholder="Enter Name"
            />
            <label>Name</label>
            <MDBInput
              wrapperClass="mb-4"
              label=""
              size="md"
              id="form1"
              type="text"
              placeholder="Enter Name"
            />
            <label>Name</label>
            <MDBInput
              wrapperClass="mb-4"
              label=""
              size="md"
              id="form1"
              type="text"
              placeholder="Enter Name"
            />
            
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="md">
              Register
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default UserRegistation;
