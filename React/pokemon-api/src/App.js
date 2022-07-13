import logo from './logo.svg';
import './App.css';
import FetchPoke from './components/FetchPoke';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      <FetchPoke></FetchPoke>
    </div>
  );
}

export default App;
