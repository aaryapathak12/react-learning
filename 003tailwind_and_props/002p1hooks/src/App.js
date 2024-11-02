import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  var [counter,setCounter]=useState(10);
  function Addd(){
    if(counter<15)
    {
    setCounter(counter+1)
    }
  }
  function Minuss()
  {
      if(counter>=1)
      {
      setCounter(counter-1)
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <br></br>
        <p>count:{counter}</p>
        <br></br>
        <button onClick={Addd}>+</button><button onClick={Minuss}>-</button>
      </header>
    </div>
  );
}

export default App;
