import React from 'react';
import logo from './logo.svg';
import {useState, useReducer} from 'react';
import './App.css';

import {initialState, todoReducer} from './reducers'

import TodoForm from './components/TodoForm.js'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <div className="App">
      <h2>Todos</h2>
      <TodoForm />
    </div>
  );
}

export default App;
