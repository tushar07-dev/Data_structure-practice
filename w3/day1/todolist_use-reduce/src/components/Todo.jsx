import React from 'react'
import { ACTIONS } from '../App'
import styles from "./Todo.module.css";
import { ImCross } from "react-icons/im";




const Todo = ({todo, dispatch}) => {
  return (
    <div className={styles.todo}>
        <><button onClick={()=>{ dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id}})}} className={todo.completed ? styles.toggle:styles.toggle_false}></button></>
        <div className={todo.completed ? styles.striked: ""}>
        <h2>{todo.input_value}</h2>
      </div>
        <><button  className ={styles.btn_cross}><ImCross className={styles.btn} onClick={()=>{ dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id}})}}/></button></>
    </div>
  )
}

export default Todo