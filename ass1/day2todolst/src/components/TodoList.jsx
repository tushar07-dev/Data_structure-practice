import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h3>
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} />
        ))}
      </h3>
    </div>
  );
};

export default TodoList;