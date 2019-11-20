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
        }}
      >
        Add todo
      </button>
      {state.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default TodoForm;

// onClick={() =>
//     dispatch({
//       type: "ADD_TODO",
//       payload: {
//         item: todoText,
//         completed: false,
//         id: Date.now()
//       }
//     })
//   }
