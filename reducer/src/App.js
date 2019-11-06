import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todos, setTodos] = useState("");
  const addTodo = item => dispatch({ type: "ADD", payload: item })
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });
  const toggleComplete = id => dispatch({ type: "TOGGLE_COMPLETE", id: id });




  return (
    <div className="container">
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  )
}
