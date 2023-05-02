import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DonorProfile = () => {

    const [user, setUser] = useState([])

    const userData = async function () {
        const userkaData = JSON.parse(localStorage.getItem('token'));
        // console.log(userkaData);
        setUser(userkaData)
    }
    console.log(user);

    useEffect(() => {
        userData()
    },[])
  return (
      <div>
          <p>userData</p>
          
          
    </div>
  )
}

export default DonorProfile