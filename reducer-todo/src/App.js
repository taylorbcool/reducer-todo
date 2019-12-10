import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './Todo.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItemText, setNewItemText] = useState('');
  // console.log(state);

  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: newItemText })
    setNewItemText('');
  };

  const toggleComplete = id => {
    console.log(id);
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return (
    <div className='App container'>
      <h2>Welcome to my Todo App!</h2>
      <TodoList
        todo={state.todo}
        toggleComplete={toggleComplete}
      />
      <TodoForm
        newItemText={newItemText}
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;