import { createContext, useState } from "react";

export  const AuthContext = createContext();

export const AuthContextProvider  =  ({ children }) => {
    const [ isAuthorized , setIsAuthorized ] = useState(false);

    const logIN  =  ( username , passward ) =>{
        if(username && passward ){
            setIsAuthorized(true);
        };
    }

    const logOUT =  () => {
        setIsAuthorized(false);        
    }

    return (
        <AuthContext.Provider value={{isAuthorized , logIN , logOUT}}>{children}</AuthContext.Provider>
    )

}

///created and exported Auth-Context = createContext();
///created and exported AuthContextProvider - Provider props as {children}

///create useState with variable isAuthorized ; display setIsAuthorized ; Initial value os IsAuther is false;

//function  LogIN with paraMeters Username&Passward, if both are true give  permission to Display Set-IsAuthorized;

//when function LogOUt Activated setIsAuthorized value became False;

// Provider passing values {isAuthorized , logIN , logOUT} to All children