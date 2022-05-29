import React from "react";

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