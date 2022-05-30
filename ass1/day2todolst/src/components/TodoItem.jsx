import React from "react";
import "./Style.css"


const TodoItem = ({ value }) => {
  return (
    <div className="input">
      <div>{value}</div>
      <div>
        <input type="radio" />
      </div>
    </div>
  );
};

export default TodoItem;