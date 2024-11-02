import logo from './logo.svg';
import './App.css';
import Buttons from './components/buttons';

function App() {
  const usernames = ["Alice", "Bob", "Charlie", "Diana"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Buttons username={usernames}/>
      {/* <Buttons bname="arya" bno="1"/> */}
      {/* <Buttons bname="Gargi" bno="2"/> */}
      {/* <Buttons bname="Durva" bno="3"/> */}
    </div>
  );
}

export default App;
