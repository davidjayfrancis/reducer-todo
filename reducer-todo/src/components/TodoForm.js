import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers";
import Todo from "./Todo.js";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = e => {
    setTodoText(e.target.value);
    console.log(todoText);
  };

  const handleClick = todo => {
    dispatch({ type: "TOGGLE_COMPLETE", id: todo.id });
    console.log(state.todos);
  };

  const removeCompleted = () => {
    dispatch({ type: "REMOVE_COMPLETE" });
  };
  //   text: todo.currentTarget.innerText;
  return (
    <div>
      <input
        type="text"
        name="todoText"
        value={todoText}
        onChange={handleChange}
        placeholder="add todo..."
      ></input>
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            payload: {
              item: todoText,
              completed: false,
              id: Date.now()
            }
          });
          setTodoText("");
          console.log(state.todos);
        }}
      >
        Add todo
      </button>
      {state.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} handleClick={handleClick} />;
      })}
      <button onClick={removeCompleted}>Remove completed</button>
    </div>
  );
};

export default TodoForm;
