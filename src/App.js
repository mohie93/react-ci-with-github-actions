import logo from "./logo.svg";
import "./App.css";

function App() {
  const branchName = process.env.REACT_APP_BRANCH_NAME;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://supahands.ai/careers" target="_blank" rel="noopener noreferrer">
          Hello From Supahands
        </a>
        <p>Branch is : {branchName}</p>
      </header>
    </div>
  );
}

export default App;
