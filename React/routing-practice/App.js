import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/:num" element={<Number/>}></Route>
        <Route exact path="/:num/:tColor/:bColor" element={<Number/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
