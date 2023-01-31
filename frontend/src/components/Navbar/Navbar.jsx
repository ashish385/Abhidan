import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const handleSubmit = (e) => {
    window.localStorage.clear();
    window.location.reload();
    
  }

  console.log("Navbar");
  let userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"#"}>
            <img src="/" alt="" />
            Abhidan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
              <Link className="nav-link" to={"/ngoprofile"}>
                NGO's
              </Link>
              <Link className="nav-link" to={"/gallery"}>
                Gallery
              </Link>
              <Link className="nav-link" to={"#"}>
                Blog
              </Link>
              {userData ? (
                <Link className="nav-link" onClick={handleSubmit}>
                  LogOut
                </Link>
              ) : (
                <Link className="nav-link" to={"/login"}>
                  logIn
                </Link>
              )}
              <div className="nn" style={{marginLeft:"100px"}}>
                <Link>hello</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
