import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const NavItems = [
  { id: 1, title: "HOME", link: "/" },
  { id: 2, title: "ABOUT", link: "/about" },
  { id: 3, title: "NGO", link: "/ngo" },
  { id: 4, title: "BLOG", link: "/blog" },
  { id: 5, title: "GALLERY", link: "/gallery" },
];


const Navbar = () => {

const logOut =()=>{
    window.localStorage.clear();
    window.location.reload();
  }
  console.log("Navbar");
  let userData = JSON.parse(localStorage.getItem("currentUser"));
  console.log(userData);




  return (
    <>
      <header className="menuBar">
        <nav
          className="navbar navbar-expand-lg navbar-light menuBar "
          //   style={{ backgroundColor: "gray" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className="collapse  navbar-collapse "
              id="navbarTogglerDemo02"
            >
              <div className="d-flex collapse navbar-collapse justify-content-evenly">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                  {NavItems.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="nav-item"
                        style={{ padding: "0 15px", textAlign: "center" }}
                      >
                        <NavLink
                          className="nav-link navTabs"
                          to={item.link}
                          style={({ isActive }) =>
                            isActive
                              ? {
                                  color: "#fff",
                                  background: "#D61355",
                                }
                              : {
                                  color: "#20262E",
                                  // background: "#f0f0f0"
                                }
                          }
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {userData ? (
                <>
                  <div className="largeScreen">
                    <div className="dropdown d-flex align-item-center justify-content-center ">
                      <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                          className="rounded-circle"
                          height={35}
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                        />
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                      >
                        <li>
                          <NavLink className="dropdown-item" to={"/myProfile"}>
                            My profile
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            className="dropdown-item navTabs"
                            to={"/Logout"}
                            onClick={logOut}
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="smallScreen">
                    <br />
                    <div className="d-flex collapse navbar-collapse justify-content-evenly">
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                          <NavLink
                            className="nav-link navTabs"
                            to={"/myProfile"}
                          >
                            My Profile
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link navTabs"
                            to={"/logout"}
                            onClick={logOut}
                          >
                            LOG OUT
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="largeScreen">
                    <div className="dropdown d-flex justify-content-end largeScreen  ">
                      <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <button className="btn btn-primary">login</button>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                      >
                        <li>
                          <NavLink className="dropdown-item " to={"/login"}>
                            As a Donar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to={"/loginNgo"}>
                            As a Ngo
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="smallScreen">
                    <br />
                    <div className="d-flex collapse navbar-collapse justify-content-evenly">
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                          <NavLink className="nav-link navTabs" to={"/login"}>
                            Login as a User
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link navTabs"
                            to={"/loginNgo"}
                          >
                            Login as a NGO
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;


