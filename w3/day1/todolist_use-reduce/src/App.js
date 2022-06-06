import { useReducer, useState } from 'react';
import './App.css';
import Todo from './components/Todo';


export const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  REMOVE_TODO: 'remove_todo'
}

const reducer = (todos, action)=>{
  switch(action.type){
    case ACTIONS.ADD_TODO:
      if(action.payload.input_value !== ""){
        return [...todos, newTodo(action.payload.input_value) ];
      }
      break;
    case ACTIONS.TOGGLE_TODO :
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return { ...todo, completed : !todo.completed}
        }
        return todo;
  })
  case ACTIONS.REMOVE_TODO: 
    return todos.filter(todo => todo.id !== action.payload.id)

    default:
      return todos

  }
}
 const newTodo = (input_value) =>{
    return { id: Date.now(), input_value : input_value, completed : false}
 }

function App() {
      const [todos, dispatch] = useReducer(reducer, []);
      const [input_value, setInputValue] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input_value !== ''){
      dispatch({ type : ACTIONS.ADD_TODO , payload : {input_value : input_value}})
    }
    setInputValue('');
  }
  return (
       <div className="App">
         <h1>TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input_value} className ="input" onChange={ e=>{ setInputValue(e.target.value)}} placeholder="Write Something..."/>
      </form>
      {
      todos.map(todo =>(
        <Todo key={todo.id} todo = {todo} dispatch ={dispatch}/>
      ))}
      </div>
  );
}

export default App;