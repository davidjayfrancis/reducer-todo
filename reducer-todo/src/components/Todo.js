import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <p className="" onClick={() => props.handleClick(props.todo)}>
        {props.todo.item}
      </p>
    </div>
  );
};

export default Todo;
