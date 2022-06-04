import React, { useContext } from 'react'
import { CartContext } from '../context/CardContext';


const Cart = () => {
const {   addToCart } = useContext(CartContext);

  return (
    <div>
      Cart : 
      <button onClick={ addToCart }>Add To Cart</button>
    </div>
  )
}

export default Cart