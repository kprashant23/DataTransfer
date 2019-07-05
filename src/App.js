import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  let name = 'Prashant';
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList listNameFromParent={name}/>
      </header>
    </div>
  );
}

export default App;
