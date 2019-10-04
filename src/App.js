import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <ToDoList />
    </div>
  );
}

export default App;
