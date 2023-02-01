//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';


// const defaultTodos = [
//   {
//     text: 'ToDo text 1',
//     completed: false
//   },
//   {
//     text: 'ToDo text 2',
//     completed: false
//   },
//   {
//     text: 'ToDo text 3',
//     completed: true
//   }
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI 
      />
    </TodoProvider>
    
  );
}

export default App;
