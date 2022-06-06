import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Status from './Status';

const Navbar = () => {

    const {isAuthorized , logIN , logOUT} = useContext(AuthContext);


  return (
    <div style={{border : "1px solid "}}>
        <Button onClick={() => {
           if(isAuthorized === true){ logOUT(); } 
           else{  logIN("U" , "P");   }
        }}
        colorScheme = "blue"
        >
        {isAuthorized ? "Log Out"  : "Log In"}
        </Button>
        <Status></Status>
    </div>
  )
}

export default Navbar