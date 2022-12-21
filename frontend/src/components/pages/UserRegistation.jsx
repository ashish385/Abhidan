import React, { useState } from 'react'
import '../Style/userRegister.css'



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
    setFormdata({...formdata,[name]:value})
  }
  // console.log(formdata);

  const handleSubmit = () => {
    console.log('hello Vinood');
    window.localStorage.setItem("currentUser2", JSON.stringify(formdata));
    
  }


  return (
    <>
      <div className="card userCard">
        <form  onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="name">Name : </label>
            <input
              className="form-control"
              onChange={handleChange}
              type="text"
              name="name"
              value={formdata?.name}
            />
            
            <label htmlFor="email">Email : </label>
            <input
              className="form-control"
              onChange={handleChange}
              type="email"
              name="email"
              value={formdata?.email}
            />
            
            <label htmlFor="password">Password : </label>
            <input
              className="form-control"
              onChange={handleChange}
              type="password"
              name="password"
              value={formdata?.password}
            />
            
            <label htmlFor="phoneNo.">Phone No. : </label>
            <input
              className="form-control"
              onChange={handleChange}
              type="tel"
              name="phoneNumber"
              value={formdata?.phoneNumber}
            />
            
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserRegistation