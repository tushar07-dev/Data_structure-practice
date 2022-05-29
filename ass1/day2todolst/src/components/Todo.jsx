import React, { useState } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from "uuid";

let TodoBox = {
    // border: `1px solid red`,
    width: `fit-content`,
    height: `fit-content`,
    margin: `auto`,
    padding: `30px`,
    backgroundColor: `skyblue`,
    marginTop: `20px`,
  };

  let inputBox = {
    display: `flex`,
    gap: `10px`,
  };
  
  let addbtn = {
    width: `50px`,
    height: `50px`,
    // border: `1px solid red`,
    marginTop: `0px`,
    borderRadius: `5px`,
    fontSize: `26px`,
    color: `black`,
    border: `transparent`,
    backgroundColor: `white`,
  };


function Todo() {

    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([]);

    const addTodo  =(xyz) =>{
        setTodos([...todos,{id:uuidv4(),value:xyz}])
    }

  return (
    <div style={TodoBox}>
            <h1 >Todo App</h1>
            <div className='list'>
                <TodoList  todos={todos} />
            </div>

            <div style={inputBox}>
                <input className='input' type="text" value={value} placeholder="Write something" onChange={(e) =>{setValue(e.target.value);}}/>
                <button style={addbtn} onClick={() =>{addTodo(value);setValue("")}}>+</button>
            </div>
    </div>
  )
}

export default Todo