import React from "react";
import TodoItem from "./TodoItem";
import "./Style.css"

const TodoList = ({ todos }) => {
 
  return (
    <div>
      <h2 className="h2Title">
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} />
        ))}
      </h2>
    </div>
  );
};

export default TodoList;