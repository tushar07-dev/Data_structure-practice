import React, { useContext } from 'react'
import { Authcontext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const { isAuthorized } = useContext(Authcontext)
  return (
    <div>
      Product : {isAuthorized ? "Logged IN" : "Logged Out"}
        <Cart/>
    </div>
  )
}

export default Product