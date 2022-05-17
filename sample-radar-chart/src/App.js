import logo from './logo.svg';
import './App.css';
import FeedbackChart from './feedbackChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Marisa's Sample App!
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
      <div style={{ height: '500px'}}>
          <FeedbackChart />
        </div>
    </div>
  );
}

export default App;
