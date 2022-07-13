import logo from './logo.svg';
import './App.css';
import AxiosPoke from './components/AxiosPoke';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      <AxiosPoke></AxiosPoke>
    </div>
  );
}

export default App;
