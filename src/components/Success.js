import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession } from '../middleware/ProtectedRoutes'



const Success = () => {
   const location = useLocation()
   const urlParams = new URLSearchParams(location.search)
    const token = urlParams.get('token')
    
   

    const saveUserToLocalStorage = (token) => {
        if (token) {
          localStorage.setItem("userLogin", JSON.stringify(token));
        }
      };

      const session=useSession();
      console.log(session)



      useEffect(() => {
        saveUserToLocalStorage(token);
      }, [token]);
    
      return (
    <div className='h-screen w-full flex justify-content-center align-items-center'>
        <div>login effettuato con success....</div>
       {/* <h1>Benvenuto {session?.denominazione}</h1> */}
    </div>
  )
}

export default Success