import logo from './logo.svg';
import './App.css';
import IndividualIntervalsExample from './Components/Carousel';
import CollapsibleExample from './Components/Navbar';

function App() {
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
      <CollapsibleExample />
      <IndividualIntervalsExample />
    </div>
  );
}

export default App;
