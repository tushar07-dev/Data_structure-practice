import React, { createContext, useContext } from"react";
import { useState } from "react";
import { Authcontext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { isAuthorized }  =  useContext(Authcontext);
    const [count, setCount] = useState(0);


const addToCart = () => {
    setCount (count + 1);
};

const buy = () => {
    //check if user is Logged In,
    //if user is Logged In then allow him to pay and buy;
    if(isAuthorized){
        console.log(" Can Buy ")
    }
    else{
        console.log(" Can not buy without Login")
    }
}

return (
   <CartContext.Provider value= {{ count, addToCart , buy}}>{children}</CartContext.Provider>
)
};