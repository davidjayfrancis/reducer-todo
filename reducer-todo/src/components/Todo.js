import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      {props.todo.completed ? (
        // <p>with classname completed goes here
        <p className="completed" onClick={() => props.handleClick(props.todo)}>
          {props.todo.item}
        </p>
      ) : (
        //<p> with no classname goes here
        <p className="" onClick={() => props.handleClick(props.todo)}>
          {props.todo.item}
        </p>
      )}
    </div>
  );
};

export default Todo;
