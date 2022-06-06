import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Status = () => {
    const { isAuthorized }  =  useContext(AuthContext);

  return (
    <div>Status : {isAuthorized ? "Logged In"  : "Logged Out" } </div>
  )
}
export default Status