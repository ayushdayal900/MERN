import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterComponent from './components/CounterComponent';
import Timer  from './components/TimerComponent';


import './style.css'

import { useState, useEffect } from 'react';


function App() {

  const [isVisible, setVisible] = useState(true);
  
  // 
  useEffect( ()=>{
    return function(){
      console.log('unmounting....')
    }
  }, [isVisible])

  return (
    <div className="todo-container">
      {/* <Header title = 'Todo App'/>
      <TodoItem text='Eat' />
      <TodoItem text='Bath'/>
      <TodoItem text='Sleep'/>
      <TodoItem text='Code'/>
      <Button /> */}
      
      {isVisible? <CounterComponent /> :<></>}

      <button onClick={() => setVisible(!isVisible)}> Toggle </button>


      <Timer />

    </div>
  );
}

export default App;
