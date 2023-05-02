import React from 'react'
import Templets from "../templet/Templets"
// import image from "../assets/login.png"

const Login = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  let setIsNgoLoggedIn = props.setIsNgoLoggedIn;
  return (
    <div>
      <Templets
        title="Welcome back!"
        desc1="Build skills for taday,tomorrow,and beyond."
        desc2="Education to future-proof your Career."
        // image={image}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
        setIsNgoLoggedIn={setIsNgoLoggedIn}
      />
    </div>
  );
}

export default Login