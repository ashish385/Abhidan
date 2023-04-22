import React from 'react'
import Templets from "../templet/Templets"
// import image  from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Templets
        title="Join the millions learning to code with styudyNotion for freee"
        desc1="Build skills for taday,tomorrow,and beyond."
        desc2="Education to future-proof your Career."
        // image={image}
        formType={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup