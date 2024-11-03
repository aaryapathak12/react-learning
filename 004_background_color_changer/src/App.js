import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const bnames = ["red", "yellow", "pink", "black", "green", "blue", "orange"];
  let [bgc, setbgc] = useState("white");

  return (
    <>
      <div style={{ height: '100vh', backgroundColor: bgc, width: '100%', margin: 0 }}>
        <div>
          <Button bnames={bnames} setbgc={setbgc} />
        </div>
      </div>
    </>
  );
}

export default App;
