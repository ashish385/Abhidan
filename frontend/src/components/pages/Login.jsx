import React from "react";
import "../Style/userRegister.css";
import image1 from "../../assets/logo.png";
import image2 from "../../assets/app.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="loginMain">
        <div className="containers">
          <div className="login forms">
            <header>Login</header>
            <form action="#">
              <input type="text" placeholder="Email:" />
              <br/>
              <input type="password" placeholder="Password" />
              <Link className="link" >Forgot password?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
