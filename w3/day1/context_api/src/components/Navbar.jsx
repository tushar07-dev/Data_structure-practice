import React, { useContext } from 'react'
import { Authcontext } from '../context/AuthContext'
import { CartContext } from '../context/CardContext'
import { ThemeContext } from '../context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
  const { isAuthorized,login,logout } = useContext(Authcontext);
  const { buy } = useContext(CartContext);
  const {isLight , toggleTheme } = useContext(ThemeContext);


  return (
    <div>
      Navbar
      <button
      onClick={() => {
        if(isAuthorized) logout() ;
        else login("R" , "Z");
      }}>
        {isAuthorized ? "LogOut" : "LogIn"}</button>
      <button onClick={buy}>BUY </button>
      <button onClick={toggleTheme}>{`Make ${isLight ? "Dark" : "Light"}`}</button>

        {isAuthorized && <Wishlist/>} 
    </div>
  )
}

export default Navbar