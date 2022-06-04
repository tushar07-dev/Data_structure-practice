//ONly responsibility of this Auth contex is to know user is logged in Or Logged out

import React, { useState }  from "react";
import { createContext } from "react";

export const Authcontext =  createContext();

export const AuthProvider = ( { children }) => {
    const [isAuthorized , setIsAuthrized] = useState(false);

    const login = ( username, password )=> {
        console.log( username , password)
        if(username && password ){
            setIsAuthrized(true)
        }
    }

    const logout = ( )=> {
            setIsAuthrized(false)
        }
    

    return <Authcontext.Provider value={{isAuthorized,login,logout} }>{children}</Authcontext.Provider>
}

///Created CartContext ;
///Create CartProvider ;
///I have Information that i want to share ( isAuthorized,logoin,logout )
//// value={{isAuthorized,logoin,logout}}

//// wrap Our aplication in provider;

//using this information 