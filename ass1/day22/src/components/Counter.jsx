import React from "react";
import { useState } from "react";
const Counter=(props)=>{
    const [count,setCount]=useState(props.intialvalue);
    const [color,setColor]=useState(true);
    return(
        <div>
            <h1 style={{color:color ? "red":"green"}}>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}
export default Counter;