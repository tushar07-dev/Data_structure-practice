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
        <AuthContext.Provider valur={{isAuthorized , logIN , logOUT}}>{children}</AuthContext.Provider>
    )

}

///created and exported Auth-Context = createContext();
///created and exported AuthContextProvider - Provider props as {children}

///create useState with variable isAuthorized ; display 