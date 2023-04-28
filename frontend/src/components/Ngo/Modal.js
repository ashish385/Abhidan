import React from 'react'
import Login from '../../pages/Login'


function Modal({setModal}) {


  return (
    <>
      <div className='bg-gray-100 shadow-2xl rounded-xl min-w-[480px] max-w-[700px] p-5 absolute  top-5 left-[500px] transition-all duration-200 ease-linear'>
        <h1>hello</h1>
        <button onClick={() =>setModal(false)}>close</button>
      </div>
    </>
  )
  }
  
  export default Modal
  //   <div className='modal-container'>
  //     <div className='modal-body'>
  //       {/* condition agar user login hai to modal dikhega nhi to login page par render ho jayega */}
        
  //       </div>

  //   </div>
  // )