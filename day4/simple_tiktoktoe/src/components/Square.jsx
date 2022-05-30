import React from 'react'

const Square = ({ onclicked, value }) => {
  return (
    <button className="square" onClick={onclicked}>
    {value}
  </button>  )
}

export default Square