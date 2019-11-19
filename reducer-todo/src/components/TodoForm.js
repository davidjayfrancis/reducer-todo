import React from 'react';
import {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers';
import Todo from './Todo.js';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState); 
    
    const handleChange = e => {
        setTodoText(e.target.value);
        console.log(todoText);
    }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setTodoText('');
    // }

    return (

        <div>
                <input type='text' name='todoText' value={todoText} onChange={handleChange}></input>
                <button onClick={() => dispatch({type: 'ADD_TODO', payload: 
                    {item: todoText, 
                    completed: false, 
                    id: Date.now()
                    }
                    })}>Add todo</button>
                {state.todos.map(todo => {
                    return <Todo id={todo.id} item={todo.item} />
                })}
        </div>
    )
}

export default TodoForm;